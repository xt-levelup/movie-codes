// --------------------------------------------------------------------------------
// -----COMPONENT HIỂN THỊ KẾT QUẢ SEARCH VÀ HIỂN THỊ THÔNG TIN VIDEO TÌM ĐƯỢC-----
// ---------------LIÊN KẾT COMPONENT CON SearchResultList.js-----------------------
// -------SỬ DỤNG CSS NGOÀI VỚI FILE searchResultList.module.css-------------------
// --------------------------------------------------------------------------------

import SearchResultList from "./SearchResultList";

import styles from "./searchResultList.module.css";

const SearchResults = () => {
    return (
        <div className={styles["search-result"]}>
            <h3>Search Result</h3>
            <SearchResultList />
        </div>
    );
};

export default SearchResults;
