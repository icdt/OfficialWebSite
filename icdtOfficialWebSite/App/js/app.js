
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

app.controller('HomeCtrl', ['$scope', 'Content', '$http', function ($scope, Content, $http) {


    $scope.vm = Content;
    $scope.vm.Message = {};

    $scope.vm.save = function () {
        debugger;
        $scope.account_form.submitted = true;

        if ($scope.account_form.$valid) {
            $scope.account_form.submitted = false;
            $http.post("/api/Message", $scope.vm.Message).success(function () {
                alert("敝公司,將安排專員為您服務");
                $scope.vm.Message = {};
            }).error(function () {

            });
        }

     
    };
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
            img: 'img/p1.jpg',
            title: 'Apple',
            content: ''
        }, {
            img: 'img/p2.jpg',
            title: '北京普林斯頓',
            content: ''
        }, {
            img: 'img/p3.jpg',
            title: '右昌醫院',
            content: ''
        }, {
            img: 'img/p4.jpg',
            title: '腦波遊戲App',
            content: ''
        },
        {
            img: 'img/p5.jpg',
            title: '婚禮櫥窗',
            content: ''
        }, {
            img: 'img/p6.jpg',
            title: '佳音牙醫',
            content: ''
        }, {
            img: 'img/p7.jpg',
            title: '信全航空',
            content: ''
        }, {
            img: 'img/p8.jpg',
            title: '集視',
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
