const token_key = 'token';

export function setToken(token) {
    localStorage.setItem(token_key, token);
}

export function getToken(){
    console.log('Obteniiendo token')
    return localStorage.getItem(token_key);
}

export function deleteToken(){
    localStorage.removeItem(token_key);
}

export function deleteAll(){
    localStorage.clear();
}