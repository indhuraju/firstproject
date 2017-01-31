'use strict';

module.exports = function($scope, $http) {
  $scope.booking = 'booking';

  var refresh = function () {
        $http.get('/movie/movie').success(function (response) {
            console.log('READ IS SUCCESSFUL');
            $scope.contactlist = response;
            $scope.contact = "";
        });
    };

    refresh();

    $scope.addMovie = function () {
        console.log($scope.contact);
        $http.post('/movie/movie', $scope.contact).success(function (response) {
            console.log(response);
            console.log("CREATE IS SUCCESSFUL");
            refresh();
        });
    };

    $scope.removeMovie = function (id) {
        console.log(id);
        $http.delete('/movie/movie/' + id._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editMovie = function (id) {
         $http.get('/movie/movie/' + id._id).success(function (response) {
            $scope.contact = response[0];
        });
    };

    $scope.updateMovie = function () {
        console.log("REACHED UPDATE");
        console.log($scope.contact._id);
        $http.put('/movie/movie/' + $scope.contact._id, $scope.contact).success(function (response) {
            console.log(response);
            refresh();
        })
    }
};
