const assert = require('chai').assert
const R = require('../app')
let robot = R

describe('Field test for robot', () => {
  let num = 5
  let str = 'A string'
  // individual test
  it.skip('check that num is a number', () => {
    assert.isNumber(num)
  })

  it.skip('check that str is a string', () => {
    assert.isString(str)
  })

  it('check that robot talks strings', () => {
    let phrase = robot.talk()
    assert.isString(phrase)
  })

  it('check that robot uses allowed phrases', () => {
    for (let i = 0; i < 8; i++) {
      let phrase = robot.talk()
      assert.oneOf(phrase, robot.phrases)
    }
  })

  it('check that robot has ammo to fire', () => {
    for (let i = 0; i < 6; i++) {
      robot.fireCannon()
      console.log(robot.ammo)
      assert.isAtLeast(robot.ammo, 0)
    }
  })
})
