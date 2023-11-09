// ---------------------------------------------------------------------
// ---------CUSTOM HOOK ĐỂ TRUYỀN DỮ LIỆU ĐẾN CÁC COMPONENT-------------
// -------CÁC HÀM BẤT ĐỒNG BỘ ĐƯỢC SỬ DỤNG ĐỂ LẤY DỮ LIỆU API ----------
// ---------------------------------------------------------------------

const useApi = () => {
    const API_KEY = "1093723ca7fc3ce3a6bf27b5db8bf285";
    const requests = {
        fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
        fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_network=123`,
        fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
        fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`,
        fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
        fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
        fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        fetchDocumentaries: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
        fetchSearch: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US`,
    };

    const trending = async () => {
        const response = await fetch(requests.fetchTrending);
        const data = response.json();
        return data;
    };
    const originals = async () => {
        const response = await fetch(requests.fetchNetflixOriginals);
        const data = response.json();
        return data;
    };
    const topRated = async () => {
        const response = await fetch(requests.fetchTopRated);
        const data = response.json();
        return data;
    };
    const actions = async () => {
        const response = await fetch(requests.fetchActionMovies);
        const data = response.json();
        return data;
    };
    const comedy = async () => {
        const response = await fetch(requests.fetchComedyMovies);
        const data = response.json();
        return data;
    };
    const horror = async () => {
        const response = await fetch(requests.fetchHorrorMovies);
        const data = response.json();
        return data;
    };
    const romance = async () => {
        const response = await fetch(requests.fetchRomanceMovies);
        const data = response.json();
        return data;
    };
    const documentaries = async () => {
        const response = await fetch(requests.fetchDocumentaries);
        const data = response.json();
        return data;
    };
    const search = async () => {
        const response = await fetch(requests.fetchSearch);
        const data = response.json();
        return data;
    };

    return {
        trending,
        originals,
        topRated,
        actions,
        comedy,
        horror,
        romance,
        documentaries,
        search,
        API_KEY,
    };
};

export default useApi;
