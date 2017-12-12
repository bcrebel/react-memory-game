// Use `npm run test` to run the test suite on demand;
// `npm run test-watch` will re-run it automatically with every code change.

import { formatTime } from './Timer'

test('Test invalid time ', () => {
  expect(formatTime(-1)).toBe('--:--')
})

test('Test t=0', () => {
  expect(formatTime(0)).toBe('0:00')
})

test('Test t < 1min', () => {
  expect(formatTime(55)).toBe('0:55')
})

test('Test 1min < t < 1hr', () => {
  expect(formatTime(65)).toBe('1:05')
})

test('Test t > 1hr', () => {
  expect(formatTime(3601)).toBe('1:00:01')
})
