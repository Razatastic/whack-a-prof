function menuInit() {
    console.log("menuInit()");
    
    // load menu iframe
    createIFrame('menu');
}

function waitForMenu(callback) {
    
}

function doMenu() {
    gameState.currentState = States.MENU;
    
    transitionTo('mallet', () => { enableMallet(); });

    var intervalM = setInterval(watchProperty(gameState, "currentState", (oldval, newval) => {
        if (oldval != newval) {
            clearInterval(intervalM);
            switch(newval) {
                case States.PLAYING:
                    nextState = 'playing';
                    nextAction = doPlaying;
                    break;
                case States.HELP:
                    nextState = 'help';
                    nextAction = doHelp;
                    break;
                case States.QUIT:
                    nextState = 'quit';
                    nextAction = doQuit;
                    break;
                default:
                    nextState = 'menu';
                    nextAction = doMenu;
                    break;
            }

            transitionFrom('menu', () => {
                transitionTo(nextState, () => {
                    nextAction();
            });});

        }
    }), WatchInterval);

}


function MenuSelected() 
{ 
    var x=new Audio('sounds/menu_select.mp3');
    x.play(); 
} 


