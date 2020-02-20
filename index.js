const min = require('lodash/min')

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
    pointsToCornerFormat: function (points) {
      const left = min(points.map((point) => point.x))
      const top = min(points.map((point) => point.y))
      return {
        left: Math.round(left),
        top: Math.round(top),
        width: Math.round(max(points.map((point) => point.x)) - left),
        height: Math.round(max(points.map((point) => point.y)) - top)
      }
    }
  }
  