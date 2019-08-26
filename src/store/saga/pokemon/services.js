import request from "../../../Service/";
// import { Axios as api } from 'axios'
const api = new request();

const getPokemon = async (query = {}) => {
  try {
    let response = await api.get(`pokemon/ditto/`, query);
    // console.log(" Aqui eu", response)
    // response = response.data;
    if (response) {
      return response;
    } else {
      return response;
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 404) return null;
      throw Error(error.response.data.message);
    }
    throw Error(error.message);
  }
};

export default getPokemon;