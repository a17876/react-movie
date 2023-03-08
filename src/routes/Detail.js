import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=59ba953de0ffdc8a47b3102c22739e62&language=en-US`
      )
    ).json();
    console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return <h1> Detail</h1>;
}

export default Detail;
