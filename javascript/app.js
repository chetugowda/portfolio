var app = angular.module('StarterApp', ['ngMaterial', 'ngRoute']);


app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'mainController'
        })
        .when('/skills', {
            templateUrl: 'pages/skills.html',
            controller: 'aboutController'
        })
        .when('/project', {
            templateUrl: 'pages/project.html',
            controller: 'projectController'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.directive('mySkill', function(){
    return {
        restrict: 'E',
        templateUrl: 'template/myskill.html',
        controller: function($scope){
            $scope.skills = [
                            {name:"Programming Language",value:"Java, C#"},
                            {name:"Front-End Technology",value:"HTML 4/5, EJS, JavaScript, Javascript MVC, AJAX, CSS, JQuery, Angular, Backbone, JSP"},
                            {name:"Web Services",value:"SOAP, Rest"},
                            {name:"Application/Web Servers",value:"Apache Tomcat 6.X, 5.X; IBM WebSphere 5.X, 6.0; WebLogic 7.x, 8.x, 9.0; JBoss;"},
                             {name:"Databases",value:"MySQL 5.X; SQL Server 2005, 2008; Oracle 8i, 9i, 10g;"},
                             {name:"IDE Tools",value:"Eclipse, Spring Tools Suite, NetBeans"},
                             {name:"Unit Testing Tools",value:"Junit"},
                             {name:"Version Control",value:"CVS, GitHub,  SVN"},
                             {name:"Operating Systems",value:"Windows, UNIX, LINUX, Sun Solaris"},
                             {name:"Build Tools",value:"Ant, Maven"}
                            ];
        }
    }
});

app.controller('AppCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };

}]);


// create the controller and inject Angular's $scope
app.controller('mainController', ['$scope',function ($scope) {
    // create a message to display in our view
    $scope.message = 'I am passionate technology learner with 5-6 years of experince in IT. I like to contribute my skills in team based environment and have experience in development and testing phase of SDLC. I am involved in Design, Development of User Interfaces for Various Internet/Intranet applications, generated prototypes using HTML, CSS, basic java script, HTML5 and CSS3 for responsive and non-responsive websites.';

    $scope.aboutme = 'My intersts include Spirituality, Watching movies, Trekking, Learning new technologies.';
}]);

app.controller('aboutController', ['$scope',function ($scope) {
    $scope.message = 'Look! I am an about page.';
}]);

app.controller('projectController', ['$scope', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
}]);
