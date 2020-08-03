import axios from 'axios'

export const baseRequest = axios.create({
    baseURL: 'https://gorest.co.in/public-api',
    headers: {
        Authorization: 'Bearer YFkIRVBS227fC4KVPI1QKbzdtO1-baRqeYxH'
    }
});

export {
    getUsersRequest,
    deleteUserRequest,
    getUserRequest,
    createUserRequest,
    editUserRequest,
} from './users'