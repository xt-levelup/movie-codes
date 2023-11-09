// ----------------------------------------------------
// ------------COMPONENT PHẦN MÔ TẢ VIDEO--------------
// -----SỬ DỤNG HOOK useContext ĐỂ NHẬN DỮ LIỆU--------
// ----------------------------------------------------

import { DataContext } from "../../components/content-components/MovieContext";
import { useContext } from "react";

const VideoDescription = () => {
    const {
        imageResultTitle,
        imageResultPublished,
        imageResultRated,
        imageResultDescription,
    } = useContext(DataContext);

    return (
        <div>
            <h3>{imageResultTitle}</h3>
            <hr></hr>
            <p>Release date: {imageResultPublished}</p>
            <p>Rate: {imageResultRated}/10</p>
            <div>{imageResultDescription}</div>
        </div>
    );
};

export default VideoDescription;
