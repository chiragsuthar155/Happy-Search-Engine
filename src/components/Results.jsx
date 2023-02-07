import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useResultContext } from "../contexts/ResultContextProvider";
import { Loading } from "./Loading";
import { useRef } from "react";

export const Results = ({ dark, search }) => {
  const { results, isLoading, getResults } = useResultContext();
  const location = useLocation();
  const inputRef = useRef(null);

  useEffect(() => {
    // main page results:
    if (search) {
      if (location.pathname === "/videos") {
        getResults(
          `/search?query=${search}&gl=us&lr=en&num=10&start=0&sort=relevance`
        );
      } else {
        getResults(
          `${location.pathname}?query=${search}&gl=us&lr=en&num=10&start=0&sort=relevance`
        );
      }
    }
  }, []);

  if (isLoading) return <Loading dark={dark} />;

  switch (location.pathname) {
    case "/search":
      return (
        <div
          className="flex py-4 flex-wrap justify-between align-end space-y-6 px-8 md:px-32 "
          style={{
            backgroundColor: `${dark ? "rgb(253 224 71)" : "rgb(15 23 42)"}`,
          }}
        >
          {results?.items?.map((ele, index) => (
            <div className=" w-full">
              <a
                key={index}
                href={ele.link}
                target="_blank"
                ref={inputRef}
                style={{
                  color: `${dark ? "black" : "rgb(209 213 219)"}`,
                }}
              >
                <p className="text-sm">
                  {ele.link.length > 30 ? ele.link.substring(0, 30) : ele.link}
                </p>
              </a>
              <a
                key={index}
                className=" cursor-pointer text-lg hover:underline text-blue-700"
                href={ele.link}
                target="_blank"
                ref={inputRef}
              >
                {ele.title}
              </a>
              <p
                className="text-xs text-gray-800"
                style={{
                  color: `${dark ? "rgb(31 41 55)" : "rgb(209 213 219)"}`,
                }}
              >
                {ele.snippet}
              </p>
            </div>
          ))}
        </div>
      );
    case "/imagesearch":
      return (
        <div
          className="flex flex-wrap justify-center items-center py-8 gap-3"
          style={{
            backgroundColor: `${dark ? "rgb(253 224 71)" : "rgb(15 23 42)"}`,
          }}
        >
          {results?.items?.map((image, index) => (
            <div className="px-3 py-3 border-gray-900   border-solid ">
              <a
                className="sm:p-3 p-5"
                href={image.contextLink}
                key={index}
                target="_blank"
                rel={inputRef}
              >
                <img
                  className="w-80 hover:box-shadow-300 "
                  src={
                    image.originalImageUrl
                      ? image.originalImageUrl
                      : image.thumbnailImageUrl
                  }
                  alt={image.title}
                  loading="lazy"
                />
                <p className="w-80 truncate text-gray-500 break-words text-md mt-2 j">
                  {image.title}
                </p>
              </a>
            </div>
          ))}
        </div>
      );
    case "/videos":
      return "videos";
    case "/news":
      return "news";

    default:
      return "error";
  }
};
