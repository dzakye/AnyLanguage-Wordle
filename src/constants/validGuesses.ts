import { CONFIG } from './config'

export const VALIDGUESSES = [
  'abele',
'abéra',
'abile',
'abima',
]

if (CONFIG.normalization) {
  VALIDGUESSES.forEach(
    (val, i) => (VALIDGUESSES[i] = val.normalize(CONFIG.normalization))
  )
}
