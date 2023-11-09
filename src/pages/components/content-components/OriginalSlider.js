// ----------------------------------------------------------
// -----------COMPONENT HIỂN THỊ SLIDER ORIGINALS------------
// ------LIÊN KẾT COMPONENT CON SLIDER MovieList.js----------
// ----------SỬ DỤNG PROPS ĐỂ TRUYỀN DỮ LIỆU-----------------
// ------SỬ DỤNG CSS NGOÀI OriginalSlider.module.css---------
// ----------------------------------------------------------

import MovieList from "./MovieList";
import styles from "./OriginalSlider.module.css";

const OriginalSlider = ({ images, videoKey, urlTargetHandler }) => {
    const settings = {
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 960,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const width = "152px";
    const height = "224px";

    return (
        <MovieList
            settings={settings}
            images={images}
            width={width}
            height={height}
            className={styles["original-slider"]}
            videoKey={videoKey}
            urlTargetHandler={urlTargetHandler}
        />
    );
};

export default OriginalSlider;
