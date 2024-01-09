import Link from "next/link";
import React from "react";

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
  return (
    <>
      {links.map((link, index) => (
        <Link href={link.path} key={index}>
          {link.title}
        </Link>
      ))}
    </>
  );
}

export default Links;
