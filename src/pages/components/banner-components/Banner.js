import useApi from "../useApi"; // SỬ DỤNG CUSTOM HOOK useApi ĐỂ LẤY DỮ LIỆU
import { useState, useEffect } from "react"; // SỬ DỤNG CÁC HOOK ĐỂ CẬP NHẬT VÀ THEO DÕI DỮ LIỆU
import styles from "./Banner.module.css"; // SỬ DỤNG CSS NGOÀI VỚI FILE Banner.module.css
import BannerTitle from "./BannerTitle"; // LIÊN KẾT COMPONENT CON TRONG BannerTitle.js

// -------- -------------------- ---------------------
// -------- TẠO HÀM TRONG COMPONENT BANNER -----------
// -------- -------------------- ---------------------

const Banner = () => {
    //--------LẤY DỮ LIỆU TỪ CUSTOM HOOK useApi-------------------
    //--------TẠO VÀ CẬP NHẬT CÁC BIẾN VỚI HOOK useState----------

    const { originals } = useApi();

    const [originalImg, setOriginalImg] = useState("");
    const [titleName, setTitleName] = useState("");
    const [overView, setOverview] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [dataError, setDataError] = useState(null);

    // ------DÙNG HÀM BẤT ĐỒNG BỘ ĐỂ LẤY DỮ LIỆU VỀ--------------
    // ------KIỂM TRA DỮ LIỆU TỒN TẠI HAY KHÔNG TỒN TẠI----------
    // ------NẾU KHÔNG TỒN TẠI THÌ TRẢ VỀ ERROR MESSAGE----------
    // ------NẾU TỒN TẠI THÌ THỰC HIỆN CÁC LỆNH LẤY DỮ LIỆU------

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const data = await originals();
            if (!data) {
                throw new Error("Không tải được dữ liệu!");
            }

            if (data) {
                const dataJson = await data.results[
                    Math.floor(Math.random() * data.results.length - 1)
                ];
                if (dataJson) {
                    const dataResults = {
                        bannerImg: dataJson.backdrop_path,
                        title: dataJson.original_name,
                        description: dataJson.overview,
                    };

                    const imgUrl = `https://image.tmdb.org/t/p/w500${dataResults.bannerImg}`;
                    const bannerTitle = dataResults.title;
                    const bannerDescription = dataResults.description;

                    setOriginalImg(imgUrl);
                    setTitleName(bannerTitle);
                    setOverview(bannerDescription);
                }
            }
            setIsLoading(false);
        };
        try {
            fetchData();
        } catch (error) {
            setDataError(error.message);
        }
    }, []);

    return (
        <div>
            {isLoading && (
                <div className={styles["banner-p"]}>
                    <p>Đang tải dữ liệu...</p>
                </div>
            )}

            {dataError && (
                <div className={styles["banner-error"]}>
                    <p>{dataError}</p>
                </div>
            )}
            <div
                className={styles.banner}
                style={{
                    backgroundImage: `url(${originalImg})`,
                }}
            >
                <BannerTitle title={titleName} descript={overView} />
            </div>
        </div>
    );
};

export default Banner;
