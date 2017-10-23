class Condition {
  constructor (name) {
    this.name = name
    this.getFactor = () => {
      if (name === 'allergies') {
        return 0.01
      } else if (name === 'sleep apnea') {
        return 0.06
      } else {
        return 0.17
      }
    }
  }
}

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

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('userForm').addEventListener('submit', makeQuote)
})

function makeQuote (event) {
  event.preventDefault()
  let form = document.getElementById('userForm')
  let name = document.getElementById('name').value
  console.log(name)
  let age = document.getElementById('age').value
  console.log(age)
  let gender = document.querySelector('input[name="gender"]:checked').value
  console.log(gender)
  let condition = document.getElementById('condition').value
  console.log(condition)
  let user = new User(name, age, gender, condition)
  console.log(user)
  let quote = user.discount()
  form.reset()
  displayQuote(user, quote)
}

function displayQuote (user, quote) {
  let target = document.getElementById('quote')
  let h3 = document.createElement('h3')
  h3.innerHTML = 'Your Insurance Quote:'
  let p = document.createElement('p')
  p.innerHTML = user.name + ' - ' + '$' + quote
  target.parentNode.insertBefore(h3, target)
  target.parentNode.insertBefore(p, target)
}
