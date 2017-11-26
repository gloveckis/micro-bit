// Catch the Drop
// Move pad to the left (A) and right (B). Try to catch as much drops as you can.

let result = 0
let pad = 0
led.plot(pad, 4)

input.onButtonPressed(Button.A, () => {
	led.unplot(pad, 4)
	pad = pad <= 0 ? 0 : pad - 1
	led.plot(pad, 4)
})

input.onButtonPressed(Button.B, () => {
	led.unplot(pad, 4)
	pad = pad >= 4 ? 4 : pad + 1
	led.plot(pad, 4)
})

for (let dropCount = 0; dropCount < 10; dropCount++) {
	let dropColumn = Math.random(5)
	for (let row = 0; row < 4; row++) {
		blink(dropColumn, row, 300)
	}
	basic.pause(300)
	result = dropColumn == pad ? result + 1 : result
}

// remove buttons listeners
input.onButtonPressed(Button.A, () => {
})
input.onButtonPressed(Button.B, () => {
})

if (result >= 10) {
	basic.showString("Wow")
} else if (result <= 0) {
	basic.showString("Boo")
}
basic.showNumber(result)

function blink(x: number, y: number, time: number) {
	led.plot(x, y)
	basic.pause(time)
	led.unplot(x, y)
}
