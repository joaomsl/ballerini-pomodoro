import Alpine from 'alpinejs'
import persist from '@alpinejs/persist' 
import pomodoro from './components/pomodoro'
import tasks from './components/tasks'
import app from './components/app'

import mode from './app/mode'
import translate from './app/translate'
import circularProgressBar from './components/circular-progress-bar'
import theme from './app/theme'

window.Alpine = Alpine

Alpine.plugin(persist)

Alpine.magic('mode', () => mode)
Alpine.magic('translate', () => translate)
Alpine.magic('theme', () => theme)

Alpine.data('app', app)
Alpine.data('tasks', tasks)
Alpine.data('pomodoro', pomodoro)
Alpine.data('circularProgressBar', circularProgressBar)

theme.load()

document.addEventListener('DOMContentLoaded', async () => {
    await translate.reloadMessages()
  
    Alpine.start()
    document.documentElement.setAttribute('loaded', true)
})