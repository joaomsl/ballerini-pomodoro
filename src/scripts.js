import Alpine from 'alpinejs'
import tasks from './components/tasks'
import timer from './components/timer'
import persist from '@alpinejs/persist' 

import mode from './app/mode'
import translate from './app/translate'

window.Alpine = Alpine

Alpine.plugin(persist)

Alpine.data('tasks', tasks)
Alpine.data('timer', timer)

Alpine.magic('mode', () => mode)
Alpine.magic('translate', () => translate)

Alpine.start()