interface EngineRow {
  hang: string;
  hieu_may: string;
  ps: string;
  hp: string;
  kw: string;
  rpm: string;
}

export function initEngineLookup(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>('[data-engine-lookup]').forEach((lookup) => {
    const rows: EngineRow[] = JSON.parse(lookup.dataset.rows ?? '[]');
    const search = lookup.querySelector<HTMLInputElement>('[data-search]');
    const column = lookup.querySelector<HTMLSelectElement>('[data-column]');
    const body = lookup.querySelector<HTMLElement>('[data-body]');
    const empty = lookup.querySelector<HTMLElement>('[data-empty]');
    const count = lookup.querySelector<HTMLElement>('[data-count]');

    const render = (data: EngineRow[]) => {
      if (!body) return;
      body.innerHTML = data
        .map(
          (row) => `<tr>
            <td>${row.hang}</td>
            <td>${row.hieu_may}</td>
            <td>${row.ps}</td>
            <td>${row.hp}</td>
            <td>${row.kw}</td>
            <td>${row.rpm}</td>
          </tr>`,
        )
        .join('');
      empty?.toggleAttribute('hidden', data.length > 0);
      if (count) count.textContent = `${data.length} ${count.dataset.suffix ?? ''}`.trim();
    };

    const filter = () => {
      const q = (search?.value ?? '').trim().toLowerCase();
      const col = column?.value ?? 'all';
      if (!q) {
        render(rows);
        return;
      }
      const filtered = rows.filter((row) => {
        if (col === 'hang') return row.hang.toLowerCase().includes(q);
        if (col === 'hieu_may') return row.hieu_may.toLowerCase().includes(q);
        return row.hang.toLowerCase().includes(q) || row.hieu_may.toLowerCase().includes(q);
      });
      render(filtered);
    };

    search?.addEventListener('input', filter);
    column?.addEventListener('change', filter);
    render(rows);
  });
}
