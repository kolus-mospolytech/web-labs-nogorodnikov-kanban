<template>
    <main id="main">
        <form action="" class="new-task">
            <label class="new-task__label" for="new-task-description">Добавить новую задачу</label>
            <input class="new-task__input" id="new-task-description" name="new-task-description"
                   placeholder="Описание"
                   required type="text">
            <input class="new-task__submit material-icons" type="submit" value="add">
        </form>
        <article class="kanban">
            <Board id="board-1" class="tasks_plan">
                <Card id="card-1" draggable="true"></Card>
            </Board>

            <Board id="board-2" class="tasks_in-work">
                <Card id="card-2" draggable="true"></Card>
            </Board>
        </article>
    </main>
</template>

<script>
import Board from "@/components/Board";
import Card from "@/components/Card";


    export default {
        name: 'Main',
        components: {
            Board,
            Card
        }
    }
</script>

<style>
</style>
