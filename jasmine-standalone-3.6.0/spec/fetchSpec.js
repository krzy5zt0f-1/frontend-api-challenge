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
