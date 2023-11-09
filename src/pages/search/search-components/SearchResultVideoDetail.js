// -------------------------------------------------------------------------------------
// ------------------------COMPONENT TẠO THÔNG TIN VỀ VIDEO-----------------------------
// ----------------SỬ DỤNG react-youtube ĐỂ NHÚNG VIDEO TỪ YOUTUBE----------------------
// -----SỬ DỤNG CÁC HOOK useState, useContext ĐỂ CẬP NHẬT VÀ NHẬN, TRUYỀN DỮ LIỆU-------
// ---------------------SỬ DỤNG CUSTOM HOOK ĐỂ NHẬN DỮ LIỆU-----------------------------
// ----------SỬ DỤNG CSS NGOÀI VỚI FILE SearchResultVideoDetail.module.css--------------
// -----------------LIÊN KẾT COMPONENT CON VideoDescription.js--------------------------
// -----------------SỬ DỤNG HÀM BẤT ĐỒNG BỘ ĐỂ LẤY DỮ LIỆU API--------------------------
// -------------------------------------------------------------------------------------

import Youtube from "react-youtube";
import { useContext, useEffect, useState } from "react";
import useApi from "../../components/useApi";
import { DataContext } from "../../components/content-components/MovieContext";
import styles from "./SearchResultVideoDetail.module.css";
import VideoDescription from "./VideoDescription";

const SearchResultVideoDetail = () => {
    const { API_KEY } = useApi();
    const {
        imageResultId,
        isShowVideoSearch,
        updateIsShowVideoSearch,
        imageBackdropUrl,
        imageResultTitle,
    } = useContext(DataContext);
    const [videoKey, setVideoKey] = useState(null);

    useEffect(() => {
        const dataVideoFetchResult = async () => {
            let dataVideoTrailerKeyArr = [];
            let dataVideoTeaserKeyArr = [];
            const dataVideoResult = await fetch(
                `https://api.themoviedb.org/3/movie/${imageResultId}/videos?api_key=${API_KEY}`
            );
            const dataVideoResultJson = await dataVideoResult.json();

            if (
                dataVideoResultJson.results &&
                dataVideoResultJson.results.length
            ) {
                for (let i = 0; i < dataVideoResultJson.results.length; i++) {
                    if (
                        (dataVideoResultJson.results[i].site === "YouTube") &
                        (dataVideoResultJson.results[i].type === "Trailer")
                    ) {
                        dataVideoTrailerKeyArr.push(
                            dataVideoResultJson.results[i].key
                        );
                    } else if (
                        (dataVideoResultJson.results[i].site === "YouTube") &
                        (dataVideoResultJson.results[i].type === "Teaser")
                    ) {
                        dataVideoTeaserKeyArr.push(
                            dataVideoResultJson.results[i].key
                        );
                    }
                }
                if (dataVideoTrailerKeyArr.length) {
                    setVideoKey(dataVideoTrailerKeyArr[0]);
                } else if (dataVideoTeaserKeyArr.length) {
                    setVideoKey(dataVideoTrailerKeyArr[0]);
                } else {
                    setVideoKey(null);
                }
            }
        };
        dataVideoFetchResult();
    }, [imageResultId]);

    const closeVideoHandle = () => {
        updateIsShowVideoSearch(!isShowVideoSearch);
    };

    const opts = {
        height: "100%",
        width: "100%",

        playerVars: {
            autoPlay: 0,
        },
    };

    return (
        <div className={styles["search-video-contain"]}>
            <div className={styles["search-result-video"]}>
                <div className={styles["search-result-video-description"]}>
                    <VideoDescription />
                </div>

                <div className={styles["search-result-video-show"]}>
                    {videoKey ? (
                        <Youtube
                            className={styles.video}
                            videoId={videoKey}
                            opts={opts}
                        />
                    ) : (
                        !videoKey &&
                        imageBackdropUrl && (
                            <img
                                src={imageBackdropUrl}
                                width="100%"
                                height="100%"
                                alt={imageResultTitle}
                            />
                        )
                    )}
                </div>
            </div>
            <button onClick={closeVideoHandle}>CLOSE VIDEO</button>
        </div>
    );
};

export default SearchResultVideoDetail;
