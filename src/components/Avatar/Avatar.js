import React from 'react';

// classes
import classes from './Avatar.module.scss';

const Avatar = (props) => {
    const {href, width, height, alt='Avatar'} = props;
    return (
        <img
             src={href}
             alt={alt}
             width={width}
             height={height}
             className={classes.avatar}
        />
    )
};

export {Avatar};
