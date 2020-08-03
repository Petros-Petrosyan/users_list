import { toast } from 'react-toastify';

import {
    getUsersRequest,
    deleteUserRequest,
    getUserRequest,
    createUserRequest,
    editUserRequest,
} from '../../services/http-services'

import {
    GET_USERS_START,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,

    GET_USER_START,
    GET_USER_SUCCESS,
    GET_USER_FAIL,

    CREATE_USER_START,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAIL,

    EDIT_USER_START,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAIL,

    DELETE_USER_START,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
} from '../action-types';

const getUsersStart = (page) => {
    return {
        type: GET_USERS_START,
        payload: {page}
    }
};
const getUsersSuccess = (users, meta) => {
    return {
        type: GET_USERS_SUCCESS,
        payload: {users, meta}
    }
};
const getUsersFail = () => {
    return {
        type: GET_USERS_FAIL,
    }
};

const getUserStart = (id) => {
    return {
        type: GET_USER_START,
        payload: {id}
    }
};
const getUserSuccess = (user) => {
    return {
        type: GET_USER_SUCCESS,
        payload: {user}
    }
};
const getUserFail = () => {
    return {
        type: GET_USER_FAIL,
    }
};


const createUserStart = () => {
    return {
        type: CREATE_USER_START,
    }
}
const createUserSuccess = () => {
    return {
        type: CREATE_USER_SUCCESS,
    }
}
const createUserFail = () => {
    return {
        type: CREATE_USER_FAIL,
    }
}

const editUserStart = () => {
    return {
        type: EDIT_USER_START,
    }
}
const editUserSuccess = () => {
    return {
        type: EDIT_USER_SUCCESS,
    }
}
const editUserFail = () => {
    return {
        type: EDIT_USER_FAIL,
    }
}

const deleteUserStart = (id) => {
    return {
        type: DELETE_USER_START,
        payload: {id}
    }
}
const deleteUserSuccess = (id) => {
    return {
        type: DELETE_USER_SUCCESS,
        payload: {id}
    }
}
const deleteUserFail = () => {
    return {
        type: DELETE_USER_FAIL,
    }
}


export const getUsers = (page) => {
    return async (dispatch) => {
        dispatch(getUsersStart())
        try {
            const {users, meta} = await getUsersRequest(page)
            dispatch(getUsersSuccess(users, meta))
        } catch (err) {
            toast.error("Something Wrong");
            dispatch(getUsersFail())
        }
    }
}

export const getUser = (id) => {
    return async (dispatch) => {
        dispatch(getUserStart(id))
        try {
            const {user} = await getUserRequest(id)
            dispatch(getUserSuccess(user))
        } catch (err) {
            toast.error("Something Wrong");
            dispatch(getUserFail())
        }
    }
}

export const deleteUser = (id) => {
    return async (dispatch) => {
        dispatch(deleteUserStart(id))
        try {
            const {meta} = await deleteUserRequest(id)
            dispatch(deleteUserSuccess(id))
            const message = meta.message || "Success";
            toast.success(message);
        } catch (err) {
            toast.error("Something Wrong");
            dispatch(deleteUserFail())
        }
    }
}

export const createUser = (user, push) => {
    return async (dispatch) => {
        dispatch(createUserStart())
        try {
            const {meta, result} = await createUserRequest(user)
            if (meta.code !== 200) {
                throw Error(meta.message)
            }
            dispatch(createUserSuccess())
            const message = meta.message || "Success";
            toast.success(message);
            push(`/users/${result.id}`)
        } catch (err) {
            toast.error("Something Wrong");
            dispatch(createUserFail())
        }
    }
}
export const editUser = (id, user, push) => {
    return async (dispatch) => {
        dispatch(editUserStart())
        try {
            const {meta, result} = await editUserRequest(id, user)
            dispatch(editUserSuccess())
            const message = meta.message || "Success";
            toast.success(message);
            push(`/users/${id}`)
        } catch (err) {
            toast.error("Something Wrong");
            dispatch(editUserFail())
        }
    }
}
