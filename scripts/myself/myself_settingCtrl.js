// 设置
angular.module('myself')
	.controller('SettingCtrl',['$scope','$http','$rootScope',function($scope,$http,$rootScope){
		// 标题
		$rootScope.title = '设置';
		// 导航索引
		$rootScope.key = 5;
		// 加载完成
		$rootScope.loaded = true;
	}]);