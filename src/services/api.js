import axios from "axios";

const api = axios.create({
  baseURL: "http://www.fococomunicacao.com.br/unimedfoco/api"
});

export default api;
