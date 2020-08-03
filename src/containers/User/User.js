import React from "react";
import {connect} from "react-redux";

// components
import {
    Spinner,
    UserView,
} from '../../components'

// actions
import {
    getUser,
} from '../../store/users/actions'


class User extends React.Component {
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


    render() {
        const {singleUser} = this.props
        const {user, loading, exists} = singleUser
        if (loading) {
            return <Spinner size={100} />
        }
        if (exists) {
            return (
                <div>
                    <UserView user={user}/>
                </div>
            );
        }

        return null
    }
};

const mapStateToProps = (state) => {
    return {
        singleUser: state.users.singleUser,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (id) => dispatch(getUser(id))
    }
};

const UserWrapper = connect(mapStateToProps, mapDispatchToProps)(User);
export {UserWrapper as User}