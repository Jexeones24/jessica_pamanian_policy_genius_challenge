const assert = require('assert')
const mocha = require('mocha')
const describe = mocha.describe
const it = mocha.it
const User = require('../models/user')
const Condition = require('../models/condition')

describe('models', () => {
  describe('yearsOver18()', () => {
    it('should not accept customers aged fewer than 18 years', () => {
      let user = new User('Bobby', 14, 'male', 'allergies')
      console.log(user)
      let expected = 'Life insurance is not available for minors'
      let actual = user.yearsOver18()
      assert(expected === actual)
    })
    it('should return number of 5 year blocks over 18 years of age the customer is', () => {
      let user = new User('Bobby', 28, 'male', 'allergies')
      let expected = 2
      let actual = user.yearsOver18()
      assert(expected === actual)
    })
    it('should return number of 5 year blocks over 18 years of age the customer is', () => {
      let user = new User('June', 20, 'female', 'allergies')
      let expected = 0
      let actual = user.yearsOver18()
      assert(expected === actual)
    })
  })
  describe('adjustBaseCostForAge()', () => {
    it('should increase base cost by 20 dollars for every 5 years over 18', () => {
      let user = new User('Mike', 23, 'male', 'sleep apnea')
      let expected = 120
      let actual = user.adjustBaseCostForAge()
      assert(expected === actual)
    })
    it('should increase base cost by 20 dollars for every 5 years over 18', () => {
      let user = new User('Corey', 33)
      let expected = 160
      let actual = user.adjustBaseCostForAge()
      assert(expected === actual)
    })
  })

  describe('conditionFactor()', () => {
    it('should increase base cost by 1% for allergies', () => {
      let condition = new Condition('allergies')
      let user = new User('Lolita', 18, 'female', condition.name)
      let expected = 101
      let actual = user.conditionFactor()
      assert(expected === actual)
    })
    it('should increase base cost by 6% for sleep apnea', () => {
      let condition = new Condition('sleep apnea')
      let user = new User('Zack', 50, 'male', condition.name)
      let expected = 233.2
      let actual = user.conditionFactor()
      assert(expected === actual)
    })
    it('should increase base cost by 17% for heart disease', () => {
      let condition = new Condition('heart disease')
      let user = new User('Carrie', 60, 'female', condition.name)
      let expected = 304.2
      let actual = user.conditionFactor()
      assert(expected === actual)
    })
  })

  describe('discount()', () => {
    it('should subtract 12 dollars from final quote if gender is female', () => {
      let user = new User('Molly', 28, 'female', 'allergies')
      let expected = (129.4).toFixed(2)
      let actual = user.discount()
      assert(expected === actual)
    })
    it('should subtract 12 dollars from final quote if gender is female', () => {
      let user = new User('Juan', 28, 'male', 'allergies')
      let expected = (141.4).toFixed(2)
      let actual = user.discount()
      assert(expected === actual)
    })
  })
})
