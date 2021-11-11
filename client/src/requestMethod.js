import axios from 'axios';

const BASE_URl = 'http://localhost:8080/api/';
const TOKEN = '';

export const publicRequest = axios.create({ basURL: BASE_URl });

export const userRequest = axios.create({
  baseURL: BASE_URl,
  headers: { token: TOKEN },
});
