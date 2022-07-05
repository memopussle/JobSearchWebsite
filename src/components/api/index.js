
import axios from "axios";

const url = "https://google-jobs-search.p.rapidapi.com/search";

const options = {

  params: { query: "chef New York" },
  headers: {
    "X-RapidAPI-Key": "03f8ed297fmshe38d28b4515a3a0p1cd970jsn5702025fb60a",
    "X-RapidAPI-Host": "google-jobs-search.p.rapidapi.com",
  },
};

export const getJobsData = async (query) => {
     console.log(query);
    try {
        const {
          data: { data },
        } = await axios.get(url, {
          params: { query: query},
          headers: {
            "X-RapidAPI-Key":
              "03f8ed297fmshe38d28b4515a3a0p1cd970jsn5702025fb60a",
            "X-RapidAPI-Host": "google-jobs-search.p.rapidapi.com",
          },
        });
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}