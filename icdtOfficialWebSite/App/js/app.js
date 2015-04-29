
var app = angular.module('demo', ['ui.router', 'restangular', 'ngToast']);

app.run(['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {

            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;

        }
]);


app.config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
function ($stateProvider, $urlRouterProvider, $httpProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
          url: '/',
          templateUrl: 'home.html',
          controller: 'HomeCtrl'
      })
    ;

}]);

app.controller('HomeCtrl', ['$scope', 'Content', function($scope, Content){


    $scope.vm = Content;


}]);


app.factory('Content', function () {

    return {

        logo: 'img/logo.png',
        service: [{
            img: '',
            title:'App開發',
            content: ''
        }, {
            img: '',
            title: '系統整合',
            content: ''
        }, {
            img: '',
            title: '',
            content: ''
        }, {
            img: '',
            title: '',
            content: ''
        }]










    };









});