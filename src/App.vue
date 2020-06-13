<template>
    <main id="main">
        <!--        <form action="" class="new-task">-->
        <!--            <label class="new-task__label" for="new-task-description">Добавить новую задачу</label>-->
        <!--            <input class="new-task__input" id="new-task-description" name="new-task-description"-->
        <!--                   placeholder="Описание"-->
        <!--                   required type="text">-->
        <!--            <input class="new-task__submit material-icons" type="submit" value="add">-->
        <!--        </form>-->
        <Add>

        </Add>
        <article class="kanban">
            <section class="board board_plan">
                <h1 class="board__title">План: {{quantity.for_board_1}}</h1>
                <Board class="tasks_plan" id="board-1">
                    <Card id="1"></Card>
                    <Card id="2"></Card>
                </Board>
            </section>

            <section class="board board_in-work">
                <h1 class="board__title">В работе: {{quantity.for_board_2}}</h1>
                <Board class="tasks_plan" id="board-2"></Board>
            </section>

            <section class="board board_ready">
                <h1 class="board__title">Готово: {{quantity.for_board_3}}</h1>
                <Board class="tasks_plan" id="board-3"></Board>
            </section>
        </article>
    </main>
</template>

<script>
    import Board from "@/components/Board";
    import Card from "@/components/Card";
    import Add from "@/components/Add";
    import {eventBus} from "@/main";


    export default {
        name: 'Main',
        components: {
            Board,
            Card,
            Add
        },
        data: function () {
            return {
                quantity: {
                    for_board_1: 2,
                    for_board_2: 0,
                    for_board_3: 0,
                }
            };
        },
        created() {
            eventBus.$on('makeCount', () => {
                this.countAll()
            })
        },
        methods: {
            count: function (board_id) {
                return document.getElementById(board_id).children.length
            },
            countAll: function () {
                this.quantity.for_board_1 = this.count("board-1");
                this.quantity.for_board_2 = this.count("board-2");
                this.quantity.for_board_3 = this.count("board-3");
            }
        }
    }
</script>

<style>
</style>
