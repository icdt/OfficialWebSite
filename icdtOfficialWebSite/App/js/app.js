
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

        logo: 'img/icdtlogo.png',
        customerwordlogo: 'img/customerwordlogo.png',
        contactuslogo: 'img/contactuslogo.png',
        service: [{
            img: 'img/websitelogo.png',
            title: '系統設計開發',
            content: ''
        }, {
            img: 'img/systemlogo.png',
            title: '系統整合',
            content: ''
        }, {
            img: 'img/applogo.png',
            title: '技術服務',
            content: ''
        }, {
            img: 'img/planlogo.png',
            title: '產品代理',
            content: ''
        }],
        project: [{
            img: 'img/p1.png',
            title: 'LVGB2CWebSite',
            content: ''
        }, {
            img: 'img/p2.png',
            title: 'LVGB2BWebSite',
            content: ''
        }, {
            img: 'img/p3.png',
            title: 'LVGPOS',
            content: ''
        }, {
            img: 'img/p4.png',
            title: '右昌醫院',
            content: ''
        },
        {
            img: 'img/p5.png',
            title: '佳音牙醫',
            content: ''
        }, {
            img: 'img/p6.png',
            title: '濱海SEO',
            content: ''
        }, {
            img: 'img/p7.png',
            title: '腦波遊戲APP',
            content: ''
        }, {
            img: 'img/p8.png',
            title: '熊熊超外送',
            content: ''
        
        }]
       

    };


});




app.directive('ngSideMenu', function () {
    return {
        restrict: 'AE',
        link: function (scope, elem, attrs) {

            $(elem).click(function () {



                var rrleft = $(elem).css('left');
                //console.log(rrleft);

                if (rrleft == "0px") {

                    $(elem).animate({
                        left: '-=155',
                        top: ''
                    }, 1000, function () {
                        // Animation complete.
                    });


                } else {

                    $(elem).animate({
                        left: '+=155',
                        top: ''
                    }, 1000, function () {
                        // Animation complete.
                    });

                }
                




               
            });

        }
    };
});
