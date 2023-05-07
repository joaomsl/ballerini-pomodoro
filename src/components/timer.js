export default function() {
    return {
        showActions: false,
        timestamp: null,
        isRunning: false,
        
        init() {
            this.reset()
            setInterval(() => this.heartbeat(), 1000)
        },
        toggleRun() {
            this.isRunning = !this.isRunning
        },
        heartbeat() {
            if(!this.isRunning) {
                return
            }

            this.timestamp -= 1000
        },
        getFormattedTime() {
            const options = { minute: 'numeric', second: 'numeric' }
            return Intl.DateTimeFormat('default', options).format(this.timestamp)
        },
        reset() {
            let dateTime = new Date(0, 0, 0)
            this.$mode.getCurrentMode().dateTimeStrategy(dateTime)
            this.timestamp = dateTime.getTime()
        }
    }
}