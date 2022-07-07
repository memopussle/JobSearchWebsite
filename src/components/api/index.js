
import axios from "axios";



const url = "https://google-jobs-search.p.rapidapi.com/search";


export const getJobsData = async (query) => {
     console.log(query);
    try {
        const {
          data: { data },
        } = await axios.get(url, {
          params: { query: query },
          headers: {
            "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
            "X-RapidAPI-Host": "google-jobs-search.p.rapidapi.com",
          },
        });
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}