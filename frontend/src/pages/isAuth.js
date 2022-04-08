export const isAuth = () => {

    if (localStorage.getItem('user')) {
        return localStorage.getItem('user');
    } else {
        return false;
    }
}
module.exports=isAuth()