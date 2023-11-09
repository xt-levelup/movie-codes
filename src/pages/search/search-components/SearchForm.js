// -------------------------------------------------------------------------------
// ------------------------COMPONENT HIỂN THỊ FORM TÌM KIẾM-----------------------
// -----------------SỬ DỤNG CSS NGOÀI VỚI FILE SearchFrom.module.css--------------
// ----SỬ DỤNG HOOK useRef ĐỂ LẤY DỮ LIỆU INPUT VÀ FOCUS BUTTON SEARCH, INPUT-----
// ----------SỬ DỤNG HOOK useContext ĐỂ CẬP NHẬT VÀ TRUYỀN GIÁ TRỊ INPUT----------
// -------------------------------------------------------------------------------

import styles from "./SearchFrom.module.css";
import { useRef, useContext } from "react";
import { DataContext } from "../../components/content-components/MovieContext";

const SearchForm = () => {
    const inputValueRef = useRef();
    const searchButtonRef = useRef();
    const { updateQuery } = useContext(DataContext);

    const inputHandleTarget = () => {
        updateQuery(inputValueRef.current.value);
    };
    const inputEnterHandleTarget = (event) => {
        if (event.key === "Enter") {
            inputHandleTarget();
            searchButtonRef.current.focus();
        }
    };
    const resetInput = () => {
        inputValueRef.current.value = "";
        updateQuery("");
        inputValueRef.current.focus();
    };

    return (
        <div className={styles.search}>
            <div className={styles["search-form"]}>
                <div className={styles["search-form-value"]}>
                    <input
                        ref={inputValueRef}
                        type="text"
                        id="input-search"
                        onKeyDown={inputEnterHandleTarget}
                    />
                    <label htmlFor="input-search">
                        <svg
                            className={`${styles["navbar-search"]} svg-inline--fa fa-search fa-w-16`}
                            fill="#ccc"
                            aria-hidden="true"
                            data-prefix="fas"
                            data-icon="search"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                        >
                            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                        </svg>
                    </label>
                </div>
                <hr></hr>
                <div className={styles["search-button"]}>
                    <button
                        className={styles["search-button-reset"]}
                        onClick={resetInput}
                    >
                        RESET
                    </button>
                    <button
                        onClick={inputHandleTarget}
                        className={styles["search-button-search"]}
                        ref={searchButtonRef}
                    >
                        SEARCH
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchForm;
