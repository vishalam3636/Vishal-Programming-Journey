import React from "react";

export default function ProductFilters({
  searchTerm,
  onSearchChange,
  sortBy,
  onSortByChange,
  sortOrder,
  onSortOrderChange,
  onReset,
}) {
  return (
    <div className="productFilters">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select value={sortBy} onChange={(e) => onSortByChange(e.target.value)}>
        <option value="name">Sort by Name</option>
        <option value="price">Sort by Price</option>
      </select>

      <select
        value={sortOrder}
        onChange={(e) => onSortOrderChange(e.target.value)}
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>

      <button type="button" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
