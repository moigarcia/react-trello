import axios from 'axios'

const API_URL="http://localhost:3001"

const http = axios.create({
  baseURL: API_URL,
  withCredentials: true
});

export const getColumns = () => http.get('/columns').then(response => response.data);
export const createColumn = (column) => http.post('/columns', column)
export const deleteColumn = (id) => http.delete(`/columns/${id}`)
export const getCards = () => http.get('/cards').then(response => response.data);
export const createCard = (card) => {
  const data = new FormData();
  Object.keys(card).forEach(key => data.append(key, card[key]));
  return http.post('/cards', data)
}
export const deleteCard = (id) => http.delete(`/cards/${id}`)