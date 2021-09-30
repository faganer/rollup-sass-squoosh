import forEach from 'lodash-es/forEach'
const a = [1, 2, 3, 4, 5]
forEach(a, function (value, key) {
  console.log(value)
  console.log(key)
  // console.log(key + value)
})
console.log('index')
