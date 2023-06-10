import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FiSearch } from 'react-icons/fi';
import {
  SerchFormWrapper,
  SearchFormStyled,
  SearchFormButton,
  SearchFormInput,
} from './SearchForm.styled';

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
    <SerchFormWrapper>
      <SearchFormStyled onSubmit={handleSubmit}>
        <SearchFormInput
          type="text"
          placeholder="What movie do you want to find?"
          name="search"
          required
          autoFocus
          value={search}
          onChange={handleChange}
        />
        <SearchFormButton type="submit">
          <FiSearch size="16px" />
        </SearchFormButton>
      </SearchFormStyled>
    </SerchFormWrapper>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
