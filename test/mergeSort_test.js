import { expect } from 'chai'
import mergeSort from '../src/mergeSort'

describe('mergeSort()', function() {

it('should be a function', function() {
  expect(mergeSort).to.be.a('function')
})

it('returns an ordered array', function() {
  expect( mergeSort([ 2, 7, 5, 8, 3, 6, 1, 4, 9]) ).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9])
})

})
