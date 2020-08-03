import {baseRequest} from '.'

export const getUsersRequest = async (page = 1) => {
    const res = await baseRequest.get('users', {
        params: {
            page
        }
    })
    const {result: users, _meta: meta} = res.data
    return {users, meta}
}

export const getUserRequest = async (id) => {
    const res = await baseRequest.get(`users/${id}`)
    const {result: user, _meta: meta} = res.data
    return {user, meta}
}

export const deleteUserRequest = async (id) => {
    const res = await baseRequest.delete(`users/${id}`)
    const {result, _meta: meta} = res.data
    return {meta, result}
}

export const createUserRequest = async (user) => {
    const res = await baseRequest.post(`users`, user)
    const {result, _meta: meta} = res.data
    return {meta, result}
}

export const editUserRequest = async (id, user) => {
    const res = await baseRequest.put(`users/${id}`, user)
    const {result, _meta: meta} = res.data
    return {meta, result}
}