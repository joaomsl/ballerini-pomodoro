import Alpine from 'alpinejs'
import tasks from './components/tasks'
import persist from '@alpinejs/persist' 

window.Alpine = Alpine

Alpine.plugin(persist)

Alpine.data('tasks', tasks)

Alpine.start()