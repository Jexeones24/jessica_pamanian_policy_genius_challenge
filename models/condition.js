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

module.exports = Condition
