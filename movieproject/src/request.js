const API_KEY = "1d7d1bcc64374e0d77d619e34bdc415e";
 
const request = {
	fetchTrending: `/trending/all/week?API_KEY=${API_KEY}&language=en-US`,
	fetchPopularOnNetflix: `/discover/tv?API_KEY=${API_KEY}&with_networks=213`,
	fetchTopRatedMovies: `/movie/top_rated?API_KEY=${API_KEY}&language=en-US`,
	fetchRealStories: `/discover/movie?API_KEY=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?API_KEY=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?API_KEY=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?API_KEY=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?API_KEY=${API_KEY}&with_genres=99`,
};
export default request;