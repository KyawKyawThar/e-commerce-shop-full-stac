import axios from "axios";

const BASE_URl = "http://localhost:8080/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjk5M2M3MGFmNDIwZWVlYWQ3NDZkNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjk4NDAzMCwiZXhwIjoxNjM3MjQzMjMwfQ.-O7iLpbiUtTIG_nBTu-bJ1C_zV7evjEWFKxEL6q9TjI";

export const publicRequest = axios.create({ basURL: BASE_URl });

export const userRequest = axios.create({
  baseURL: BASE_URl,
  headers: { token: TOKEN },
});
