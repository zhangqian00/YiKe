// 往期内容
angular.module('myself')
	.controller('OlderCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
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