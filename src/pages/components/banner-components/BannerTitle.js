import styles from "./BannerTitle.module.css"; // SỬ DỤNG CSS NGOÀI VỚI FILE BannerTitle.module.css
import BannerButton from "./BannerButton"; // LIÊN KẾT COMPONENT CON BannerButton.js

// ----------------------------------------------------------------
// -------------TẠO HÀM TRONG COMPONNENT BannerTitle---------
// -------SỬ DỤNG PROPS ĐỂ NHẬN DỮ LIỆU TỪ COMPONENT CHA-----------
// ----------------------------------------------------------------

const BannerTitle = (props) => {
    return (
        <div className={styles["banner-title"]}>
            <div className={styles["banner-title-2"]}>
                <h2>{props.title}</h2>
                <BannerButton />
                <div className={styles["banner-title-3"]}>
                    <p>{props.descript}</p>
                </div>
            </div>
        </div>
    );
};

export default BannerTitle;
