<template>
    <form action="" class="new-task">
        <label class="new-task__label" for="new-task-description">Добавить новую задачу</label>
        <input class="new-task__input" id="new-task-description" name="new-task-description"
               placeholder="Описание"
               required type="text">
        <input class="new-task__submit material-icons" type="submit" value="add">
    </form>
</template>

<script>
    export default {
        name: "Add"
    }
</script>
