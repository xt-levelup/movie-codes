// --------------------------------------------------------------------------
// -----------------COMPONENT TẠO SLIDER VỚI react-slick---------------------
// ------------------SỬ DỤNG useEffect THEO DÕI DỮ LIỆU----------------------
// ---------------SỬ DỤNG PROPS ĐỂ NHẬN VÀ TRUYỀN DỮ LIỆU--------------------
// ----------SỬ DỤNG CSS NGOÀI VỚI FILE OriginalSlider.module.css------------
// --------------------------------------------------------------------------

import styles from "./OriginalSlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MovieList = ({
    images,
    settings,
    width,
    height,
    className,
    urlTargetHandler,
}) => {
    // ------TẠO HÀM CẬP NHẬT LINK ĐỐI TƯỢNG KHI CLICK-----------------

    const trailerHandler = (event) => {
        urlTargetHandler(event.target.src);
    };

    return (
        <div>
            <Slider {...settings} className={className}>
                {images.map((image, index) => {
                    return (
                        <div key={index}>
                            <img
                                src={image}
                                width={width}
                                height={height}
                                className={styles.images}
                                onClick={trailerHandler}
                            />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default MovieList;
