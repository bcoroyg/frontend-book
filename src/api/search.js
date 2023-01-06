import { clientAxios } from "../config";

class SearchAPI {
  async getSearch(query) {
    try {
      const response = await clientAxios.get(`/search/${query}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new SearchAPI();
