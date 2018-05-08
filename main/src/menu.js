/*
 * menu.js
 *
 * Methods Defined:
 * clickStart()- When user click "Play Game" button, the game will start.
 * clickDifficulty() - Set the difficulty of game.
 * clickSound()- Mute or unmuted sound of game.
 * clickScore()- Showing the highest score of this game.  
 * clickInstruction() - Showing the instruction of game.
 */

"use strict";

class Menu extends Layer {

    constructor(options = {}) {
        super({
        id:'menu',
        hasCanvas:false,
        classes:['hidden', 'fullscreen']
       });
    this.menuSound = new Sound('sounds/menu_select.mp3');
    }

    init() {
        let self = this;
        return new Promise((resolve, reject) => {
            super.init().then(() => {
                return Promise.all([
                self.menuSound.load()
                ]);
            }).then(resolve, reason => reject(reason));
        });
    }


    start(){
        this.fadeIn();
    }

    //When user click "Play Game" button, the game will start.
    clickStart() {
        console.log('menu.clickStart()');
        this.menuSound.play();
        this.fadeOut().then(() => L.game.start());
    }
    /*
    //Set the difficulty of game.
    clickDifficulty(){
        console.log('menu.clickDifficulty');
        this.menuSound.play();
    }

    //Mute or unmuted sound of game.
    clickSound(){
        console.log('menu.clickSound()');
        this.menuSound.play(); 
    }**/

    //Showing the highest score of this game.
    clickScore(){
        console.log('menu.clickScore()');
        this.menuSound.play();
    }

    //Showing the instruction of game.
    clickHelp(){
        console.log('menu.clickInstruction()');
        this.menuSound.play();
    }

}

