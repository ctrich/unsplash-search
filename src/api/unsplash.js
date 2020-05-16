import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID yKAbdOEt2u4s5HRWD9FYlYZWyszqGRC91ufE9eoPcuc'
    }
});