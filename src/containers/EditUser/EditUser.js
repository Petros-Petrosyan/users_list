import React from "react";
import {connect} from "react-redux";

// components
import {
    Spinner,
    UserForm,
} from '../../components'

// actions
import {
    editUser,
    getUser,
} from '../../store/users/actions'


class EditUser extends React.Component {
    componentDidMount() {
        const {match: {params: {id}}} = this.props
        this.getUser(id)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.getUser(this.props.match.params.id)
        }
    }
    getUser = (id) => {
        const {getUser} = this.props
        getUser(id)
    }

    onSubmit = (user) => {
        const {editUser, history: {push}, match: {params: {id}}} = this.props
        editUser(id, user, push)
    }

    render() {
        const {singleUser, userEdit} = this.props
        const {user, loading, exists} = singleUser
        const {loading: editLoading} = userEdit

        if (loading) {
            return <Spinner size={100} />
        }
        if (exists) {
            return (
                <fieldset disabled={editLoading}>
                    <UserForm
                        onSubmit={this.onSubmit}
                        initialValues={user}
                    />
                </fieldset>
            );
        }

        return null
    }
};

const mapStateToProps = (state) => {
    return {
        singleUser: state.users.singleUser,
        userEdit: state.users.userEdit
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        editUser: (id, user, push) => dispatch(editUser(id, user, push)),
        getUser: (id) => dispatch(getUser(id)),
    }
};

const EditUserWrapper = connect(mapStateToProps, mapDispatchToProps)(EditUser);
export {EditUserWrapper as EditUser}
