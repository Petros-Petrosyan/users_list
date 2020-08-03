import React from 'react';
import classNames from 'classnames';

// Classes
import classes from './Pagination.module.scss';

// Icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";

const Pagination = (props) => {
    const {
        currentPage=1,
        pageCount=0,
        disabled=false,
        onClick
    } = props

    const toRightButton = (currentPage < pageCount) ? (
            <div
                onClick={() => onClick(currentPage + 1)}
                className={classNames(classes.right, classes.general)}
            >
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        ) : null

    const toLeftButton = (currentPage > 1) ? (
            <div
                onClick={() => onClick(currentPage - 1)}
                className={classNames(classes.left, classes.general)}
            >
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
        ) : null

    return (
        <fieldset disabled={disabled}>
            <div className={classNames(classes.top, classes.general)}>{currentPage}</div>
            { toRightButton }
            { toLeftButton }
        </fieldset>
    )
};

export {Pagination}
