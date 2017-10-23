const Condition = require('./condition')

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
    return this.age >= min ? Math.floor(totalYrs / 5) : 'Life insurance is not available for minors'
  }
  adjustBaseCostForAge () {
    let num = this.yearsOver18()
    let extra = num * 20
    return this.baseCost + extra
  }
  conditionFactor () {
    let condition = new Condition(this.condition)
    let factor = condition.getFactor()
    let adjustedBaseCost = this.adjustBaseCostForAge()
    let extra = adjustedBaseCost * factor
    return adjustedBaseCost + extra
  }
  discount () {
    let total = this.conditionFactor()
    return this.gender === 'female' ? (total - 12).toFixed(2) : total.toFixed(2)
  }
}

module.exports = User
