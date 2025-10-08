import { API_CONFIG } from "./config";
import axios, {AxiosInstance} from 'axios';

interface Params {
    baseURL?:string;
    extraConfig?:any;
}

export const createAxiosInstance = ({baseURL, extraConfig}:Params):AxiosInstance => {
    const instance = axios.create({
        ...API_CONFIG,
        baseURL,
        ...extraConfig
    });

    return instance;
}