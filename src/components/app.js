export default function() {
    return {
        messages: {},

        collectMessages() {
            this.messages = this.$translate.messages
        },
        init() {
            this.collectMessages()
        },
        async toggleLanguage() {
            await this.$translate.toggleLanguage()
            this.collectMessages()
        }
    }
}