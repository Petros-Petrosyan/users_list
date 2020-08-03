import React from "react";
import {connect} from "react-redux";

// components
import {
    UserForm,
} from '../../components'

// actions
import {
    createUser,
} from '../../store/users/actions'


class CreateUser extends React.Component {
    onSubmit = (user) => {
        const {createUser, history: {push}} = this.props
        createUser(user, push)
    }
    render() {
        const {userCreate: {loading}} = this.props
        return (
            <fieldset disabled={loading}>
                <UserForm
                    onSubmit={this.onSubmit}
                />
            </fieldset>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        userCreate: state.users.userCreate
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (user, push) => dispatch(createUser(user, push))
    }
};

const CreateUserWrapper = connect(mapStateToProps, mapDispatchToProps)(CreateUser);
export {CreateUserWrapper as CreateUser}