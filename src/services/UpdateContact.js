import http from './httpService';

export default function UpdateContact(id, data) {
  return http.put(`/contacts/${id}`, data);
}
