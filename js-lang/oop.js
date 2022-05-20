/*  OOP js */
class Human {
    #gender = "male";
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduceYourself() {
        console.log('hello my name is', this.name);
    }

    #calculateBankSavings() {
        console.log('1000');
    }

    tellSavingsAmountPublic() {
        this.#calculateBankSavings();
    }

    canJoinNavySeal() {
        if (this.#gender === 'male') {
            console.log('can');
        } else {
            console.log('can not');
        }
    }
}

class Programmer extends Human {
    constructor(name, age, techStack) {
        super(name, age);
        this.techStack = techStack;
    }

    introduceYourself() {
        console.log('my tech stack', this.techStack);
        console.log('my name is', this.name);
        console.log('my age is', this.age);
    }
}

const lakshan = new Programmer('lakshan', 22, 'LAMP');
lakshan.introduceYourself();
lakshan.tellSavingsAmountPublic();