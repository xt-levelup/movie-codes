import React from "react";
import Navbar from "../components/Navbar";
import SearchForm from "./search-components/SearchForm";
import styles from "./search-components/SearchFrom.module.css";
import ResultList from "./search-components/SearchResults";

const Search = () => {
    return (
        <div className={styles["search-contain"]}>
            <Navbar />
            <SearchForm />
            <ResultList />
        </div>
    );
};

export default Search;
