import level1 from '@/assets/levels/level-1'

const scriptedLevels = { level1 }

export default class {
  constructor (opts = {}) {
    this.level = opts.level || 1

    this.scripted = scriptedLevels[`level${this.level}`] || {}
  }
}
