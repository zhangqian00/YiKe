// 运行模块
angular.module('myself')
	.run(['$rootScope', function($rootScope) {

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