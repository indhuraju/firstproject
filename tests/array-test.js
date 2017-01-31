
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })
  })
})

describe('HomeController', function(){
	beforeEach(module('movieApp'));

	describe('getFullName()', function(){

		var scope, testCont;

        beforeEach(inject(function($rootScope, $controller) {
            scope = $rootScope.$new();
            myController = $controller('HomeController', {$scope: scope});
        }));

		it('should handle names correctly', function(){
			
			myController.firstName = 'George';
			myController.lastName = 'Harrison';

			myController.getFullName().should.equal('George Harrison');
		});

		it('$scope testing', function(){
			
			scope.home.should.equal('home1');
		});
	});
});	