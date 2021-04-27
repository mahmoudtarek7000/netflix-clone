import './App.css';
import Row from "./components/Row_component/Row";
import requests from "./requests";
import Banner from "./components/Banner_component/Banner";
import Navbar from "./components/Navbar_component/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row title="NETFLEX ORIGINALS" isLargeRow fetchURL={requests.fetchNetflixOriginals}/>
      <Row title="Trending now" fetchURL={requests.fetchTrending}/>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
