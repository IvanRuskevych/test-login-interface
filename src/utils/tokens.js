import instance from "../api/instance.js";

export const setAccessToken = (token) => {
    if (token) {
        return instance.defaults.headers.common.authorization = `Bearer ${token}`
    }
    instance.defaults.headers.common.authorization = ""
}

export const setRefreshToken = (token) => {
    localStorage.setItem("refreshToken", token)
}

export const getRefreshToken = () => {
    return localStorage.getItem("refreshToken")
}