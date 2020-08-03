import React from "react";
import {Link} from 'react-router-dom'
import {connect} from "react-redux";

// components
import {
    Spinner,
    UsersList,
    Pagination,
} from '../../components'

// actions
import {
    getUsers,
    deleteUser,
} from '../../store/users/actions';

// icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

// classes
import classes from './Users.module.scss';


class Users extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {match: {params: {page}}} = this.props
        this.getUsers(page)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.page !== this.props.match.params.page) {
            this.getUsers(this.props.match.params.page)
        }
    }

    onChangePage = (page) => {
        this.props.history.push(`/page/${page}`)
    }

    getUsers = (page) => {
        const {getUsers} = this.props
        getUsers(page)
    }

    onDelete = (id) => {
        const {deleteUser} = this.props;
        deleteUser(id)
    }

    render() {
        const {usersList, userDelete} = this.props
        const {users, loading, exists, meta} = usersList
        const {loading: deleteLoading} = userDelete
        if (loading) {
            return <Spinner size={100} />
        }
        if (exists) {
            const {
                currentPage,
                pageCount,
            } = meta
            return (
                <fieldset disabled={deleteLoading}>
                    <UsersList
                        users={users}
                        onDelete={this.onDelete}
                    />
                    <Pagination
                        currentPage={currentPage}
                        pageCount={pageCount}
                        onClick={this.onChangePage}
                    />
                    <Link to='/users/new'>
                        <div className={classes.bottom}><FontAwesomeIcon icon={faPlus}/></div>
                    </Link>
                </fieldset>
            );
        }

        return null
    }
};

const mapStateToProps = (state) => {
    return {
        usersList: state.users.usersList,
        userDelete: state.users.userDelete,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: (page) => dispatch(getUsers(page)),
        deleteUser: (id) => dispatch(deleteUser(id)),
    }
};

const UsersWrapper = connect(mapStateToProps, mapDispatchToProps)(Users);
export {UsersWrapper as Users}