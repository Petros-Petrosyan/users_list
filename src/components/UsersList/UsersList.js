import React, {useEffect, useState} from 'react';
import classNames from 'classnames'

// components
import { Table } from 'antd';
import {Actions} from ".";
import {Avatar} from "../";

// classes
import classes from './Users.module.scss';
import 'antd/dist/antd.css';

// constants
import {
    USERS_LIST_TABLE_HEADER,
} from "../../constants";

function UsersList(props) {
    const {users=[], onDelete} = props
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const _tableData = createUsersTableData(users, onDelete)
        setTableData(_tableData)
    }, [users]);

    return (
        <div className={classes.table}>
            <Table
                rowClassName={(record, index) => getRowStyle(index) }
                scroll={scrollConfig}
                columns={USERS_LIST_TABLE_HEADER}
                dataSource={tableData}
                pagination={false}
            />
        </div>
    );
}

const getRowStyle = (index) => classNames(classes.row, {[classes.grayRow]: index % 2});
const scrollConfig = { y: 'calc(100vh - 100px)' }
const createUsersTableData = (users, onDelete) => {
    return users.map((user, i) => {
        const {
            id,
            _links: {avatar: {href}},
            first_name: firstName,
            last_name: lastName,
            phone,
            email,
            website,
        } = user;
        return ({
            key: id,
            firstName,
            lastName,
            phone,
            email,
            website,
            actions: <Actions
                user={user}
                onDelete={onDelete}
            />,
            avatar: <Avatar
                href={href}
                width={100}
                height={100}
            />,
        });
    });
}


export {UsersList}

