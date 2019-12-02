
const state = {
    msTens: 0,
    msHundreds: 0,
    secondOnes: 0,
    secondTens: 0
}

const secondTens = document.querySelector('#secondTens')
const secondOnes = document.querySelector('#secondOnes')
const msHundreds = document.querySelector('#msHundreds')
const msTens = document.querySelector('#msTens')
const digits = document.querySelector('.digits')
/**
 * We simply add 1 to ms tens every 10 milliseconds, then do simple
 * arithmetic to figure out how to increment large digits. We set
 * innerHTML of appropriate elements to our incremeneted figures,
 * then clear the inerval once we habe ten seconds, and change the class
 * of digits to appear red.
 */

function timerEvent() {
    const interval = window.setInterval(timer, 10);
    digits.className = "digits"
    state.secondTens = 0
    function timer() {
        state.msTens++
        if (state.msTens > 9) {
            state.msTens = 0
            state.msHundreds++
        }

        if (state.msHundreds > 5) {
            state.msHundreds = 0
            state.secondOnes++
        }

        if (state.secondOnes > 9) {
            state.secondOnes = 0
            state.secondTens++
        }

        secondTens.innerHTML = state.secondTens
        secondOnes.innerHTML = state.secondOnes
        msTens.innerHTML = state.msTens
        msHundreds.innerHTML = state.msHundreds

        if (state.secondTens >= 1) {
            window.clearInterval(interval)
            digits.className = "redDigit"
        }
    }
}

const startBtn = document.querySelector('.start-button')
startBtn.addEventListener("click", timerEvent)
