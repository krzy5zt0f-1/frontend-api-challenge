async function fetchPeeps() {
  const url = 'https://chitter-backend-api-v2.herokuapp.com/peeps'
  await fetch(url)
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    console.log(data);
    displayPeeps(data);
  })
  .catch(function() {
    // catch any errors
  });
  }

  function displayPeeps( d ) {
  	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
  	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);

  	document.getElementById('description').innerHTML = d.weather[0].description;
  	document.getElementById('temp').innerHTML = celcius + '&deg;';
  	document.getElementById('location').innerHTML = d.name;
  }
