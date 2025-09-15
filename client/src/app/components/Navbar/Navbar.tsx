"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./nav.css";
import { useRouter } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  const pagesWithButton = ["/", "/features", "/pricing"];
  const router = useRouter();
  const showButton = pagesWithButton.includes(pathname);
  const handelclick = () => {
    router.push("/");
  };

  return (
    <div className="navbar">
      <div className="logo">
        <Image
          src="/logo3.jpeg"
          onClick={handelclick}
          width={200}
          height={60}
          alt="logo"
        />
      </div>

      <div className="list">
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Support</li>
        </ul>
      </div>

      {showButton && (
        <div className="start">
          <Link href="/register">
            <button>Start Now</button>
          </Link>
        </div>
      )}
    </div>
  );
}
