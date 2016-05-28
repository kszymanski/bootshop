app.service("Users", function ($rootScope) {
	var users = angular.fromJson(localStorage.getItem("users") || "{}");

	this.addUser = function (user) {
		if (!users[user.id]) {
			users[user.id] = {
				user: user
			};
		}
		localStorage.setItem("users", angular.toJson(users));
		$rootScope.$broadcast("userRegistered");
	};
	
	this.updateUser = function (user) {
		if (!users[user.id]) {
			return false;
		}
		
		users[user.id].user.email = user.email;
		users[user.id].user.address = user.addresss;
		
		localStorage.setItem("users", angular.toJson(users));
		$rootScope.user =  users[user.id].user;
		$rootScope.$broadcast("userUpdated");
	};

	this.login = function (user) {
		if (!users[user.id]) {
			return false;
		}
		if (user.pass === users[user.id].user.password) {
			$rootScope.user =  users[user.id].user;
			$rootScope.$broadcast("userLogged");
			return true;
		}
		return false;
	};

});
