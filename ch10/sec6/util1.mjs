// echo -n

console.log('Reexporting features from another module')

export { randInt, randDouble } from './modules/random.mjs'
import { randInt, randPermutation } from './modules/random.mjs'
  // Note: We need to import randInt if we want to use it. Reexported
  // features are not automatically imported.
import su from './modules/stringutil.mjs'

export const randElement = a => a[randInt(0, a.length)]

export const randPassword = ({ lowercase = 8, uppercase = 1,
    digits = 1, symbols = 1 } = {}) => {
  let result = []
  for (let i = 0; i < lowercase; i++) result.push(randElement(su.lowercase))
  for (let i = 0; i < uppercase; i++) result.push(randElement(su.uppercase))
  for (let i = 0; i < digits; i++) result.push(randElement(su.digits))
  for (let i = 0; i < symbols; i++) result.push(randElement(su.symbols))
  let p = randPermutation(0, result.length)
  return p.map(i => result[i]).join('')  
}
