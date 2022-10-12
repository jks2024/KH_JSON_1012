// 생성자를 만드는 방법
// 함수 선언문으로 정의하는 방법
// 클래스 선언문으로 정의하는 방법
// 클래스 표현식으로 정의하는 방법
// let Card = class { 
//     constructor(suit, rank) {
//         this.suit = suit;
//         this.rank = rank;
//     }
//     show() {
//         console.log(this.suit + this.rank);
//     }
// }

// let card1 = new Card(100, 200);
// card1.show();

// class GirlGroup {
//     constructor(grp, name, age, pos) {
//         this.groupName = grp;
//         this.name = name;
//         this.age = age;
//         this.position = pos;
//         GirlGroup.memberCnt++;
//     }
//     prnInfo() {
//         console.log("그룹 : " + this.groupName);
//         console.log("이름 : " + this.name);
//         console.log("나이 : " + this.age);
//         console.log("포지션 : " + this.position);
//     }
//     static getMember() {
//         return GirlGroup.memberCnt;
//     }
// }
// GirlGroup.memberCnt = 0;
// let itzy1 = new GirlGroup("잇지", "예지", 23, "리더");
// let itzy2 = new GirlGroup("잇지", "리아", 23, "보컬");
// let itzy3 = new GirlGroup("잇지", "류진", 22, "레퍼");
// let itzy4 = new GirlGroup("잇지", "채령", 22, "댄서");
// let itzy5 = new GirlGroup("잇지", "유나", 20, "댄서");

// console.log(GirlGroup.getMember());

// itzy1.prnInfo();
// itzy2.prnInfo();
// itzy3.prnInfo();
// itzy4.prnInfo();
// itzy5.prnInfo();

// 상속
class Car {
    constructor(name, year, speed) {
        this.name = name;
        this.productYear = year;
        this.maxSpeed = speed;
    }
}

class SportCar extends Car {
    constructor(isTurbo) {
        super("Ferrari", 2022, 220);
        this.isTurbo = isTurbo;    
    }
    getSpeed() {
        return (this.isTurbo) ? this.maxSpeed * 1.2 : this.maxSpeed;
    }
}

let ferrari = new SportCar(true);
console.log("최대 속도 : " + ferrari.getSpeed() + "KM");




