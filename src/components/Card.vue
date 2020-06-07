<template>
    <div :draggable="draggable" :id="id" @dragover.stop @dragstart="dragStart" class="task-card">
        <h1 class="task-card__title">Задача №</h1>
        <p class="task-card__description"></p>
        <h2 class="task-card__header">Дата и время начала</h2>
        <span class="task-card__info"></span>
        <h2 class="task-card__header">Ушло времени</h2>
        <span class="task-card__info"></span>
        <h2 class="task-card__header">Ответственный</h2>
        <span class="task-card__info"></span>
        <div class="control-panel">
            <button class="control-panel__button material-icons" onclick="PopUpShow()">create
            </button>
            <button class="control-panel__button material-icons">done</button>
            <button class="control-panel__button material-icons">clear</button>
        </div>
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: ['id', 'draggable'],
        methods: {
            dragStart: e => {
                const target = e.target;

                e.dataTransfer.setData('card_id', target.id);

                setTimeout(() => {
                    target.style.display = "none";
                }, 0);
            }
        }
    }
</script>

<style scoped>

</style>