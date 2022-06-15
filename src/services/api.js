import axios from "axios";

export const API = axios.create({
    baseURL: 'https://coronavirus-19-api.herokuapp.com/countries'
});

