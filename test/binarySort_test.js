import { expect } from 'chai'
import binarySort from '../src/binarySort'

describe('binarySort()', function() {

  it('should be a function', function() {
  expect(binarySort).to.be.a('function')
  })

  it('returns position of the searched for number', function() {
    expect(binarySort([5, 10, 15, 20, 25, 30, 35, 40, 45, 50], 45)).to.deep.equal(8)
  });

})
