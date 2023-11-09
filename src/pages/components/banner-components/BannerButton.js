import styles from "./BannerButton.module.css"; // SỬ DỤNG CSS NGOÀI BannerButton.module.css

// -----------------------------------------------------
// -------TẠO HÀM TRONG COMPONENT BannerButton.js-------
// -------ĐỂ QUẢN LÝ RIÊNG CÁC BUTTON TRONG BANNER------
// -----------------------------------------------------

const BannerButton = () => {
    return (
        <div className={styles["banner-button"]}>
            <button>Play</button>
            <button>My List</button>
        </div>
    );
};

export default BannerButton;
