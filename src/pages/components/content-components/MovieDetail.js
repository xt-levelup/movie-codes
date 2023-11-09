// --------------------------------------------------------------------------------
// -------------------ĐÂY LÀ FILE HIỂN THỊ VIDEO VÀ CHI TIẾT VỀ VIDEO--------------
// ---------------------SỬ DỤNG HOOK useState ĐỂ CẬP NHẬT DỮ LIỆU------------------
// ---------------------SỬ DỤNG HOOK usEffect ĐỂ THEO DÕI DỮ LIỆU------------------
// ----------------SỬ DỤNG FILE CSS BÊN NGOÀI MovieDetail.module.css---------------
// -----LIÊN KẾT 2 COMPONENT CON MovieDetailDescription.js, MovieDetailVideo-------
// --------------------------------------------------------------------------------

import { useState, useEffect } from "react";
import styles from "./MovieDetail.module.css";
import MovieDetailDescription from "./MovieDetailDescription";
import MovieDetailVideo from "./MovieDetailVideo";

// -------TẠO HÀM TRONG COMPONENT MovieDetail.js--------------
// ----------SỬ DỤNG PROPS ĐỂ TRUYỀN DỮ LIỆU------------------

const MovieDetail = ({ urlTarget, trendingData, apiKey, backdropOrPoster }) => {
    const [idImage, setIdImage] = useState(null);
    const [titleImage, setTitleImage] = useState("Chưa chọn phim");
    const [published, setPublished] = useState(null);
    const [rated, setRated] = useState(null);
    const [imageDescription, setImageDescription] = useState(null);
    const [videoKey, setVideoKey] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingVideo, setIsLoadingVideo] = useState(false);
    const [imageBackdrop, setImageBackdrop] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    // -------SỬ DỤNG HOOK useEffect VÀ HÀM BẤT ĐỒNG BỘ---------------
    // ----------ĐỂ THEO DÕI VÀ LẤY THÔNG TIN BỘ PHIM-----------------

    useEffect(() => {
        const imageData = async () => {
            setIsLoading(true);

            const imageDataFetch = await trendingData.map((item) => {
                return {
                    imageUrlBackdrop: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
                    imageUrlPoster: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                    imageId: item.id,
                    imageTitle: item.title,
                    imageName: item.name,
                    imageRelease: item.release_date,
                    imageRated: item.vote_average,
                    imageDescription: item.overview,
                };
            });

            if (!imageDataFetch) {
                throw new Error("Không tải được dữ liệu!");
            }

            if (imageDataFetch) {
                for (let i = 0; i < imageDataFetch.length; i++) {
                    if (imageDataFetch[i][backdropOrPoster] === urlTarget) {
                        if (imageDataFetch[i].imageTitle) {
                            setTitleImage(imageDataFetch[i].imageTitle);
                        } else {
                            setTitleImage(imageDataFetch[i].imageName);
                        }
                        setIdImage(imageDataFetch[i].imageId);
                        setPublished(imageDataFetch[i].imageRelease);
                        setRated(imageDataFetch[i].imageRated);
                        setImageDescription(imageDataFetch[i].imageDescription);
                        setImageBackdrop(imageDataFetch[i].imageUrlBackdrop);
                        break;
                    }
                }
            }

            setIsLoading(false);
        };
        if (trendingData) {
            try {
                imageData();
            } catch (error) {
                setErrorMessage(error.message);
            }
        }
    }, [urlTarget, trendingData]);

    // -------SỬ DỤNG HOOK useEffect VÀ HÀM BẤT ĐỒNG BỘ---------------
    // ----------ĐỂ THEO DÕI VÀ LẤY THÔNG TIN VIDEO-------------------

    useEffect(() => {
        const videoDataFetch = async () => {
            setIsLoadingVideo(true);

            const videoData = await fetch(
                `https://api.themoviedb.org/3/movie/${idImage}/videos?api_key=${apiKey}`
            ).then((response) => response.json());

            const videoDataResults = videoData.results;

            if (videoDataResults) {
                const videoDataUse = videoDataResults.map((item, index) => {
                    return {
                        index: index,
                        key: item.key,
                        site: item.site,
                        type: item.type,
                    };
                });

                let trailerLinkArr = [];
                let teaserLinkArr = [];
                for (let i = 0; i < videoDataUse.length; i++) {
                    if (
                        videoDataUse[i].site === "YouTube" &&
                        videoDataUse[i].type === "Trailer"
                    ) {
                        trailerLinkArr.push({
                            index: videoDataUse[i].index,
                            site: videoDataUse[i].site,
                            type: videoDataUse[i].type,
                            key: videoDataUse[i].key,
                            url: `https://www.youtube.com/embed/${videoDataUse[i].key}`,
                        });
                    }
                }
                for (let i = 0; i < videoDataUse.length; i++) {
                    if (
                        videoDataUse[i].site === "YouTube" &&
                        videoDataUse[i].type === "Teaser"
                    ) {
                        teaserLinkArr.push({
                            index: videoDataUse[i].index,
                            site: videoDataUse[i].site,
                            type: videoDataUse[i].type,
                            key: videoDataUse[i].key,
                            url: `https://www.youtube.com/embed/${videoDataUse[i].key}`,
                        });
                    }
                }

                if (trailerLinkArr.length) {
                    setVideoKey(trailerLinkArr[0].key);
                } else if (teaserLinkArr.length) {
                    setVideoKey(teaserLinkArr[0].key);
                } else {
                    setVideoKey(null);
                }
            }
            setIsLoadingVideo(false);
        };
        videoDataFetch();
    }, [idImage]);

    return (
        <div className={styles["movie-detail"]}>
            {isLoading && (
                <div className={styles["movie-detail-description"]}>
                    <p style={{ fontSize: "36px" }}>Đang tải dữ liệu...</p>
                </div>
            )}
            {errorMessage && (
                <div className={styles["movie-detail-description"]}>
                    <p style={{ fontSize: "36px" }}>{errorMessage}</p>
                </div>
            )}
            <div className={styles["movie-detail-description"]}>
                <MovieDetailDescription
                    title={titleImage}
                    published={published}
                    rated={rated}
                    description={imageDescription}
                />
            </div>

            {isLoadingVideo && (
                <div className={styles["movie-detail-video"]}>
                    <p style={{ fontSize: "36px" }}>Đang tải dữ liệu...</p>
                </div>
            )}
            {videoKey && (
                <div className={styles["movie-detail-video"]}>
                    <MovieDetailVideo videoId={videoKey} />
                </div>
            )}
            {!videoKey && (
                <div className={styles["movie-detail-video"]}>
                    <div
                        style={{
                            backgroundImage: `url(${imageBackdrop})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                            height: "100%",
                            width: "100%",
                            border: "1px solid green",
                            color: "white",
                        }}
                    ></div>
                </div>
            )}
        </div>
    );
};

export default MovieDetail;
