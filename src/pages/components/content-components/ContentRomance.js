// ------------------------------------------------------------------------
// --------------GỌI CUSTOM HOOK useApi.js ĐỂ LẤY DỮ LIỆU------------------
// ---------------SỬ DỤNG CÁC HOOK useEffect VÀ useState ------------------
// -------------------ĐỂ THEO DÕI VÀ CẬP NHẬT DỮ LIỆU ---------------------
// ------SỬ DỤNG HOOK useRef ĐỂ XÁC ĐỊNH ĐỐI TƯỢNG CẦN SCROLL VIEW---------
// -----LIÊN KẾT CÁC COMPONENT CON TrendingSlider.js VÀ MovieDetail.js ----
// ---------SỬ DỤNG CSS NGOÀI VỚI FILE ContentOriginal.module.css ---------
// ------------------------------------------------------------------------

import useApi from "../useApi";
import { useEffect, useState, useRef } from "react";
import TrendingSlider from "./TrendingSlider";
import styles from "./ContentOriginal.module.css";
import MovieDetail from "./MovieDetail";

// ---------------------------------------------------------
// ------TẠO HÀM TRONG COMPONENT ContentRomance.js----------
// ---------------------------------------------------------

const ContentRomance = () => {
    const { romance, API_KEY } = useApi();
    const [images, setImages] = useState([]);
    const [urlTarget, setUrlTarget] = useState(null);
    const [trendingData, setTrendingData] = useState();
    const [isClick, setIsClick] = useState(false);
    const [currentImage, setCurrentImage] = useState();
    const [errorImages, setErrorImages] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const videoRef = useRef();

    // ----TẠO HÀM THEO DÕI LINK ĐỐI TƯỢNG ĐƯỢC CLICK---------
    // ---------------VÀ BIẾN isClick-------------------------
    // --------DI CHUYỂN MÀN HÌNH ĐẾN VIDEO-------------------

    const onHandleUrlTarget = (newValue) => {
        setUrlTarget(newValue);

        if (currentImage === newValue) {
            setIsClick(!isClick);
        } else {
            setCurrentImage(newValue);
            setIsClick(true);
        }
        if (videoRef.current) {
            videoRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    // ---------DÙNG HOOK useEffect VÀ HÀM BẤT ĐỒNG BỘ ----------
    // ---------------ĐỂ THEO DÕI VÀ LẤY DỮ LIỆU-----------------

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);
            const data = await romance();

            const trendingImages = data.results.map(
                (item) => `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
            );

            console.log("data results Romance:", data.results);

            if (!trendingImages) {
                throw new Error("Không tải được dữ liệu!");
            }

            setTrendingData(data.results);
            setImages(trendingImages);
            setIsLoading(false);
        };

        try {
            getData();
        } catch (error) {
            setErrorImages(error.message);
        }
    }, []);

    return (
        <div className={styles["content-original"]}>
            <h3>Lãng mạn</h3>
            {isLoading && (
                <p
                    style={{
                        color: "white",
                    }}
                >
                    Đang tải dữ liệu...
                </p>
            )}
            {errorImages && <p>errorImages</p>}
            {images && (
                <div className={styles["content-original-slider"]}>
                    <TrendingSlider
                        images={images}
                        urlTargetHandler={onHandleUrlTarget}
                    />
                </div>
            )}

            {isClick && (
                <div ref={videoRef}>
                    <MovieDetail
                        backdropOrPoster="imageUrlBackdrop"
                        urlTarget={urlTarget}
                        trendingData={trendingData}
                        apiKey={API_KEY}
                    />
                </div>
            )}
        </div>
    );
};

export default ContentRomance;
