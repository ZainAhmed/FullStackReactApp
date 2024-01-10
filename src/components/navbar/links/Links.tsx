import React from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
function Links() {
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

  const isAdmin = true;
  const isLoggedin = true;
  return (
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
  );
}

export default Links;
