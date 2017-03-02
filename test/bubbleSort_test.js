import { expect } from 'chai'
import bubbleSort from '../src/bubbleSort'

describe('bubbleSort()', function() {

  it('should be a function', function() {
  expect(bubbleSort).to.be.a('function')
  })

  it('returns an ordered array', function() {
    expect(bubbleSort([2, 7, 5, 8, 3, 6, 1, 4, 9])).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9])
  });

})
