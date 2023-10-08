import React from 'react';

export default function Filter({ filter, onFilterChange }) {
  const handleChange = e => {
    onFilterChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={filter}
      onChange={handleChange}
      placeholder="Search contacts by name"
    />
  );
}
