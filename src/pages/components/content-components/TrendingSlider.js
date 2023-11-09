// ----------------------------------------------------------
// --------COMPONENT HIỂN THỊ SLIDER SỬ DỤNG BACKDROP--------
// ------LIÊN KẾT COMPONENT CON SLIDER MovieList.js----------
// ----------SỬ DỤNG PROPS ĐỂ TRUYỀN DỮ LIỆU-----------------
// ------SỬ DỤNG CSS NGOÀI OriginalSlider.module.css---------
// ----------------------------------------------------------

import MovieList from "./MovieList";
import styles from "./OriginalSlider.module.css";

const TrendingSlider = ({ images, videoKey, urlTargetHandler }) => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const width = "192px";
    const height = "106px";

    return (
        <MovieList
            settings={settings}
            images={images}
            width={width}
            height={height}
            className={styles["trending-slider"]}
            videoKey={videoKey}
            urlTargetHandler={urlTargetHandler}
        />
    );
};

export default TrendingSlider;
