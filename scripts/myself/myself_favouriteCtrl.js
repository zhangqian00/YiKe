// 我的喜欢
angular.module('myself')
	.controller('FavouriteCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
		// 标题
		$rootScope.title = '我的喜欢';
		// 导航索引
		$rootScope.key = 4;
		// 加载完成
		$rootScope.loaded = true;
	}]);