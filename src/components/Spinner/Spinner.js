import React from 'react';

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

// Classes
import classes from './Spinner.module.scss';

const Spinner = ({size}) => {
    const antIcon = <LoadingOutlined style={{ fontSize: size }} spin />;

    return (
        <div className={classes.center}>
            <Spin indicator={antIcon} />
        </div>
    );
};

export {Spinner};
