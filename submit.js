// Demo validate on Server
// Validate base response from server

import { SubmissionError } from 'redux-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const submit = values => {
    return sleep(1000).then(() => {
        if (!['thai', 'thaihv'].includes(values.username)) {
            throw new SubmissionError({
                username: 'User does not exist',
                _error: 'Login failed',
            });
        } else if (values.email !== 'thaihv22@gmail.com') {
            throw new SubmissionError({
                email: 'Email does not exist',
                _error: 'Login failed',
            });
        } else {
            alert('Validation success. Value = ' + JSON.stringify(values));
        }
    });
};

export default submit;
