'use strict';

module.exports = function($scope, TodoService) {
  $scope.home = 'home';
  var self = this;

				self.firstName = '';
				self.lastName = '';

				self.getFullName = function(){
					return self.firstName + ' ' + self.lastName;
				};

				return self;
};
