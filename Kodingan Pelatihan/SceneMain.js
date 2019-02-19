export default class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }
  preload(){
    // music
    this.load.audio('bgm',['assets/audio/bgm.ogg',
    'assets/audio/bgm.wav']);
    this.load.audio('jumpFx', ['assets/audio/jump.ogg','assets/audio/jump.wav']);
    // AREA
    this.load.image('bg','assets/playfield/bg.png');
    this.load.image('area','assets/playfield/area.png');
    //player
    this.load.spritesheet('player-idle','assets/player/player-idle.png',{ frameWidth: 80,frameHeight:80 } );
    this.load.spritesheet('player-run','assets/player/player-run.png',{ frameWidth:80, frameHeight:80 } );
    this.load.spritesheet('player-shoot','assets/player/player-run-shot.png',{ frameWidth:80, frameHeight:80 } );
    this.load.spritesheet('player-jump','assets/player/player-jump.png',{ frameWidth:80, frameHeight:80 } );
    //effect
    this.load.spritesheet('shoot','assets/fx/shot.png', { frameWidth:6, frameHeight: 4});
    //enemy
    this.load.spritesheet('monster-idle','assets/monster/crab-idle.png', {frameWidth:48, frameHeight:32 })
    this.load.spritesheet('monster-walk','assets/monster/crab-walk.png', {frameWidth:48, frameHeight:32 })
  }
  create(){
    // Define our objects

    // set timer untuk spawn enemy
    this.timerToActive = 0;
    //banyaknya enemy yang telah di spawn
    this.spawn = 0;
    //set inisiasi wave
    this.wave = 1;
    //inisiasi music
    this.jumpFx = this.sound.add('jumpFx',{
      loop: false
    });
    this.bgm = this.sound.add('bgm',{
      loop: true
    });
    this.bgm.play();
      //AREA
      this.add.image(0,0,'bg').setOrigin(0,0);
      this.add.image(0,0,'area').setOrigin(0,0);
      //enemy group
      this.monsters = this.physics.add.group();
      //player
      this.player = this.physics.add.sprite(320,300,'player-idle');
      this.player.setCollideWorldBounds(true);
      this.player.setGravityY(400);
      this.player.setSize(32,80);//merubah ukuran collider
      //bullet
      this.bullet = this.physics.add.group();

      //check shooting
      this.isShooting = false;

      //floor
        //floor tengah
        this.floor = this.physics.add.sprite(0,480).setOrigin(0,0);
        this.floor.displayWidth = 640;
        this.floor.displayHeight = 60;
        this.floor.setCollideWorldBounds(true);
        this.floor.body.immovable = true;
        //floor kiri
        this.floor2 = this.physics.add .sprite(0,480).setOrigin(0,0);
        this.floor2.displayWidth = 120;
        this.floor2.displayHeight = 150;
        this.floor2.setCollideWorldBounds(true);
        this.floor2.body.immovable = true;
        //floor kanan
        this.floor3 = this.physics.add .sprite(640,480).setOrigin(0,0);
        this.floor3.displayWidth = 100;
        this.floor3.displayHeight = 150;
        this.floor3.setCollideWorldBounds(true);
        this.floor3.body.immovable = true;

        // //input keys
        this.cursors = this.input.keyboard.createCursorKeys();
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

      //animation
      this.anims.create ({
        key: 'p-idle',
        frames: this.anims.generateFrameNumbers('player-idle',{ start:0, end:3 }),
        frameRate: 10,
        repeat: -1
      });

    this.anims.create ({
        key: 'p-run',
        frames: this.anims.generateFrameNumbers('player-run',{ start:0, end:9}),
        frameRate: 10,
        repeat: -1
      });

        this.anims.create ({
            key: 'p-jump',
            frames: this.anims.generateFrameNumbers('player-jump',{ start:0, end:5}),
            frameRate: 10,
            repeat: -1
          });
          this.player.anims.play('p-idle',true);
       this.anims.create ({
              key: 'p-shoot',
              frames: this.anims.generateFrameNumbers('player-shoot',{ start:0, end:9}),
              frameRate: 10,
              repeat: -1
            });

        this.anims.create ({
                  key: 'shooting',
                  frames: this.anims.generateFrameNumbers('shoot',{ start:1, end:1}),
                  frameRate: 10,
                  repeat: -1
            });

        this.anims.create ({
              key: 'p-shooti',
              frames: this.anims.generateFrameNumbers('player-shoot',{ start:1, end:1}),
              frameRate: 10,
              repeat: -1
            });
        this.anims.create ({
              key: 'crab-idle',
              frames: this.anims.generateFrameNumbers('monster-idle',{ start:0, end:3}),
              frameRate: 8,
              repeat: -1
            });

      //collider
      this.physics.add.collider(this.player,this.floor);
      this.physics.add.collider(this.player,this.floor2);
      this.physics.add.collider(this.player,this.floor3);
      //cllider untuk enemy terhadap floor
      this.physics.add.collider(this.monsters,this.floor);
      this.physics.add.collider(this.monsters,this.floor2);
      this.physics.add.collider(this.monsters,this.floor3);
      //overlap
      this.physics.add.overlap(this.bullet,this.monsters,this.enemyDead.bind(this)); //player nanti diganti bullet
}
    enemyDead(bullet,enemy){
        bullet.destroy();
        enemy.destroy();
    }

    timeSpawn(timer){
      this.timerToActive--;
      if (this.timerToActive < 0) {
        // Method spawnEnemy
        this.spawnEnemy();
        this.timerToActive = timer;
      }
    }
    currentWave(wave){
      switch (wave) {
        case 1:
          return 5;
        case 2:
          return 7;
        case 3:
          return 10;
      }
    }
    spawnEnemy(){
      console.log("spawned  " +this.wave);
      if(this.spawn !=this.currentWave(this.wave)){
        var rand = Phaser.Math.Between(0,1);
        if (rand == 1) {
          var crabMonster = this.monsters.create(100,300,'monster-idle');
          crabMonster.anims.play('crab-idle');
        }
        else {
          var crabMonster = this.monsters.create(550,300,'monster-idle');
          crabMonster.anims.play('crab-idle');
        }
        this.spawn += 1;
      }
      else if (this.spawn == this.currentWave(this.wave) && this.monsters.countActive(true) == 0) {
        this.wave++;
        this.spawn = 0;
      }
    }

doShoot(arah){
  if(this.isShooting ==false) {
  if(arah==true) {
    var peluru = this.bullet.create(this.player.x - 20,this.player.y + 15,'shoot');
    peluru.anims.play('shooting');
    peluru.body.setVelocityX(-450);
  } else {
    var peluru = this.bullet.create(this.player.x + 20,this.player.y + 15,'shoot');
    peluru.anims.play('shooting');
    peluru.body.setVelocityX(450);
    }
    this.isShooting = true;
    this.time.addEvent ({
      delay : 250,
      callback: () => {
        this.isShooting = false;
      }
    });
  }
}
  update(){
      this.timeSpawn(180);
      //running
      if(!this.player.body.touching.down) {
        if(this.cursors.left.isDown) {
          this.player.flipX = true;
          this.player.setVelocityX(-160);
        } else if(this.cursors.right.isDown){
          this.player.flipX = false;
          this.player.setVelocityX(160);
        } else {
          this.player.setVelocityX(0);
        }
      } else if(this.spaceKey.isDown && this.player.body.touching.down){
         if(this.cursors.left.isDown) {
          this.player.flipX= true;
          this.player.setVelocityX(-160);
          this.player.anims.play('p-shoot',true);
        } else if(this.cursors.right.isDown){
          this.player.flipX = false;
          this.player.setVelocityX(160);
          this.player.anims.play('p-shoot',true);
        } else {
          this.player.setVelocityX(0);
          this.player.anims.play('p-shooti',true);
         }

        this.doShoot(this.player.flipX);
      } else {
         if(this.cursors.left.isDown) {
           this.player.flipX = true;
           this.player.setVelocityX(-160);
           this.player.anims.play('p-run',true);
         } else if (this.cursors.right.isDown) {
           this.player.flipX = false;
           this.player.setVelocityX(160);
           this.player.anims.play('p-run',true);
          }
          else {
            this.player.setVelocityX(0);
            this.player.anims.play('p-idle',true);
          }
        }
        if(this.cursors.up.isDown && this.player.body.touching.down){
          this.player.setVelocityY(-330);
          this.player.anims.play('p-jump',true);
          this.jumpFx.play();
        }
        this.monsters.children.each(enemy => {
          if(this.player.x < enemy.x){
            enemy.body.setGravityY(400);
            enemy.flipX = false;
            enemy.setVelocityX(-30);
          } else {
            enemy.body.setGravityY(400);
            enemy.flipX = true;
            enemy.setVelocityX(30);
          }
        });
      }
    }
