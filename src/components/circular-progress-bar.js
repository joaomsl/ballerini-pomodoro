export default function(initialTimestamp) {
    return {
        radius: 100,

        baseTimestamp: initialTimestamp,
        circumference: 0, 
        offset: 0,

        init() {
            this.circumference = this.radius * 2 * Math.PI
            this.$watch('timestamp', (timestamp) => this.recalculate(timestamp))
        },
        handleTimerResetEvent(event) {
            this.baseTimestamp = event.detail.initialTimestamp
        },
        recalculate(currentTimestamp) {
            const percent = currentTimestamp * 100 / this.baseTimestamp
            this.offset = this.circumference - (this.circumference * percent / 100)
        }
    }
}