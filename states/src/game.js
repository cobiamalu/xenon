var width = 600;
var height = 800;

//Creating Game with Width & Height parameters
var game = new Phaser.Game(width, height, Phaser.CANVAS, "gameDiv");

<<<<<<< HEAD
    game.state.add("Boot", bootState);
    game.state.add("Preload", preloadState);
    game.state.add("GameIntro", gameIntroState);
    game.state.add("GameTitle", gameTitleState);
    game.state.add("Settings", settingsState);
    game.state.add("Level1", level1);
    game.state.add("Level2", level2);
    game.state.add("Level3", level3);
    game.state.add("Level4", level4);
    game.state.add("Level5", level5);
    game.state.add("GameOver", gameOverState);
=======
    game.state.add("Boot",bootState);
    game.state.add("Preload",preloadState);
    game.state.add("GameIntro",gameIntroState);
    game.state.add("GameTitle",gameTitleState);
    game.state.add("Settings",settingsState);
    game.state.add("Level1",level1);
    game.state.add("Level2",level2);
    game.state.add("Level3",level3);
    game.state.add("Level4",level4);
    game.state.add("Level5",level5);
   // game.state.add("Transition",transitionState);
    game.state.add("GameOver",gameOverState);
>>>>>>> db2dcea83adcc7adb7c8e41c140dec8a099e3744

    //Starts Boot
    game.state.start("Boot");
