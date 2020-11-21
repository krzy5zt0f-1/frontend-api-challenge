function fetchPeeps() {
  const url = 'https://chitter-backend-api-v2.herokuapp.com/peeps'
  fetch(url)
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    console.log(data);
  })
  .catch(function() {
    // catch any errors
  });
  }
