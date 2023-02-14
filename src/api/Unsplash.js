import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{Authorization: 'Client-ID 3vMvon34yKGQsDOOzemUrGw4CfysbbgTkgbVvf4e6gs'}
});
