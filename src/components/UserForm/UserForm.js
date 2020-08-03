import React, {useState} from 'react';

// classes
import classes from './UsersForm.module.scss';

const getNormalizedInitialValues = (initialValues) => {
    const {
        first_name = '',
        last_name = '',
        gender = 'male',
        email = '',
        phone = '',
        website = '',
        status = 'active',
        address = '',
        dob = '',
    } = initialValues
    return {
        first_name,
        last_name,
        gender,
        email,
        phone,
        website,
        status,
        address,
        dob,
    }
}

const UserForm = (props) => {
    let isEdit = !!props.initialValues;
    let {initialValues = {}} = props;
    initialValues = getNormalizedInitialValues(initialValues)
    const [values, setValues] = useState(initialValues)

    const onSubmit = (e) => {
        const {onSubmit} = props
        e.preventDefault()
        onSubmit(values)
    }
    const onChangeFiled = (e) => {
        const {value, name} = e.target
        setValues({...values, [name]: value})
    }

    return (
        <form onSubmit={onSubmit} className={classes.form}>
            <h3>{isEdit ? 'Edit Contact' : 'Add Contact'} </h3>
            <label>
                <p>First Name</p>
                <input
                    name='first_name'
                    required
                    value={values.first_name}
                    onChange={onChangeFiled}
                />
            </label>
            <label>
                <p>Last Name</p>
                <input
                    name='last_name'
                    required
                    value={values.last_name}
                    onChange={onChangeFiled}
                />
            </label>
            <p>Gender</p>
            <div className={classes.inline_radio}>
                <label>
                     Male
                    <input
                        name='gender'
                        type='radio'
                        value='male'
                        checked={values.gender === 'male'}
                        onChange={onChangeFiled}
                    />
                </label>
                <label>
                    Female
                    <input
                        name='gender'
                        type='radio'
                        required
                        value='female'
                        checked={values.gender === 'female'}
                        onChange={onChangeFiled}
                    />
                </label>
            </div>
            <label>
                <p>Email</p>
                <input
                    name='email'
                    type='email'
                    required
                    value={values.email}
                    onChange={onChangeFiled}
                />
            </label>
            <label>
                <p>Phone</p>
                <input
                    name='phone'
                    required
                    value={values.phone}
                    onChange={onChangeFiled}
                />
            </label>
            <label>
                <p>Website</p>
                <input
                    name='website'
                    type='url'
                    required
                    value={values.website}
                    onChange={onChangeFiled}
                />
            </label>

            <p>Status</p>
            <div className={classes.inline_radio}>
                <label>
                    Active
                    <input
                        name='status'
                        type='radio'
                        value='active'
                        checked={values.status === 'active'}
                        onChange={onChangeFiled}
                    />
                </label>
                <label>
                    Inactive
                    <input
                        name='status'
                        type='radio'
                        required
                        value='inactive'
                        checked={values.status === 'inactive'}
                        onChange={onChangeFiled}
                    />
                </label>
            </div>
            <label>
                <p>Address</p>
                <input
                    name='address'
                    required
                    value={values.address}
                    onChange={onChangeFiled}
                />
            </label>
            <label>
                <p>Date of birth</p>
                <input
                    name='dob'
                    type='date'
                    required
                    value={values.dob}
                    onChange={onChangeFiled}
                />
            </label>

            <button type="submit">
                Submit
            </button>
        </form>
    )
}

export {UserForm}
