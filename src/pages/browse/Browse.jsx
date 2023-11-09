import React from "react";

import Navbar from "../components/Navbar";
import Banner from "../components/banner-components/Banner";
import Content from "../components/content-components/Content";

function Browse() {
    return (
        <React.Fragment>
            <Navbar />
            <Banner />
            <Content />
        </React.Fragment>
    );
}

export default Browse;
