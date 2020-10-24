import getFactorial from './factorial'
import { typeErrorMessage, rangeErrorMessage } from './utils/error-message'

describe('Happy Path', () => {
  test('getFactorial should be a function', () => {
    expect(getFactorial).toBeInstanceOf(Function)
  })
  
  test('getFatorial(3) should return 6', () => {
    const actual = getFactorial(3)
  
    expect(actual).toBe(6)
  })
  
  test('getFatorial(4) should return 24', () => {
    const actual = getFactorial(4)
  
    expect(actual).toBe(24)
  })
})

describe('Unhappy Path', () => {
  test('getFactorial() should throw a TypeError', () => {
    try {
      getFactorial()
    } catch ({ name }) {
      expect(name).toBe('TypeError')
    }
  })

  test('getFactorial() should throw a TypeError with message "getFactorial should receive a numer as argument"', () => {
    try {
      getFactorial()
    } catch ({ message }) {
      expect(message).toBe(typeErrorMessage)
    }
  })

  test('getFactorial(0) should return 1', () => {
    const actual = getFactorial(0)
    expect(actual).toBe(1)
  })

  test('getFactorial() should throw a RangeError', () => {
    try {
      getFactorial(-1)
    } catch ({ name }) {
      expect(name).toBe('RangeError')
    }
  })

  test('getFactorial() should throw a RangeError with message "getFactorial should receive a number between 0 and 20 as argument"', () => {
    try {
      getFactorial(-1)
    } catch ({ message }) {
      expect(message).toBe(rangeErrorMessage)
    }
  })
})