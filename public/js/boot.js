var ColorFall = {};

ColorFall.Boot = function(game){};
ColorFall.Boot.prototype = {
  preload: function(){
  	this.load.image('loading', 'img/loader.png');
  },
  create: function(){
    this.input.maxPointers = 1;
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignHorizontally = true;

    this.state.start('Preloader');
  }
};