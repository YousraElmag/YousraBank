// Shows money as "€ 1.234,56" (Dutch style).
export function formatMoney(value: number | string | null | undefined): string {
  const n = Number(value ?? 0);
  return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(
    Number.isFinite(n) ? n : 0
  );
}

export function formatDate(value: string | null | undefined): string {
  if (!value) return "";
  return new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function initials(first?: string | null, last?: string | null): string {
  return `${first?.[0] ?? ""}${last?.[0] ?? ""}`.toUpperCase() || "?";
}
