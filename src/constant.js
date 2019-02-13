const constants = {

    /** Constants related to both pads. */
    PAD_HEIGHT: 40,
    PAD_WIDTH: 10,
    PAD_SPEED: 10,

    /** Constants related to the specific pad. */
    SPACE_FROM_BORDER: 5,
    LEFT_PAD_X: SPACE_FROM_BORDER,
    LEFT_PAD_Y: (HEIGHT / 2) - (PAD_HEIGHT / 2),
    RIGHT_PAD_X: WIDTH - PAD_WIDTH - SPACE_FROM_BORDER,
    RIGHT_PAD_Y: (HEIGHT / 2) - (PAD_HEIGHT / 2),

    /** Constants relatede to the ball size and speed. */
    BALL_SIZE: 10,
    BALL_SPEED_X: +8,
    BALL_SPEED_Y: -8
}

export { constants };