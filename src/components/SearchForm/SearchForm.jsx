import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';

const SearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!search.trim()) {
      return alert('Enter text');
    }
    onSubmit(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What movie do you want to find?"
        name="search"
        required
        autoFocus
        value={search}
        onChange={handleChange}
      />
      <button type="submit">
        <FiSearch size="16px" />
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
