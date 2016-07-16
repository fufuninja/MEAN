var app = angular.module('SimpleTest', ['ui.router']);

app.controller('MainCtrl', [
'$scope',
function($scope){
	$scope.posts = [
	  {title: 'post 1', description: 'just something here', upvotes: 5},
	  {title: 'post 2', description: 'just something here', upvotes: 2},
	  {title: 'post 3', description: 'just something here', upvotes: 15},
	  {title: 'post 4', description: 'just something here', upvotes: 9},
	  {title: 'post 5', description: 'just something here', upvotes: 4}
	];

	$scope.addPost = function(){
		if(!$scope.title || $scope.title === "" || !$scope.description || !$scope.description === ""){
			return;
		};
		$scope.posts.push({title: $scope.title , description: $scope.description, upvotes: 0});
		$scope.title = '';
		$scope.description = '';
	};

	$scope.like = function(post){
		post.upvotes += 1;
	};
}
]);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainCtrl'
    });

  $urlRouterProvider.otherwise('home');
}]);


