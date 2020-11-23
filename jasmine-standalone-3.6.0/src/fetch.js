async function fetchPeeps() {
  const url = 'https://chitter-backend-api-v2.herokuapp.com/peeps'
  await fetch(url)
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    console.log(data);
    displayPeepsInList(data);
  })
  .catch(function() {
    // catch any errors
  });
  }

  function displayPeepsInList( d ) {
  	for(let i = 0; i < d.length; i ++) {
      var li = document.createElement("li");
      var br = document.createElement("br");
      li.appendChild(document.createTextNode(d[i].user.handle));
      li.appendChild(document.createElement('br'));
      li.appendChild(document.createTextNode(d[i].body));
      li.appendChild(document.createElement('br'));
      li.appendChild(document.createTextNode(d[i].created_at.split("T", 1)));
      li.appendChild(document.createTextNode(', '+ d[i].created_at.split("T")[1].split(".", 1)));
      document.getElementById('peeps').appendChild(br);
  	  document.getElementById('peeps').appendChild(li)
  }
  }


  async function postUser(user, password) {
    const url = 'https://chitter-backend-api-v2.herokuapp.com/users'
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({user: {handle:user, password:password}}),
      headers: {'Content-Type': 'application/json'},
     })
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log('Success', data);
    })
    .catch(function(error) {

    });
    }

    async function postUserHelper() {
      const url = 'https://chitter-backend-api-v2.herokuapp.com/users'
      await fetch(url)
      .then(function(resp) { return resp.json() }) // Convert data to json
      .then(function(data) {
        console.log(data);
      })
      .catch(function() {
        // catch any errors
      });
      }

      async function logIn(user, password){
        const url = 'https://chitter-backend-api-v2.herokuapp.com/sessions';
        await fetch(url, {
          method: 'POST',
          body: JSON.stringify({session: {handle:user, password:password}}),
          headers: {'Content-Type': 'application/json'},
          crudentials: 'include',
          })
          .then(function(resp) { return resp.json() }) // Convert data to json
          .then(function(data) {
            console.log('Success', data);
          })
          .catch(function(error) {
            console.log("Invalid username or password");
          });
        }

        function saveSession(d, sessionKey ) {
          sessionKey = d.session_key;
          return sessionKey;
        }

        async function postPeep(user_id, session_key, body){
          const url = 'https://chitter-backend-api-v2.herokuapp.com/peeps';
          await fetch(url, {
            method: 'POST',
            body: JSON.stringify({peep: {user_id:user_id, body:body}}),
            headers: {'Authorization': `Token token=${session_key}`, 'Content-Type': 'application/json'},
            credentials: 'omit',
            })
            .then(function(resp) { return resp.json() }) // Convert data to json
            .then(function(data) {
              console.log('Success', data);
            })
            .catch(function(error) {
              console.log("Invalid username or password");
            });
          }

          async function fetchPeep(id) {
            const url = `https://chitter-backend-api-v2.herokuapp.com/peeps/${id}`
            await fetch(url)
            .then(function(resp) { return resp.json() }) // Convert data to json
            .then(function(data) {
              console.log(data);
            })
            .catch(function() {
              // catch any errors
            });
            }

            async function deletePeep(session_key, peep_id){
              const url = `https://chitter-backend-api-v2.herokuapp.com/peeps/${peep_id}`;
              await fetch(url, {
                method: 'DELETE',
                headers: {'Authorization': `Token token=${session_key}`},
                credentials: 'omit',
                })
                .then(function(resp) { return resp.json() }) // Convert data to json
                .then(function(data) {
                  console.log('Success', data);
                })
                .catch(function(error) {
                  console.log("Invalid username or password");
                });
              }

              async function likePeep(username, user_id, session_key, peep_id){
                const url = 'https://chitter-backend-api-v2.herokuapp.com/peeps/' + `${peep_id}` + '/likes/' + `${user_id}`;
                await fetch(url, {
                  method: 'PUT',
                  body: JSON.stringify({user: {id:user_id, handle:username}}),
                  headers: {'Authorization': `Token token=${session_key}`, 'Content-Type': 'application/json'},
                  credentials: 'omit',
                  })
                  .then(function(resp) { return resp.json() }) // Convert data to json
                  .then(function(data) {
                    console.log('Success', data);
                  })
                  .catch(function(error) {
                    console.log("Invalid username or password");
                  });
                }

                async function unlikePeep(username, user_id, session_key, peep_id){
                  const url = 'https://chitter-backend-api-v2.herokuapp.com/peeps/' + `${peep_id}` + '/likes/' + `${user_id}`;
                  await fetch(url, {
                    method: 'DELETE',
                    headers: {'Authorization': `Token token=${session_key}`, 'Content-Type': 'application/json'},
                    credentials: 'omit',
                    })
                    .then(function(resp) { return resp.json() }) // Convert data to json
                    .then(function(data) {
                      console.log('Success', data);
                    })
                    .catch(function(error) {
                      console.log("Invalid username or password");
                    });
                  }
