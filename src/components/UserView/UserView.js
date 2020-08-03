import React from 'react';
import {Avatar} from '..';

// classes
import classes from './UsersView.module.scss';

const UserView = (props) => {
    const {user} = props;
    const {
        first_name,
        last_name,
        gender,
        phone,
        website,
        status,
        email,
    } = user
    return (
        <div className={classes.card}>
            <Avatar href={user._links.avatar.href} height={250} width={250}/>
            <div>
                <h2>{first_name} {last_name}</h2>
                <div>
                    <p>GENDER</p>
                    <span>{gender}</span>
                </div>
                <div>
                    <p>PHONE</p>
                    <span>{phone}</span>
                </div>
                <div>
                    <p>WEBSITE</p>
                    <span>{website}</span>
                </div>
                <div>
                    <p>STATUS</p>
                    <span>{status}</span>
                </div>
                <div>
                    <p>EMAIL</p>
                    <span>{email}</span>
                </div>
            </div>
        </div>
    )
};

export {UserView};
