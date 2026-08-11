interface EngineRow {
  hang: string;
  hieu_may: string;
  ps: string;
  hp: string;
  kw: string;
  rpm: string;
}

const PAGE_SIZE = 25;
const FIELDS: (keyof EngineRow)[] = ['hang', 'hieu_may', 'ps', 'hp', 'kw', 'rpm'];

export function initEngineLookup(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>('[data-engine-lookup]').forEach((lookup) => {
    const rows: EngineRow[] = JSON.parse(lookup.dataset.rows ?? '[]');
    const headers: string[] = JSON.parse(lookup.dataset.headers ?? '[]');
    const filterInputs = lookup.querySelectorAll<HTMLInputElement>('[data-filter]');
    const body = lookup.querySelector<HTMLElement>('[data-body]');
    const empty = lookup.querySelector<HTMLElement>('[data-empty]');
    const count = lookup.querySelector<HTMLElement>('[data-count]');
    const pagination = lookup.querySelector<HTMLElement>('[data-pagination]');
    const pageNumbers = lookup.querySelector<HTMLElement>('[data-page-numbers]');
    const prevBtn = lookup.querySelector<HTMLButtonElement>('[data-prev]');
    const nextBtn = lookup.querySelector<HTMLButtonElement>('[data-next]');

    let filtered: EngineRow[] = rows;
    let page = 1;

    const renderRows = (data: EngineRow[]) => {
      if (!body) return;
      body.innerHTML = data
        .map(
          (row) => `<tr>
            ${FIELDS.map((field, i) => `<td data-label="${headers[i] ?? ''}">${row[field]}</td>`).join('')}
          </tr>`,
        )
        .join('');
    };

    const renderPagination = (totalPages: number) => {
      if (!pageNumbers) return;
      pagination?.toggleAttribute('hidden', totalPages <= 1);
      if (prevBtn) prevBtn.disabled = page <= 1;
      if (nextBtn) nextBtn.disabled = page >= totalPages;

      const pages: (number | '…')[] = [];
      const add = (p: number) => pages.push(p);
      add(1);
      if (page > 3) pages.push('…');
      for (let p = Math.max(2, page - 1); p <= Math.min(totalPages - 1, page + 1); p++) add(p);
      if (page < totalPages - 2) pages.push('…');
      if (totalPages > 1) add(totalPages);

      pageNumbers.innerHTML = pages
        .map((p) =>
          p === '…'
            ? `<span class="lookup-page-ellipsis">…</span>`
            : `<button type="button" class="lookup-page-btn${p === page ? ' is-active' : ''}" data-page="${p}" aria-current="${p === page ? 'page' : 'false'}">${p}</button>`,
        )
        .join('');
    };

    const render = () => {
      const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
      page = Math.min(Math.max(1, page), totalPages);
      const start = (page - 1) * PAGE_SIZE;
      renderRows(filtered.slice(start, start + PAGE_SIZE));
      empty?.toggleAttribute('hidden', filtered.length > 0);
      if (count) count.textContent = `${filtered.length} ${count.dataset.suffix ?? ''}`.trim();
      renderPagination(totalPages);
    };

    const filter = () => {
      const activeFilters: [keyof EngineRow, string][] = [];
      filterInputs.forEach((input) => {
        const key = input.dataset.filter as keyof EngineRow;
        const value = input.value.trim().toLowerCase();
        if (key && value) activeFilters.push([key, value]);
      });

      filtered = !activeFilters.length
        ? rows
        : rows.filter((row) =>
            activeFilters.every(([key, value]) => String(row[key]).toLowerCase().includes(value)),
          );
      page = 1;
      render();
    };

    filterInputs.forEach((input) => input.addEventListener('input', filter));
    prevBtn?.addEventListener('click', () => {
      page -= 1;
      render();
    });
    nextBtn?.addEventListener('click', () => {
      page += 1;
      render();
    });
    pageNumbers?.addEventListener('click', (event) => {
      const target = (event.target as HTMLElement).closest<HTMLButtonElement>('[data-page]');
      if (!target) return;
      page = Number(target.dataset.page);
      render();
    });

    render();
  });
}
