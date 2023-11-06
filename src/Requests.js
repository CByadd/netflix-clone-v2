const key = 'f6929206c59fa46dbe3f913a62e1b988'


const requests = {
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:`https://api.themoviedb.org/3/movie/TopRated?api_key=${key}&language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3/movie/Trending?api_key=${key}&language=en-US&page=1`,
    requestHorror:`https://api.themoviedb.org/3/movie/Horror?api_key=${key}&language=en-US&page=1`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/Upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requests