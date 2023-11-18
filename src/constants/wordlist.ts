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
  'caeon',
  'póson',
  'winga',
  'mowën',
  'cowin',
  'cwéna',
  'anese',
  'gordó',
  'pinna',
  'crwéi',
  'close',
  'afron',
  'mepri',  
  'dótâa',
  'regōo',
  'cómin',
  'popló',
  'chóta',
  'rejën',
  'apréi',
  'infan',
  'wenya',
  'braji',
  'mazîe',
  'ëndri',
  'pyoca',
  'motse',
  'verin',
  'trati',
  'égawé',
  'chîwa',
  'câkyé',
  'norën',
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
