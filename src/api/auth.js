import { clientAxios } from "../config";

class AuthAPI {
  async login(credentials) {
    try {
      const response = await clientAxios.post("auth/login", credentials);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new AuthAPI();
