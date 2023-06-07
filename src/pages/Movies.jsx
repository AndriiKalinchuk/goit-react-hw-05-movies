import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { SearchFormButton, SearchFormInput, SearchForm } from './Movies.styled';

export default function Movies({ onSubmit }) {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!search.trim()) {
      return alert('Enter text');
    }
    onSubmit(search);
    setSearch('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchFormButton type="submit">
        <FiSearch size="16px" />
      </SearchFormButton>
      <SearchFormInput
        placeholder="What movie do you want to find?"
        name="search"
        // required
        autoFocus
        value={search}
        onChange={handleChange}
      />
    </SearchForm>
  );
}
