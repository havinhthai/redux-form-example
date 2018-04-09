const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncValidate = values => {
    return sleep(1000).then(() => {
        if (!['thai', 'thaihv'].includes(values.username)) {
            throw {
                username: 'User does not exist'
            };
        }
    });
}

export default asyncValidate;
