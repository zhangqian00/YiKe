// 今日一刻
angular.module('myself')
	.controller('TodayCtrl', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
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