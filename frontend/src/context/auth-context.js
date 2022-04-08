import React from 'react';

export default React.createContext({
    token: null,
    userId: null,
    login: (token, userId, tokenExpiration) => {
        document.location.href = '/events'

    },
    logout: (wlak) => {
        wlak.push('/events')



    }
});