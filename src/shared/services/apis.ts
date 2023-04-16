import axios from "axios";
import { parseCookies } from "nookies";
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmlja25hbWUiOiJuaWNvbGFzLnZhbGVudGUiLCJyb2xlIjoiQ1VTVE9NRVIiLCJpYXQiOjE2ODAxMzI1NjksImV4cCI6MTY4MDIxODk2OX0.dlVfu9pQ-9FsgXI5dEnzvMBHBkU6R0eB8puDYyP35z4"
export const Apis = axios.create({
  baseURL: 'http://localhost:3003',
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${parseCookies()['token']}`,
  },
});