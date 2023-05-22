import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": "fb20520b39msh59c15d5f980d3e6p170fb6jsn63a2934cf53f",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

//"fb20520b39msh59c15d5f980d3e6p170fb6jsn63a2934cf53f"
// process.env.REACT_APP_RAPID_API_KEY,
