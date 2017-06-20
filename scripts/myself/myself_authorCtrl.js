// 热门作者
angular.module('myself')
	.controller('AuthorCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
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