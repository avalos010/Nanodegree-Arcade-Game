
// Enemies our player must avoid
const Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
     this.x = x;
     this.y = y;
     this.speed = speed;
     
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt,x) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;


    //if it goes off canvas reset x-axis back -100
       if (this.x > 500) {
        this.x = -100;
        this.speed = 80 + Math.floor(Math.random() * 400);
    } 

    //Check if player and enemy crash   
     if (player.x < this.x + 60 && player.x + 40 > this.x && player.y < this.y + 25 && 30 + player.y > this.y) {
        player.x = player.min_X;
        player.y = player.max_Y;
        alert('You Lose! Try Again');
    }
     

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
const Player = function(x,y) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    this.min_X = 0;
    this.max_X = 400;
    this.min_Y = -10;
    this.max_Y = 400;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
Player.prototype.update = function(dt) {
    //keeping constant speed so no change here
};

Player.prototype.render = function() {
ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(input) {
if(input === 'left' && this.x > this.min_X) {
   this.x -= 100;
}
else if(input === 'right' && this.x < this.max_X) {
    this.x += 100;
}
else if(input === 'up' && this.y > this.min_Y) {
    this.y -= 90
    if(this.y === -50) {
        alert('You Win!!');
        this.y = 400;
    }
}
else if(input === 'down' && this.y < this.max_Y) {
    this.y += 90
}
};

let allEnemies = [];
const player = new Player(0,400);
//3 y-axis locations for the enemies
const enemy_Y_Locations = [50,135,220];

//push 3 enemies with random speeds to allEnemies array
enemy_Y_Locations.map(y => allEnemies.push(new Enemy(0,y, 80 + Math.floor(Math.random() * 400))));
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    const allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
