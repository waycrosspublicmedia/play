  
function GetAudioEnabled() {
    if (ytgame.system.isAudioEnabled()) {
	gameInstance.SendMessage('Alien_Youtube', 'GetAudio', "1");
    } else {
        gameInstance.SendMessage('Alien_Youtube', 'GetAudio', "0");
    }
}

function OnGameInteractable() {
  ytgame.game.gameReady();
}

//data
var dataString = '';

function LoadDataYT() {
    try {
        ytgame.game.loadData().then((data) => {

            receiveInstance(data);
        });
    } catch (e) {
        receiveInstance("#error");
    }
}

function SaveDataYT(data) {
    ytgame.game.saveData(data).then(() => {
        // Handle data save success.
        console.log('save success');
    }, (e) => {
        // Handle data save failure.
        console.log('save failure');
    });
}

function receiveInstance(data) {
    dataString = data;
    gameInstance.SendMessage('Alien_Youtube', 'LoadDataYT', dataString);
}

function receiveInstanceAudio(isAudioEnabled) {
	console.log('save failure :' +isAudioEnabled);
	if (gameInstance === undefined) {
  
} else { 
     if(isAudioEnabled)
        gameInstance.SendMessage('Alien_Youtube', 'AudioChange', "1");
	else
		gameInstance.SendMessage('Alien_Youtube', 'AudioChange', "0");
}

     
}