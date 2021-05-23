import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

/**
 * * Configuração do axios *
 * * base url*
 *  onde esse arquivo e chamando toda vez que fazemos requisição
 *  */
