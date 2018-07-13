import BigNumber from 'bignumber.js'

export default function satoshiFormat (number) {
  const result = new BigNumber(number)
    .div(new BigNumber(10).pow(8))
    .toFixed(8, BigNumber.ROUND_DOWN)
  return result
}
