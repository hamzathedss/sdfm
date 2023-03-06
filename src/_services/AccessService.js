let login = (passcode) => {
    return passcode === "sdfm@2023";
};

let saveToken = (token) => {
    localStorage.setItem('token', token);
};

let isLogged = () => {
    let token = localStorage.getItem('token');
    return !!token;
};

let logout = () => {
    localStorage.removeItem('token');
};

export const accessService = {
    login, saveToken, isLogged, logout
};