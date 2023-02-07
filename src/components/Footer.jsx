import React from "react";
import { SettingFilled } from "@ant-design/icons";

export const Footer = ({ dark }) => {
  return (
    <div
      className="footer flex justify-center p-4 "
      style={{
        backgroundColor: `${dark ? "rgb(253 224 71)" : "rgb(15 23 42)"}`,
      }}
    >
      <div className="l-footer mx-auto w-4/6">
        <ul
          className="flex list-none "
          style={{ color: `${dark ? "black" : "white"}` }}
        >
          <li className="footer-item font-medium  mr-7">
            <a href="#">Advertising</a>
          </li>
          <li className="footer-item font-medium  mr-7">
            <a href="#">Business</a>
          </li>
          <li className="footer-item font-medium ">
            <a href="#">About</a>
          </li>
        </ul>
      </div>
      <div className="r-footer mx-auto">
        <ul
          className="flex items-center list-none "
          style={{ color: `${dark ? "black" : "white"}` }}
        >
          <li className="footer-item font-medium  mr-7">
            <a href="#">Privacy</a>
          </li>
          <li className="footer-item  font-medium  mr-7">
            <a className="" href="#">
              Terms
            </a>
          </li>
          <SettingFilled
            className="cursor-pointer hover:scale-150 transition-transform"
            style={{ fontSize: "22px" }}
          />
        </ul>
      </div>
    </div>
  );
};
