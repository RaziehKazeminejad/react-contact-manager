import http from './httpService';

export default function getContact() {
  return http.get('/contacts');
}
