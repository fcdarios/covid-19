const token_key = 'token';



export function setToken(token) {
    localStorage.setItem(token_key, token);
}

export function getToken(){
    return localStorage.getItem(token_key);
}

export function deleteToken(){
    localStorage.removeItem(token_key);
}

export function deleteAll(){
    localStorage.clear();
}