import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Results } from "./components/Results";
import { SearchBody } from "./components/SearchBody";

export default function App({ dark }) {
  const [search, setSearch] = useState("");

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<SearchBody dark={dark} setSearch={setSearch} />}
        />
        <Route
          path="/search"
          element={<Results dark={dark} search={search} />}
        />
        <Route
          path="/imagesearch"
          element={<Results dark={dark} search={search} />}
        />
      </Routes>
    </div>
  );
}
