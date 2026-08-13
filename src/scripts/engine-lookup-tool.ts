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

    const headerCells = lookup.querySelectorAll<HTMLElement>('[data-sort-index]');
    // Below the table's card breakpoint the header row is hidden, so these two
    // controls are the only way to sort. They share the state with the headers.
    const sortSelect = lookup.querySelector<HTMLSelectElement>('[data-sort-select]');
    const sortDirection = lookup.querySelector<HTMLButtonElement>('[data-sort-direction]');

    let filtered: EngineRow[] = rows;
    let page = 1;
    let sortField: keyof EngineRow | null = null;
    let sortAscending = true;

    // Power and speed columns hold numbers written as text; comparing them as
    // strings would order 1000 before 350. Anything that is not a clean number
    // falls back to a locale-aware string compare.
    const compare = (a: EngineRow, b: EngineRow, field: keyof EngineRow) => {
      const left = String(a[field] ?? '').trim();
      const right = String(b[field] ?? '').trim();
      const leftNumber = Number(left.replace(',', '.'));
      const rightNumber = Number(right.replace(',', '.'));

      if (left && right && Number.isFinite(leftNumber) && Number.isFinite(rightNumber)) {
        return leftNumber - rightNumber;
      }
      // Empty cells sort last regardless of direction.
      if (!left) return 1;
      if (!right) return -1;
      return left.localeCompare(right, 'vi');
    };

    const applySort = () => {
      if (!sortField) return;
      const field = sortField;
      filtered = filtered
        .slice()
        .sort((a, b) => (sortAscending ? compare(a, b, field) : compare(b, a, field)));
    };

    const syncSortIndicators = () => {
      headerCells.forEach((cell) => {
        const field = FIELDS[Number(cell.dataset.sortIndex)];
        const active = field === sortField;
        cell.setAttribute(
          'aria-sort',
          active ? (sortAscending ? 'ascending' : 'descending') : 'none',
        );
        cell.classList.toggle('is-sorted', active);
      });

      if (sortSelect && sortField) sortSelect.value = String(FIELDS.indexOf(sortField));
      sortDirection?.classList.toggle('is-descending', !sortAscending);
    };

    const sortBy = (field: keyof EngineRow, ascending: boolean) => {
      sortField = field;
      sortAscending = ascending;
      applySort();
      page = 1;
      syncSortIndicators();
      render();
    };

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
      applySort();
      page = 1;
      render();
    };

    headerCells.forEach((cell) => {
      cell.querySelector('button')?.addEventListener('click', () => {
        const field = FIELDS[Number(cell.dataset.sortIndex)];
        if (!field) return;
        // Clicking the active column flips direction; a new column starts
        // ascending.
        sortBy(field, field === sortField ? !sortAscending : true);
      });
    });

    sortSelect?.addEventListener('change', () => {
      const field = FIELDS[Number(sortSelect.value)];
      if (field) sortBy(field, true);
    });

    sortDirection?.addEventListener('click', () => {
      const field = sortField ?? FIELDS[Number(sortSelect?.value ?? 0)];
      if (field) sortBy(field, sortField ? !sortAscending : true);
    });

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

    syncSortIndicators();
    render();
  });
}
