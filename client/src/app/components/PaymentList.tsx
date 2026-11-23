import { formatDate, formatMoney, initials } from "../lib/format";

export interface Payment {
  id: string;
  amount: number;
  created_at: string;
  sender_id: string | null;
  recipient_id: string;
  sender: { first_name: string | null; last_name: string | null } | null;
  recipient: { first_name: string | null; last_name: string | null } | null;
}

// Shows a list of payments. Money in = green, money out = dark.
export default function PaymentList({ payments, userId }: { payments: Payment[]; userId?: string }) {
  if (payments.length === 0) {
    return (
      <div className="empty">
        <div className="icon">🧾</div>
        <p>No payments yet</p>
      </div>
    );
  }

  return (
    <ul className="list">
      {payments.map((p) => {
        const outgoing = p.sender_id === userId;
        const other = outgoing ? p.recipient : p.sender;
        const name = other ? `${other.first_name ?? ""} ${other.last_name ?? ""}`.trim() : "Unknown";
        return (
          <li key={p.id} className="list-item">
            <div className={`avatar ${outgoing ? "out" : "in"}`}>{initials(other?.first_name, other?.last_name)}</div>
            <div className="list-main">
              <strong>{name || "Unknown"}</strong>
              <small>
                {outgoing ? "Sent" : "Received"} · {formatDate(p.created_at)}
              </small>
            </div>
            <span className={outgoing ? "amount-out" : "amount-in"}>
              {outgoing ? "−" : "+"}
              {formatMoney(p.amount)}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
