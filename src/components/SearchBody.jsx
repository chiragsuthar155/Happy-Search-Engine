import React, { useEffect, useState } from "react";
import logo from "../images/logo.jfif";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { useResultContext } from "../contexts/ResultContextProvider";

export const SearchBody = ({ dark, setSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const { setSearchTerm } = useResultContext();
  const [debouncedValue] = useDebounce(searchValue, 600);
  useEffect(() => {
    if (debouncedValue) setSearchTerm(debouncedValue);
  }, [debouncedValue]);
  return (
    <>
      <div
        className="search-body flex flex-col justify-start items-start logo pt-20 pb-52  "
        style={{
          backgroundColor: `${dark ? " rgb(253 224 71)" : "rgb(15 23 42)"}`,
        }}
      >
        <img className="logo-search-body py-0.5" src={logo} alt="Logo" />
        <div className="search-bar mt-5 rounded flex items-center border w-2/5  mx-auto p-1  bg-white border-b-3 ">
          <input
            className="search md:text-lg pl-4 rounded w-11/12 sm:text-sm "
            type="text"
            placeholder="Happy Searching...☺"
            value={searchValue}
            onChange={(e) => {
              const input = e.target.value;
              setSearchValue(input);
            }}
          />
          <Link to="/search">
            <SearchOutlined
              className="search-logo p-2 hover:bg-gray-300 "
              onClick={() => {
                setSearch(debouncedValue);
              }}
              style={{ fontSize: "1.6rem", marginLeft: "10px" }}
            />
          </Link>
        </div>
      </div>
    </>
  );
};
