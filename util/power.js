import { click } from "../sound/index.js";
import { boot } from "../screens/default.js";
import { stopSpeaking } from "./speak.js";
import pause from "./pause.js";

/** Turn on the terminal */
async function on() {
	click();
	await power();
	boot();
}

/** Turn off the terminal */
function off() {
	click();
	stopSpeaking();
	power(false);
}

async function power(on = true) {
	// @FIXME use a single class on the #monitor to detect on/off
	await pause(0.1);

	document.getElementById("monitor").classList.toggle("turn-off", !on);
	document.getElementById("monitor").classList.toggle("off", !on);
	return;
}

export { power, on, off };
