import React, { useState } from "react";
import Image from "next/Image";

export const NavBar = () => {
  const [visible, setVisible] = useState(false);

  const showMenu = () => {
    if (visible === false) {
      setVisible(!false);
    }
    return;
    // else (
    //   setVisible(false);
    // )
  };

  return (
    <header>
      <nav>
        <ul className="left-links">
          <li>Resume</li>
          <li>Blog</li>
          <li>About</li>
        </ul>
        <Image
          src="/logo.svg"
          alt="Dejiii | Abdulazeez Adeyiga | Frontend Developer"
          width={100}
          height={100}
        />
        <ul className="right-links">
          <li>Instagram</li>
          <li>LinkedIn</li>
          <li>Mail</li>
        </ul>
        <span className="menu-button" onClick={showMenu}>
          Menu ++
        </span>
      </nav>
      {visible ? <p>Menu Visible</p> : null}
    </header>
  );
};
