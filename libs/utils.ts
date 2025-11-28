/* eslint-disable @typescript-eslint/no-explicit-any */
export type ColumnDef<T> = {
  key: keyof T;
  label: string;
  formatter?: (v: any, row: T) => string;
};

export function exportTableToExcel<T>(
  filename: string,
  columns: ColumnDef<T>[],
  rows: T[] | { data: T[] } | any
) {
  const safe = (v: any) =>
    v === null || v === undefined
      ? ""
      : String(v).replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const header = `<!DOCTYPE html><html><head><meta charset="utf-8" /><style>
    table{border-collapse:collapse;width:100%;font-family:Segoe UI, Arial, sans-serif}
    th,td{border:1px solid #d1d5db;padding:8px;font-size:12px}
    th{background:#f3f4f6;text-align:left}
  </style></head><body>`;
  const footer = `</body></html>`;
  const thead = `<thead><tr>${columns
    .map((c) => `<th>${safe(c.label)}</th>`)
    .join("")}</tr></thead>`;
  const list: T[] = Array.isArray(rows)
    ? rows
    : Array.isArray((rows as any)?.data)
    ? (rows as any).data
    : [];
  const tbody = `<tbody>${list
    .map((row) => {
      const tds = columns
        .map((c) => {
          const raw = (row as any)[c.key];
          const val = c.formatter ? c.formatter(raw, row) : raw;
          return `<td>${safe(val)}</td>`;
        })
        .join("");
      return `<tr>${tds}</tr>`;
    })
    .join("")}</tbody>`;

  const html = header + `<table>` + thead + tbody + `</table>` + footer;

  const blob = new Blob([html], { type: "application/vnd.ms-excel" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${filename}.xls`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
