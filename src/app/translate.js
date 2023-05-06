const languages = ['pt-br', 'eng']
let currentLanguageIndex = 0

function getCurrentLanguage() {
    return languages[currentLanguageIndex]
}

async function loadMessages(language) {
    return fetch('/translations/'+language+'.json')
        .then(response => response.json())
}

export default {
    messages: {},
    
    async reloadMessages() {
        this.messages = await loadMessages(getCurrentLanguage())
    },

    async toggleLanguage() {
        const nextLanguageIndex = Math.min(currentLanguageIndex + 1, languages.length - 1)
        currentLanguageIndex = nextLanguageIndex === currentLanguageIndex ? 0 : nextLanguageIndex
        
        await this.reloadMessages()
    }
}