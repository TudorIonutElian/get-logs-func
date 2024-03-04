import { getLogs } from "./functions/getLogs";

exports.handler = async (event) => {
    const logs = getLogs();
  
    const response = {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(logs)
  };
  
  return response;
};