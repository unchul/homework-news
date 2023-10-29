// src/components/SearchBar.js
import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBar = ({ handleSearch }) => {
  const [keyword, setKeyword] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSearchClick = () => {
    handleSearch(keyword, startDate, endDate);
  };

  return (
    <SearchBarContainer>
      <input type="text" value={keyword} onChange={handleInputChange} placeholder="Keyword" />
      <input type="date" value={startDate} onChange={handleStartDateChange} placeholder="Start Date" />
      <input type="date" value={endDate} onChange={handleEndDateChange} placeholder="End Date" />
      <button onClick={handleSearchClick}>Search</button>
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div`
  /* Add your custom styles here */
`;

export default SearchBar;
