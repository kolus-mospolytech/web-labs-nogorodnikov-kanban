<template>
    <article class="modal">
        <form action="" class="redact" method="post">
            <button class="redact__button material-icons" onclick="PopUpHide()">clear
            </button>
            <label class="redact__label" for="task-description">Описание</label>
            <input class="redact__input" id="task-description" name="task-description" placeholder="Лорем ипсум"
                   required
                   type="text">
            <label class="redact__label" for="task-status">Статус</label>
            <select class="redact__input" id="task-status" name="task-status">
                <option class="redact__input" value="plan">План</option>
                <option class="redact__input" value="in-work">В работе</option>
                <option class="redact__input" value="ready">Готово</option>
            </select>
            <label class="redact__label" for="in-charge">Ответственный</label>
            <input class="redact__input" id="in-charge" name="in-charge" placeholder="Введите имя" type="text">
            <label class="redact__label" for="task-start">Дата и время начала</label>
            <input class="redact__input" id="task-start" name="task-start" type="datetime-local">
            <label class="redact__label" for="task-finish">Дата и время завершения</label>
            <input class="redact__input" id="task-finish" name="task-finish" type="datetime-local">
            <input class="redact__submit" type="submit" value="Сохранить">
        </form>
    </article>
</template>

<script>
    export default {
        name: "Redact"
    }
</script>
