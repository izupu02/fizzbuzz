import * as React from 'react'
import { calc } from '../calc/FizzBuzzCalculator'

interface FizzBuzz {
  num: String
}

export const FizzBuzz = (props: FizzBuzz) => {
  const { num } = props
  if (num.length < 1) {
    return <div></div>
  }
  return <div>{calc(Number(num))}</div>
}
