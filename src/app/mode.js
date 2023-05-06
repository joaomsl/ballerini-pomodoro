function makeModeStyleClasses(borderColorClass, backgroundClass, textColorClass) {
    return {borderColorClass, backgroundClass, textColorClass}
}

function makeMode(nameTranslationKey, duration, styleClasses, iconName) {
    return {nameTranslationKey, duration, styleClasses, iconName}
}

function makeFocusMode() {
    return makeMode(
        'focus',
        '25 minutes',
        makeModeStyleClasses('border-lime-500', 'bg-lime-500/10', 'text-lime-500'),
        'brain'
    )
}

function makeShortPauseMode() {
    return makeMode(
        'shortPause',
        '5 minutes',
        makeModeStyleClasses('border-amber-500', 'bg-amber-500/10', 'text-amber-500'),
        'coffee'
    )
}

function makeLongPauseMode() {
    return makeMode(
        'longPause',
        '15 minutes',
        makeModeStyleClasses('border-cyan-500', 'bg-cyan-500/10', 'text-cyan-500'),
        'coffee'
    )
}

const modes = [
    makeFocusMode(),
    makeShortPauseMode(),
    makeLongPauseMode()
]
let currentSequenceIndex = 0;
const sequence = [0, 1, 0, 1, 0, 1, 0, 2];

export default {
    getCurrentMode() {
        return modes[sequence[currentSequenceIndex]]
    },
    getNextMode() {
        return this.isLastedMode() ? modes[sequence[0]] : modes[sequence[currentSequenceIndex + 1]]
    },
    isLastedMode() {
        return currentSequenceIndex === (sequence.length - 1)
    },
    goToNextMode() {
        if(this.isLastedMode()) {
            return false;
        }

        currentSequenceIndex++
        return true;
    },
    reset() {
        currentSequenceIndex = 0
    }
}