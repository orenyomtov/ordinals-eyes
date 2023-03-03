import { Laser, LaserMeta } from "./types"

import ordinalsCircle from "../static/ordinals-circle.png"
export const LASERS = new Map<Laser, LaserMeta>([
  [Laser.OrdinalsCircle, { src: ordinalsCircle, name: "ordinals-circle" }],
])

export const STAGE_CONFIG = {
  width: 540,
  height: 415,
}

export const LASER_SIZE = 50
export const SCALE_FACTOR = 2
