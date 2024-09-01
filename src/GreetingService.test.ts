import { greeting } from './GreetingService'

describe('GreetingService', () => {
  it('greeting returns string', () => {
    expect(greeting()).toBe('Hello Everyone')
  })
})
