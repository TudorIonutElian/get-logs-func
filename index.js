const getLogs = require("./functions/getLogs").getLogs;

exports.handler = async (event) => {
    const logs = await getLogs();

    console.log(`Logs: ${logs}`);
  
    const response = {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(logs)
  };
  
  return response;
};