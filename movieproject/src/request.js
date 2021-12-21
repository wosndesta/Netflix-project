const Api_Key = "1d7d1bcc64374e0d77d619e34bdc415e";
 
const request = {
	fetchTrending: `/trending/all/week?Api_Key=${Api_Key}&language=en-US`,
	fetchPopularOnNetflix: `/discover/tv?Api_Key=${Api_Key}&with_networks=213`,
	fetchTopRatedMovies: `/movie/top_rated?Api_Key=${Api_Key}&language=en-US`,
	fetchRealStories: `/discover/movie?Api_Key=${Api_Key}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?Api_Key=${Api_Key}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?Api_Key=${Api_Key}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?Api_Key=${Api_Key}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?Api_Key=${Api_Key}&with_genres=99`,
};
export default request;