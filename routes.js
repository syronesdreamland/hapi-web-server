const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Homepage';
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return 'About page';
        },
    },
    {
        method: 'POST',
        path: '/auth',
        handler: (request, h) => {
            return 'Halaman Auth';
        },
    },
    {
        method: 'POST',
        path: '/auth/login',
        handler: (request, h) => {
            return 'Halaman Login';
        },
    },
    {
        method: 'POST',
        path: '/auth/register',
        handler: (request, h) => {
            return 'Halaman Register';
        },
    },
    {
        method: 'POST',
        path: '/auth/logout',
        handler: (request, h) => {
            return 'Halaman Logout';
        },
    },
    {
        method: 'GET',
        path: '/news',
        handler: (request, h) => {
            return 'Halaman Register';
        },
    },
    {
        method: 'PUT',
        path: '/user/{username}/update',
        handler: (request, h) => {
            return 'Halaman Update User';
        },
    },
    {   
        method: 'GET',
        path: '/users/{username}',
        handler: (request, h) => {
            const { username } = request.params;
            return `Hello, ${username}!`;
        },}
];
 
module.exports = routes;    