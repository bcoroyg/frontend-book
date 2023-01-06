import { clientAxios } from "../config";

class BookAPI {
  async getBooks() {
    try {
      const response = await clientAxios.get("/books");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new BookAPI();
