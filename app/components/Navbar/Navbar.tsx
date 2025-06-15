"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import styles from "./Navbar.module.css";

const navItems = [
  { label: "Home", path: "/Home" },
  { label: "Rooms", path: "/Rooms" },
  { label: "Hotels", path: "/Hotels" },
  { label: "Booked Rooms", path: "bookedRooms" }
];
export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href={"/Home"}>
          <Image src="/hotel.webp" alt="LOGO" width={100} height={85} />
        </Link>
      </div>
      {navItems.map((item) => (
        <Link
          key={item.path}
          href={item.path}
          className={`${
            pathname === item.path ? "font bold" : ""
          } hover: underline`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
