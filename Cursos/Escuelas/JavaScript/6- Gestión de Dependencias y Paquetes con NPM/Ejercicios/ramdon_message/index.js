const messages = ["Gerardo", "Ariel", "Ferreyra", "Laura", "Felipe"];

const ramdonMessage = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(message);
};

module.exports = {ramdonMessage};