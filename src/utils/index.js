const TOKEN_KEY = 'token';

export const logout = () => {
    window.localStorage.removeItem(TOKEN_KEY);
}

export const isLogin = () => {
    if (window.localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}
