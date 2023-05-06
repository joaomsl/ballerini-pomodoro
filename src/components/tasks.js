export default function() {
    return {
        tasks: [],
        
        add(text) {
            this.tasks.push({text, isCompleted: false})
        },

        handleAddTaskButtonClick() {
            const taskInput = this.$refs.taskInput
            const inputText = taskInput.value
            taskInput.value = ''

            inputText ? this.add(inputText) : alert('Digite algo na caixa de texto.')
        }
    }
}