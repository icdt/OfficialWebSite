
var app = angular.module('icdt', ['ui.router']);

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
        rightBackImg: 'img/menuRightBack.jpg',
        menu:{
            
        },

        logo:'img/icdtlogo.png',
        service: [{
            img: 'img/websitelogo.png',
            title:'網站開發',
            content: ''
        }, {
            img: 'img/systemlogo.png',
            title: '系統整合',
            content: ''
        }, {
            img: 'img/applogo.png',
            title: 'APP開發',
            content: ''
        }, {
            img: 'img/planlogo.png',
            title: '行銷企劃',
            content: ''
        }]

    };

});