import Alpine from 'alpinejs'
import pomodoro from './components/pomodoro'
import tasks from './components/tasks'
import persist from '@alpinejs/persist' 

import mode from './app/mode'
import translate from './app/translate'
import circularProgressBar from './components/circular-progress-bar'

window.Alpine = Alpine

Alpine.plugin(persist)

Alpine.data('tasks', tasks)
Alpine.data('pomodoro', pomodoro)
Alpine.data('circularProgressBar', circularProgressBar)

await translate.reloadMessages() //TODO:
Alpine.magic('mode', () => mode)
Alpine.magic('translate', () => translate)

Alpine.start()