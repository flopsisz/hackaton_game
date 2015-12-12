var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('ball', 'file://' + __dirname + '/assets/bumba.png');
    game.load.image('plank','file://' + __dirname + '/assets/delis.png')
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    var graphics = game.add.graphics(game.world.centerX, game.world.centerY);

    graphics.lineStyle(8, 0xffd900);

    graphics.drawEllipse(100, 100, 200, 60);

    graphics.boundsPadding = 0;


    platforms = game.add.group();
    platforms.enableBody = true;

    var ground = platforms.create(0, game.world.height - 64, 'plank');
    ground.scale.setTo(2, 2);
    ground.body.immovable = true;

    var ledge = platforms.create(400,400,'plank');

    ledge.body.immovable = true;

    player = game.add.sprite(32, game.world.height - 150, 'ball');
    game.physics.arcade.enable(player);

    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);

}

function update() {
    game.physics.arcade.collide(player, platforms);
    cursors = game.input.keyboard.createCursorKeys();
    player.body.velocity.x = 150;

    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;

        player.animations.play('left');
    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;

        player.animations.play('right');
    }
    else
    {
        //  Stand still
        player.animations.stop();

        player.frame = 4;
    }

    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -350;
    }
}