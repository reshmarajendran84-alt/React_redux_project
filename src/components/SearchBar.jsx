import React, { useState, useMemo, useCallback } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  const debouncedSearch = useMemo(() => debounce(onSearch, 500), [onSearch]);

  const handleChange = useCallback(
    (e) => {
      const value = e.target.value;
      setQuery(value);
      debouncedSearch(value);
    },
    [debouncedSearch]
  );

  return (
    <input
      type="text"
      placeholder="🔍 Search by name..."
      value={query}
      onChange={handleChange}
      style={{
        padding: "8px",
        marginBottom: "15px",
        width: "100%",
        borderRadius: "6px",
        border: "1px solid #ccc",
      }}
    />
  );
}
