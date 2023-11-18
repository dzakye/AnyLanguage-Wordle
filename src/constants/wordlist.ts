import { CONFIG } from './config'

export const WORDS = [
  'rédze',
  'ostîa',
  'tróta',
  'fromi',
  'ridzó',
  'wefra',
  'blâga',
  'amòra',
  'tsówé',
  'borgó',
  'traca',
  'chéna',
  'myówa',
  'tevâe',
  'caâda',
  'bôrne',
  'caeon',
  'ostîa',
  'clòte',
  'tanpa',
  'ëntin',
  'stéca',
  'adrwé',
  'fetou',
  'fèrmó',
  'fonsa',
  'rêcha',
  'atèlè',
  'tsati',
  'petró',
  'canpó',
  'trapó',
  'chaea',
  'mòrga',
  'râche',
  'stecó',
  'wacôo',
  'óoule',
  'tséja',
  'béite',
  'verin',
  'póson',
  'manti',
  'dibló',
  'éivwa',
  'crâné',
  'côlon',
  'wanda',
  'eriti',
  'tsebó',
  'flama',
  'crója',
  'étsêe',
  'ataca',
  'vwese',
  'noole',
  'flóta',
  'pëngi',  
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
