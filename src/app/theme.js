const storage = window.localStorage
const storageKey = 'ballerini-pomodoro-theme'

const themes = {
    LIGHT: 'light',
    DARK: 'dark'
}

function setTheme(theme) {
    storage.setItem(storageKey, theme)

    const classList = document.documentElement.classList
    classList.remove(...Object.values(themes))
    classList.add(theme)
}

function getCurrentTheme() {
    return storage.getItem(storageKey) ?? themes.LIGHT
}

export default {
    load() {
        setTheme(getCurrentTheme())
    },

    toggleTheme() {
        setTheme(getCurrentTheme() === themes.LIGHT ? themes.DARK : themes.LIGHT)
    }

}