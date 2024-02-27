const map = require('../map')

// we create a mock for our callback function
const mockCallback = jest.fn((num) => {
  return num * 2
})

test('test map function', () => {
  // call map and pass the mocked function:
  map([1, 2, 3, 4, 5], mockCallback)

  // test that our mockCallback was called five times
  expect(mockCallback.mock.calls).toHaveLength(5)

  // use the .mock property to see return values for our mock callback
  // expect(mockCallback.mock.calls[0][0]).toBe(2)
  console.log(mockCallback.mock.calls)
})
