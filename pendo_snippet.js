const iframe = document.querySelector('#myFrame');
const contentWindow = iframe.contentWindow;

const pendoButton = document.querySelector('#pendo-button-35ef2727');
pendoButton.style.pointerEvents = 'none';
const pendoButtonParent = pendoButton.parentNode
pendoButtonParent.onclick = function() {
	if (iframe && iframe.contentWindow) {
		iframe.contentWindow.postMessage('close', '*')
		pendoButton.click()
	}
}

console.log('iframe', iframe, contentWindow);
// document.getElementById('pendo-button-35ef2727').onclick = function() {
// 	console.log('iframe', iframe, contentWindow, iframe.contentWindow);
// 	if (iframe && iframe.contentWindow) {
// 		iframe.contentWindow.postMessage('close', '*')
// 	}
// }