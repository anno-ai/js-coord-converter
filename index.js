const min = require('lodash/min')
const max = require('lodash/max')

module.exports = {
    minMaxToCornerFormat: function (xMin, xMax, yMin, yMax) {
      return {
        left: Math.round(xMin),
        top: Math.round(yMin),
        width: Math.round((xMax - xMin)),
        height: Math.round((yMax - yMin))
      }
    },
    cornerToMinMaxFormat: function (left, top, width, height) {
      return {
        xMin: left,
        yMin: top,
        xMax: left + width,
        yMax: top + height
      }
    },

    /**
     * [ 
     *   {x: 0, y, 0}, 
     *   {x: 0, y, 0}, 
     *   {x: 0, y, 0}, 
     *   {x: 0, y, 0}... 
     * ]
     * 
     * To
     * 
     * {
     *   left: 0,
     *   top: 0, 
     *   width: 0,
     *   height: 0
     * }
     * @return  {object}
     */
    pointsToCornerFormat: function (points = []) {
      const left = min(points.map((point) => point.x))
      const top = min(points.map((point) => point.y))
      return {
        left: Math.round(left),
        top: Math.round(top),
        width: Math.round(max(points.map((point) => point.x)) - left),
        height: Math.round(max(points.map((point) => point.y)) - top)
      }
    },

    /**
     * [ 
     *   {x: 0, y, 0}, 
     *   {x: 0, y, 0}, 
     *   {x: 0, y, 0}, 
     *   {x: 0, y, 0}... 
     * ]
     * 
     * To
     * 
     * {
     *   xMin: 0,
     *   xMax: 0, 
     *   yMin: 0,
     *   yMax: 0
     * }
     * @return  {object}
     */
    pointsToMinMaxFormat: function (points = []) {
      const { left, top, width, height } = module.exports.pointsToCornerFormat(points)
      return module.exports.cornerToMinMaxFormat(left, top, width, height )
    }
  }
  