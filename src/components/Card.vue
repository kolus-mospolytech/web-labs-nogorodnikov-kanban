<template>
    <div :id="id" @dragover.stop @dragstart="dragStart" class="task-card" draggable="true">
        <h1 class="task-card__title">Задача №{{id}}</h1>
        <p class="task-card__description">{{computedCardDescription}}</p>
        <h2 class="task-card__header">Дата и время начала</h2>
        <span class="task-card__info">{{computedStartTime}}</span>
        <h2 class="task-card__header">Ушло времени</h2>
        <span class="task-card__info">{{computedWastedTime}}</span>
        <h2 class="task-card__header">Ответственный</h2>
        <span class="task-card__info">{{computedExecutor}}</span>
        <div class="control-panel">
            <button class="control-panel__button material-icons"
                    onclick="
                    console.log(this.parentNode.parentNode.parentNode.id,
                    this.computedCardDescription,
                    this.computedExecutor,
                    this.computedStartTime,
                    this.computedFinishTime)
                    PopUpShow(this.parentNode.parentNode.parentNode.id,
                    this.computedCardDescription,
                    this.computedExecutor,
                    this.computedStartTime,
                    this.computedFinishTime)">
                create
            </button>
            <button class="control-panel__button material-icons" v-on:click="changeBoard(id)">done</button>
            <button class="control-panel__button material-icons" v-on:click="removeCard(id)">clear</button>
        </div>
    </div>
</template>

<script>
    import Redact from "@/components/Redact"
    import {eventBus} from "@/main";

    export default {
        name: "Card",
        props: ['id', 'cardDescription', 'startTime', 'wastedTime', 'executor'],
        data: function () {
            return {
                computedCardDescription: this.cardDescription,
                computedStartTime: this.startTime,
                computedFinishTime: '',
                computedWastedTime: this.wastedTime,
                computedExecutor: this.executor,
            };
        },
        created() {
            eventBus.$on('needTime', () => {
                const card = document.getElementById(this.id)
                const board_id = card.parentNode.id
                const board_num = board_id.slice(board_id.length - 1)

                if ((board_num === '2') && (!this.computedStartTime)) {
                    this.computedStartTime = Math.floor(Date.now() / 1000)
                    const today = new Date()

                    let minutes = today.getMinutes()
                    let hours = today.getHours()
                    let day = today.getDate()
                    let month = today.getMonth() + 1
                    const year = today.getFullYear()

                    if (minutes < 10) {
                        minutes = '0' + minutes
                    }

                    if (hours < 10) {
                        hours = '0' + hours
                    }

                    if (day < 10) {
                        day = '0' + day
                    }

                    if (month < 10) {
                        month = '0' + month
                    }
                    this.computedStartTime = month + '.' + day + '.' + year + ', ' + hours + ':' + minutes
                }
            });
            eventBus.$on('done', () => {
                const card = document.getElementById(this.id)
                const board_id = card.parentNode.id
                const board_num = board_id.slice(board_id.length - 1)

                if (board_num === '3') {
                    const start = new Date(Date.parse(this.computedStartTime))
                    const finish = new Date()
                    const wasted = finish - start

                    let minutes = Math.floor(wasted / (1000 * 60))
                    let hours = Math.floor(wasted / (1000 * 60 * 60))
                    let answer

                    switch (minutes) {
                        case 0:
                            answer = 'Меньше минуты'
                            break
                        case (minutes > 59):
                            minutes = wasted % (1000 * 60)
                            answer = hours + 'Часов: ' + hours + ', минут: ' + minutes
                            break
                        default:
                            answer = 'Минут: ' + minutes
                            break
                    }

                    this.computedFinishTime = finish
                    this.computedWastedTime = answer
                }
            });
            eventBus.$on('applyChanges', () => {
                this.computedCardDescription = Redact.changes.updatedCardDescription
            })
        },
        methods: {
            dragStart: event => {
                const target = event.target

                event.dataTransfer.setData('card_id', target.id)
            },
            changeBoard: function (card_id) {
                const card = document.getElementById(card_id)
                const board_id = card.parentNode.id
                const board_num = board_id.slice(board_id.length - 1)

                document.getElementById(board_id.slice(0, -1) + (parseInt(board_num) + 1)).appendChild(card)

                eventBus.$emit('needTime')
                eventBus.$emit('done')
                eventBus.$emit('makeCount')
            },
            removeCard: function (card_id) {
                document.getElementById(card_id).remove()

                eventBus.$emit('makeCount')
            },
            popUpShow: function () {
                eventBus.$emit('show')
            }
        }
    }
</script>
