import { min, max } from 'lodash'

type Point = {
  x: number;
  y: number
}

export function minMaxToCornerFormat (xMin: number, xMax: number, yMin: number, yMax: number) {
  return {
    left: Math.max(0, Math.round(xMin)),
    top: Math.max(0, Math.round(yMin)),
    width: Math.max(0, Math.round((xMax - xMin))),
    height: Math.max(0, Math.round((yMax - yMin)))
  }
}

export function cornerToMinMaxFormat (left: number, top: number, width: number, height: number) {
  return {
    xMin: Math.max(0, Math.round(left)),
    yMin: Math.max(0, Math.round(top)),
    xMax: Math.max(0, Math.round(left + width)),
    yMax: Math.max(0, Math.round(top + height))
  }
}

/**
  * [{x: 0, y, 0}, {x: 0, y, 0}, {x: 0, y, 0}, {x: 0, y, 0}...]
  * To
  * { left: 0, top: 0, width: 0, height: 0 }
  * @return {object}
  */

export function pointsToCornerFormat (points: Point[]) {
  const left: any = Math.max(0, min(points.map((point: Point) => point.x))!)
  const top: any = Math.max(0, min(points.map((point: Point) => point.y))!)
  const width: any = (max(points.map((point: Point) => point.x))! - left)
  const height: any = (max(points.map((point: Point) => point.y))! - top)
  return {
    left: Math.max(0, Math.round(left)),
    top: Math.max(0, Math.round(top)),
    width: Math.max(0, Math.round(width)),
    height: Math.max(0, Math.round(height))
  }
}

/**
  * [{x: 0, y, 0}, {x: 0, y, 0}, {x: 0, y, 0}, {x: 0, y, 0}...]
  * To
  * { xMin: 0, xMax: 0, yMin: 0, yMax: 0 }
  * @return  {object}
  */
export function pointsToMinMaxFormat (points: Point[]) {
  const { left, top, width, height } = pointsToCornerFormat(points)
  return cornerToMinMaxFormat(left, top, width, height)
}
