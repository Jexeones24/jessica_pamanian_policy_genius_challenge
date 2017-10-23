Jessica Pamanian

## npm install
## copy/paste full file path to index.html in browser

Class constructors for User and Condition
- enables reusable code
  --> should values for base cost or conditions change in future, can easily change inside constructor
- User properties: name, age, gender, condition & base policy cost
  --> if decided to accept multiple health conditions, would use array data type instead of string
- Condition: name, factor
  --> easy to update conditional increases
  --> getFactor() allows easy storage of multiple conditions on a single constructor
- alternate Condition design:
Condition = [
  {
    name: 'allergies',
    factor: 0.01
  },
  {
    name: 'sleep apnea',
    factor: 0.06
  },
  {
    name: 'heart disease',
    factor: 0.17
  }
]
- easy to add new conditions and find correct condition
- I chose to make a constructor with getFactor() method to keep consistent with User model and because there were only 3 possible conditions
- to avoid giant switch statement with more than 3 conditions, I'd move to creating an object like above

Client-side architecture.
- Scope of project is small
- User data and policy quotes do not need to persist
- If/when the application demands grow (data needs to persist & many customers) add server and database

SPA
- Was easiest to display quote on same page as form
- no need for routes

Mocha tests
## npm test
