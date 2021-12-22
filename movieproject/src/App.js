import './App.css';
import Banner from './Banner'
import Row from './Row';
import requests from './request'
import Nav from './Nav'




function App() {
  return (
		<div className="App">
	<Nav />	
	<Banner />
			<Row title="Netflix Original" fetchUrl={requests.fetchNetflixOriginals}
				firstRow
			/>
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row
				title="Documentaries Movies"
				fetchUrl={requests.fetchDocumentaries}
			/>
		</div>
	);
}






export default App;
