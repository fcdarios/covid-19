const roles_key = 'roles';

export function setToken(Rol) {
    localStorage.setItem(roles_key, Rol);
}

export function getRol(){
    return localStorage.getItem(roles_key);
}

export function deleteRol(){
    localStorage.removeItem(roles_key);
}
