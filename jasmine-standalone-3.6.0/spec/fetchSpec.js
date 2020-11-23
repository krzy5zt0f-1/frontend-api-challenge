describe("fetchPeeps", function(){

  it('fetches from the correct API', async function() {
    spyOn(window, 'fetch').and.callThrough();
		await fetchPeeps();
		expect(window.fetch).toHaveBeenCalledWith('https://chitter-backend-api-v2.herokuapp.com/peeps');
	});
  it("returns an array of objects that hold peeps", async function(){
    spyOn(console, 'log');
    await fetchPeeps();
    expect(console.log).toHaveBeenCalledWith(jasmine.any(Array));
  });

})

describe("postUserHelper", function(){
  it('fetches from the correct API', async function() {
    spyOn(window, 'fetch').and.callThrough();
		await postUserHelper();
		expect(window.fetch).toHaveBeenCalledWith('https://chitter-backend-api-v2.herokuapp.com/users');
	});

  it("returns an array of objects that hold info about users", async function(){
    spyOn(console, 'log');
    await postUserHelper();
    expect(console.log).toHaveBeenCalledWith(jasmine.any(Array));
  });

})

describe("logIn", function(){

  it('fetches from the correct API', async function() {
    spyOn(window, 'fetch').and.callThrough();
		await logIn("test_kris", "123");
		expect(window.fetch).toHaveBeenCalledWith('https://chitter-backend-api-v2.herokuapp.com/sessions', jasmine.any(Object));
	});
  it("returns sucess and session when correct crudentials used", async function(){
    spyOn(console, 'log');
    await logIn("test_kris", "123");
    expect(console.log).toHaveBeenCalledWith('Success', jasmine.any(Object));
  });

  it("returns error message when incorrect crudentials used", async function(){
    spyOn(console, 'log');
    await logIn("test_kris", "12343");
    expect(console.log).toHaveBeenCalledWith('Success', Object({ errors: Object({ password: 'Invalid username or password' }) }));
  });

})

describe("postPeep", function(){

  it('fetches from the correct API', async function() {
    spyOn(window, 'fetch').and.callThrough();
		await postPeep(1, "incorrect_key", "body");
		expect(window.fetch).toHaveBeenCalledWith('https://chitter-backend-api-v2.herokuapp.com/peeps', jasmine.any(Object));
	});


})
