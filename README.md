# js-coord-converter

# Usage
Helper functions that can be used to convert min-max coordinates to corner coordinates, and vice versa.
```
const xMin = 1
const xMax = 10
const yMin = 2
const yMax = 12

const coords = minMaxToCornerFormat(xMin, xMax, yMin, yMax)
console.log(coords)
// -> {left, top, width, height}

```