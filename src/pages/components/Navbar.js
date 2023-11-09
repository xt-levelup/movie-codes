// -----------------------------------------------------------------------
// ------------------COMPONENT HIỂN THỊ THANH NAVBAR----------------------
// ----------------SỬ DỤNG useState ĐỂ CẬP NHẬT MÀU NỀN-------------------
// ------------SỬ DỤNG usEffect ĐỂ THEO DÕI SỰ KIỆN SCROLL----------------
// ------------TẠO HÀM scrollHandler ĐỂ CẬP NHẬT MÀU NỀN------------------
// ------LIÊN KẾT CÁC COMPONENT CON NavbarLink.js, NavbarSearch.js--------
// -----------------------------------------------------------------------

import React, { useState, useEffect } from "react";
import NavbarLink from "./navbar-components/NavbarLink";
import NavbarSearch from "./navbar-components/NavbarSearch";
import styles from "./Navbar.module.css";

const Navbar = () => {
    const [backgroundColor, setBackgroundColor] = useState("");

    useEffect(() => {
        const scrollHandler = () => {
            if (window.pageYOffset > 100) {
                setBackgroundColor(styles["navbar-background-1"]);
            } else {
                setBackgroundColor("");
            }
        };
        window.addEventListener("scroll", scrollHandler);
        scrollHandler();
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    return (
        <div className={`${styles["navbar-contain"]} ${backgroundColor}`}>
            <div className={styles.navbar}>
                <NavbarLink />
                <NavbarSearch />
            </div>
        </div>
    );
};

export default Navbar;
