import { minMaxToCornerFormat, cornerToMinMaxFormat, pointsToCornerFormat, pointsToMinMaxFormat } from '../lib'
import { isMainThread } from 'worker_threads'
import { isNumber } from 'util'
const chai = require('chai')
const assert = chai.assert

describe('coord-converter: minMaxToCornerFormat', () => {
    it('should verify the left, top, width and height from mins and maxes given', async () => {
        // const xMin = 0
        // const xMax = 50
        // const yMin = 0
        // const yMax = 50
        const coords0 = await minMaxToCornerFormat(0, 10, 0, 10)
        assert.isNumber(coords0)
    })
})

describe('coord-converter: cornerToMinMaxFormat', () => {
    it('should verify xMin, xMax, yMin, yMax from corner given', async () => {
        const coords1 = await cornerToMinMaxFormat(0, 10, 10, 10)
        assert.isNumber(coords1)
    })
})

describe ('coord-converter: pointsToCornerFormat', () => {
    it('should verify left, top, width, height from points given', async () => {
        const coords2 = await pointsToCornerFormat()
        assert.isNumber(coords2)
    })
})

describe ('coord-converter: pointsToMinMaxFormat', () => {
    it('should verify xMin, XMax, yMin, yMax from points given', async () => {
        const coords3 = await pointsToMinMaxFormat()
        assert.isNumber(coords3)
    })
})