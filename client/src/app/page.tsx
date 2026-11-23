import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar/Navbar";

const features = [
  { icon: "🔒", title: "Secure & safe", text: "Your account is protected with secure login and encrypted connections." },
  { icon: "⚡", title: "Instant transfers", text: "Send money to anyone with their email or account number in seconds." },
  { icon: "📊", title: "Track your spending", text: "See all your payments and requests in one clear overview." },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="page">
        <section className="hero">
          <div>
            <span className="eyebrow">New · Free account with €100 welcome balance</span>
            <h1>
              Banking made <span>simple</span> for everyone.
            </h1>
            <p>
              Manage your money effortlessly. Send, request and track payments from one
              clean dashboard — anytime, anywhere.
            </p>
            <div className="hero-actions">
              <Link href="/register" className="btn btn-primary">Open a free account</Link>
              <Link href="/login" className="btn btn-secondary">Log in</Link>
            </div>
          </div>
          <div className="hero-image">
            <Image src="/landing8.jpeg" alt="Person using YousraBank on a phone" fill priority sizes="(max-width: 860px) 100vw, 50vw" />
          </div>
        </section>

        <section className="features">
          {features.map((f) => (
            <div key={f.title} className="card feature">
              <div className="icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </section>
      </main>
      <footer className="footer">© {new Date().getFullYear()} YousraBank · A demo project — not a real bank.</footer>
    </>
  );
}
