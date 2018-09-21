import { API } from "../../../helper";

const newsList = {
  getNews: async () => {
    const result = await API.get(
      `/everything?sources=mtv-
        news&apiKey=0c08412d18ca4e2ba00a0f0eaca1ee11`,
      { headers: { "Content-Type": "application/json" } }
    );
    return result;
  }
};

export default newsList;
