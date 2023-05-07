const states = {
    STOPPED: 0,
    RUNNING: 1,
    FINISHED: 2
}

export default function(currentMode, nextMode) {
    return {
        showActions: false,

        initialTimestamp: null,
        timestamp: null,
        
        state: states.STOPPED,

        currentMode: currentMode,
        nextMode: nextMode,

        init() {
            this.reset()
            setInterval(() => this.heartbeat(), 1000)
        },
        isStopped() {
            return this.state === states.STOPPED
        },
        isRunning() {
            return this.state === states.RUNNING
        },
        isFinished() {
            return this.state === states.FINISHED
        },
        toggleRun() {
            this.state = this.isRunning() ? states.STOPPED : states.RUNNING
        },
        heartbeat() {
            if(this.state !== states.RUNNING) {
                return
            }
            if(this.timestamp <= 0) {
                this.state = states.FINISHED
                return
            }

            this.timestamp -= 1000
        },
        getFormattedTime() {
            const options = { minute: 'numeric', second: 'numeric' }
            return Intl.DateTimeFormat('default', options).format(this.timestamp)
        },
        reset() {
            let dateTime = new Date(Date.UTC(1970, 0, 1))
            this.currentMode.dateTimeStrategy(dateTime)

            this.initialTimestamp = this.timestamp = dateTime.getTime()

            this.$dispatch('reset-timer', {initialTimestamp: this.initialTimestamp})
        },
        goToNextModeAndRun() {
            const modeManager = this.$mode
            if(!modeManager.goToNextMode()) {
                modeManager.reset()
            }

            this.currentMode = modeManager.getCurrentMode()
            this.nextMode = modeManager.getNextMode()

            this.reset()
            this.state = states.RUNNING
        }
    }
}