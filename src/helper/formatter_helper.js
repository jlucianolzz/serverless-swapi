module.exports.formatResponse = (body, statusCode = 200) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(body),
});

module.exports.formatError = (error) => ({
  statusCode: error.statusCode,
  headers: {
    "Content-Type": "text/plain",
  },
  body: error.code + ": " + error.message,
});
