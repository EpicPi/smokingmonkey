webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Models/group.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Group; });
var Group = (function () {
    function Group(name, frequency, duration, money, id) {
        this.name = name;
        this.frequency = frequency;
        this.duration = duration;
        this.money = money;
        this.userStats = new Array();
        this.id = '';
    }
    return Group;
}());

//# sourceMappingURL=group.js.map

/***/ }),

/***/ "../../../../../src/app/Models/user.stat.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserStat; });
var UserStat = (function () {
    function UserStat(user, penalties, money) {
        this.user = user;
        this.penalties = penalties;
        this.money = money;
    }
    ;
    return UserStat;
}());

//# sourceMappingURL=user.stat.js.map

/***/ }),

/***/ "../../../../../src/app/Models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/Services/firebase.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirebaseService = (function () {
    function FirebaseService(http) {
        this.http = http;
        this.url = 'https://smokingmoney-45496.firebaseio.com/';
    }
    FirebaseService.prototype.storeUsers = function () {
        // this.http.put('https://smokingmoney-45496.firebaseio.com/users.json', this.userService.returnUsers());
    };
    FirebaseService.prototype.storeGroups = function () {
        // const body = JSON.stringify(this.groupService.groups[0]);
        // return this.http.post(this.url + 'groups/.json', body);
    };
    FirebaseService.prototype.addUser = function (usr) {
        return this.http.post(this.url + 'users/.json', JSON.stringify(usr));
    };
    FirebaseService.prototype.addGroup = function (group) {
        return this.http.post(this.url + 'groups/.json', JSON.stringify(group));
    };
    FirebaseService.prototype.setGroup = function (group) {
        if (group.id) {
            return this.http.put(this.url + 'groups/' + group.id + '.json', JSON.stringify(group));
        }
        return null;
    };
    FirebaseService.prototype.getGroups = function () {
        return this.http.get(this.url + 'groups/.json').map(function (result) { return result.json(); });
    };
    return FirebaseService;
}());
FirebaseService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FirebaseService);

var _a;
//# sourceMappingURL=firebase.service.js.map

/***/ }),

/***/ "../../../../../src/app/Services/group.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Models_user_stat__ = __webpack_require__("../../../../../src/app/Models/user.stat.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_service__ = __webpack_require__("../../../../../src/app/Services/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupService = (function () {
    function GroupService(fb) {
        this.fb = fb;
        this.changed = false;
    }
    GroupService.prototype.addUser = function (user, group) {
        group.userStats.push(new __WEBPACK_IMPORTED_MODULE_1__Models_user_stat__["a" /* UserStat */](user, 0, group.money));
        this.setGroup(group);
    };
    GroupService.prototype.getGroups = function (result) {
        var groups = new Array();
        for (var k in result) {
            groups.push(result[k]);
        }
        return groups;
    };
    GroupService.prototype.setGroup = function (group) {
        var _this = this;
        this.fb.setGroup(group).subscribe(function (result) {
            console.log(result);
            _this.changed = true;
        });
    };
    GroupService.prototype.addGroup = function (group) {
        var _this = this;
        this.fb.addGroup(group).subscribe(function (result) {
            group.id = result.json()['name'];
            _this.setGroup(group);
            _this.changed = true;
        });
    };
    return GroupService;
}());
GroupService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__firebase_service__["a" /* FirebaseService */]) === "function" && _a || Object])
], GroupService);

var _a;
//# sourceMappingURL=group.service.js.map

/***/ }),

/***/ "../../../../../src/app/Services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginService = (function () {
    function LoginService() {
    }
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LoginService);

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/Services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = (function () {
    function UserService() {
    }
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/Stage0/group-create/group-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#header{\n\tbackground-color: #778899;\n\tbackground-image: linear-gradient(to left, white, rgba(00,00,00,1));\n\tborder-radius: 0;\n\tborder: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Stage0/group-create/group-create.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"header\" class = \"navbar navbar-default navbar-static-top\">\n  <div class=\"container-fluid\">\n    <a class= \"navbar-brand\" href=\"#\" style=\"color:white\">QuittingUnited</a>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n      <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\">\n        <div\n          id=\"user-data\"\n          ngModelGroup=\"userData\"\n          #userData=\"ngModelGroup\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input\n              type=\"text\"\n              id=\"name\"\n              class=\"form-control\"\n              ngModel\n              name=\"name\"\n              required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"fre\">Checking Frequency</label>\n            <select\n              id=\"fre\"\n              class=\"form-control\"\n              [ngModel]=\"defaultQuestion\"\n              name=\"fre\">\n              <option value=\"Daily\">Daily</option>\n              <option value=\"Weekly\">Weekly</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"duration\">Duration in Days</label>\n            <input\n              type=\"number\"\n              class=\"form-control\"\n              id=\"duration\"\n              ngModel\n              name=\"duration\"\n              required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"money\">Money in Dollars</label>\n            <input\n              type=\"number\"\n              class=\"form-control\"\n              id=\"money\"\n              ngModel\n              name=\"duration\"\n              required>\n          </div>\n        </div>\n        <button\n          class=\"btn btn-primary\"\n          type=\"submit\"\n        >Submit\n        </button>\n      </form>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/Stage0/group-create/group-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Models_group__ = __webpack_require__("../../../../../src/app/Models/group.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_group_service__ = __webpack_require__("../../../../../src/app/Services/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Models_user_stat__ = __webpack_require__("../../../../../src/app/Models/user.stat.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GroupCreateComponent = (function () {
    function GroupCreateComponent(router, userService, groupService) {
        this.router = router;
        this.userService = userService;
        this.groupService = groupService;
        this.defaultQuestion = 'Daily';
    }
    GroupCreateComponent.prototype.ngOnInit = function () {
    };
    GroupCreateComponent.prototype.onSubmit = function (form) {
        console.log('doing it');
        var name = this.signupForm.value.userData.name;
        var fre = this.signupForm.value.userData.fre;
        var duration = this.signupForm.value.userData.duration;
        var money = this.signupForm.value.userData.money;
        var group = new __WEBPACK_IMPORTED_MODULE_4__Models_group__["a" /* Group */](name, fre, duration, money);
        group.userStats.push(new __WEBPACK_IMPORTED_MODULE_6__Models_user_stat__["a" /* UserStat */](this.userService.user, 0, group.money));
        this.groupService.addGroup(group);
        this.router.navigateByUrl('/landing');
    };
    return GroupCreateComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('f'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* NgForm */]) === "function" && _a || Object)
], GroupCreateComponent.prototype, "signupForm", void 0);
GroupCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-group-create',
        template: __webpack_require__("../../../../../src/app/Stage0/group-create/group-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Stage0/group-create/group-create.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__Services_group_service__["a" /* GroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__Services_group_service__["a" /* GroupService */]) === "function" && _d || Object])
], GroupCreateComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=group-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/Stage0/group-join/group-join.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#header{\n  background-color: #778899;\n  background-image: linear-gradient(to left, white, rgba(00,00,00,1));\n  border-radius: 0;\n  border: 0;\n  color: white;\n}\n#inp {\n  color: black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Stage0/group-join/group-join.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"header\" class = \"navbar navbar-default navbar-static-top\">\n  <div class=\"container-fluid\">\n    <a class= \"navbar-brand\" href=\"#\" style=\"color:white\">QuittingUnited</a>\n  </div>\n</nav>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-6\">\n      Join ID <input type=\"text\" id=\"inp\"#groupID placeholder=\"id\">\n\n      <button class=\"btn btn-primary\"(click)=\"join(groupID.value)\">\n        Join\n      </button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/Stage0/group-join/group-join.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupJoinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_group_service__ = __webpack_require__("../../../../../src/app/Services/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_firebase_service__ = __webpack_require__("../../../../../src/app/Services/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GroupJoinComponent = (function () {
    function GroupJoinComponent(router, userService, groupService, fb) {
        this.router = router;
        this.userService = userService;
        this.groupService = groupService;
        this.fb = fb;
    }
    GroupJoinComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fb.getGroups().subscribe(function (result) {
            _this.groups = _this.groupService.getGroups(result);
        });
        this.user = this.userService.user;
    };
    GroupJoinComponent.prototype.join = function (id) {
        if (this.groupByName(id)) {
            console.log(this.groupByName(id));
            this.groupService.addUser(this.userService.user, this.groupByName(id));
            this.router.navigateByUrl('/landing');
        }
    };
    GroupJoinComponent.prototype.groupByName = function (id) {
        for (var _i = 0, _a = this.groups; _i < _a.length; _i++) {
            var group = _a[_i];
            if (group.name === id) {
                return group;
            }
        }
        return null;
    };
    return GroupJoinComponent;
}());
GroupJoinComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-group-join',
        template: __webpack_require__("../../../../../src/app/Stage0/group-join/group-join.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Stage0/group-join/group-join.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Services_group_service__["a" /* GroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_group_service__["a" /* GroupService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__Services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__Services_firebase_service__["a" /* FirebaseService */]) === "function" && _d || Object])
], GroupJoinComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=group-join.component.js.map

/***/ }),

/***/ "../../../../../src/app/Stage0/landing-page/landing-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\n\tfont-size: 1.3em;\n}\n\ndiv .user{\n\ttext-align: right;\n}\n\ndiv #makegroup{\n\ttext-align: right;\n}\nul{\n  list-style-type: none;\n}\n@media only screen\nand (max-width: 999px) {\n  div .user {\n    text-align: left;\n  }\n\n  div #makegroup{\n  \ttext-align: left;\n  }\n}\n\n#header{\n\tbackground-color: #778899;\n\tbackground-image: linear-gradient(to left, white, rgba(00,00,00,1));\n\tborder-radius: 0;\n\tborder: 0;\n}\n\n#header div{\n\tfont-size: 1em;\n}\n#group {\n  font-size: .7 em;\n}\n.list-group-item {\n  padding: 0%;\n  background-color: slategray;\n  /*border: 0px;*/\n}\n.navbar .btn-primary {\n  background-color: #7992a8;\n  border-color: #7992a8;\n  border-radius: 0%;\n  border: 0px;\n  text-align: center;\n  padding-left: 4px;\n  float: right;\n  width: 13%;\n}\n.card .btn {\n  height: 40%;\n  padding: 0%;\n  line-height: 4;\n  border: 1px;\n  border-radius: 0%;\n  background-color: slategray;\n  border-color: lightcoral;\n}\n#testname{\n  float: left;\n  height: 50px;\n  border-radius: 0;\n  border-bottom-left-radius: 5%;\n  border-top-left-radius: 5%;\n}\n\n.btn-lg{\n\tfont-size: .3em;\n\tpadding: 10%;\n}\n\n#specialbutton{\n  padding: 0%;\n  width: 100%;\n  height: 100%;\n  /*padding-right: 0%;*/\n  /*padding-left: 30%;*/\n  font-size: .4em;\n}\n\n/*div .button{\n\tpadding: 1%;\n}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Stage0/landing-page/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav id=\"header\" class = \"navbar navbar-default navbar-static-top\">\n    <div class=\"container-fluid\">\n      <a class= \"navbar-brand\" href=\"#\" style=\"color:white\">QuittingUnited</a>\n      <button type=\"button\" class=\"btn btn-primary nav navbar-nav navbar-right\" id=\"testname\">{{user.username}}</button>\n    </div>\n  </nav>\n\t<div id=\"landing-page\" class=\"container-fluid\">\n\t\t<div class=\"container-fluid row info\">\n\t\t\t<div id=\"group\" class=\"col-md-5 col-lg-5 col-xs-5 col-md-5\">\n\t\t\t\tGroups:\n\t\t\t\t<br>\n\t\t\t</div>\n\t\t</div> <!-- User and group info -->\n\n\t\t<div class=\"col-md-offset-5 container-fluid\">\n\t\t\t<ul *ngIf=\"groups\">\n\t\t  \t<li *ngFor=\"let group of groups\">\n\t\t    \t<button class=\"btn btn-primary btn-lg\" id=\"specialbutton\" (click)=\"selectGroup(group)\">\n\t\t      \t{{group.name}}\n\t\t    \t</button>\n\t\t  \t</li>\n\t\t\t</ul>\n\t\t\t<br>\n\t\t</div>\n\n\t\t<div class=\"container button\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-md-1 col-lg-1 col-xs-1 col-md-1 col-lg-offset-1 col-sm-offset-1 col-md-offset-1 col-xs-offset-1\" id=\"makegroup\">\n\t\t\t\t\t<button class=\"btn btn-primary btn-lg\" (click)=\"makeGroup()\">\n\t\t\t\t  \tMake Group\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-md-1 col-lg-1 col-xs-1 col-md-1 col-lg-offset-1 col-sm-offset-1 col-md-offset-1 col-xs-offset-1 button clear\" >\n\t\t\t\t\t<button class=\"btn btn-primary btn-lg\" (click)=\"joinGroup()\">\n\t\t\t\t  \tJoin Group\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/Stage0/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_group_service__ = __webpack_require__("../../../../../src/app/Services/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_firebase_service__ = __webpack_require__("../../../../../src/app/Services/firebase.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LandingPageComponent = (function () {
    function LandingPageComponent(router, userService, groupService, fb) {
        this.router = router;
        this.userService = userService;
        this.groupService = groupService;
        this.fb = fb;
    }
    LandingPageComponent.prototype.ngAfterContentChecked = function () {
        if (this.groupService.changed) {
            this.updateGroups();
            this.groupService.changed = false;
        }
    };
    LandingPageComponent.prototype.ngOnInit = function () {
        this.user = this.userService.user;
        this.groups = new Array();
        this.updateGroups();
    };
    LandingPageComponent.prototype.updateGroups = function () {
        var _this = this;
        this.groups = new Array();
        this.fb.getGroups().subscribe(function (res) {
            var groups = _this.groupService.getGroups(res);
            for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
                var group = groups_1[_i];
                for (var _a = 0, _b = group.userStats; _a < _b.length; _a++) {
                    var us = _b[_a];
                    if (us.user.username === _this.user.username) {
                        _this.groups.push(group);
                    }
                }
            }
        });
    };
    LandingPageComponent.prototype.selectGroup = function (group) {
        this.groupService.group = group;
        this.router.navigateByUrl('/group');
    };
    LandingPageComponent.prototype.makeGroup = function () {
        this.router.navigateByUrl('/groupCreate');
    };
    LandingPageComponent.prototype.joinGroup = function () {
        this.router.navigateByUrl('/groupJoin');
    };
    return LandingPageComponent;
}());
LandingPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-landing-page',
        template: __webpack_require__("../../../../../src/app/Stage0/landing-page/landing-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Stage0/landing-page/landing-page.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__Services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__Services_group_service__["a" /* GroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_group_service__["a" /* GroupService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__Services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__Services_firebase_service__["a" /* FirebaseService */]) === "function" && _d || Object])
], LandingPageComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=landing-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/Stage0/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#login {\n\tpadding: 0%;\n  padding-top: 5%;\n\tborder: 10px;\n  border-radius: 5%;\n  border-color: white;\n}\n.jumbotron {\n  background: #000000;\n}\n#login div {\n\twidth: 100%;\n}\n#page{\n  background-blend-mode: soft-light;\n  background-color: black;\n}\np{\n\ttext-align: center;\n\tfont-size: 3em\n}\n#header1{\n\tbackground-color: #333333;\n\tborder-radius: 0;\n\tborder: 0;\n}\n#sub {\n  width: 100%;\n  margin-top: 6px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Stage0/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"header1\" class = \"navbar navbar-default navbar-static-top\">\n    <div class=\"container-fluid\">\n    <a class= \"navbar-brand\" href=\"#\" style=\"color:white\">QuittingUnited</a>\n    </div>\n</nav>\n<div id=\"page\">\n<div class=\"jumbotron col-lg-7 col-md-6 col-sm-5 col-xs-5\">\n  <div class=\"container\">\n    <h1 class=\"display-3\">Quit Smoking Now!</h1>\n    <p class=\"lead\">Bet With Your Friends Who Can Last The Longest</p>\n  </div>\n</div>\n\n\n\n\n<div id=\"login\" class=\"col-xs-offset-1 col-md-3 col-xs-3 col-sm-3\">\n  <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"form-group\">\n    <label for=\"userName\">UserName</label>\n    <input\n      type=\"text\"\n      id=\"userName\"\n      class=\"form-control\"\n      formControlName=\"userName\"\n      value=\"joe\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input\n      type=\"password\"\n      id=\"password\"\n      class=\"form-control\"\n      formControlName=\"password\"\n      value=\"123\">\n  </div>\n  <button\n    class=\"btn btn-primary\" id=\"sub\"\n    type=\"submit\"\n    [disabled]=\"!myForm.valid\">Submit</button>\n  </form>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/Stage0/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Models_user__ = __webpack_require__("../../../../../src/app/Models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.joe = new __WEBPACK_IMPORTED_MODULE_2__Models_user__["a" /* User */]('George Burdell', '123');
        this.joe2 = new __WEBPACK_IMPORTED_MODULE_2__Models_user__["a" /* User */]('joe joey', '123');
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.myForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            userName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required)
        });
        this.myForm.get('userName').setValue('George Burdell');
        this.myForm.get('password').setValue('123');
    };
    LoginComponent.prototype.onSubmit = function () {
        //this stuff should get replaced by firebase
        if (this.joe.username === this.myForm.value.userName && this.joe.password === this.myForm.value.password) {
            this.userService.user = this.joe;
        }
        else {
            this.userService.user = this.joe2;
        }
        this.router.navigateByUrl('/landing');
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/Stage0/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Stage0/login/login.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__Services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__Services_user_service__["a" /* UserService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/Stage1/chat/chat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#header{\n\tbackground-color: #778899;\n\tbackground-image: linear-gradient(to left, white, rgba(00,00,00,1));\n\tborder-radius: 0;\n\tborder: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Stage1/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<p>\n  \t\tchat works!\n\t</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/Stage1/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Models_group__ = __webpack_require__("../../../../../src/app/Models/group.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    return ChatComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Models_group__["a" /* Group */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Models_group__["a" /* Group */]) === "function" && _a || Object)
], ChatComponent.prototype, "group", void 0);
ChatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-chat',
        template: __webpack_require__("../../../../../src/app/Stage1/chat/chat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Stage1/chat/chat.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ChatComponent);

var _a;
//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/Stage1/group-end/group-end.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Stage1/group-end/group-end.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/Stage1/group-end/group-end.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupEndComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_group_service__ = __webpack_require__("../../../../../src/app/Services/group.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroupEndComponent = (function () {
    function GroupEndComponent(groupService) {
        this.groupService = groupService;
    }
    GroupEndComponent.prototype.ngOnInit = function () {
    };
    return GroupEndComponent;
}());
GroupEndComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-group-end',
        template: __webpack_require__("../../../../../src/app/Stage1/group-end/group-end.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Stage1/group-end/group-end.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_group_service__["a" /* GroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_group_service__["a" /* GroupService */]) === "function" && _a || Object])
], GroupEndComponent);

var _a;
//# sourceMappingURL=group-end.component.js.map

/***/ }),

/***/ "../../../../../src/app/Stage1/group/group.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#header{\n\tbackground-color: #778899;\n\tbackground-image: linear-gradient(to left, white, rgba(00,00,00,1));\n\tborder-radius: 0;\n\tborder: 0;\n}\n\n.grouptabs{\n\tborder-radius: 0;\n\tborder: 0;\n\tpadding: 0\n}\n\n.grouptabs.active{\n\tcolor:orange;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Stage1/group/group.component.html":
/***/ (function(module, exports) {

module.exports = "<nav id=\"header\" class = \"navbar navbar-default navbar-static-top\">\n    <div class=\"container-fluid\">\n        <a class= \"navbar-brand\" href=\"#\">QuittingUnited</a>\n\t    <button type=\"button\" class=\"btn btn-primary nav navbar-nav navbar-right\" id=\"testname\">{{user.username}}</button>\n    </div>\n</nav>\n\n<header>\n\t<nav class=\"navbar navbar-default navbar-left row\" role=\"navigation\">\n  \t\t<div class=\"container-fluid\">\n\t    \t<ul class=\"nav nav-tabs navbar-left\">\n\t\t      <li routerLinkActive=\"active\"><a [routerLink]=\"['info']\">Info</a></li>\n\t\t      <li routerLinkActive=\"active\"><a [routerLink]=\"['money']\">Money</a></li>\n\t\t      <li routerLinkActive=\"active\"><a [routerLink]=\"['chat']\">Chat</a></li>\n\t    \t</ul>\n\t\t</div>\n\t</nav>\n</header>\n<div>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/Stage1/group/group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_group_service__ = __webpack_require__("../../../../../src/app/Services/group.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroupComponent = (function () {
    function GroupComponent(groupService) {
        this.groupService = groupService;
    }
    GroupComponent.prototype.ngOnInit = function () {
        this.group = this.groupService.group;
    };
    return GroupComponent;
}());
GroupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-group',
        template: __webpack_require__("../../../../../src/app/Stage1/group/group.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Stage1/group/group.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_group_service__["a" /* GroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_group_service__["a" /* GroupService */]) === "function" && _a || Object])
], GroupComponent);

var _a;
//# sourceMappingURL=group.component.js.map

/***/ }),

/***/ "../../../../../src/app/Stage1/info/info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#header{\n\tbackground-color: #778899;\n\tbackground-image: linear-gradient(to left, white, rgba(00,00,00,1));\n\tborder-radius: 0;\n\tborder: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Stage1/info/info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container row\">\n\t<div *ngFor=\"let userStat of userStats\">\n\t  name{{userStat.user.username}}\n\t  <br>\n\t  money{{userStat.money}}\n\t  <br>\n\t  penalties{{userStat.penalties}}\n\t  <hr>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Stage1/info/info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_group_service__ = __webpack_require__("../../../../../src/app/Services/group.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoComponent = (function () {
    function InfoComponent(groupService) {
        this.groupService = groupService;
    }
    InfoComponent.prototype.ngOnInit = function () {
        this.userStats = this.groupService.group.userStats;
    };
    return InfoComponent;
}());
InfoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-info',
        template: __webpack_require__("../../../../../src/app/Stage1/info/info.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Stage1/info/info.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_group_service__["a" /* GroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_group_service__["a" /* GroupService */]) === "function" && _a || Object])
], InfoComponent);

var _a;
//# sourceMappingURL=info.component.js.map

/***/ }),

/***/ "../../../../../src/app/Stage1/money/money.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#header{\n\tbackground-color: #778899;\n\tbackground-image: linear-gradient(to left, white, rgba(00,00,00,1));\n\tborder-radius: 0;\n\tborder: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Stage1/money/money.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<button (click)=\"response(0)\">\n\t  I cheated\n\t</button>\n\t<button (click)=\"response(1)\">\n\t  I'm clean!\n\t</button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/Stage1/money/money.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoneyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_group_service__ = __webpack_require__("../../../../../src/app/Services/group.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoneyComponent = (function () {
    function MoneyComponent(router, groupService) {
        this.router = router;
        this.groupService = groupService;
    }
    MoneyComponent.prototype.ngOnInit = function () {
    };
    MoneyComponent.prototype.response = function (type) {
        if (type === 1) {
            //number of times good ++
        }
        else {
            //number of time bad ++
            //money --
        }
        this.router.navigateByUrl('/group');
    };
    return MoneyComponent;
}());
MoneyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-money',
        template: __webpack_require__("../../../../../src/app/Stage1/money/money.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Stage1/money/money.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__Services_group_service__["a" /* GroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_group_service__["a" /* GroupService */]) === "function" && _b || Object])
], MoneyComponent);

var _a, _b;
//# sourceMappingURL=money.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_firebase_service__ = __webpack_require__("../../../../../src/app/Services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_group_service__ = __webpack_require__("../../../../../src/app/Services/group.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(router, userService, fb, groupService) {
        this.router = router;
        this.userService = userService;
        this.fb = fb;
        this.groupService = groupService;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (!this.userService.user) {
            this.router.navigateByUrl('/');
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__Services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_user_service__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__Services_firebase_service__["a" /* FirebaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__Services_firebase_service__["a" /* FirebaseService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__Services_group_service__["a" /* GroupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__Services_group_service__["a" /* GroupService */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Stage0_login_login_component__ = __webpack_require__("../../../../../src/app/Stage0/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Stage0_landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/Stage0/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_firebase_service__ = __webpack_require__("../../../../../src/app/Services/firebase.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Services_login_service__ = __webpack_require__("../../../../../src/app/Services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Stage1_group_group_component__ = __webpack_require__("../../../../../src/app/Stage1/group/group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Stage0_group_create_group_create_component__ = __webpack_require__("../../../../../src/app/Stage0/group-create/group-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Stage1_money_money_component__ = __webpack_require__("../../../../../src/app/Stage1/money/money.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Stage1_info_info_component__ = __webpack_require__("../../../../../src/app/Stage1/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Stage1_group_end_group_end_component__ = __webpack_require__("../../../../../src/app/Stage1/group-end/group-end.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Stage1_chat_chat_component__ = __webpack_require__("../../../../../src/app/Stage1/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Stage0_group_join_group_join_component__ = __webpack_require__("../../../../../src/app/Stage0/group-join/group-join.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Services_user_service__ = __webpack_require__("../../../../../src/app/Services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Services_group_service__ = __webpack_require__("../../../../../src/app/Services/group.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__Stage0_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_4__Stage0_landing_page_landing_page_component__["a" /* LandingPageComponent */],
            __WEBPACK_IMPORTED_MODULE_7__Stage1_group_group_component__["a" /* GroupComponent */],
            __WEBPACK_IMPORTED_MODULE_12__Stage1_chat_chat_component__["a" /* ChatComponent */],
            __WEBPACK_IMPORTED_MODULE_8__Stage0_group_create_group_create_component__["a" /* GroupCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_9__Stage1_money_money_component__["a" /* MoneyComponent */],
            __WEBPACK_IMPORTED_MODULE_10__Stage1_info_info_component__["a" /* InfoComponent */],
            __WEBPACK_IMPORTED_MODULE_11__Stage1_group_end_group_end_component__["a" /* GroupEndComponent */],
            __WEBPACK_IMPORTED_MODULE_14__Stage0_group_join_group_join_component__["a" /* GroupJoinComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_13__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_16__angular_http__["b" /* HttpModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__Services_firebase_service__["a" /* FirebaseService */],
            __WEBPACK_IMPORTED_MODULE_6__Services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_17__Services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_18__Services_group_service__["a" /* GroupService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Stage0_login_login_component__ = __webpack_require__("../../../../../src/app/Stage0/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Stage0_group_create_group_create_component__ = __webpack_require__("../../../../../src/app/Stage0/group-create/group-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Stage0_landing_page_landing_page_component__ = __webpack_require__("../../../../../src/app/Stage0/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Stage1_group_group_component__ = __webpack_require__("../../../../../src/app/Stage1/group/group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Stage1_chat_chat_component__ = __webpack_require__("../../../../../src/app/Stage1/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Stage1_money_money_component__ = __webpack_require__("../../../../../src/app/Stage1/money/money.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Stage1_info_info_component__ = __webpack_require__("../../../../../src/app/Stage1/info/info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Stage1_group_end_group_end_component__ = __webpack_require__("../../../../../src/app/Stage1/group-end/group-end.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Stage0_group_join_group_join_component__ = __webpack_require__("../../../../../src/app/Stage0/group-join/group-join.component.ts");










var APP_ROUTES = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_1__Stage0_login_login_component__["a" /* LoginComponent */] },
    { path: 'groupCreate', component: __WEBPACK_IMPORTED_MODULE_2__Stage0_group_create_group_create_component__["a" /* GroupCreateComponent */] },
    { path: 'groupJoin', component: __WEBPACK_IMPORTED_MODULE_9__Stage0_group_join_group_join_component__["a" /* GroupJoinComponent */] },
    { path: 'landing', component: __WEBPACK_IMPORTED_MODULE_3__Stage0_landing_page_landing_page_component__["a" /* LandingPageComponent */] },
    {
        path: 'group', component: __WEBPACK_IMPORTED_MODULE_4__Stage1_group_group_component__["a" /* GroupComponent */], children: [
            { path: '', redirectTo: 'chat', pathMatch: 'full' },
            { path: 'chat', component: __WEBPACK_IMPORTED_MODULE_5__Stage1_chat_chat_component__["a" /* ChatComponent */] },
            { path: 'money', component: __WEBPACK_IMPORTED_MODULE_6__Stage1_money_money_component__["a" /* MoneyComponent */] },
            { path: 'info', component: __WEBPACK_IMPORTED_MODULE_7__Stage1_info_info_component__["a" /* InfoComponent */] },
            { path: 'end', component: __WEBPACK_IMPORTED_MODULE_8__Stage1_group_end_group_end_component__["a" /* GroupEndComponent */] }
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map