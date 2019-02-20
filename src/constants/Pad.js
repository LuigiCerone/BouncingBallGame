import { field_constants } from './Field';

/** Constants related to both pads. */
const pad_constants = {

    PAD_HEIGHT: 40,
    PAD_WIDTH: 10,
    PAD_SPEED: 10,

    SPACE_FROM_BORDER: 5,

}

/** Constants related to the specific pad. */
const size_constants = {

    LEFT_PAD_X: pad_constants.SPACE_FROM_BORDER,
    LEFT_PAD_Y: (field_constants.HEIGHT / 2) - (pad_constants.PAD_HEIGHT / 2),
    RIGHT_PAD_X: field_constants.WIDTH - pad_constants.PAD_WIDTH - pad_constants.SPACE_FROM_BORDER,
    RIGHT_PAD_Y: (field_constants.HEIGHT / 2) - (pad_constants.PAD_HEIGHT / 2),
}

export { pad_constants, size_constants };