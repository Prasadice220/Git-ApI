"use client";
import React from "react";
import styles from "./styles.module.css";

import { usePathname } from "next/navigation";
function Navbar() {
  const pathname = usePathname();
  return (
    <div>
      <ul className={styles.navba} id="navb">
        <h1 className={styles.navt}>Navbar</h1>
        <li>
          <a className={pathname == "/" ? styles.active : ""} href="/">
            Home
          </a>
        </li>
        <li>
          <a
            className={pathname == "/about" ? styles.active : ""}
            href="/about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className={pathname == "/contact" ? styles.active : ""}
            href="/contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
