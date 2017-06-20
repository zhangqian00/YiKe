// 配置路由
angular.module('myself')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/today', {
			templateUrl: './views/today.html',
			controller: 'TodayCtrl'
		}).when('/older', {
			templateUrl: './views/older.html',
			controller: 'OlderCtrl'
		}).when('/author', {
			templateUrl: './views/author.html',
			controller: 'AuthorCtrl'
		}).when('/category', {
			templateUrl: './views/category.html',
			controller: 'CategoryCtrl'
		}).when('/favourite', {
			templateUrl: './views/favourite.html',
			controller: 'FavouriteCtrl'
		}).when('/settings', {
			templateUrl: './views/settings.html',
			controller: 'SettingCtrl'
		}).otherwise({
			redirectTo: '/today'
		})
	}]);