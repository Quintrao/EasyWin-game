// const { Vue } = require("vue")

const app = Vue.createApp({
    data() {
        return {
            title: 'Привет, Аноним',
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