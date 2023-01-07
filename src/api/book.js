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

  async getBook(id) {
    try {
      const response = await clientAxios.get(`/books/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async createBook(book, token) {
    try {
      //Crear un formdata
      const formData = new FormData();
      formData.append("title", book.title);
      formData.append("description", book.description);
      formData.append("file", book.file);
      const response = await clientAxios.post("/books", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async updateBook(book, token) {
    try {
      //Crear un formdata
      const formData = new FormData();
      formData.append("title", book.title);
      formData.append("description", book.description);
      book.file && formData.append("file", book.file);
      const response = await clientAxios.put(`/books/${book._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async deleteBook(id, token) {
    try {
      const response = await clientAxios.delete(`/books/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new BookAPI();
