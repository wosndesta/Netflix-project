import './App.css';
import Row from './Componant/Row';
import request from './request'


function App() {
  return (
		<div className="App">
			<h2>Netflix Project</h2>

      <Row title="Popular on Netflix" fetchUrl={ request.fetchPopularOnNetflix}/>
			<Row title="Trending Now" fetchUrl={request.fetchTrending} />
			<Row title="Real Stories" fetchUrl={request.fetchRealStories} />
      <Row title="Continue Watching" />
      
		</div>
	);
}






export default App;
