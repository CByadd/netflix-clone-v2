const key = 'f6929206c59fa46dbe3f913a62e1b988'


const requests = {
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=2`,
    requestTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=3`,
    requestHorror:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=4`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=7`,
};

export default requests