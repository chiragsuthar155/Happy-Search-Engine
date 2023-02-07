import React from "react";

// Logos and Images
import navLogo from "../images/logo1.jfif";
import google from "../images/google.svg";
import gmail from "../images/gmail.svg";
import gdrive from "../images/gdrive.svg";
import youtube from "../images/youtube.svg";
import menu from "../images/menu.svg";
import { Link } from "react-router-dom";
import "../App.css";

export const Navbar = ({ dark, setDarkMode }) => {
  return (
    <>
      <div
        className="Navbar flex justify-center items-center mx-0 my-0 w-full m-0 p-3 "
        style={{
          backgroundColor: `${dark ? "rgb(253 224 71)" : "rgb(15 23 42)"}`,
        }}
      >
        <div className="mx-auto my-0 w-4/6">
          <Link to="/">
            <img className="nav-logo ml-7" src={navLogo} alt="Happy" />
          </Link>
        </div>
        <div className="mx-auto flex items-center">
          <a
            className="social-items "
            href="https://www.google.com"
            target="_blank"
          >
            <img
              className="hover:scale-150 transition-transform"
              src={google}
              alt="Google Logo"
            />
          </a>
          <a
            className="social-items"
            href="https://www.gmail.com"
            target="_blank"
          >
            <img
              className="hover:scale-150 transition-transform"
              src={gmail}
              alt="Gmail Logo"
            />
          </a>
          <a
            className="social-items"
            href="https://www.drive.google.com"
            target="_blank"
          >
            <img
              className="hover:scale-150 transition-transform"
              src={gdrive}
              alt="Google Drive Logo"
            />
          </a>
          <a
            className="social-items"
            href="https://www.youtube.com"
            target="_blank"
          >
            <img
              className="hover:scale-150 transition-transform"
              src={youtube}
              alt="Youtube Logo"
            />
          </a>

          <img
            className="menu social-items hover:scale-150 transition-transform"
            style={{ fontColor: "black" }}
            src={menu}
            alt="Menu Logo"
          />
          {dark ? (
            <img
              className="mr-8 w-7  ml-5 cursor-pointer    hover:scale-150 transition-transform "
              src="https://img.icons8.com/external-others-inmotus-design/67/null/external-Night-Mode-virtual-keyboard-others-inmotus-design.png"
              alt="Bell Logo"
              onClick={() => {
                dark ? setDarkMode(false) : setDarkMode(true);
              }}
            />
          ) : (
            <img
              className="mr-8  w-10  ml-3 cursor-pointer hover:scale-150 transition-transform  "
              src="https://img.icons8.com/external-flat-papa-vector/78/null/external-Light-Mode-interface-flat-papa-vector.png"
              alt="Bell Logo"
              onClick={() => {
                dark ? setDarkMode(false) : setDarkMode(true);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};
