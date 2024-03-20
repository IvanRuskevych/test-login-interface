export const REGEX = {
    EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
}

export const MESSAGES = {
    ERR_EMAIL: "Enter email",
    ERR_EMAIL_INVALID: "This is not a valid email",
    ERR_PSW: "Password must be less than 8 characters",
    ERR_PSW_RESET: "Failed to reset password. Please try again later.",
    ERR_PSW_SET: "Failed to set password. Please try again later.",
    ERR_PSW_MATCH: "Passwords do not match",
    ERR_LOGIN: "Failed to log in. Please try again later.",
    SUCCESS_MSG: "Success",
    SUCCESS_PSW_RESET: "Password reset successfully",
    SUCCESS_EMAIL_SEND: (email) => `Please check your email ${email} to complete the password reset process`
}

export const API_PATH = {
    LOGIN: "/v1/auth/login",
    REGISTER: "v1/auth/",
    PSW_RESET: "v1/auth/password-reset",
    PSW_SET: "v1/auth/password-set"
}

export const INIT_STAT = {
    LOGIN: {
        email: "",
        password: "",
    },
    PSW_SET: {
        password: "",
        confirmPassword: ""
    },
    PSW_RESET: {
        email: "",
    },

}