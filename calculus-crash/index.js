var stage = createStage(1366, 768);
var oneSlyMove = Sound.from({
  url: 'music/OneSlyMove.mp3',
  preload: true,
});
var stereoMadnessSong = Sound.from({
  url: 'music/stereomadness.mp3',
  preload: true
});

var backOnTrackSong = Sound.from({
  url: 'music/BackOnTrack.mp3',
  preload: true
});

function preloadTextures() {
  Texture.from("textures/allgrid.png");
  Texture.from("textures/allslab.png");
  Texture.from("textures/arrow.png");
  Texture.from('textures/box.png');
  Texture.from("textures/easy.png");
  Texture.from("textures/floor.jpg");
  Texture.from("textures/leftgrid.png");
  Texture.from("textures/leftrightgrid.png");
  Texture.from("textures/nonegrid.png");
  Texture.from("textures/playbutton.png");
  Texture.from("textures/rightgrid.png");
  Texture.from("textures/ship.png");
  Texture.from("textures/shipportal.png");
  Texture.from("textures/spike.png");
  Texture.from("textures/square.png");
  Texture.from("textures/topbottomgrid.png");
  Texture.from("textures/topbottomleftgrid.png");
  Texture.from("textures/topbottomleftslab.png");
  Texture.from("textures/topbottomrightslab.png");
  Texture.from("textures/topgrid.png");
  Texture.from("textures/topleftgrid.png");
  Texture.from("textures/topleftrightgrid.png");
  Texture.from("textures/toprightgrid.png");
  Texture.from('textures/squareportal.png');
  Texture.from('textures/bottomleftrightgrid.png');
  Texture.from('textures/bottomrightgrid.png');
  Texture.from('textures/bottomgrid.png');
  Texture.from('textures/bottomleftgrid.png');
  Texture.from('textures/topbottomrightgrid.png');
  Texture.from('textures/menubutton.png');
  Texture.from('textures/restartbutton.png');
  Texture.from('textures/background.jpg');
  Texture.from('textures/thorns.png');
  Texture.from('textures/levelcomplete.png');
  
}

function showMainMenu() {
  if(!oneSlyMove.isPlaying)
    oneSlyMove.play({ volume: 0.1, loop: true });
  stage.children.destroy();
  stage.backgroundColor = css('black');
  var mainMenu = new Container(1366, 768);

  var epic = Sprite.from('textures/epic.jpg').show(mainMenu);

  var logo = Sprite.from('textures/logo.png');
  logo.anchor.set(0.5, 0.5);
  logo.position.set(683, 100);
  logo.show(mainMenu);

  var madeby = Sprite.from('textures/madeby.png');
  madeby.anchor.set(0.5, 0.5);
  madeby.position.set(683, 684);
  madeby.scale.set(0.65, 0.65);
  madeby.show(mainMenu);

  var playButton = Sprite.from('textures/playbutton.png');
  playButton.anchor.set(0.5, 0.5);
  playButton.position.set(683, 384);
  playButton.scale.set(0.65, 0.65);
  playButton.show(mainMenu);
  playButton.click(x => {
    showLevelMenu();
  });
  mainMenu.show(stage);
}

function showLevelMenu() {
  stage.children.destroy();
  if(!oneSlyMove.isPlaying)
    oneSlyMove.play({ volume: 0.1, loop: true });
  var levelMenu = new Container(1366, 768);  
  var stereoMadness = new Container(1366, 768);
  var lvl1Background = new Graphics()
    .beginFill(css('blue'))
    .drawRect(0, 0, 1366, 768)
    .show(stereoMadness);
  var lvl1TextBox = new Graphics()
    .beginFill(css('darkblue'))
    .drawRect(273.2, 125, 819.6, 225);
  lvl1TextBox.alpha = 0.65;
  lvl1TextBox.show(stereoMadness);
  lvl1TextBox.click(() => {
    stage.children.destroy();
    oneSlyMove.stop();
    startLevel(1);
  });

  var easyFace = Sprite.from('textures/easy.png');
  easyFace.anchor.set(0.5);
  easyFace.scale.set(0.085);
  easyFace.show(stereoMadness).at(373.2, 235);
  
  var lvl1Text = new Text("Stereo Madness", { fontFamily: 'Orelega One', fontSize: 60 });
  lvl1Text.position.set(480, 190);
  lvl1Text.style.fill = css('white');
  lvl1Text.show(stereoMadness);

  var normalModeText = new Text("Normal Mode", { fontFamily: 'Orelega One', fontSize: 35 });
  normalModeText.anchor.set(0.5, 0.5);
  normalModeText.position.set(512, 384);
  normalModeText.style.fill = css('white');
  normalModeText.show(stereoMadness); 

  stereoMadness.show(levelMenu);
  
  var backOnTrack = new Container(1366, 768)
    .at(1366, 0);
  stage.backgroundColor = css('magenta');
  var lvl2TextBox = new Graphics()
    .beginFill(css('black'))
    .drawRect(273.2, 125, 819.6, 225);
  lvl2TextBox.alpha = 0.65;
  lvl2TextBox.show(backOnTrack);
  lvl2TextBox.click(x => {
    stage.children.destroy();
    oneSlyMove.stop();
    startLevel(2);
  });

  var easyFace = Sprite.from('textures/easy.png');
  easyFace.anchor.set(0.5);
  easyFace.scale.set(0.085);
  easyFace.show(backOnTrack).at(373.2, 235);
  
  var lvl2Text = new Text("Back On Track", { fontFamily: 'Orelega One', fontSize: 60 });
  lvl2Text.position.set(480, 190);
  lvl2Text.style.fill = css('white');
  lvl2Text.show(backOnTrack);

  var normalModeText = new Text("Normal Mode", { fontFamily: 'Orelega One', fontSize: 35 });
  normalModeText.anchor.set(0.5, 0.5);
  normalModeText.position.set(512, 384);
  normalModeText.style.fill = css('white');
  normalModeText.show(backOnTrack); 

  backOnTrack.show(levelMenu);
  levelMenu.show(stage);

  var arrowLeft = Sprite.from("textures/arrow.png");
    arrowLeft.anchor.set(0.5);
    arrowLeft.rotation = -1.57295;
    arrowLeft.scale.set(0.3, 0.15);
    arrowLeft.position.set(60, 384);
    arrowLeft.show(stage);
  
  var arrowRight = Sprite.from("textures/arrow.png");
    arrowRight.anchor.set(0.5);
    arrowRight.rotation = 1.57295;
    arrowRight.scale.set(0.3, 0.15);
    arrowRight.position.set(1306, 384);
    arrowRight.show(stage);
  
  var backArrow = Sprite.from("textures/arrow.png");
    backArrow.anchor.set(0.5);
    backArrow.rotation = -1.57295;
    backArrow.scale.set(0.2, 0.2);
    backArrow.position.set(60, 60);
    backArrow.tint = 0x00e720;
    backArrow.show(stage);  

  backArrow.click(x => {
    showMainMenu();
  });

  arrowLeft.click(x => {
    levelMenu.x += 1366;
  });

  arrowRight.click(x => {
    levelMenu.x -= 1366;
  });
}

function startLevel(num) {
  // initialization
  stage.children.destroy();
  var song;
  if(num === 1) {
    song = stereoMadnessSong;
    song.play({ volume: 0.1 });
    stage.backgroundColor = css('blue');
  }
  if(num === 2) {
    song = backOnTrackSong;
    song.play({ volume: 0.1 });
    stage.backgroundColor = css('magenta');
  }
  var pause = false;
  window.onkeydown = function(gfg) {
    if(gfg.key === "Escape" && !pause) {
      var pauseMenu = new Graphics()
        .beginFill(css('black'))
        .drawRect(20, 20 - stage.y, 1326, 728);
      pauseMenu.alpha = 0.75;
      var resumeButton = Sprite.from('textures/playbutton.png');
      resumeButton.anchor.set(0.5, 0.5);
      resumeButton.show(pauseMenu).at(683, 384 - stage.y);
      resumeButton.scale.set(0.65, 0.65);
      var menuButton = Sprite.from('textures/menubutton.png');
      menuButton.anchor.set(0.5, 0.5);
      menuButton.show(pauseMenu).at(890, 384 - stage.y);
      menuButton.scale.set(2);
      var restartButton = Sprite.from('textures/restartbutton.png');
      restartButton.anchor.set(0.5, 0.5);
      restartButton.show(pauseMenu).at(1080, 384 - stage.y);
      restartButton.scale.set(2);
      pauseMenu.show(stage);
      pause = true;
      song.pause();
      resumeButton.click(() => {
        pauseMenu.destroy();
        pause = false;
        song.resume();
      });
      menuButton.click(() => {
        stage.y = 0;
        song.stop();
        showLevelMenu();
      });
      restartButton.click(() => {
        pauseMenu.destroy();
        pause = false;
        song.play({ volume: 0.1 });
        map.x = 0;
      });
    }
  };
  var gm = 'square';
  makeTimer();
  var rf = new Graphics()
    .beginFill(0)
    .drawRect(0, -320, 1366, 256)
    .tag("box")
    .show(stage);
  var squareContainer = new Container(64, 64);
  var squareImg = Sprite.from("textures/square.png")
    .show(squareContainer).at(32, 32);
  var squareHitbox = new Graphics()
    .beginFill(0xff0000)
    .drawRect(0, 0, 64, 52)
    .tag("squareHitbox")
    .show(squareContainer)
    .at(0, 12);
  squareHitbox.visible = false;
  squareImg.anchor.set(0.5);
  squareContainer.at(64 * 5, 500);
  var ship = Sprite.from('textures/ship.png');
  var floor;
  var backgroundImage;
  var map = new Container();
  map.step(() => {
    if(!pause) {
      map.x -= 11.0784 * deltaTime;
      if(gm == 'square') {
        var sy = stage.y + squareContainer.y;
        if (sy > 448 && stage.y != 0) {
          stage.y -= 3;
          background.y += 3;
        }
        if (sy < 192) {
          stage.y += 3;
          background.y -= 3;
        }
      }
    }
  });
  var background = new Container();
  background.step(() => {
    if(!pause) {
      background.x -= 2 * deltaTime;
    }
  });
  backgroundImage = new Sprite.from('textures/background.jpg')
    .show(background).at(0, 0);
  backgroundImage.scale.set(2);
  backgroundImage.blendMode = BLEND_MODES.MULTIPLY;
  background.show(stage);

  function changeBackground(x, c) {
    var g = new Graphics()
    .beginFill(0xff0000)
    .drawRect(0, 0, 4, 768)
    .at(x * 64, 0)
    .show(map);
    g.visible = false;
    g.step(() => {
      if(g.collides(squareHitbox)) {
        stage.backgroundColor = css(c);
        floor.tint = css(c);
      }
    });
  }

  function winLevel(x) {
    var g = new Graphics()
    .beginFill(0xff0000)
    .drawRect(0, 0, 4, 768)
    .at(x * 64, 0)
    .show(map);
    g.visible = false;
    g.step(() => {
      if(g.collides(squareHitbox)) {
        if(!pause) {
          showWinScreen();
        }
      }
    });
  }

  function showWinScreen() {
    var winMenu = new Graphics()
      .beginFill(css('black'))
      .drawRect(20, 20 - stage.y, 1326, 728);
    winMenu.alpha = 0.75;
    var levelComplete = Sprite.from('textures/levelcomplete.png')
      .show(winMenu);
    levelComplete.scale.set(0.75);
    levelComplete.anchor.set(0.5, 0.5);
    levelComplete.at(663, 100);
    var menuButton = Sprite.from('textures/menubutton.png');
    menuButton.anchor.set(0.5, 0.5);
    menuButton.show(winMenu).at(663 - 128, 384 - stage.y);
    menuButton.scale.set(2);
    var restartButton = Sprite.from('textures/restartbutton.png');
    restartButton.anchor.set(0.5, 0.5);
    restartButton.show(winMenu).at(663 + 128, 384 - stage.y);
    restartButton.scale.set(2);
    winMenu.show(stage);
    pause = true;
    song.pause();
    menuButton.click(() => {
      stage.y = 0;
      showLevelMenu();
    });
    restartButton.click(() => {
      winMenu.destroy();
      pause = false;
      song.play({ volume: 0.1 });
      map.x = 0;
      stage.y = 0;
    });
  }

  function jumpPad(x, y, c) {
    if(c == 'yellow') {
      var j = Sprite.from('textures/yellowpad.png')
        .show(map)
        .at(x * 64, (576 - (y * 64)));
    }
    var g = new Graphics()
      .beginFill(0xff0000)
      .drawRect(8, 60, 48, 4)
      .show(j);
    g.visible = false;
    g.step(() => {
      if(g.collides(squareHitbox)) {
        if(c == 'yellow')
          dy = -30;
      }
    });
  }
  
  function spike(x, y, r) {
    if(!r) {
      var s = Sprite.from("textures/spike.png")
        .show(map)
        .at(x * 64, (576 - (y * 64)));
      
      var g = new Graphics()
        .beginFill(0xff0000)
        .drawRect(28, 12, 8, 20)
        .tag("spike")
        .show(s);
      g.visible = false;
    }

    else {
      var s = Sprite.from("textures/spike.png")
        .show(map)
        .at((x * 64) + 32, (576 - ((y * 64)) + 32));
        s.anchor.set(0.5);
        s.rotation = r;
      
      var g = new Graphics()
        .beginFill(0xff0000)
        .drawRect(-4, -24, 8, 20)
        .tag("spike")
        .show(s);
      g.visible = false;
    }
    return s;
  }

  function smallSpike(x, y) {
    var ss = Sprite.from("textures/smallspike.png")
      .show(map)
      .at(x * 64, (576 - (y * 64)));

    var g = new Graphics()
      .beginFill(0xff0000)
      .drawRect(28, 32, 8, 20)
      .tag("spike")
      .show(ss);
    g.visible = false;
    return ss;
  }

  function thorns(x, y) {
    var ss = Sprite.from("textures/thorns.png")
      .show(map)
      .at(x * 64, (576 - (y * 64)));

    var g = new Graphics()
      .beginFill(0xff0000)
      .drawRect(0, 48, 64, 4)
      .tag("spike")
      .show(ss);
    g.visible = false;
    return ss;
  }

  function grid(x, y, t) {
    if(t == 'all') {
      var b = new Sprite.from('textures/allgrid.png');
    }
    if(t == 'none') {
      var b = new Sprite.from('textures/nonegrid.png');
    }
    if(t == 'top') {
      var b = new Sprite.from('textures/topgrid.png');
    }
    if(t == 'left') {
      var b = new Sprite.from('textures/leftgrid.png');
    }
    if(t == 'right') {
      var b = new Sprite.from('textures/rightgrid.png');
    }
    if(t == 'topleft') {
      var b = new Sprite.from('textures/topleftgrid.png');
    }
    if(t == 'topright') {
      var b = new Sprite.from('textures/toprightgrid.png');
    }
    if(t == 'topleftright') {
      var b = new Sprite.from('textures/topleftrightgrid.png');
    }
    if(t == 'leftright') {
      var b = new Sprite.from('textures/leftrightgrid.png');
    }
    if(t == 'topbottomleft') {
      var b = new Sprite.from('textures/topbottomleftgrid.png');
    }
    if(t == 'topbottom') {
      var b = new Sprite.from('textures/topbottomgrid.png');
    }
    if(t == 'bottomleftright') {
      var b = new Sprite.from('textures/bottomleftrightgrid.png');
    }
    if(t == 'bottomright') {
      var b = new Sprite.from('textures/bottomrightgrid.png');
    }
    if(t == 'bottom') {
      var b = new Sprite.from('textures/bottomgrid.png');
    }
    if(t == 'bottomleft') {
      var b = new Sprite.from('textures/bottomleftgrid.png');
    }
    if(t == 'topbottomright') {
      var b = new Sprite.from('textures/topbottomrightgrid.png');
    }
    b.at(x * 64, (576 - (y * 64)));
    b.tag("box").show(map);

    var g = new Graphics()
      .beginFill(0xff0000)
      .drawRect(-2, 8, 5, 30)
      .tag("spike")
      .show(b);
    g.visible = false;
    return b;
  }
  
  function box(x, y, t) {
    var b = new Sprite.from('textures/box.png');
    b.at(x * 64, (576 - (y * 64)))
    b.tag("box").show(map);

    var g = new Graphics()
      .beginFill(0xff0000)
      .drawRect(-2, 8, 5, 30)
      .tag("spike")
      .show(b);
    g.visible = false;
    return b;
  }

  function slab(x, y, t) {
    if(!t) {
      var hb = new Sprite.from('textures/topslab.png');
    }
    if(t == 'bottom') {
      var hb = new Sprite.from('textures/bottomslab.png');
    }
    hb.at(x * 64, (576 - (y * 64)));
    hb.tag("box").show(map);
    
    var g = new Graphics()
      .beginFill(0xff0000)
      .drawRect(-2, 8, 5, 16)
      .tag("spike")
      .show(hb);
    g.visible = false;
    return hb;
  }

  function shipPortal(x, y) {
    var sp = Sprite.from("textures/shipportal.png")
      .show(map)
      .at(x * 64, (576 - (y * 64)));

    var g = new Graphics()
      .beginFill(0xff0000)
      .drawRect(28, 0, 8, 118)
      .tag("shipportal")
      .show(sp);
    g.visible = false;
    sp.scale.set(1.35);
    return sp;
  }

  function squarePortal(x, y) {
    var sp = Sprite.from("textures/squareportal.png")
      .show(map)
      .at(x * 64, (576 - (y * 72)));

    var g = new Graphics()
      .beginFill(0xff0000)
      .drawRect(12, 16, 8, 64)
      .tag("squareportal")
      .show(sp);
    g.visible = false;
    sp.scale.set(1.5);
    return sp;
  }
  
  function roof(e) {
    if(e == true) {
      rf.show(stage);
      stage.y = 165;
      background.y = -165;
    }
    if(e == false) {
      stage.removeChild(rf);
    }
  }

  function createDot(x, y) {
    var dot = new Graphics()
      .beginFill(0xff0000)
      .drawCircle(x, y, 2)
      .show(map);
    return dot;
  }
  
  // Square Stuff //
  squareContainer.step(() => {
    if(squareHitbox.collides('spike')) {
      map.x = 0;
      background.x = 0;
      background.y = 0;
      stage.y = 0;
      pause = false;
      squareContainer.y = 500;
      squareImg.rotation = 0;
      gm = "square";
      squareContainer.children.destroy();
      squareImg = Sprite.from("textures/square.png")
        .show(squareContainer).at(32, 32);
      squareHitbox = new Graphics()
        .beginFill(0xff0000)
        .drawRect(0, 0, 64, 52)
        .tag("squareHitbox")
        .show(squareContainer)
        .at(0, 12);
      squareHitbox.visible = false;
      squareImg.anchor.set(0.5);
      squareContainer.at(64 * 5, 500);
      song.stop();
      song.play({ volume: 0.1});
      if(num == 1) {
        stage.backgroundColor = css('blue');
        floor.tint = css('blue');
      }
      if(num == 2) {
        stage.backgroundColor = css('magenta');
        floor.tint = css('magenta');
      }
      roof(false);
    }
    if(squareHitbox.collides('shipportal')) {
      squareContainer.children.destroy();
      squareImg = new Sprite.from('textures/ship.png')
        .show(squareContainer);
      squareHitbox = new Graphics()
        .beginFill(0xff0000)
        .drawRect(0, 0, 64, 53)
        .tag("squareHitbox")
        .show(squareContainer);
      squareHitbox.visible = false;
      gm = 'ship';
      roof(true);
      dy = 0;
    }
    if(squareHitbox.collides('squareportal')) {
      gm = "square";
      squareContainer.children.destroy();
      squareImg = new Sprite.from('textures/square.png')
        .show(squareContainer).at(32, 32);
      squareHitbox = new Graphics()
        .beginFill(0xff0000)
        .drawRect(0, 0, 64, 52)
        .tag("squareHitbox")
        .show(squareContainer)
        .at(0, 12);
      squareHitbox.visible = false;
      squareImg.anchor.set(0.5);
      roof(false);
    }
  });
  var dy = 0;
  var rotat = 0;

  var steps_to_cover_one_block = 5.777;
  
  var jump_speed = -3.575 * steps_to_cover_one_block;
  var terminal_velocity = 20 * steps_to_cover_one_block;
  var gravity = 1.66;
  squareContainer.step(() => {
    if(!pause) {
      if(gm == 'square') {
        // createDot(Math.abs(map.x) + 320, (squareContainer.y + 32));
        
        squareImg.rotation += rotat;
        squareContainer.y += dy * deltaTime;
        if (squareHitbox.collides('box', box => squareContainer.y = box.y - squareHitbox.height - 8)) {
          dy = 0;
          squareImg.rotation = (Math.floor(squareImg.rotation / (Math.PI / 2)) * Math.PI / 2);
          rotat = 0;
          if (Mouse.isDown) {
            dy = jump_speed;
            rotat = .13;
          }
        }
        else {
          dy += gravity;
          rotat = .13;
        }
        dy = Math.min(dy, terminal_velocity);
      }
      else if(gm == 'ship') {
        squareContainer.y += dy;
        if (Mouse.isDown) {
          dy -= 0.5 * deltaTime;
        }
        else {
          if (squareHitbox.collides('box', box => squareContainer.y = box.y - squareHitbox.height)) {
            dy = 0;
          }
          else {
            dy += 0.5 * deltaTime;
          }
        }
      }
    }
  });

  floor = Sprite.from('textures/floor.jpg')
    .at(0, 576)
    .tag('box')
    .show();
  floor.scale.set(1, .5);
  
  // Stereo Madness //
  if(num === 1) {
    squareContainer.show();
    map.show();
    floor.tint = css('blue');

    // Level Layout //
    roof(false);
    spike(24, 1);
        
    smallSpike(39, 1);
    spike(40, 1);

    spike(54, 1);
    spike(55, 1);
    box(56, 1);
    thorns(57, 1);
    thorns(58, 1);
    thorns(59, 1);
    grid(60, 1, 'leftright');
    box(60, 2);
    thorns(61, 1);
    thorns(62, 1);
    thorns(63, 1);
    grid(64, 1, 'leftright');
    grid(64, 2, 'leftright');
    box(64, 3);

    spike(85, 1);
    spike(86, 1);

    grid(92, 1, 'topleft');
    grid(93, 1, 'top');
    grid(94, 1, 'top');
    grid(95, 1, 'top');
    grid(96, 1, 'top');
    grid(97, 1, 'top');
    grid(98, 1, 'top');
    grid(99, 1, 'topright');
    thorns(100, 1);
    thorns(101, 1);
    thorns(102, 1);
    grid(103, 1, 'topleft');
    grid(104, 1, 'top');
    grid(105, 1, 'top');
    grid(106, 1, 'top');
    grid(107, 1, 'top');
    grid(108, 1, 'top');
    spike(108, 2);
    grid(109, 1, 'top');
    grid(110, 1, 'top');
    grid(111, 1, 'top');
    grid(112, 1, 'top');
    grid(113, 1, 'topright');
    thorns(114, 1);
    thorns(115, 1);
    thorns(116, 1);
    grid(117, 1, 'left');
    grid(117, 2, 'topleft');
    grid(118, 1, 'none');
    grid(118, 2, 'top');
    grid(119, 1, 'none');
    grid(119, 2, 'top');
    grid(120, 1, 'none');
    grid(120, 2, 'top');
    grid(121, 1, 'none');
    grid(121, 2, 'top');
    grid(122, 1, 'none');
    grid(122, 2, 'top');
    grid(123, 1, 'none');
    grid(123, 2, 'top');
    grid(124, 1, 'none');
    grid(124, 2, 'top');
    spike(124, 3);
    grid(125, 1, 'none');
    grid(125, 2, 'top');
    grid(126, 1, 'none');
    grid(126, 2, 'top');
    grid(127, 1, 'none');
    grid(127, 2, 'top');
    grid(128, 1, 'none');
    grid(128, 2, 'top');
    grid(129, 1, 'none');
    grid(129, 2, 'top');
    grid(130, 1, 'right');
    grid(130, 2, 'topright');

    slab(134, 3);
    slab(138, 4);

    slab(142, 5);
    slab(146, 6);
    slab(150, 7);

    thorns(131, 1);
    thorns(132, 1);
    thorns(133, 1);
    thorns(134, 1);
    thorns(135, 1);
    thorns(136, 1);
    thorns(137, 1);
    thorns(138, 1);
    thorns(139, 1);
    thorns(140, 1);
    thorns(141, 1);
    thorns(142, 1);
    thorns(143, 1);
    thorns(144, 1);
    thorns(145, 1);
    thorns(146, 1);
    thorns(147, 1);
    thorns(148, 1);
    thorns(149, 1);
    thorns(150, 1);
    thorns(151, 1);
    thorns(152, 1);
    thorns(153, 1);
    thorns(154, 1);
    thorns(155, 1);
    grid(154, 6, 'topbottomleft');
    grid(155, 6, 'topbottom');

    grid(156, 1, 'left');
    grid(156, 2, 'left');
    grid(156, 3, 'left');
    grid(156, 4, 'left');
    grid(156, 5, 'left');
    grid(156, 6, 'top');

    grid(157, 1, 'none');
    grid(157, 2, 'none');
    grid(157, 3, 'none');
    grid(157, 4, 'none');
    grid(157, 5, 'none');
    grid(157, 6, 'top');

    grid(158, 1, 'none');
    grid(158, 2, 'none');
    grid(158, 3, 'none');
    grid(158, 4, 'none');
    grid(158, 5, 'none');
    grid(158, 6, 'top');

    grid(159, 1, 'none');
    grid(159, 2, 'none');
    grid(159, 3, 'none');
    grid(159, 4, 'none');
    grid(159, 5, 'none');
    grid(159, 6, 'top');

    grid(160, 1, 'none');
    grid(160, 2, 'none');
    grid(160, 3, 'none');
    grid(160, 4, 'none');
    grid(160, 5, 'none');
    grid(160, 6, 'top');
    spike(160, 7);

    grid(161, 1, 'none');
    grid(161, 2, 'none');
    grid(161, 3, 'none');
    grid(161, 4, 'none');
    grid(161, 5, 'none');
    grid(161, 6, 'top');
    spike(161, 7);
    slab(161, 8);

    grid(162, 1, 'none');
    grid(162, 2, 'none');
    grid(162, 3, 'none');
    grid(162, 4, 'none');
    grid(162, 5, 'none');
    grid(162, 6, 'top');
    spike(162, 7);
    slab(162, 8);

    grid(163, 1, 'none');
    grid(163, 2, 'none');
    grid(163, 3, 'none');
    grid(163, 4, 'none');
    grid(163, 5, 'none');
    grid(163, 6, 'top');
    spike(163, 7);

    grid(164, 1, 'none');
    grid(164, 2, 'none');
    grid(164, 3, 'none');
    grid(164, 4, 'none');
    grid(164, 5, 'none');
    grid(164, 6, 'top');

    grid(165, 1, 'none');
    grid(165, 2, 'none');
    grid(165, 3, 'none');
    grid(165, 4, 'none');
    grid(165, 5, 'none');
    grid(165, 6, 'top');

    grid(166, 1, 'none');
    grid(166, 2, 'none');
    grid(166, 3, 'none');
    grid(166, 4, 'none');
    grid(166, 5, 'none');
    grid(166, 6, 'top');

    grid(167, 1, 'none');
    grid(167, 2, 'none');
    grid(167, 3, 'none');
    grid(167, 4, 'none');
    grid(167, 5, 'none');
    grid(167, 6, 'top');

    grid(168, 1, 'none');
    grid(168, 2, 'none');
    grid(168, 3, 'none');
    grid(168, 4, 'none');
    grid(168, 5, 'none');
    grid(168, 6, 'top');
    spike(168, 7);

    grid(169, 1, 'none');
    grid(169, 2, 'none');
    grid(169, 3, 'none');
    grid(169, 4, 'none');
    grid(169, 5, 'none');
    grid(169, 6, 'top');
    spike(169, 7);
    slab(169, 8);

    grid(170, 1, 'none');
    grid(170, 2, 'none');
    grid(170, 3, 'none');
    grid(170, 4, 'none');
    grid(170, 5, 'none');
    grid(170, 6, 'top');
    spike(170, 7);
    slab(170, 8);

    grid(171, 1, 'none');
    grid(171, 2, 'none');
    grid(171, 3, 'none');
    grid(171, 4, 'none');
    grid(171, 5, 'none');
    grid(171, 6, 'top');
    spike(171, 7);

    grid(172, 1, 'none');
    grid(172, 2, 'none');
    grid(172, 3, 'none');
    grid(172, 4, 'none');
    grid(172, 5, 'none');
    grid(172, 6, 'top');

    grid(173, 1, 'none');
    grid(173, 2, 'none');
    grid(173, 3, 'none');
    grid(173, 4, 'none');
    grid(173, 5, 'none');
    grid(173, 6, 'top');

    grid(174, 1, 'none');
    grid(174, 2, 'none');
    grid(174, 3, 'none');
    grid(174, 4, 'none');
    grid(174, 5, 'none');
    grid(174, 6, 'top');

    grid(175, 1, 'none');
    grid(175, 2, 'none');
    grid(175, 3, 'none');
    grid(175, 4, 'none');
    grid(175, 5, 'none');
    grid(175, 6, 'topright');

    grid(176, 1, 'none');
    grid(176, 2, 'none');
    grid(176, 3, 'none');
    grid(176, 4, 'none');
    grid(176, 5, 'top');

    grid(177, 1, 'none');
    grid(177, 2, 'none');
    grid(177, 3, 'none');
    grid(177, 4, 'none');
    grid(177, 5, 'top');

    grid(178, 1, 'none');
    grid(178, 2, 'none');
    grid(178, 3, 'none');
    grid(178, 4, 'none');
    grid(178, 5, 'top');

    grid(179, 1, 'none');
    grid(179, 2, 'none');
    grid(179, 3, 'none');
    grid(179, 4, 'none');
    grid(179, 5, 'top');
    slab(179, 7);
    spike(179, 8);

    grid(180, 1, 'none');
    grid(180, 2, 'none');
    grid(180, 3, 'none');
    grid(180, 4, 'none');
    grid(180, 5, 'top');
    slab(180, 7);
    spike(180, 8);

    grid(181, 1, 'none');
    grid(181, 2, 'none');
    grid(181, 3, 'none');
    grid(181, 4, 'none');
    grid(181, 5, 'top');
    slab(181, 7);
    spike(181, 8);

    grid(182, 1, 'none');
    grid(182, 2, 'none');
    grid(182, 3, 'none');
    grid(182, 4, 'none');
    grid(182, 5, 'top');
    slab(182, 7);
    spike(182, 8);

    grid(183, 1, 'none');
    grid(183, 2, 'none');
    grid(183, 3, 'none');
    grid(183, 4, 'none');
    grid(183, 5, 'top');

    grid(184, 1, 'none');
    grid(184, 2, 'none');
    grid(184, 3, 'none');
    grid(184, 4, 'none');
    grid(184, 5, 'top');

    grid(185, 1, 'none');
    grid(185, 2, 'none');
    grid(185, 3, 'none');
    grid(185, 4, 'none');
    grid(185, 5, 'top');

    grid(186, 1, 'none');
    grid(186, 2, 'none');
    grid(186, 3, 'none');
    grid(186, 4, 'none');
    grid(186, 5, 'none');
    grid(186, 6, 'topleft');

    grid(187, 1, 'none');
    grid(187, 2, 'none');
    grid(187, 3, 'none');
    grid(187, 4, 'none');
    grid(187, 5, 'none');
    grid(187, 6, 'top');

    grid(188, 1, 'none');
    grid(188, 2, 'none');
    grid(188, 3, 'none');
    grid(188, 4, 'none');
    grid(188, 5, 'none');
    grid(188, 6, 'top');

    grid(189, 1, 'none');
    grid(189, 2, 'none');
    grid(189, 3, 'none');
    grid(189, 4, 'none');
    grid(189, 5, 'none');
    grid(189, 6, 'top');

    grid(190, 1, 'none');
    grid(190, 2, 'none');
    grid(190, 3, 'none');
    grid(190, 4, 'none');
    grid(190, 5, 'right');
    grid(190, 6, 'topright');
    spike(190, 7);

    grid(191, 1, 'none');
    grid(191, 2, 'none');
    grid(191, 3, 'none');
    grid(191, 4, 'top');
    spike(191, 5);

    grid(192, 1, 'none');
    grid(192, 2, 'none');
    grid(192, 3, 'none');
    grid(192, 4, 'top');

    grid(193, 1, 'none');
    grid(193, 2, 'none');
    grid(193, 3, 'none');
    grid(193, 4, 'top');

    grid(194, 1, 'none');
    grid(194, 2, 'none');
    grid(194, 3, 'none');
    grid(194, 4, 'top');

    grid(195, 1, 'none');
    grid(195, 2, 'none');
    grid(195, 3, 'none');
    grid(195, 4, 'top');

    grid(196, 1, 'right');
    grid(196, 2, 'right');
    grid(196, 3, 'right');
    grid(196, 4, 'top');

    grid(197, 4, 'topbottom');
    grid(198, 4, 'topbottom');
    grid(199, 4, 'topbottom');
    grid(200, 4, 'topbottomright');

    slab(203, 4);
    slab(204, 4);
    slab(205, 4);
    slab(206, 4);
    spike(206, 5);

    slab(208, 3);
    slab(209, 3);
    slab(210, 3);
    slab(211, 3);
    slab(212, 3);
    slab(213, 3);
    slab(214, 3);
    spike(214, 4);

    slab(216, 2);
    slab(217, 2);
    slab(218, 2);
    slab(219, 2);
    slab(220, 2);

    slab(224, 3);
    slab(228, 4);
    slab(232, 5);
    slab(236, 6);
    slab(240, 7);
    slab(244, 8);
    spike(244, 9);

    grid(242, 4, 'topbottomleft');
    grid(243, 4, 'topbottom');
    grid(244, 4, 'topbottom');
    grid(245, 4, 'topbottom');
    grid(246, 4, 'topbottom');
    grid(247, 4, 'topbottom');
    grid(248, 4, 'topbottom');

    grid(249, 1, 'left');
    grid(249, 2, 'left');
    grid(249, 3, 'left');
    grid(249, 4, 'top');
    grid(249, 8, 'bottomleft');
    grid(249, 9, 'left');
    grid(249, 10, 'left');
    grid(249, 11, 'left');
    grid(249, 12, 'left');

    grid(250, 1, 'none');
    grid(250, 2, 'none');
    grid(250, 3, 'none');
    grid(250, 4, 'top');
    grid(250, 8, 'bottom');
    grid(250, 9, 'none');
    grid(250, 10, 'none');
    grid(250, 11, 'none');
    grid(250, 12, 'none');

    grid(251, 1, 'none');
    grid(251, 2, 'none');
    grid(251, 3, 'none');
    grid(251, 4, 'top');
    grid(251, 8, 'bottom');
    grid(251, 9, 'none');
    grid(251, 10, 'none');
    grid(251, 11, 'none');
    grid(251, 12, 'none');

    grid(252, 1, 'none');
    grid(252, 2, 'none');
    grid(252, 3, 'none');
    grid(252, 4, 'top');
    grid(252, 8, 'bottom');
    grid(252, 9, 'none');
    grid(252, 10, 'none');
    grid(252, 11, 'none');
    grid(252, 12, 'none'); 

    grid(253, 1, 'none');
    grid(253, 2, 'none');
    grid(253, 3, 'none');
    grid(253, 4, 'top');
    grid(253, 8, 'bottom');
    grid(253, 9, 'none');
    grid(253, 10, 'none');
    grid(253, 11, 'none');
    grid(253, 12, 'none');

    grid(254, 1, 'none');
    grid(254, 2, 'none');
    grid(254, 3, 'none');
    grid(254, 4, 'top');
    grid(254, 7, 'bottomleft')
    grid(254, 8, 'none');
    grid(254, 9, 'none');
    grid(254, 10, 'none');
    grid(254, 11, 'none');
    grid(254, 12, 'none');

    grid(255, 1, 'none');
    grid(255, 2, 'none');
    grid(255, 3, 'none');
    grid(255, 4, 'top');
    grid(255, 7, 'bottom')
    grid(255, 8, 'none');
    grid(255, 9, 'none');
    grid(255, 10, 'none');
    grid(255, 11, 'none');
    grid(255, 12, 'none');

    grid(256, 1, 'none');
    grid(256, 2, 'none');
    grid(256, 3, 'none');
    grid(256, 4, 'top');
    grid(256, 7, 'bottom')
    grid(256, 8, 'none');
    grid(256, 9, 'none');
    grid(256, 10, 'none');
    grid(256, 11, 'none');
    grid(256, 12, 'none');

    grid(257, 1, 'none');
    grid(257, 2, 'none');
    grid(257, 3, 'none');
    grid(257, 4, 'top');
    grid(257, 7, 'bottom')
    grid(257, 8, 'none');
    grid(257, 9, 'none');
    grid(257, 10, 'none');
    grid(257, 11, 'none');
    grid(257, 12, 'none');

    grid(258, 1, 'none');
    grid(258, 2, 'none');
    grid(258, 3, 'none');
    grid(258, 4, 'top');
    grid(258, 7, 'bottom')
    grid(258, 8, 'none');
    grid(258, 9, 'none');
    grid(258, 10, 'none');
    grid(258, 11, 'none');
    grid(258, 12, 'none');

    grid(259, 1, 'none');
    grid(259, 2, 'none');
    grid(259, 3, 'none');
    grid(259, 4, 'top');
    grid(259, 7, 'bottom')
    grid(259, 8, 'none');
    grid(259, 9, 'none');
    grid(259, 10, 'none');
    grid(259, 11, 'none');
    grid(259, 12, 'none');

    grid(260, 1, 'none');
    grid(260, 2, 'none');
    grid(260, 3, 'none');
    grid(260, 4, 'top');
    grid(260, 7, 'bottom')
    grid(260, 8, 'none');
    grid(260, 9, 'none');
    grid(260, 10, 'none');
    grid(260, 11, 'none');
    grid(260, 12, 'none');

    grid(261, 1, 'none');
    grid(261, 2, 'none');
    grid(261, 3, 'none');
    grid(261, 4, 'top');
    grid(261, 7, 'bottom')
    grid(261, 8, 'none');
    grid(261, 9, 'none');
    grid(261, 10, 'none');
    grid(261, 11, 'none');
    grid(261, 12, 'none');

    grid(262, 1, 'none');
    grid(262, 2, 'none');
    grid(262, 3, 'none');
    grid(262, 4, 'top');
    grid(262, 7, 'bottom')
    grid(262, 8, 'none');
    grid(262, 9, 'none');
    grid(262, 10, 'none');
    grid(262, 11, 'none');
    grid(262, 12, 'none');

    grid(263, 1, 'none');
    grid(263, 2, 'none');
    grid(263, 3, 'none');
    grid(263, 4, 'top');
    grid(263, 7, 'bottom')
    grid(263, 8, 'none');
    grid(263, 9, 'none');
    grid(263, 10, 'none');
    grid(263, 11, 'none');
    grid(263, 12, 'none');

    grid(264, 1, 'none');
    grid(264, 2, 'none');
    grid(264, 3, 'none');
    grid(264, 4, 'top');
    grid(264, 7, 'bottom')
    grid(264, 8, 'none');
    grid(264, 9, 'none');
    grid(264, 10, 'none');
    grid(264, 11, 'none');
    grid(264, 12, 'none');

    grid(265, 1, 'none');
    grid(265, 2, 'none');
    grid(265, 3, 'none');
    grid(265, 4, 'top');
    grid(265, 7, 'bottom')
    grid(265, 8, 'none');
    grid(265, 9, 'none');
    grid(265, 10, 'none');
    grid(265, 11, 'none');
    grid(265, 12, 'none');

    grid(266, 1, 'none');
    grid(266, 2, 'none');
    grid(266, 3, 'none');
    grid(266, 4, 'top');
    grid(266, 7, 'bottom')
    grid(266, 8, 'none');
    grid(266, 9, 'none');
    grid(266, 10, 'none');
    grid(266, 11, 'none');
    grid(266, 12, 'none');

    grid(267, 1, 'none');
    grid(267, 2, 'none');
    grid(267, 3, 'none');
    grid(267, 4, 'top');
    grid(267, 7, 'bottomright')
    grid(267, 8, 'none');
    grid(267, 9, 'none');
    grid(267, 10, 'none');
    grid(267, 11, 'none');
    grid(267, 12, 'none');


    grid(268, 1, 'none');
    grid(268, 2, 'none');
    grid(268, 3, 'none');
    grid(268, 4, 'top');
    grid(268, 8, 'bottom');
    grid(268, 9, 'none');
    grid(268, 10, 'none');
    grid(268, 11, 'none');
    grid(268, 12, 'none');

    grid(269, 1, 'none');
    grid(269, 2, 'none');
    grid(269, 3, 'none');
    grid(269, 4, 'top');
    grid(269, 8, 'bottom');
    grid(269, 9, 'none');
    grid(269, 10, 'none');
    grid(269, 11, 'none');
    grid(269, 12, 'none');

    grid(270, 1, 'none');
    grid(270, 2, 'none');
    grid(270, 3, 'none');
    grid(270, 4, 'top');
    grid(270, 8, 'bottom');
    grid(270, 9, 'none');
    grid(270, 10, 'none');
    grid(270, 11, 'none');
    grid(270, 12, 'none');

    grid(271, 1, 'none');
    grid(271, 2, 'none');
    grid(271, 3, 'none');
    grid(271, 4, 'top');
    grid(271, 8, 'bottom');
    grid(271, 9, 'none');
    grid(271, 10, 'none');
    grid(271, 11, 'none');
    grid(271, 12, 'none');

    grid(272, 1, 'right');
    grid(272, 2, 'right');
    grid(272, 3, 'right');
    grid(272, 4, 'topright');
    grid(272, 8, 'bottomright');
    grid(272, 9, 'right');
    grid(272, 10, 'right');
    grid(272, 11, 'right');
    grid(272, 12, 'right');
    shipPortal(272, 6.5);
    changeBackground(272, 'magenta');

    // Ship Section //
    grid(307, 10, 'leftright');
    grid(307, 9, 'leftright');
    grid(307, 8, 'bottomleftright');

    grid(320, 10, 'bottomleftright');
    spike(321, 10, 3.141593);
    spike(322, 10, 3.141593);
    spike(323, 10, 3.141593);
    spike(324, 10, 3.141593);
    spike(325, 10, 3.141593);
    spike(326, 10, 3.141593);
    spike(327, 10, 3.141593);
    spike(328, 10, 3.141593);
    spike(329, 10, 3.141593);
    spike(330, 10, 3.141593);
    spike(331, 10, 3.141593);
    spike(332, 10, 3.141593);
    spike(333, 10, 3.141593);
    spike(334, 10, 3.141593);
    grid(335, 10, 'bottomleftright');

    grid(320, 1, 'topleftright');
    spike(321, 1);
    spike(322, 1);
    spike(323, 1);
    spike(324, 1);
    spike(325, 1);
    spike(326, 1);
    spike(327, 1);
    spike(328, 1);
    spike(329, 1);
    spike(330, 1);
    spike(331, 1);
    spike(332, 1);
    spike(333, 1);
    spike(334, 1);
    grid(335, 1, 'topleftright');

    grid(348, 1, 'leftright');
    grid(348, 2, 'topleftright');
    spike(349, 1);
    spike(350, 1);
    spike(351, 1);
    spike(352, 1);

    grid(361, 10, 'leftright');
    grid(361, 9, 'bottomleftright');
    spike(362, 10, 3.1459);
    spike(363, 10, 3.1459);
    spike(364, 10, 3.1459);
    spike(365, 10, 3.1459);

    grid(370, 1, 'topleftright');
    spike(371, 1);
    spike(372, 1);
    spike(373, 1);
    spike(374, 1);
    spike(375, 1);
    grid(376, 1, 'leftright');
    grid(376, 2, 'topleftright');
    spike(377, 1);
    spike(378, 1);
    spike(379, 1);
    spike(380, 1);
    spike(381, 1);
    grid(382, 1, 'leftright');
    grid(382, 2, 'leftright');
    grid(382, 3, 'topleftright');

    spike(390, 10, 3.1459);
    spike(391, 10, 3.1459);
    spike(392, 10, 3.1459);
    spike(393, 10, 3.1459);
    spike(394, 10, 3.1459);
    spike(395, 10, 3.1459);
    grid(396, 10, 'leftright');
    grid(396, 9, 'leftright');
    grid(396, 8, 'leftright');
    grid(396, 7, 'bottomleftright');
    spike(397, 10, 3.1459);
    spike(398, 10, 3.1459);
    spike(399, 10, 3.1459);
    spike(400, 10, 3.1459);
    spike(401, 10, 3.1459);
    spike(402, 10, 3.1459);
    spike(403, 10, 3.1459);
    spike(404, 10, 3.1459);
    spike(405, 10, 3.1459);
    spike(406, 10, 3.1459);
    spike(407, 10, 3.1459);
    spike(408, 10, 3.1459);
    spike(409, 10, 3.1459);

    grid(410, 1, 'left');
    grid(410, 2, 'left');
    grid(410, 3, 'topleft');
    grid(411, 1, 'none');
    grid(411, 2, 'none');
    grid(411, 3, 'top');
    grid(412, 1, 'none');
    grid(412, 2, 'none');
    grid(412, 3, 'top');
    grid(413, 1, 'none');
    grid(413, 2, 'none');
    grid(413, 3, 'top');
    grid(414, 1, 'none');
    grid(414, 2, 'none');
    grid(414, 3, 'top');
    grid(415, 1, 'none');
    grid(415, 2, 'none');
    grid(415, 3, 'top');
    grid(416, 1, 'none');
    grid(416, 2, 'none');
    grid(416, 3, 'top');
    grid(417, 1, 'none');
    grid(417, 2, 'none');
    grid(417, 3, 'top');
    grid(418, 1, 'none');
    grid(418, 2, 'none');
    grid(418, 3, 'top');
    grid(419, 1, 'none');
    grid(419, 2, 'none');
    grid(419, 3, 'top');
    grid(420, 1, 'none');
    grid(420, 2, 'none');
    grid(420, 3, 'top');
    grid(421, 1, 'none');
    grid(421, 2, 'none');
    grid(421, 3, 'top');
    grid(422, 1, 'none');
    grid(422, 2, 'none');
    grid(422, 3, 'top');
    grid(423, 1, 'none');
    grid(423, 2, 'none');
    grid(423, 3, 'top');
    grid(424, 1, 'none');
    grid(424, 2, 'none');
    grid(424, 3, 'topright');
    squarePortal(424, 5);
    changeBackground(424, '#ce10ef');

    grid(410, 10, 'left');
    grid(410, 9, 'left');
    grid(410, 8, 'bottomleft');
    grid(411, 10, 'none');
    grid(411, 9, 'none');
    grid(411, 8, 'bottom');
    grid(412, 10, 'none');
    grid(412, 9, 'none');
    grid(412, 8, 'bottom');
    grid(413, 10, 'none');
    grid(413, 9, 'none');
    grid(413, 8, 'bottom');
    grid(414, 10, 'none');
    grid(414, 9, 'none');
    grid(414, 8, 'bottom');
    grid(415, 10, 'none');
    grid(415, 9, 'none');
    grid(415, 8, 'bottom');
    grid(416, 10, 'none');
    grid(416, 9, 'none');
    grid(416, 8, 'bottom');
    grid(417, 10, 'none');
    grid(417, 9, 'none');
    grid(417, 8, 'bottom');
    grid(418, 10, 'none');
    grid(418, 9, 'none');
    grid(418, 8, 'bottom');
    grid(419, 10, 'none');
    grid(419, 9, 'none');
    grid(419, 8, 'bottom');
    grid(420, 10, 'none');
    grid(420, 9, 'none');
    grid(420, 8, 'bottom');
    grid(421, 10, 'none');
    grid(421, 9, 'none');
    grid(421, 8, 'bottom');
    grid(422, 10, 'none');
    grid(422, 9, 'none');
    grid(422, 8, 'bottom');
    grid(423, 10, 'none');
    grid(423, 9, 'none');
    grid(423, 8, 'bottom');
    grid(424, 10, 'right');
    grid(424, 9, 'right');
    grid(424, 8, 'bottomright');

    grid(425, 1, 'none');
    grid(425, 2, 'top');
    grid(426, 1, 'none');
    grid(426, 2, 'top');
    grid(427, 1, 'none');
    grid(427, 2, 'top');
    grid(428, 1, 'none');
    grid(428, 2, 'top');
    grid(429, 1, 'none');
    grid(429, 2, 'top');
    grid(430, 1, 'none');
    grid(430, 2, 'top');
    grid(431, 1, 'none');
    grid(431, 2, 'top');
    grid(432, 1, 'none');
    grid(432, 2, 'top');
    grid(433, 1, 'none');
    grid(433, 2, 'top');
    grid(434, 1, 'none');
    grid(434, 2, 'top');
    grid(435, 1, 'none');
    grid(435, 2, 'top');
    grid(436, 1, 'none');
    grid(436, 2, 'top');
    grid(437, 1, 'none');
    grid(437, 2, 'top');
    grid(438, 1, 'right');
    grid(438, 2, 'topright');

    thorns(439, 1);
    thorns(440, 1);
    thorns(441, 1);
    grid(442, 1, 'leftright');
    grid(442, 2, 'leftright');
    grid(442, 3, 'topleftright');

    thorns(443, 1);
    thorns(444, 1);
    thorns(445, 1);
    grid(446, 1, 'leftright');
    grid(446, 2, 'leftright');
    grid(446, 3, 'leftright');
    grid(446, 4, 'topleftright');

    thorns(447, 1);
    thorns(448, 1);
    thorns(449, 1);
    grid(450, 1, 'topleftright');
    grid(450, 4, 'bottomleftright');
    grid(450, 5, 'topleftright');

    thorns(451, 1);
    thorns(452, 1);
    thorns(453, 1);
    grid(454, 1, 'left');
    grid(454, 2, 'topleft');
    grid(454, 5, 'bottomleftright');
    grid(454, 6, 'topleftright');
    spike(454, 9.5, 3.1459);
    box(454, 10.5);
    spike(455, 9.5, 3.1459);
    box(455, 10.5);
    spike(456, 9.5, 3.1459);
    box(456, 10.5);

    grid(454, 1, 'none');
    grid(454, 2, 'top');
    grid(455, 1, 'none');
    grid(455, 2, 'top');
    grid(456, 1, 'none');
    grid(456, 2, 'top');
    grid(457, 1, 'none');
    grid(457, 2, 'top');
    grid(458, 1, 'none');
    grid(458, 2, 'top');
    grid(459, 1, 'none');
    grid(459, 2, 'top');
    grid(460, 1, 'right');
    grid(460, 2, 'topright');

    thorns(461, 1);
    thorns(462, 1);
    thorns(463, 1);
    grid(464, 1, 'leftright');
    grid(464, 2, 'leftright');
    grid(464, 3, 'topleftright');

    thorns(465, 1);
    thorns(466, 1);
    thorns(467, 1);
    grid(468, 1, 'leftright');
    grid(468, 2, 'leftright');
    grid(468, 3, 'leftright');
    grid(468, 4, 'topleftright');

    thorns(469, 1);
    thorns(470, 1);
    thorns(471, 1);
    grid(472, 1, 'leftright');
    grid(472, 2, 'leftright');
    grid(472, 3, 'leftright');
    grid(472, 4, 'leftright');
    grid(472, 5, 'topleftright');

    thorns(473, 1);
    thorns(474, 1);
    thorns(475, 1);
    grid(476, 1, 'leftright');
    grid(476, 2, 'leftright');
    grid(476, 3, 'leftright');
    grid(476, 4, 'leftright');
    grid(476, 5, 'leftright');
    grid(476, 6, 'topleftright');

    thorns(477, 1);
    thorns(478, 1);
    thorns(479, 1);
    grid(480, 1, 'leftright');
    grid(480, 2, 'leftright');
    grid(480, 3, 'leftright');
    grid(480, 4, 'leftright');
    grid(480, 5, 'leftright');
    grid(480, 6, 'leftright');
    grid(480, 7, 'topleftright');

    thorns(481, 1);
    thorns(482, 1);
    thorns(483, 1);
    grid(484, 1, 'leftright');
    grid(484, 2, 'leftright');
    grid(484, 3, 'leftright');
    grid(484, 4, 'leftright');
    grid(484, 5, 'leftright');
    grid(484, 6, 'leftright');
    grid(484, 7, 'leftright');
    grid(484, 8, 'topleftright');

    thorns(485, 1);
    thorns(486, 1);
    thorns(487, 1);
    grid(488, 1, 'leftright');
    grid(488, 2, 'leftright');
    grid(488, 3, 'leftright');
    grid(488, 4, 'leftright');
    grid(488, 5, 'leftright');
    grid(488, 6, 'leftright');
    grid(488, 7, 'leftright');
    grid(488, 8, 'leftright');
    grid(488, 9, 'topleftright');
    thorns(489, 1);
    slab(489, 9);
    thorns(490, 1);
    thorns(491, 1);
    slab(491, 8);
    thorns(492, 1);
    slab(492, 8);
    thorns(493, 1);
    thorns(494, 1);
    slab(494, 7);
    thorns(495, 1);
    slab(495, 7);
    thorns(496, 1);
    thorns(497, 1);
    slab(497, 6);
    thorns(498, 1);
    slab(498, 6);
    thorns(499, 1);
    slab(499, 6);
    thorns(500, 1);
    thorns(501, 1);
    thorns(502, 1);
    thorns(503, 1);
    slab(503, 5);
    thorns(504, 1);
    slab(504, 5);
    thorns(505, 1);
    grid(506, 1, 'left');
    grid(506, 2, 'left');
    grid(506, 3, 'left');
    grid(506, 4, 'left');
    slab(506, 4.5);
    grid(507, 1, 'none');
    grid(507, 2, 'none');
    grid(507, 3, 'none');
    grid(507, 4, 'none');
    slab(507, 4.5);
    grid(508, 1, 'right');
    grid(508, 2, 'right');
    grid(508, 3, 'right');
    grid(508, 4, 'right');
    slab(508, 4.5);
    thorns(509, 1);
    thorns(510, 1);
    thorns(511, 1);
    grid(512, 1, 'left');
    grid(512, 2, 'left');
    grid(512, 3, 'left');
    slab(512, 3.5);
    grid(513, 1, 'none');
    grid(513, 2, 'none');
    grid(513, 3, 'none');
    slab(513, 3.5);
    grid(514, 1, 'none');
    grid(514, 2, 'none');
    grid(514, 3, 'none');
    slab(514, 3.5);
    grid(515, 1, 'right');
    grid(515, 2, 'right');
    grid(515, 3, 'right');
    slab(515, 3.5);

    thorns(517, 1);
    slab(517, 3);
    thorns(518, 1);
    thorns(519, 1);
    slab(519, 2);
    thorns(520, 1);
    thorns(521, 1);
    slab(521, 1);
    changeBackground(522, 'red');

    spike(528, 1);
    spike(529, 1);
    box(530, 1);
    thorns(531, 1);
    thorns(532, 1);
    thorns(533, 1);
    slab(533, 2);
    thorns(534, 1);
    slab(534, 2);
    thorns(535, 1);
    box(536, 1);
    box(537, 1);
    box(538, 1);
    thorns(539, 1);
    thorns(540, 1);
    thorns(541, 1);
    slab(541, 2);
    thorns(542, 1);
    slab(542, 2);
    thorns(543, 1);
    thorns(544, 1);
    thorns(545, 1);
    slab(545, 3);
    thorns(546, 1);
    slab(546, 3);
    thorns(547, 1);
    box(548, 1);
    box(549, 1);
    box(550, 1);
    spike(551, 1);
    spike(552, 1);

    spike(559, 1);
    spike(560, 1);
    spike(559, 5, 3.1459);
    spike(560, 5, 3.1459);
    box(559, 6);
    box(560, 6);

    spike(567, 1);
    spike(568, 1);
    spike(569, 1);
    spike(567, 5, 3.1459);
    spike(568, 5, 3.1459);
    spike(569, 5, 3.1459);
    box(567, 6);
    box(568, 6);
    box(569, 6);

    spike(575, 1);
    spike(575, 5, 3.1459);
    box(575, 6);

    spike(582, 1);
    spike(582, 5, 3.1459);
    box(582, 6);

    spike(591, 1);
    spike(592, 1);
    box(593, 1);
    thorns(594, 1);
    thorns(595, 1);
    thorns(596, 1);
    grid(597, 1, 'leftright');
    box(597, 2);
    thorns(598, 1);
    thorns(599, 1);
    thorns(600, 1);
    grid(601, 1, 'leftright');
    grid(601, 2, 'leftright');
    box(601, 3);
    thorns(602, 1);
    thorns(603, 1);
    thorns(604, 1);
    grid(605, 1, 'leftright');
    grid(605, 2, 'leftright');
    grid(605, 3, 'leftright');
    box(605, 4);
    thorns(606, 1);
    slab(606, 4);
    thorns(607, 1);
    thorns(608, 1);
    slab(608, 3);
    thorns(609, 1);
    thorns(610, 1);
    slab(610, 2);
    thorns(611, 1);
    thorns(612, 1);
    slab(612, 1);

    spike(618, 1);
    spike(619, 1);

    spike(626, 2, 3.1459);
    box(626, 3);
    spike(627, 2, 3.1459);
    box(627, 3);
    spike(628, 2, 3.1459);
    box(628, 3);
    spike(629, 2, 3.1459);
    box(629, 3);

    spike(634, 1);
    box(635, 1);

    thorns(644, 1);
    slab(644, 1);
    thorns(645, 1);
    slab(645, 1);
    thorns(646, 1);
    slab(646, 1);
    thorns(647, 1);
    slab(647, 1);
    thorns(648, 1);
    thorns(649, 1);
    thorns(650, 1);
    thorns(651, 1);
    slab(651, 2);
    thorns(652, 1);
    thorns(653, 1);
    thorns(654, 1);
    thorns(655, 1);
    slab(655, 3);
    thorns(656, 1);
    thorns(657, 1);
    thorns(658, 1);
    thorns(659, 1);
    slab(659, 4);
    thorns(660, 1);
    thorns(661, 1);
    thorns(662, 1);
    thorns(663, 1);
    slab(663, 5);
    thorns(664, 1);
    slab(664, 5);
    thorns(665, 1);
    slab(665, 5);
    thorns(666, 1);
    thorns(667, 1);
    box(667, 4);
    box(667, 7);
    thorns(668, 1);
    thorns(669, 1);
    box(669, 3);
    box(669, 6);
    thorns(670, 1);
    thorns(671, 1);
    box(671, 2);
    box(671, 5);
    thorns(672, 1);
    thorns(673, 1);
    box(673.5, 1);
    box(673.5, 4.5);
    smallSpike(673.5, 10);
    thorns(674, 1);

    slab(677.5, 2);

    slab(680, 2);
    spike(680, 3);

    slab(682.5, 2);

    slab(686, 3);
    slab(687, 3);
    slab(688, 3);

    slab(690, 2);

    slab(692, 1);
    slab(693, 1);
    slab(694, 1);
    spike(695, 1);
    spike(696, 1);

    spike(703, 1);
    spike(703, 4, 3.1459);
    box(703, 5);
    spike(704, 1);
    spike(704, 4, 3.1459);
    box(704, 5);
    spike(705, 1);
    spike(705, 4, 3.1459);
    box(705, 5);

    box(715, 1);
    thorns(716, 1);
    slab(716, 1);
    thorns(717, 1);
    slab(717, 1);
    thorns(718, 1);
    thorns(719, 1);
    thorns(720, 1);
    thorns(721, 1);
    slab(721.5, 1);
    thorns(722, 1);
    thorns(723, 1);
    thorns(724, 1);
    thorns(725, 1);
    thorns(726, 1);
    slab(726, 1);
    thorns(727, 1);
    slab(727, 1);
    box(728, 1);
    box(729, 1);
    box(729, 2);
    thorns(730, 1);
    slab(730, 2);
    thorns(731, 1);
    slab(731, 2);
    thorns(732, 1);
    thorns(733, 1);
    thorns(734, 1);
    thorns(735, 1);
    slab(735, 3);
    thorns(736, 1);
    thorns(737, 1);
    slab(737, 2);
    thorns(738, 1);
    thorns(739, 1);
    slab(739, 1);
    thorns(740, 1);
    slab(740, 1);
    thorns(741, 1);
    slab(741, 1);
    thorns(742, 1);
    thorns(743, 1);
    thorns(744, 1);
    thorns(745, 1);
    slab(745, 2);
    thorns(746, 1);
    thorns(747, 1);
    slab(747, 2);
    spike(747, 3);
    thorns(748, 1);
    thorns(749, 1);
    slab(749, 2);
    thorns(750, 1);
    slab(750, 2);
    thorns(751, 1);
    slab(751, 2);
    thorns(752, 1);
    slab(752, 2);
    thorns(753, 1);
    thorns(754, 1);
    slab(754.5, 2);
    spike(754.5, 3);
    thorns(755, 1);
    thorns(756, 1);
    thorns(757, 1);
    slab(757, 2);
    thorns(758, 1);
    thorns(759, 1);
    thorns(760, 1);
    thorns(761, 1);
    slab(761, 3);
    thorns(762, 1);
    slab(762, 3);
    thorns(763, 1);
    slab(763, 3);
    spike(763, 4);
    thorns(764, 1);
    thorns(765, 1);
    slab(765, 2);
    thorns(766, 1);
    slab(766, 2);
    thorns(767, 1);
    slab(767, 2);
    thorns(768, 1);

    box(769, 1);
    box(769, 2);
    box(769, 3);
    shipPortal(769, 6.5);
    box(769, 8);
    box(769, 9);
    box(769, 10);
    changeBackground(769, 'magenta');

    box(782, 1);
    grid(783, 1, 'none');
    box(783, 2);
    grid(784, 1, 'none');
    grid(784, 2, 'none');
    box(784, 3);
    grid(785, 1, 'none');
    grid(785, 2, 'none');
    box(785, 3);
    grid(786, 1, 'none');
    grid(786, 2, 'none');
    box(786, 3);
    grid(787, 1, 'none');
    grid(787, 2, 'none');
    box(787, 3);
    grid(788, 1, 'none');
    grid(788, 2, 'none');
    box(788, 3);
    grid(789, 1, 'none');
    grid(789, 2, 'none');
    box(789, 3);
    grid(790, 1, 'none');
    box(790, 2);
    box(791, 1);

    box(782, 10);
    grid(783, 10, 'none');
    box(783, 9);
    grid(784, 10, 'none');
    grid(784, 9, 'none');
    box(784, 8);
    grid(785, 10, 'none');
    grid(785, 9, 'none');
    box(785, 8);
    grid(786, 10, 'none');
    grid(786, 9, 'none');
    box(786, 8);
    grid(787, 10, 'none');
    grid(787, 9, 'none');
    box(787, 8);
    grid(788, 10, 'none');
    grid(788, 9, 'none');
    box(788, 8);
    grid(789, 10, 'none');
    grid(789, 9, 'none');
    box(789, 8);
    grid(790, 10, 'none');
    box(790, 9);
    box(791, 10);
    thorns(792, 1);
    thorns(793, 1);
    thorns(794, 1);
    thorns(795, 1);
    thorns(796, 1);
    thorns(797, 1);
    thorns(798, 1);
    thorns(799, 1);
    box(800, 1);
    grid(801, 1, 'none');
    box(801, 2);
    grid(802, 1, 'none');
    grid(802, 2, 'none');
    box(802, 3);
    grid(803, 1, 'none');
    grid(803, 2, 'none');
    box(803, 3);
    grid(804, 1, 'none');
    grid(804, 2, 'none');
    box(804, 3);
    grid(805, 1, 'none');
    grid(805, 2, 'none');
    box(805, 3);
    grid(806, 1, 'none');
    grid(806, 2, 'none');
    box(806, 3);
    grid(807, 1, 'none');
    grid(807, 2, 'none');
    box(807, 3);
    grid(808, 1, 'none');
    box(808, 2);
    box(809, 1);

    box(800, 10);
    grid(801, 10, 'none');
    box(801, 9);
    grid(802, 10, 'none');
    grid(802, 9, 'none');
    box(802, 8);
    grid(803, 10, 'none');
    grid(803, 9, 'none');
    box(803, 8);
    grid(804, 10, 'none');
    grid(804, 9, 'none');
    box(804, 8);
    grid(805, 10, 'none');
    grid(805, 9, 'none');
    box(805, 8);
    grid(806, 10, 'none');
    grid(806, 9, 'none');
    box(806, 8);
    grid(807, 10, 'none');
    grid(807, 9, 'none');
    box(807, 8);
    grid(808, 10, 'none');
    box(808, 9);
    box(809, 10);
    thorns(810, 1);
    thorns(811, 1);
    thorns(812, 1);
    thorns(813, 1);
    thorns(814, 1);
    thorns(815, 1);
    thorns(816, 1);
    box(817, 1);
    box(817, 2);
    box(817, 3);
    box(817, 4);
    grid(818, 1, 'none');
    grid(818, 2, 'none');
    grid(818, 3, 'none');
    box(818, 4);
    box(819, 1);
    box(819, 2);
    box(819, 3);
    box(819, 4);
    thorns(820, 1);
    thorns(821, 1);
    thorns(822, 1);
    thorns(823, 1);
    thorns(824, 1);
    thorns(825, 1);
    thorns(826, 1);
    thorns(827, 1);
    thorns(828, 1);
    thorns(829, 1);
    thorns(830, 1);
    thorns(831, 1);
    thorns(832, 1);
    box(832, 10);
    box(832, 9);
    box(832, 8);
    box(832, 7);
    grid(833, 10, 'none');
    grid(833, 9, 'none');
    grid(833, 8, 'none');
    box(833, 7);
    box(834, 10);
    box(834, 9);
    box(834, 8);
    box(834, 7);
    thorns(833, 1);
    thorns(834, 1);
    thorns(835, 1);
    thorns(836, 1);
    thorns(837, 1);
    thorns(838, 1);
    thorns(839, 1);
    thorns(840, 1);
    thorns(841, 1);
    thorns(842, 1);
    thorns(843, 1);
    thorns(844, 1);
    thorns(845, 1);
    thorns(846, 1);
    thorns(847, 1);
    thorns(848, 1);
    box(849, 1);
    box(850, 1);
    box(851, 1);
    box(852, 1);
    box(853, 1);
    box(854, 1);
    spike(849, 2);
    spike(850, 2);
    spike(851, 2);
    spike(852, 2);
    spike(853, 2);
    spike(854, 2);

    box(849, 10);
    box(850, 10);
    box(851, 10);
    box(852, 10);
    box(853, 10);
    box(854, 10);
    spike(849, 9, 3.1459);
    spike(850, 9, 3.1459);
    spike(851, 9, 3.1459);
    spike(852, 9, 3.1459);
    spike(853, 9, 3.1459);
    spike(854, 9, 3.1459);
    thorns(855, 1);
    thorns(856, 1);
    thorns(857, 1);
    thorns(858, 1);
    thorns(859, 1);
    box(860, 1);
    box(860, 2);
    spike(860, 3);
    grid(861, 1, 'none');
    box(861, 2);
    spike(861, 3);
    grid(862, 1, 'none');
    box(862, 2);
    spike(862, 3);
    grid(863, 1, 'none');
    box(863, 2);
    spike(863, 3);
    grid(864, 1, 'none');
    box(864, 2);
    spike(864, 3);
    box(865, 1);
    box(865, 2);
    spike(865, 3);

    box(860, 10);
    box(860, 9);
    spike(860, 8, 3.1459);
    grid(861, 10, 'none');
    box(861, 9);
    spike(861, 8, 3.1459);
    grid(862, 10, 'none');
    box(862, 9);
    spike(862, 8, 3.1459);
    grid(863, 10, 'none');
    box(863, 9);
    spike(863, 8, 3.1459);
    grid(864, 10, 'none');
    box(864, 9);
    spike(864, 8, 3.1459);
    box(865, 10);
    box(865, 9);
    spike(865, 8, 3.1459);
    thorns(866, 1);
    thorns(867, 1);
    thorns(868, 1);
    thorns(869, 1);
    thorns(870, 1);
    thorns(871, 1);
    box(872, 1);
    box(872, 2);
    box(872, 3);
    grid(873, 1, 'none');
    grid(873, 2, 'none');
    box(873, 3);
    grid(874, 1, 'none');
    grid(874, 2, 'none');
    box(874, 3);
    grid(875, 1, 'none');
    grid(875, 2, 'none');
    box(875, 3);
    grid(876, 1, 'none');
    grid(876, 2, 'none');
    box(876, 3);
    grid(877, 1, 'none');
    grid(877, 2, 'none');
    box(877, 3);
    grid(878, 1, 'none');
    grid(878, 2, 'none');
    box(878, 3);
    grid(879, 1, 'none');
    grid(879, 2, 'none');
    box(879, 3);
    grid(880, 1, 'none');
    grid(880, 2, 'none');
    box(880, 3);
    grid(881, 1, 'none');
    grid(881, 2, 'none');
    box(881, 3);
    grid(882, 1, 'none');
    grid(882, 2, 'none');
    box(882, 3);
    box(883, 1);
    box(883, 2);
    box(883, 3);

    box(872, 10);
    box(872, 9);
    box(872, 8);
    grid(873, 10, 'none');
    grid(873, 9, 'none');
    box(873, 8);
    grid(874, 10, 'none');
    grid(874, 9, 'none');
    box(874, 8);
    grid(875, 10, 'none');
    grid(875, 9, 'none');
    box(875, 8);
    grid(876, 10, 'none');
    grid(876, 9, 'none');
    box(876, 8);
    grid(877, 10, 'none');
    grid(877, 9, 'none');
    box(877, 8);
    grid(878, 10, 'none');
    grid(878, 9, 'none');
    box(878, 8);
    grid(879, 10, 'none');
    grid(879, 9, 'none');
    box(879, 8);
    grid(880, 10, 'none');
    grid(880, 9, 'none');
    box(880, 8);
    grid(881, 10, 'none');
    grid(881, 9, 'none');
    box(881, 8);
    grid(882, 10, 'none');
    grid(882, 9, 'none');
    box(882, 8);
    box(883, 10);
    box(883, 9);
    box(883, 8);

    winLevel(893);
  }
  
  //Back On Track
  if(num === 2) {
    squareContainer.show();
    map.show();
    floor.tint = css('magenta');

    // Level Layout //
    roof(false);
    jumpPad(16, 1, 'yellow');
    spike(17, 1);
    spike(18, 1);
    spike(19, 1);
    spike(20, 1);

    spike(26, 1);
    spike(27, 1);

    spike(36, 1);
    spike(37, 1);
    box(38, 1);
    thorns(39, 1);
    thorns(40, 1);
    thorns(41, 1);

    grid(42, 1, 'leftright');
    box(42, 2);

    jumpPad(51, 1, 'yellow');
    spike(52, 1);
    spike(53, 1);
    spike(54, 1);
    spike(55, 1);
    spike(56, 1);
    slab(56, 2);
    spike(57, 1);
    spike(58, 1);
    spike(59, 1);

    spike(67, 1);
    spike(68, 1);
    box(69, 1);
    thorns(70, 1);
    thorns(71, 1);
    thorns(72, 1);
    grid(73 , 1, 'leftright');
    box(73, 2);
    thorns(74, 1);
    thorns(75, 1);
    thorns(76, 1);
    grid(77 , 1, 'leftright');
    grid(77 , 2, 'leftright');
    box(77, 3);
    spike(78, 1);
    spike(79, 1);
    spike(80, 1);

    spike(87.25, 1);
    spike(88.25, 1);

    spike(92, 1);

    box(96, 2);
    spike(96, 3);

    spike(101, 1);

    spike(104, 4.4, 3.1459);
    box(104, 5.4);
    spike(105, 4.4, 3.1459);
    box(105, 5.4);
    jumpPad(105.5, 1, 'yellow');
    spike(106, 4.4, 3.1459);
    box(106, 5.4);
    spike(107, 4.4, 3.1459);
    box(107, 5.4);
    spike(108, 4.4, 3.1459);
    box(108, 5.4);
    spike(109, 4.4, 3.1459);
    box(109, 5.4);
    jumpPad(110, 1, 'yellow');
    spike(110, 4.4, 3.1459);
    box(110, 5.4);
    spike(111, 4.4, 3.1459);
    box(111, 5.4);
    spike(112, 4.4, 3.1459);
    box(112, 5.4);
    spike(113, 4.4, 3.1459);
    box(113, 5.4);
    spike(114, 4.4, 3.1459);
    box(114, 5.4);
    jumpPad(114.5, 1, 'yellow');
    spike(115, 4.4, 3.1459);
    box(115, 5.4);
    spike(116, 4.4, 3.1459);
    box(116, 5.4);
    
    spike(123, 1);

    box(127, 2);
    spike(127, 3);

    spike(132, 1);
    spike(133, 1);
    box(134, 1);
    spike(135, 1);
    spike(136, 1);
    spike(137, 1);

    box(141, 2);
    spike(141, 3);

    jumpPad(143, 1, 'yellow');
    spike(144, 1);
    spike(145, 1);
    spike(146, 1);
    spike(147, 1);
    box(148, 1);
    thorns(149, 1);
    slab(149, 1);
    thorns(150, 1);
    slab(150, 1);
    thorns(151, 1);
    slab(151, 1);
    thorns(152, 1);
    slab(152, 1);
    box(153, 1);
    thorns(154, 1);
    thorns(155, 1);
    thorns(156, 1);
    grid(157, 1, 'leftright');
    box(157, 2);
    thorns(158, 1);
    slab(158, 2);
    thorns(159, 1);
    slab(159, 2);
    thorns(160, 1);
    slab(160, 2);
    grid(161, 1, 'leftright');
    box(161, 2);
    spike(161, 3);
    thorns(162, 1);
    thorns(163, 1);
    box(164, 1);
    thorns(165, 1);
    slab(165, 1);
    thorns(166, 1);
    slab(166, 1);
    thorns(167, 1);
    slab(167, 1);
    spike(167, 2);
    thorns(168, 1);
    slab(168, 1);
    thorns(169, 1);
    slab(169, 1);
    box(170, 1);
    jumpPad(170, 2, 'yellow');
    thorns(171, 1);
    thorns(172, 1);
    thorns(173, 1);
    thorns(174, 1);
    thorns(175, 1);
    slab(175, 3);
    thorns(176, 1);
    thorns(177, 1);
    thorns(178, 1);
    thorns(179, 1);
    slab(179, 4);
    thorns(180, 1);
    thorns(181, 1);
    thorns(182, 1);
    thorns(183, 1);
    slab(183, 5);
    thorns(184, 1);
    thorns(185, 1);
    thorns(186, 1);
    slab(186, 2);
    thorns(187, 1);
    slab(187, 2);
    thorns(188, 1);
    slab(188, 2);
    thorns(189, 1);
    thorns(190, 1);
    slab(190, 1);
    thorns(191, 1);
    slab(191, 1);
    thorns(192, 1);
    thorns(193, 1);
    thorns(194, 1);
    thorns(195, 1);
    slab(195, 2);
    thorns(196, 1);
    thorns(197, 1);
    thorns(198, 1);
    thorns(199, 1);
    slab(199, 3);
    thorns(200, 1);
    thorns(201, 1);
    slab(201, 2);
    thorns(202, 1);
    box(203, 1);
    slab(203, 4);
    spike(203, 5);
    thorns(204, 1);
    slab(204, 1);
    thorns(205, 1);
    slab(205, 1);
    box(206, 1);
    spike(206, 2);
    thorns(207, 1);
    thorns(208, 1);
    box(209, 1);
    thorns(210, 1);
    thorns(211, 1);
    thorns(212, 1);
    grid(213, 1, 'leftright');
    box(213, 2);
    thorns(214, 1);
    thorns(215, 1);
    thorns(216, 1);
    grid(217, 1, 'leftright');
    grid(217, 2, 'leftright');
    box(217, 3);
    jumpPad(217, 4, 'yellow');
    thorns(218, 1);
    thorns(219, 1);
    thorns(220, 1);
    thorns(221, 1);
    thorns(222, 1);
    thorns(223, 1);
    grid(224, 1, 'leftright');
    box(224, 2);
    thorns(225, 1);
    thorns(226, 1);
    box(227, 1);
    thorns(228, 1);
    thorns(229, 1);
    thorns(230, 1);
    grid(231, 1, 'leftright');
    box(231, 1);
  }
}
preloadTextures();
showMainMenu();