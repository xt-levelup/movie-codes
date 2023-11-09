// -----------------LIÊN KẾT CÁC COMPONENT CON--------------------
// -------SỬ DỤNG CSS NGOÀI VỚI FILE Content.module.css ----------

import ContentOriginal from "./ContentOriginal";
import ContentTrending from "./ContentTrending";
import ContentTopRated from "./ContentTopRated";
import ContentActions from "./ContentActions";
import ContentComedy from "./ContentComedy";
import ContentHorror from "./ContentHorror";
import ContentRomance from "./ContentRomance";
import ContentDocumentaries from "./ContentDocumentaries";
import styles from "./Content.module.css";

// -------------------------------------------------
// -------TẠO HÀM TRONG COMPONENT Content.js -------
// ------- HIỂN THỊ PHẦN THÂN WEBSITE---------------
// -------------------------------------------------

const Content = () => {
    return (
        <div className={styles.content}>
            <ContentOriginal />
            <ContentTrending />
            <ContentTopRated />
            <ContentActions />
            <ContentComedy />
            <ContentHorror />
            <ContentRomance />
            <ContentDocumentaries />
        </div>
    );
};

export default Content;
