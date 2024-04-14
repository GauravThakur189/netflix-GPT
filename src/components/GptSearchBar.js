import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
import openAi from "../utils/openAi";
import openai from "../utils/openAi";



const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);
  const searchText = useRef();
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query :" +searchText.current.value+". only give me name of 5 movies,comma seperated like the example result given ahead. Example koi mil gya,don,singham,gadar,dabang"  

    const getResults = await openai.chat.completions.create({ 
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(getResults.choices);
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
