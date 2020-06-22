# js-coord-converter

# Usage
Helper functions that can be used to convert xMin, xMax, yMin, yMax coordinates to top, left, width, height coordinates, and vice versa.

```
const xMin = 1
const xMax = 10
const yMin = 1
const yMax = 10

var coords = minMaxToCornerFormat(xMin, xMax, yMin, yMax)
console.log(coords)
// {top: 1, left: 1, width: 9, height: 9}

coords = cornerFormatToMinMax(coords.top, coords.left, coords.width, coords.height)
console.log(coords)
// {xMin: 1, yMin: 1, xMax: 10, yMax: 10}

```