// --------------------------------------------------------------------------
// ---------SỬ DỤNG react-router-dom ĐỂ LIÊN KẾT CÁC TRANG VỚI NHAU----------
// -------SỬ DỤNG HÀM MovieContext TRONG FILE CONTEXT MovieContext.JS -------
// -----------------ĐỂ TRUYỀN DỮ LIỆU ĐẾN CÁC COMPONENT CON -----------------
// --------------LIÊN KẾT CÁC TRANG CON Browse.jsx, Search.jsx---------------
// --------------------------------------------------------------------------

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Browse from "./pages/browse/Browse";
import Search from "./pages/search/Search";
import { MovieContext } from "./pages/components/content-components/MovieContext";

function App() {
    return (
        <BrowserRouter>
            <MovieContext>
                <Routes>
                    <Route path="/" element={<Browse />} />
                    <Route path="/search" element={<Search />} />
                </Routes>
            </MovieContext>
        </BrowserRouter>
    );
}

export default App;
