const Condition = require('./condition')
console.log(new Condition('allergies', 0.01))

class User {
  constructor (name, age, gender, condition, baseCost) {
    this.name = name
    this.age = age
    this.gender = gender
    this.condition = condition
    this.baseCost = 100
  }
  yearsOver18 () {
    let min = 18
    let totalYrs = this.age - min
    return this.age >= min ? Math.floor(totalYrs / 5) : 'Life insurance is not available for people under age 18'
  }
  adjustBaseCostForAge () {
    let num = this.yearsOver18()
    let extra = num * 20
    return this.baseCost + extra
  }
  conditionFactor () {
    let condition = new Condition('allegies', 0.01)
    let adjustedBaseCost = this.adjustBaseCostForAge()
    let extra = adjustedBaseCost * condition.factor
    return adjustedBaseCost + extra
  }
  discount () {
    let total = this.conditionFactor()
    return this.gender === 'female' ? (total - 12).toFixed(2) : total
  }
}

let user = new User('Jess', 34, 'female', 'allergies')
console.log(user.yearsOver18())
console.log(user.adjustBaseCostForAge())
console.log(user.conditionFactor('heartDisease'))
console.log(user.discount())

module.exports = User
