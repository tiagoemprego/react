import Decode from "jwt-decode"

export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    const refreshToken = localStorage.getItem('refreshToken');

    if(!token || !refreshToken) {
        return false;
    }
    console.log(123);

    try {
        const { exp } = Decode(refreshToken);

        console.log(exp);
        console.log(new Date().getTime());

        if(exp > new Date().getTime()){
            return false
        }
    }catch (e) {
        return false
    }

    return true
};