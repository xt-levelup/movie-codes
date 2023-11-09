// --------------------------------------------------------------------------
// -----------TẠO RIÊNG COMPONENT HIỂN THỊ THÔNG TIN BỘ PHIM-----------------
// ------------------SỬ DỤNG PROPS ĐỂ LẤY DỮ LIỆU----------------------------
// ------SỬ DỤNG CSS NGOÀI VỚI FILE MovieDetailDescription.module.css--------
// --------------------------------------------------------------------------

import styles from "./MovieDetailDescription.module.css";

const MovieDetailDescription = ({ title, published, rated, description }) => {
    return (
        <div style={{ color: "white" }}>
            <h3>{title}</h3>
            <hr style={{ border: "1px solid #ddd" }}></hr>
            <h4>Release Date: {published}</h4>
            <h4 className={styles["h4-2"]}>Vote: {rated}/10</h4>
            <p>{description}</p>
        </div>
    );
};

export default MovieDetailDescription;
