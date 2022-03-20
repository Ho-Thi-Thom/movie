import logo from "./logo.svg";
import "./App.css";
import styles from "./test.module.css";
import { useEffect, useRef, useState } from "react";
import Movie from "./movie";
import Filter from "./filter";
function App() {
  const [popular, setPopular] = useState([]);
  const [filterd, setFilterd] = useState([]);

  const [genre, setGenre] = useState([]);
  useEffect(() => {
    fetchAPI();
    fetchAPIGenre();
  }, []);

  const fetchAPI = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=dac5c94496e99010ccb733cd080c53ad&language=vi-vn&page=1"
    );
    const movies = await data.json();
    // console.log(movies.results);
    setPopular(movies.results);
    setFilterd(movies.results);
  };

  const fetchAPIGenre = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=dac5c94496e99010ccb733cd080c53ad&language=vi-vn"
    );
    const genres = await data.json();
    setGenre([{ id: "20", name: "All" }, ...genres.genres]);
  };
  const handleClickButton = (id) => {
    // alert(id);
    if (id === "20") {
      setFilterd(popular);
    } else {
      const temp = popular.filter((item, index) => item.genre_ids.includes(id));
      setFilterd(temp);
    }
  };
  return (
    <div className="App">
      <div className={styles.test}>abc</div>
      <div className="genres-movies">
        {genre.map((item, index) => {
          return (
            <Filter
              key={index}
              data={item}
              onClick={(id) => {
                handleClickButton(id);
              }}
            />
          );
        })}
      </div>
      <div className="popular-movies">
        {filterd.map((item, index) => {
          return <Movie key={index} data={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
