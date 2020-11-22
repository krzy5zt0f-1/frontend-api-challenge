describe("fetchPeeps", function(){

  it('fetches from the correct API', async function() {
    spyOn(console, 'log');
    spyOn(window, 'fetch').and.callThrough();
		await fetchPeeps();
		expect(window.fetch).toHaveBeenCalledWith('https://chitter-backend-api-v2.herokuapp.com/peeps');
    expect(console.log).toHaveBeenCalledWith(jasmine.any(Array));
	});
  it("returns an array of objects that hodl inof about peeps, users etc.", async function(){
    spyOn(console, 'log');
    await fetchPeeps();
    expect(console.log).toHaveBeenCalledWith(jasmine.any(Array));
  });

})
