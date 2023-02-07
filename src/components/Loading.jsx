import React from "react";
import { Rings } from "react-loader-spinner";

export const Loading = ({ dark }) => {
  return (
    <div
      className="flex justify-center items-center py-3"
      style={{
        backgroundColor: `${dark ? "rgb(253 224 71)" : "rgb(15 23 42)"}`,
      }}
    >
      <Rings color="#00BFFF" height={550} width={80} />
    </div>
  );
};
