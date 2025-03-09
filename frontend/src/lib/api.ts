import axios from "axios";
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const api  = axios.create({
    baseURL:`${BACKEND_URL}/api/v1`,
    withCredentials:true
})

export default api