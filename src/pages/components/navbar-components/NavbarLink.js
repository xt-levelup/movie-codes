import { Link } from "react-router-dom";
import styles from "../Navbar.module.css";
import useApi from "../useApi";
// import { useEffect } from "react";

const NavbarLink = () => {
    // const { trending } = useApi();

    // const dataTrending = async () => {
    //     const data = await trending((data) => data);
    //     console.log(data.results);
    //     // return data.results;
    // };
    // console.log(dataTrending());

    return (
        <div>
            <Link to={{ pathname: "/" }} className={styles["navbar-link"]}>
                Movie App
            </Link>
        </div>
    );
};

export default NavbarLink;
