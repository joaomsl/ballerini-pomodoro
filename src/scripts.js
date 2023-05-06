import Alpine from 'alpinejs'
import tasks from './components/tasks'

window.Alpine = Alpine

Alpine.data('tasks', tasks)

Alpine.start()