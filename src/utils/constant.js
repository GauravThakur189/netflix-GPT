 export const BG_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_small.jpg';
 
 const API_KEY = "327ffd11fa51946640ab49730272c5ff";


 const api_access_tokan = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjdmZmQxMWZhNTE5NDY2NDBhYjQ5NzMwMjcyYzVmZiIsInN1YiI6IjY2MThiZTAxNjZlNDY5MDE2NWJjMmIyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0VHruJjRwABY4zjZqNlzo5mu5CZqB050fSCX6-3NYNk';

 export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer' + process.env.REACT_APP_TMDB_TOKEN
    }
  };

  export const POSTER_PATH_URL = "https://image.tmdb.org/t/p/w500"

  export const SUPPORT_LANGUAGE = [{identifier:"en",name:"english"},
{identifier:"spanish" ,name:"spanish"},
{identifier:"hindi",name: "Hindi"}];


export const  OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

