// --------------------------------------------------------------
// ---------------COMPONENT HIỂN THỊ VIDEO-----------------------
// -----SỬ DỤNG react-youtube ĐỂ HIỂN THỊ VIDEO TỪ Youtube-------
// --------------------------------------------------------------

import Youtube from "react-youtube";
import styles from "./MovieDetailVideo.module.css";
const MovieDetailVideo = ({ videoId }) => {
    const opts = {
        height: "100%",
        width: "100%",

        playerVars: {
            autoPlay: 0,
        },
    };

    return <Youtube className={styles.video} videoId={videoId} opts={opts} />;
};

export default MovieDetailVideo;
