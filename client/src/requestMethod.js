import axios from "axios";

const BASE_URl = "http://localhost:8080/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjk5M2M3MGFmNDIwZWVlYWQ3NDZkNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNjY1MDQ5MywiZXhwIjoxNjM2OTA5NjkzfQ.fZOY15x0iHL1Q2de4gA42CSrE5UhlEcbZZ1IFzS9IDY";

export const publicRequest = axios.create({ basURL: BASE_URl });

export const userRequest = axios.create({
  baseURL: BASE_URl,
  headers: { token: TOKEN },
});
