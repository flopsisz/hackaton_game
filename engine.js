var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('star', 'file://' + __dirname + '/assets/star2.png');
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    player = game.add.sprite(32, game.world.height - 150, 'star');
    game.physics.arcade.enable(player);
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);

}

function update() {
}