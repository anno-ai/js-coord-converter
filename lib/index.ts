import min = require('lodash/min')
import max = require('lodash/max')

export function minMaxToCornerFormat (xMin: number, xMax: number, yMin: number, yMax: number) {
    return {
        left: Math.round(xMin),
        top: Math.round(yMin),
        width: Math.round((xMax - xMin)),
        height: Math.round((yMax - yMin))
      }
    }

export function cornerToMinMaxFormat (left: number, top: number, width: number, height: number) {
    return {
        xMin: left,
        yMin: top,
        xMax: left + width,
        yMax: top + height
    }
}

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
export function pointsToCornerFormat (points: any) {
      const left = min(points.map((point) => point.x))
      const top = min(points.map((point) => point.y))
      return {
        left: Math.round(left),
        top: Math.round(top),
        width: Math.round(max(points.map((point) => point.x)) - left),
        height: Math.round(max(points.map((point) => point.y)) - top)
      }
    }

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
export function pointsToMinMaxFormat (points = []) {
      const { left, top, width, height } = module.exports.pointsToCornerFormat(points)
      return module.exports.cornerToMinMaxFormat(left, top, width, height )
    }

  