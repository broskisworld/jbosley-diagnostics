import alert from "../../util/alert.js";
import { getScreen, clear, div, el } from "../../screens/default.js";
import Game from './game.js';

function dino() {
	clear();

	return new Promise(resolve => {
		let gameScreen = getScreen("dino");
		let container = div(gameScreen, 'dino-container');

		const onGameOver = async (score) => {
			await alert(`YOU DIED! \n Score: ${score}`)
			resolve();
		};
		
		let game = new Game({ container, onGameOver });
		game.start();
	});

}

const stylesheets = ['dino'];

export { stylesheets };

export default dino;