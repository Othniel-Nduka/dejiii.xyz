/* eslint-disable @next/next/no-img-element */
import React from "react";

export const NavBar = () => {
  return (
    <header>
      <nav>
        <img
          src="/logo.svg"
          alt="Dejiii | Abdulazeez Adeyiga | Frontend Developer"
          className="logo"
        />
        <ul className="right-links">
          <li>
            <a
              href="https://www.instagram.com/dejidev/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/abdulazeez-adeyiga/"
              targer="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:hellodejiii@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Mail
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
