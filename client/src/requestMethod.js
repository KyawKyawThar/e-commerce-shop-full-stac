import axios from 'axios';

const BASE_URL = 'https://highestlevel-ecommerce.herokuapp.com/api/';

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWJkMGRjOWM4YWNlYTY2ZmFhNTdjZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODE3MDA4MiwiZXhwIjoxNjM4NDI5MjgyfQ.F0ZfX_6KPeel2MwE7WTVOtSHPHw696IVXIEyuSY1uJ0"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {token: `Bearer ${TOKEN}`}
})