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
                <h1 class="board__title" @click="count('board-1')">План {{this.val}}</h1>
                <Board class="tasks_plan" id="board-1">
                    <Card id="1"></Card>
                    <Card id="2"></Card>

                </Board>
            </section>

            <section class="board board_in-work">
                <h1 class="board__title">В работе (1)</h1>
                <Board class="tasks_plan" id="board-2">
                    <!--                    <Card id="2"></Card>-->
                </Board>
            </section>

            <section class="board board_ready">
                <h1 class="board__title">Готово (1)</h1>
                <Board class="tasks_plan" id="board-3">
                    <!--                    <Card id="3"></Card>-->
                </Board>
            </section>
        </article>
    </main>
</template>

<script>
    import Board from "@/components/Board";
    import Card from "@/components/Card";
    import Add from "@/components/Add";


    export default {
        name: 'Main',
        components: {
            Board,
            Card,
            Add
        },
        data: function () {
            return {
                lee: document.getElementById("board_1").children.length,
                val: ""
            };
        },
        methods: {
            count: function (board_id) {
                var a = document.getElementById(board_id).childElementCount
                console.log(a)


                this.val = a;
                console.log(this.val)
            }
        }
    }
</script>

<style>
</style>
