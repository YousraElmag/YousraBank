"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

const appLinks = [
  { href: "/userdash", label: "Dashboard" },
  { href: "/transfer", label: "Send" },
  { href: "/requestmoney", label: "Request" },
  { href: "/requestmessage", label: "Requests" },
  { href: "/payments", label: "Payments" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [loggedIn, setLoggedIn] = useState(false);

  // Show different links for logged-in and logged-out users
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setLoggedIn(!!data.session));
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setLoggedIn(!!session);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/login");
  };

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href={loggedIn ? "/userdash" : "/"} className="brand">
          <span className="brand-mark">Y</span>
          <span>
            Yousra<span className="accent">Bank</span>
          </span>
        </Link>

        {loggedIn && (
          <ul className="nav-links">
            {appLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={pathname === link.href ? "active" : ""}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <div className="nav-actions">
          {loggedIn ? (
            <button className="btn btn-secondary btn-sm" onClick={handleLogout}>
              Log out
            </button>
          ) : (
            <>
              <Link href="/login" className="btn btn-ghost btn-sm">
                Log in
              </Link>
              <Link href="/register" className="btn btn-primary btn-sm">
                Open account
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
