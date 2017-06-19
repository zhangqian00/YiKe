var Yike = angular.module('Yike', ['ngRoute']);

// 配置路由
Yike.config(['$routeProvider', function($routeProvider) {
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

// 运行模块
Yike.run(['$rootScope', function($rootScope) {

	// 收起
	$rootScope.collapsed = false;
	// 加载未完成
	$rootScope.loaded = false;
	// 标题
	$rootScope.title = '今日一刻';
	// 导航索引
	$rootScope.key = 0;

	$rootScope.toggle = function() {

		$rootScope.collapsed = !$rootScope.collapsed;

		// 所有导航
		var navs = document.querySelectorAll('.navs dd');

		if ($rootScope.collapsed) {
			for (var i = 0; i < navs.length; i++) {
				navs[i].style.transform = 'translate(0)';
				navs[i].style.transitionDuration = (i + 1) * 0.15 + 's';
				navs[i].style.transitionDelay = '0.2s';
			}
		} else {
			for (var i = navs.length - 1; i >= 0; i--) {
				navs[i].style.transform = 'translate(-100%)';
				navs[i].style.transitionDuration = (navs.length - i) * 0.15 + 's';
				navs[i].style.transitionDelay = '';
			}
		}
	};
}]);

// 导航控制器
Yike.controller('NavsCtrl', ['$scope', function($scope) {
	$scope.navs = [{
		text: '今日一刻',
		link: '#!/today',
		icon: 'icon-home'
	}, {
		text: '往期内容',
		link: '#!/older',
		icon: 'icon-file-empty'
	}, {
		text: '热门作者',
		link: '#!/author',
		icon: 'icon-pencil'
	}, {
		text: '栏目浏览',
		link: '#!/category',
		icon: 'icon-menu'
	}, {
		text: '我的喜欢',
		link: '#!/favourite',
		icon: 'icon-heart'
	}, {
		text: '设置',
		link: '#!/settings',
		icon: 'icon-cog'
	}];
}]);

// 今日一刻
Yike.controller('TodayCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
	// 加载未完成
	$rootScope.loaded = false;
	// 标题
	$rootScope.title = '今日一刻';
	// 导航索引
	$rootScope.key = 0;

	$http({
		// 访问同域接口，由同域接口代理访问数据
		url: './api/today.php',
		method: 'get'
	}).then(function(res) {
		// console.log(res.data);
		$scope.posts = res.data.posts;
		$scope.date = res.data.date;

		// 加载完成
		$rootScope.loaded = true;
	});
}]);

// 往期内容
Yike.controller('OlderCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
	// 加载未完成
	$rootScope.loaded = false;
	// 标题
	$rootScope.title = '往期内容';
	// 导航索引
	$rootScope.key = 1;

	$http({
		// 访问同域接口，由同域接口代理访问数据
		url : './api/older.php',
		method : 'get',
		params : {day : -32}
	}).then(function(res){
		// console.log(res.data);
		$scope.posts = res.data.posts;
		$scope.date = res.data.date;

		// 加载完成
		$rootScope.loaded = true;
	});
}]);

// 热门作者
Yike.controller('AuthorCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
	// 加载未完成
	$rootScope.loaded = false;
	// 标题
	$rootScope.title = '热门作者';
	// 导航索引
	$rootScope.key = 2;

	// 推荐作者
	$http({
		url : './api/author_rec.php',
		method : 'get'
	}).then(function(res){
		// console.log(res);
		$scope.authors_rec = res.data.authors;
		// 加载完成
		$rootScope.loaded = true;
	});

	// 热门作者
	$http({
		url : './api/author_hot.php',
		method : 'get'
	}).then(function(res){
		// console.log(res);
		$scope.authors_hot = res.data.authors;
		// 加载完成
		$rootScope.loaded = true;
	});
}]);

// 栏目浏览
Yike.controller('CategoryCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
	// 加载未完成
	$rootScope.loaded = false;
	// 标题
	$rootScope.title = '栏目浏览';
	// 导航索引
	$rootScope.key = 3;

	$http({
		url : './api/category.php',
		method : 'get'
	}).then(function(res){
		// console.log(res.data);
		$scope.columns = res.data.columns;

		// 加载完成
		$rootScope.loaded = true;
	});
}]);

// 我的喜欢
Yike.controller('FavouriteCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
	// 标题
	$rootScope.title = '我的喜欢';
	// 导航索引
	$rootScope.key = 4;
	// 加载完成
	$rootScope.loaded = true;
}]);

// 设置
Yike.controller('SettingCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
	// 标题
	$rootScope.title = '设置';
	// 导航索引
	$rootScope.key = 5;
	// 加载完成
	$rootScope.loaded = true;
}]);