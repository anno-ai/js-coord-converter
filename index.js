
module.exports = {
    minMaxToCornerFormat: function (xMin, xMax, yMin, yMax) {
      return {
        left: Math.round(xMin),
        top: Math.round(yMin),
        width: Math.round((xMax - xMin)),
        height: Math.round((yMax - yMin))
      }
    },
    cornerFormatToMinMax: function (left, top, width, height) {
      return {
        xMin: left,
        yMin: top,
        xMax: left + width,
        yMax: top + height
      }
    }
  }
  