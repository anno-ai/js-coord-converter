import min = require('lodash/min')
import max = require('lodash/max')

export async function minMaxToCornerFormat (xMin: number, xMax: number, yMin: number, yMax: number) {
  return {
    left: Math.round(xMin),
    top: Math.round(yMin),
    width: Math.round((xMax - xMin)),
    height: Math.round((yMax - yMin))
  }
}

export async function cornerToMinMaxFormat (left: number, top: number, width: number, height: number) {
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
     * @return {object}
     */

    type Point = {
        x: any;
        y: any
    }

export function pointsToCornerFormat (points: [Point]) {
  const left: any = min(points.map((point: any) => point.x))
  const top: any = min(points.map((point: any) => point.y))
  const width: any = (max(points.map((point: any) => point.x)) - left)
  const height: any = (max(points.map((point: any) => point.y)) - top)
  return {
    left: Math.max(0, Math.round(left)),
    top: Math.max(0, Math.round(top)),
    width: Math.max(0, Math.round(width)),
    height: Math.max(0, Math.round(height))
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
export function pointsToMinMaxFormat (points: [Point]) {
  const { left, top, width, height } = pointsToCornerFormat(points)
  return module.exports.cornerToMinMaxFormat(left, top, width, height)
}
