import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openAi from "../utils/openAi";
import openai from "../utils/openAi";
import { API_OPTIONS } from "../utils/constant";
import { addGptMoviesResult } from "../utils/GptSlice";



const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.language);
  const searchText = useRef();


   const searchMoviesTMDB = async()=>{
     const data = await fetch('https://api.themoviedb.org/3/search/movie?query=dabang&include_adult=false&language=en-US&page=1', API_OPTIONS)
   
    const json = await data.json();

     return json.results;
   }

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query :" +searchText.current.value+". only give me name of 5 movies,comma seperated like the example result given ahead. Example koi mil gya,don,singham,gadar,dabang"  

    const gptResults = await openai.chat.completions.create({ 
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if(!gptResults.choices){return;}
    console.log(gptResults.choices);

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie)=> searchMoviesTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(addGptMoviesResult({movieName:gptMovies,movieResults:tmdbResults}));
  };
  return (
    <div className="pt-[10%] flex justify-center ">
      <form className=" w-1/2 " onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          className="p-2 m-2 w-3/5"
          type="text"
          placeholder={lang[langKey]?.gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 w-36 m-2  bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
