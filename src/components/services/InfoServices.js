import axios from 'axios'

const API_URL="http://localhost:3001"

const http = axios.create({
  baseURL: API_URL
});

export const getColumns = () => http.get('/columns').then(response => response.data);
export const getCards = () => http.get('/cards').then(response => response.data);

