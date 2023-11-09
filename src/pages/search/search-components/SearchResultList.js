// ------------------------------------------------------------------------------
// ---------------COMPONENT TẠO KẾT QUẢ VÀ THÔNG TIN VỀ VIDEO TÌM ĐƯỢC-----------
// --------------------SỬ DỤNG useEffect ĐỂ THEO DÕI DỮ LIỆU---------------------
// -------SỬ DỤNG useState,useContext ĐỂ CẬP NHẬT, NHẬN VÀ TRUYỀN DỮ LIỆU--------
// ----------SỬ DỤNG CSS NGOÀI VỚI FILE searchResultList.module.css--------------
// ----------SỬ DỤNG createPortal ĐỂ TẠO MODAL HIỂN THỊ THÔNG TIN VIDEO----------
// ----------------LIÊN KẾT COMPONENT CON SearchResultVideoDetail----------------
// ----------------SỬ DỤNG HÀM BẤT ĐỒNG BỘ ĐỂ LẤY DỮ LIỆU TỪ API-----------------
// ------------------------------------------------------------------------------

import { useEffect, useState, useContext } from "react";
import styles from "./searchResultList.module.css";
import { DataContext } from "../../components/content-components/MovieContext";
import SearchResultVideoDetail from "./SearchResultVideoDetail";
import { createPortal } from "react-dom";

const SearchResultList = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const {
        query,
        imageResults,
        updateImageResults,
        updateImageResultId,
        updateImageResultTitle,
        imageResultTitle,
        updateImageResultPublished,
        updateImageResultRated,
        updateImageResultDescription,
        isShowVideoSearch,
        updateIsShowVideoSearch,
        updateImageBackdropUrl,
    } = useContext(DataContext);

    useEffect(() => {
        const dataFetch = async (queryValue) => {
            setIsLoading(true);

            const encodeQueryValue = encodeURIComponent(queryValue);
            const options = {
                method: "GET",
                headers: {
                    accept: "application/json",
                    Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDkzNzIzY2E3ZmMzY2UzYTZiZjI3YjVkYjhiZjI4NSIsInN1YiI6IjY0Yzg5YmU1MDhjZjg3MDEzOWVjYWE4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bhvkEOSRXTyZY4jplPBInZx_9ltFMjcIURWWYT93_xw",
                },
            };
            const getData = await fetch(
                `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${encodeQueryValue}`,
                options
            );
            if (!getData.ok) {
                throw new Error("Không tải được dữ liệu!");
            }
            const getDataJson = await getData.json();

            if (getDataJson) {
                const dataJson = getDataJson.results.map((item) => {
                    return {
                        id: item.id,
                        title: item.title,
                        description: item.overview,
                        name: item.name,
                        release: item.release_date,
                        rated: item.vote_average,
                        backdrop: item.backdrop_path,
                        poster: item.poster_path,
                    };
                });
                console.log("dataJson", dataJson);

                const dataImages = dataJson.map((item) => {
                    return {
                        imageUrl: `https://image.tmdb.org/t/p/w500${item.poster}`,
                        imageId: item.id,
                        imageBackdropUrl: `https://image.tmdb.org/t/p/w500${item.backdrop}`,
                        title: item.title ? item.title : item.name,
                        rated: item.rated,
                        description: item.description,
                        published: item.release,
                    };
                });
                updateImageResults(dataImages);
            }

            setIsLoading(false);
        };

        try {
            dataFetch(query);
        } catch (error) {
            setError(error.message);
        }
    }, [query]);
    const clickImageHandle = (event) => {
        let found = false;

        if (imageResults) {
            for (let i = 0; i < imageResults.length; i++) {
                if (imageResults[i].imageUrl === event.target.src) {
                    console.log("event.target.src", event.target.src);
                    updateImageResultId(imageResults[i].imageId);
                    updateImageResultTitle(imageResults[i].title);
                    updateImageResultPublished(imageResults[i].published);
                    updateImageResultRated(imageResults[i].rated);
                    updateImageResultDescription(imageResults[i].description);
                    updateImageBackdropUrl(imageResults[i].imageBackdropUrl);
                    found = true;
                    break;
                }
            }
        }
        if (!found) {
            updateImageResultId(null);
            updateImageResultTitle(null);
            updateImageResultPublished(null);
            updateImageResultRated(null);
            updateImageResultDescription(null);
            updateImageBackdropUrl(null);
        }
        if (currentImage === event.target.src) {
            updateIsShowVideoSearch(!isShowVideoSearch);
        } else {
            setCurrentImage(event.target.src);
            updateIsShowVideoSearch(true);
        }
    };

    return (
        <div className={styles.result}>
            {isLoading && <div>Đang tải dữ liệu...</div>}
            {error && <div>{error}</div>}
            {query && !isLoading && !imageResults.length && (
                <div>Không tìm thấy dữ liệu!</div>
            )}
            {imageResults &&
                imageResults.map((item, index) => (
                    <img
                        src={item.imageUrl}
                        key={index}
                        onClick={clickImageHandle}
                        alt={imageResultTitle}
                    ></img>
                ))}
            {isShowVideoSearch &&
                createPortal(<SearchResultVideoDetail />, document.body)}
        </div>
    );
};

export default SearchResultList;
