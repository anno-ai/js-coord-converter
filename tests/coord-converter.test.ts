import { minMaxToCornerFormat, cornerToMinMaxFormat, pointsToCornerFormat, pointsToMinMaxFormat } from '../lib'
export {}
import chai = require('chai')
const assert = chai.assert

describe('coord-converter: minMaxToCornerFormat', () => {
  it('should verify the left, top, width and height from mins and maxes given', () => {
    const coords0 = minMaxToCornerFormat(1, 10, 5, 10)
    assert.equal(coords0.left, 1)
    assert.equal(coords0.top, 5)
    assert.equal(coords0.width, 9)
    assert.equal(coords0.height, 5)
  })
})

describe('coord-converter: cornerToMinMaxFormat', () => {
  it('should verify xMin, xMax, yMin, yMax from corner given', () => {
    const coords1 = cornerToMinMaxFormat(-5, 10, 10, 10)
    assert.equal(coords1.xMin, 0)
    assert.equal(coords1.xMax, 5)
    assert.equal(coords1.yMin, 10)
    assert.equal(coords1.yMax, 20)
  })
})

describe('coord-converter: pointsToCornerFormat', () => {
  it('should verify left, top, width, height from points given', () => {
    const coords2 = pointsToCornerFormat([{ x: 0, y: -10 }, { x: 2, y: 10 }, { x: 3, y: 5 }, { x: 0, y: 10 }])
    assert.equal(coords2.left, 0)
    assert.equal(coords2.top, 0)
    assert.equal(coords2.width, 3)
    assert.equal(coords2.height, 10)
  })
})

describe('coord-converter: pointsToMinMaxFormat', () => {
  it('should verify xMin, XMax, yMin, yMax from points given', () => {
    const coords3 = pointsToMinMaxFormat([{ x: 0, y: -2 }, { x: 2, y: 5 }, { x: 5, y: -5 }, { x: -1, y: 0 }])
    assert.equal(coords3.xMin, 0)
    assert.equal(coords3.xMax, 5)
    assert.equal(coords3.yMin, 0)
    assert.equal(coords3.yMax, 5)
  })
})
