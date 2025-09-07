/**
 * Simple greeting function
 * @param {string} name - The name to greet
 * @returns {string} A greeting message
 */
function greet(name = 'World') {
  return `Hellooooo, ${name}!`;
}

module.exports = {
  greet
};