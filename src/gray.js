var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// variables
var monEntier = 5;
var maChaine = "Lalekou Giray Tchad";
var monBooleen = false;
var monBooleen2 = true;
console.log(maChaine);
console.log("------------------------");
console.log(monEntier, monBooleen, monBooleen2);
console.log("------------------------");
// constantes, Valeurs énumérées(enum)
var PI = 3.14;
console.log(PI);
// fonctions et procedures(fonction flechés),  Paramètre optionnel
function somme(a, b) {
    return a + b;
}
var mul = function (a, b) {
    return a * b;
};
function afficher(objet, objet2) {
    if (objet2 === void 0) { objet2 = null; }
    if (objet2) {
        console.log(objet, objet2);
    }
    else {
        console.log(objet);
    }
}
afficher(somme(4, 5));
afficher(mul(4, 5));
afficher(somme(4, 5), mul(4, 5));
var monInterface = { attribut1: 5, attribut2: "Lalekou" };
console.log(monInterface);
console.log(monInterface.attribut1, monInterface.attribut2);
// Classes(constructeur, methode, getteur, setteur, heritage, implementation, )
var MaClass1 = /** @class */ (function () {
    function MaClass1(attr) {
        this.attr1 = attr;
    }
    MaClass1.prototype.test = function () {
        console.log("Bonjour ", this.attr1);
    };
    return MaClass1;
}());
var MaClass2 = /** @class */ (function (_super) {
    __extends(MaClass2, _super);
    function MaClass2() {
        var _this = _super.call(this, 5) || this;
        console.log("creation");
        return _this;
    }
    MaClass2.prototype.test = function () {
        console.log(this.attr1);
    };
    return MaClass2;
}(MaClass1));
var MaClass3 = /** @class */ (function () {
    function MaClass3() {
    }
    MaClass3.prototype.somme = function (a, b) {
        return a + b;
    };
    MaClass3.prototype.modulo = function (a, b) {
        return a % b;
    };
    return MaClass3;
}());
var monObjet = new MaClass1(1);
monObjet.test();
var monObjet2 = new MaClass2();
monObjet2.test();
var monObjet3 = new MaClass3();
console.log(monObjet3.modulo(6, 2));
var MaClass4 = /** @class */ (function () {
    function MaClass4() {
    }
    Object.defineProperty(MaClass4.prototype, "attr1", {
        get: function () {
            return this._attr1;
        },
        set: function (val) {
            this._attr1 = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MaClass4.prototype, "attr2", {
        get: function () {
            return this._attr2;
        },
        set: function (val) {
            this._attr2 = val;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MaClass4.prototype, "attr3", {
        get: function () {
            return this._attr3;
        },
        set: function (val) {
            this._attr3 = val;
        },
        enumerable: false,
        configurable: true
    });
    return MaClass4;
}());
var monObjet4 = new MaClass4();
console.log(monObjet4.attr1);
monObjet4.attr1 = 4;
//  = 5;
// Décorateurs
var log = function () {
    return function (target, name, descriptor) {
        console.log("appel de la ");
        return descriptor;
    };
};
var MaClass5 = /** @class */ (function () {
    function MaClass5() {
    }
    MaClass5.prototype.test = function () {
        console.log("lalekou");
    };
    __decorate([
        log()
    ], MaClass5.prototype, "test");
    return MaClass5;
}());
