const nameFromURL = window.location.search.split('=')[1]
const myName = nameFromURL || 'Аноним'

const app = Vue.createApp({
    data() {
        return {
            name: myName,
            message: 'Нажми на кнопку, чтобы выиграть'
        }
    },
    methods: {
        winGame() {
            this.message = 'Поздравляю, ты выиграл'
        },
        loseGame() {
            this.message = 'О, нет, ты проиграл'
        }
    }


})

const vm = app.mount('#container')