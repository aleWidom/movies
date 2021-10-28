import axios from "axios";

const url = `https://api.themoviedb.org/3/`;
 
export const api = axios.create(
    {
        baseURL: url
    }
);

const token  = {
    Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjM0ZGRkOTkxMWZiMDE0YWI3ZGIyMGM0OTAyZjY5ZiIsInN1YiI6IjYxN2FhNDVjZmRjNGZhMDA1ZjgyOTQwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IWGNXDRHkMNBPdm1O2kJs3WuVadY_qiCM925HSda4zY",
    "Content-Type": "application/json;charset=utf-8",
}

api.interceptors.request.use((config) => {
        config.headers = token;
    return config;
});

console.log(api)

