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
                <h1 class="board__title">План (1)</h1>
                <Board class="tasks_plan" id="board-1">
                    <Card id="1"></Card>
                </Board>
            </section>

            <section class="board board_in-work">
                <h1 class="board__title">В работе (1)</h1>
                <Board class="tasks_plan" id="board-2">
                    <Card id="2"></Card>
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
        }
    }
</script>

<style>
</style>
