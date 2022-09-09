class Governor{
    constructor (name, age, party, state){
        this.name = name
        this.age = age
        this.party= party
        this.state = state
    }
}

class Person {
    constructor(name, age, height){
        this.name = name
        this.age = age
        this.height = height
    }
    
    isAwake(){
        console.log('I am awake')
    }

    isAlive(){
        this.alive = true

    }
    
}

class PostalWorker extends Person {
    worksRoute(){
        this.position = 'Delivery'
    }
    job = 'Postal Worker'
    

}

class Chef extends Person {
    stars(rate){
        this.starRate = rate
    }
    bestFood(dish){
        this.bestDish = dish
    }
    worksWhere(location){
        this.restaurant = location
    }
}
const jill = new PostalWorker('Jill', 44, '5ft1')
console.log(jill)

const derrick = new Chef('Derrick', 32, '6ft')
derrick.stars(1)
derrick.bestFood('Chicken Marsala')
derrick.worksWhere('Applebees')
console.log(derrick)

class BankAccount {
    constructor(ownerName, balance, acctNum){
        this.ownerName = ownerName
        this.balance = balance
        this.acctNum = Math.floor(Math.random(acctNum) * 1000000)
    }

    deposit(value){
        this.balance += value
    }

    withdraw(value){
        this.balance -= value
    }
}

class CheckingAccount extends BankAccount{
    overdraftEnabled = true

    withdraw(value){
        this.balance -= value
        if( this.overdraftEnabled === true && this.balance < 0){
            console.log('OVERDRAFT PROTECTION: WITHDRAWL DECLINED')
            this.balance += value
        }
    }

}

class SavingAccount extends BankAccount{
    withdraw(){
        console.log('CANNOT WITHDRAW FROM SAVINGS!')
    }
}

const mine = new SavingAccount('Austin', 100)
mine.deposit(10)
mine.withdraw()
console.log(mine)