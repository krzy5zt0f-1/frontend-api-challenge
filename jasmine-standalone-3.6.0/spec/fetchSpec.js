describe("fetchPeeps", function(){
  var promise;
  beforeEach(function(){
    spyOn(window.console, 'log');
    spyOn(window, 'fetch').and.callThrough();
		promise = fetchPeeps();
  });


  it('fetches from the correct API', function() {
		expect(window.fetch).toHaveBeenCalledWith('https://chitter-backend-api-v2.herokuapp.com/peeps');
	});

  it('returns a promise', function() {
		expect(window.console.log).toHaveBeenCalled();
	});

})
