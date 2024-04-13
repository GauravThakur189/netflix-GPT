import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addTrailerVedios } from "../utils/movieSlice";

const usePlayingTrailor = (id)=>{
    const dispatch = useDispatch();
    const BackgroundVedio = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/"+ id +"/videos?language=en-US",
          API_OPTIONS
        );
        const json = await data.json();
        console.log(json.results);
        const filterData = json.results.filter((vedio) => {
          return vedio.type === "Trailer";
        });
        const trailer = filterData.length ? filterData[0] : json.results[0];
        console.log(trailer);
        dispatch(addTrailerVedios(trailer));
       
      };
      useEffect(() => {
        BackgroundVedio();
      }, []);
}

export default usePlayingTrailor;