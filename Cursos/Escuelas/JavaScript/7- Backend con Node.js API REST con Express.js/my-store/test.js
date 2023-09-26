(async () => {
  const response = await fetch('https://coderbyte.com/api/challenges/json/rest-get-simple');
  const data = await response.json();
  console.log(JSON.stringify(data, null, 4));

  
})();