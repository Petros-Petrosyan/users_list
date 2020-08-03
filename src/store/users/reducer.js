import update from 'react-addons-update';

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


const initialState = {
    usersList: {
        users: null,
        meta: null,
        page: '',
        loading: false,
        exists: false,
    },
    userCreate: {
        loading: false,
    },
    singleUser: {
        id: '',
        user: null,
        loading: false,
        exist: false,
    },
    userEdit: {
        user: null,
        loading: false,
    },
    userDelete: {
        id: '',
        loading: false,
    },
};

const getUsersStart = (state, payload) => {
    const {page} = payload
    return update(state, {
        usersList: {$merge: {
            page,
            loading: true,
            exists: false,
        }}
    })
};
const getUsersSuccess = (state, payload) => {
    const {users, meta} = payload
    return update(state, {
        usersList: {$merge: {
                users,
                meta,
                loading: false,
                exists: true,
            }}
    })
};
const getUsersFail = (state) => {
    return update(state, {
        usersList: {$merge: {
                page: '',
                loading: false,
                exists: false,
            }}
    })
};

const getUserStart = (state, payload) => {
    const {id} = payload
    return update(state, {
        singleUser: {$merge: {
                id,
                loading: true,
                exists: false,
            }}
    })
};
const getUserSuccess = (state, payload) => {
    const {user} = payload
    return update(state, {
        singleUser: {$merge: {
                user,
                loading: false,
                exists: true,
            }}
    })
};
const getUserFail = (state) => {
    return update(state, {
        singleUser: {$merge: {
                id: '',
                loading: false,
                exists: false,
            }}
    })
};

const createUserStart = (state) => {
    return update(state, {
        userCreate: {$merge: {
                loading: true
            }}
    })
}
const createUserSuccess = (state) => {
    return update(state, {
        userCreate: {$merge: {
            loading: false
        }}
    })
}
const createUserFail = (state) => {
    return update(state, {
        userCreate: {$merge: {
                loading: false
        }}
    })
}

const editUserStart = (state) => {
    return update(state, {
        userEdit: {$merge: {
                loading: true
        }}
    })
}
const editUserSuccess = (state) => {
    return update(state, {
        userEdit: {$merge: {
                loading: false
        }},
    })
}
const editUserFail = (state) => {
    return update(state, {
        userEdit: {$merge: {
                loading: false
            }}
    })
}

const deleteUserStart = (state, payload) => {
    const {id} = payload;
    return update(state, {
        userDelete: {$merge: {
                id,
                loading: true
            }}
    })
}
const deleteUserSuccess = (state, payload) => {
    const {id} = payload;
    return update(state, {
        userDelete: {$merge: {
                loading: false,
                id: '',
        }},
        usersList: {
            users: {$apply: (users) => users.filter(user => user.id !== id )}
        }
    })
}
const deleteUserFail = (state) => {
    return update(state, {
        userDelete: {$merge: {
                loading: false,
                id: '',
        }}
    })
}

const resultReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS_START: return getUsersStart(state, action.payload);
        case GET_USERS_SUCCESS: return getUsersSuccess(state, action.payload);
        case GET_USERS_FAIL: return getUsersFail(state, action.payload);

        case GET_USER_START: return getUserStart(state, action.payload);
        case GET_USER_SUCCESS: return getUserSuccess(state, action.payload);
        case GET_USER_FAIL: return getUserFail(state, action.payload);

        case CREATE_USER_START: return createUserStart(state, action.payload);
        case CREATE_USER_SUCCESS: return createUserSuccess(state, action.payload);
        case CREATE_USER_FAIL: return createUserFail(state, action.payload);

        case EDIT_USER_START: return editUserStart(state, action.payload);
        case EDIT_USER_SUCCESS: return editUserSuccess(state, action.payload);
        case EDIT_USER_FAIL: return editUserFail(state, action.payload);

        case DELETE_USER_START: return deleteUserStart(state, action.payload);
        case DELETE_USER_SUCCESS: return deleteUserSuccess(state, action.payload);
        case DELETE_USER_FAIL: return deleteUserFail(state, action.payload);

        default: return state;
    }
};

export default resultReducer;