import axios from 'axios';
import {getRefreshToken, setAccessToken, setRefreshToken} from "../utils/tokens.js";

const instance = axios.create({
    baseURL: 'https://auth-qa.qencode.com',
});

instance.interceptors.response.use(response => response, async (error) => {
    if (error.response.status === 401) {
        const refreshToken = getRefreshToken()
        try {
            const {data} = await instance.post("/v1/auth/refresh-token", {refreshToken})
            setAccessToken(data.access_token)
            setRefreshToken(data.refresh_token)
            return instance(error.config)
        } catch (error) {
            return Promise.reject(error);
        }
    }
    return Promise.reject(error);
})
export default instance;
