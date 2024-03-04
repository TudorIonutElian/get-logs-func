
const { connectToDatabase } = require('./connectToDatabase');

/**
 * @method getLogs
 * @description Fetches all logs from the database
 * @returns {Promise} Returns a promise that resolves with the results of the query
 */
async function getLogs() {
    const connection = connectToDatabase();
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM \`logs\`", (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results);
            }
        });
    });
}

module.exports = { getLogs };