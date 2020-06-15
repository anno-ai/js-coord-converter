import { minMaxToCornerFormat, cornerToMinMaxFormat, pointsToCornerFormat, pointsToMinMaxFormat } from '../lib'
const chai = require('chai')
const assert = chai.assert

describe('coord-converter: minMaxToCornerFormat', () => {
    it('should verify the left, top, width and height from mins and maxes given', async () => {
        const coords0 = await minMaxToCornerFormat(0, 10, 0, 10)
        assert(coords0)
        console.log(coords0)
    })
})

describe('coord-converter: cornerToMinMaxFormat', () => {
    it('should verify xMin, xMax, yMin, yMax from corner given', async () => {
        const coords1 = await cornerToMinMaxFormat(0, 10, 10, 10)
        assert(coords1)
        console.log(coords1)
    })
})

describe ('coord-converter: pointsToCornerFormat', () => {
    it('should verify left, top, width, height from points given', async () => {
        const coords2 = await pointsToCornerFormat([{x: 0, y:10}])
        assert(coords2)
        console.log(coords2)
    })
})

describe ('coord-converter: pointsToMinMaxFormat', () => {
    it('should verify xMin, XMax, yMin, yMax from points given', async () => {
        const coords3 = await pointsToMinMaxFormat([{x: 1, y:2}])
        assert(coords3)
        console.log(coords3)
    })
})
