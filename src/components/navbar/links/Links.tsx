"use client";
import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
const links = [
  {
    title: "Homepage",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
function Links() {
  const [isOpen, setOpen] = useState(false);
  const isAdmin = true;
  const isLoggedin = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link, index) => (
          <NavLink item={link} key={index} />
        ))}
        {isLoggedin ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button>
      {isOpen && (
        <div className={styles.mobileLinks}>
          {links.map((link, index) => (
            <NavLink item={link} key={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Links;
