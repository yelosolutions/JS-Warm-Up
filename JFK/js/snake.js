/**PSEUDOCODE
 * Set up the canvas
 * Set score to zero

 * Create snake
 * Create apple

 * Every 100 milliseconds {
    Clear the canvas
    Draw current score on the screen
    Move snake in current direction
    If snake collides with wall or itself {
        End the game
    } Else If snake eats an apple {
        Add one to score
        Move apple to new location
        Make snake longer
    }
    For each segment of the snake {
        Draw the segment
    }
    Draw apple
    Draw border
    }
    When the user presses a key {
        If the key is an arrow {
            Update the direction of the snake
        }
    }
 */

var canvas = document.getElementById('canvas');
