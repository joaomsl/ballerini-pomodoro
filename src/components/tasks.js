export default function() {
    return {
        tasks: this.$persist([]).as('ballerini-pomodoro-tasks'),
        
        add(taskText) {
            this.tasks.push({text: taskText, isCompleted: false})
        },

        getOrFail(taskIndex) {
            const task = this.tasks[taskIndex]
            
            if(!task) {
                alert('Task #'+taskIndex+' não encontrada!')
                return null;
            }

            return task;
        },
        
        toggle(taskIndex) {
            const task = this.getOrFail(taskIndex)
            task.isCompleted = !task.isCompleted
        },
        
        // TODO: Deletar as tasks?

        handleAddTaskButtonClick() {
            const taskInput = this.$refs.taskInput
            const inputText = taskInput.value
            taskInput.value = ''

            inputText ? this.add(inputText) : alert('Digite algo na caixa de texto.')
        },

        makeClassesForCheckbox(task, mode) {
            const textColor = mode.styleClasses.textColor
            const focusRing = mode.styleClasses.focusRing


            // WTF
            const classes = {'dark:bg-zinc-800': !task.isCompleted}
            classes[textColor] = true
            classes[focusRing] = true

            return classes
        }
    }
}