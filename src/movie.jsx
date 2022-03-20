function Movie({ data }) {
  return (
    <div>
      <h2>{data.title}</h2>
      <img
        src={"https://image.tmdb.org/t/p/w500" + data.backdrop_path}
        alt=""
      />
    </div>
  );
}
export default Movie;
