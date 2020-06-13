<template>
    <div :id="id" @dragover.stop @dragstart="dragStart" class="task-card" draggable="true">
        <h1 class="task-card__title">Задача №{{id}}</h1>
        <p class="task-card__description">{{cardDescription}}</p>
        <h2 class="task-card__header">Дата и время начала</h2>
        <span class="task-card__info">{{startTime}}</span>
        <h2 class="task-card__header">Ушло времени</h2>
        <span class="task-card__info">{{durationTime}}</span>
        <h2 class="task-card__header">Ответственный</h2>
        <span class="task-card__info">{{executor}}</span>
        <div class="control-panel">
            <button class="control-panel__button material-icons" onclick="PopUpShow()">create
            </button>
            <button class="control-panel__button material-icons" v-on:click="changeBoard(id)">done</button>
            <button class="control-panel__button material-icons" v-on:click="removeCard(id)">clear</button>
        </div>
    </div>
</template>

<script>
    import {eventBus} from "@/main";

    export default {
        name: "Card",
        props: ['id', 'cardDescription', 'startTime', 'durationTime', 'executor'],
        methods: {
            dragStart: event => {
                const target = event.target;

                event.dataTransfer.setData('card_id', target.id);
            },
            changeBoard: function (card_id) {
                const card = document.getElementById(card_id);
                const board_id = card.parentNode.id;
                const board_num = board_id.slice(board_id.length - 1)

                document.getElementById(board_id.slice(0, - 1) + (parseInt(board_num) + 1)).appendChild(card);

                eventBus.$emit('makeCount')
            },
            removeCard: function (card_id) {
                document.getElementById(card_id).remove();

                eventBus.$emit('makeCount')
            }
        }
    }
</script>
