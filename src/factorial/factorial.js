import { typeErrorMessage, rangeErrorMessage } from './utils/error-message';

const getFactorial = number => {
  // Recursão
  const isNotNumber = typeof number !== 'number'
  const isNumberOutOfRange = number < 0 || number > 20
  const isNumberOneOrZero = number === 1 || number === 0

  if (isNotNumber) {
    throw new TypeError(typeErrorMessage) 
  }

  if (isNumberOutOfRange) {
    throw new RangeError(rangeErrorMessage)
  }

  return isNumberOneOrZero ? 1 : number * getFactorial(number - 1)

  // Iteração
  
  // let factorial = 1;

  // for (let i = number; i>= 1; i--) {
  //   factorial = factorial * i
  // }

  // return factorial;
}

export default getFactorial