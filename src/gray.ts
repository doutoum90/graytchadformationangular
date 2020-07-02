

// variables
let monEntier: number = 5;
let maChaine: String = "Lalekou Giray Tchad";
let monBooleen: Boolean = false;
let monBooleen2 = true;
console.log(maChaine);
console.log("------------------------");
console.log(monEntier, monBooleen, monBooleen2);
console.log("------------------------");
// constantes, Valeurs énumérées(enum)
const PI: number = 3.14;
console.log(PI);
// fonctions et procedures(fonction flechés),  Paramètre optionnel

function somme(a: number, b: number): number {
    return a + b;
}
let mul = (a: number, b: number): number => {
    return a * b;
}
function afficher(objet: number, objet2 = null): void {
    if (objet2) {
        console.log(objet, objet2);
    } else {
        console.log(objet);
    }
}
afficher(somme(4, 5));
afficher(mul(4, 5));

afficher(somme(4, 5), mul(4, 5))
// Interfaces

interface MonInterface {
    attribut1: number;
    attribut2: String;
}
interface MonInterface2 {
    somme(a: number, b: number);
    modulo(a: number, b: number);
}

let monInterface: MonInterface = { attribut1: 5, attribut2: "Lalekou" };
console.log(monInterface);
console.log(monInterface.attribut1, monInterface.attribut2);
// Classes(constructeur, methode, getteur, setteur, heritage, implementation, )
class MaClass1 {
    attr1: number;
    constructor(attr: number) {
        this.attr1 = attr;
    }
    test() {
        console.log("Bonjour ", this.attr1);
    }
}
class MaClass2 extends MaClass1 {
    constructor() {
        super(5);
        console.log("creation")
    }
    test() {
        console.log(this.attr1);
    }
}

class MaClass3 implements MonInterface2 {
    somme(a: number, b: number) {
        return a + b;
    }
    modulo(a: number, b: number) {
        return a % b;
    }
}

let monObjet: MaClass1 = new MaClass1(1);
monObjet.test();

let monObjet2: MaClass2 = new MaClass2();
monObjet2.test();

let monObjet3: MaClass3 = new MaClass3();

console.log(monObjet3.modulo(6, 2));

class MaClass4 {
    private _attr1: number;
    private _attr2: String;
    private _attr3: Boolean;
    get attr1() {
        return this._attr1;
    }
    get attr2() {
        return this._attr2;
    }
    get attr3() {
        return this._attr3;
    }

    set attr1(val: number) {
        this._attr1 = val;
    }
    set attr2(val: String) {
        this._attr2 = val;
    }
    set attr3(val: Boolean) {
        this._attr3 = val;
    }
}
let monObjet4: MaClass4 = new MaClass4();
console.log(monObjet4.attr1)
monObjet4.attr1 = 4;
//  = 5;
// Décorateurs
const log = () => {
    return (target: any, name: string, descriptor: any) => {
        console.log("appel de la ")
        return descriptor;
    }
}
class MaClass5 {
    test() {
        console.log("lalekou");
    }

}
