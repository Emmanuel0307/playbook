export function log (message) {
    console.log(message)
  }

  
export const DEFAULT_LEVEL = 'info'

// exports an object
export const LEVELS = {
  error: 0,
  debug: 1,
  warn: 2,
  data: 3,
  info: 4,
  verbose: 5
}

// exports a class
export class Logger {
  constructor (name) {
    this.name = name
  }

  loger (message) {
    console.log(`[${this.name}] ${message}`)
  }
}