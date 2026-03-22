// Reusable response helpers

function errorResponse(message) {
  return { success: false, message };
}

function successResponse(data) {
  return { success: true, data };
}

module.exports = { errorResponse, successResponse };