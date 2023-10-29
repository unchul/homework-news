// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SearchBar from "./components/SearchBar";
import NewsList from "./components/NewsList";
import { fetchNews } from "./actions/newsActions";
import ArticleDetail from "./components/ArticleDetail";

function App() {
  const dispatch = useDispatch();
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (keyword, startDate, endDate) => {
    setSearchKeyword(keyword);
    dispatch(fetchNews(keyword, startDate, endDate));
  };

  return (
    <Router>
      <div className="App">
        <SearchBar handleSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<NewsList />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
