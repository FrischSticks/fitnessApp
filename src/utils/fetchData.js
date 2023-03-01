export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY_EXERCISE_DB,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const youTubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY_YOUTUBE_SEARCH_AND_DOWNLOAD,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  

export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}