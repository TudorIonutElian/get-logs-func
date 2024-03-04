const handler = require('./index').handler;

handler({}).then((response) => {
    console.log(response);
});