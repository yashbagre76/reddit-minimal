import axios from "axios";

//base url for Reddit's  Json API

const BASE_URL = "https://www.reddit.com/r/popular.json";

//function to fetch data  from readdit api

export const fetchPosts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data.data.children;
  } catch (error) {
    console.error("ERROR  FETCHING  DATA  FROM  REDDIT  API :", error);
    throw error; // throw error to be handeled  in component
  }
};
