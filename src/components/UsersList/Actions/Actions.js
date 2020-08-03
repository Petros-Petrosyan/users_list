import React from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

// Classes
import classes from './Actions.module.scss';

// Icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faEdit,
    faExternalLinkAlt,
    faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

function Actions(props) {
    const {user: {id}, onDelete} = props
    const _onDelete = () => {
        onDelete(id)
    }
    return (
        <div className={classes.buttons}>
            <Link to={`/users/${id}`} className={classNames(classes.page, classes.link)}>
                <FontAwesomeIcon icon={faExternalLinkAlt}/>
            </Link>
            <Link to={`/users/${id}/edit`} className={classNames(classes.edit, classes.link)}>
                <FontAwesomeIcon icon={faEdit}/>
            </Link>
            <button onClick={_onDelete} className={classNames(classes.delete, classes.link)}>
                <FontAwesomeIcon icon={faTimesCircle}/>
            </button>
        </div>
    );
}

export {Actions};
