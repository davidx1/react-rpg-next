export enum Commands {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

export const movementMaps: { [key: string]: Commands } = {
  ArrowUp: Commands.UP,
  ArrowDown: Commands.DOWN,
  ArrowLeft: Commands.LEFT,
  ArrowRight: Commands.RIGHT,
}
