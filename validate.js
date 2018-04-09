const validate = values => {
    const errors = {};

    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username.length > 20) {
        errors.username = 'Username mus be less than or equal 20 characters';
    }

    if (!values.email) {
        errors.email = 'Required';
    }

    return errors;
};

export default validate;
