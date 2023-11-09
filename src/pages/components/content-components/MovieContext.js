// -----ĐÂY LÀ FILE CONTEXT ĐỂ TRUYỀN DỮ LIỆU ĐÊN CÁC COMPONENT-----
// -----------SỬ DỤNG HOOK createContext ĐỂ TẠO CONTEXT-------------
// -----------SỬ DỤNG HOOK useState ĐỂ CẬP NHẬT DỮ LIỆU-------------

import { createContext, useState } from "react";

export const DataContext = createContext();

export const MovieContext = ({ children }) => {
    const [query, setQuery] = useState("");
    const [imageResults, setImageResults] = useState([]);
    const [imageResultId, setImageResultId] = useState(null);
    const [imageResultTitle, setImageResultTitle] = useState(null);
    const [imageResultPublished, setImageResultPublished] = useState(null);
    const [imageResultRated, setImageResultRated] = useState(null);
    const [imageResultDescription, setImageResultDescription] = useState(null);
    const [isShowVideoSearch, setIsShowVideoSearch] = useState(false);
    const [imageBackdropUrl, setImageBackdropUrl] = useState(null);

    const updateQuery = (newQuery) => {
        setQuery(newQuery);
    };

    const updateImageResults = (newValue) => {
        setImageResults(newValue);
    };

    const updateImageResultId = (newValue) => {
        setImageResultId(newValue);
    };
    const updateImageResultTitle = (newValue) => {
        setImageResultTitle(newValue);
    };
    const updateImageResultPublished = (newValue) => {
        setImageResultPublished(newValue);
    };
    const updateImageResultRated = (newValue) => {
        setImageResultRated(newValue);
    };
    const updateImageResultDescription = (newValue) => {
        setImageResultDescription(newValue);
    };
    const updateIsShowVideoSearch = (newValue) => {
        setIsShowVideoSearch(newValue);
    };
    const updateImageBackdropUrl = (newValue) => {
        setImageBackdropUrl(newValue);
    };

    return (
        <DataContext.Provider
            value={{
                updateQuery,
                query,

                imageResults,
                updateImageResults,
                imageResultId,
                imageResultTitle,
                imageResultPublished,
                imageResultRated,
                imageResultDescription,
                updateImageResultId,
                updateImageResultTitle,
                updateImageResultPublished,
                updateImageResultRated,
                updateImageResultDescription,
                isShowVideoSearch,
                updateIsShowVideoSearch,
                imageBackdropUrl,
                updateImageBackdropUrl,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
