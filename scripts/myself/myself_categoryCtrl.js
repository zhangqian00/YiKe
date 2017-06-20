// 栏目浏览
angular.module('myself')
	.controller('CategoryCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
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