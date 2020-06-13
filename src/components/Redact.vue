<template>
    <article class="modal" id="modal">
        <form @submit.prevent="apply" action="" class="redact">
            <button class="redact__button material-icons" onclick="PopUpHide()">clear
            </button>
            <label class="redact__label" for="task-description">Описание</label>
            <input class="redact__input"
                   id="task-description"
                   name="task-description"
                   placeholder="Лорем ипсум"
                   required
                   type="text"
                   v-model="changes.updatedCardDescription">
            <label class="redact__label" for="task-status">Статус</label>
            <select class="redact__input"
                    id="task-status"
                    name="task-status"
                    v-model="changes.updatedCardStatus">
                <option class="redact__input" value="plan">План</option>
                <option class="redact__input" value="in-work">В работе</option>
                <option class="redact__input" value="ready">Готово</option>
            </select>
            <label class="redact__label" for="in-charge">Ответственный</label>
            <input class="redact__input"
                   id="in-charge"
                   name="in-charge"
                   placeholder="Введите имя"
                   type="text"
                   v-model="changes.updatedExecutor">
            <label class="redact__label" for="task-start">Дата и время начала</label>
            <input class="redact__input"
                   id="task-start"
                   name="task-start"
                   type="datetime-local"
                   v-model="changes.updatedStartTime">
            <label class="redact__label" for="task-finish">Дата и время завершения</label>
            <input class="redact__input"
                   id="task-finish"
                   name="task-finish"
                   type="datetime-local"
                   v-model="changes.updatedFinishTime">
            <input class="redact__submit" type="submit" value="Сохранить">
        </form>
    </article>
</template>

<script>
    import {eventBus} from "@/main";

    export default {
        name: "Redact",
        data: function () {
            return {
                changes: {
                    updatedCardDescription: '',
                    updatedCardStatus: '',
                    updatedExecutor: '',
                    updatedStartTime: '',
                    updatedFinishTime: '',
                }
            };
        },
        created() {
            eventBus.$on('show', () => {
                const animation = 'animate__animated animate__fadeIn';
                const animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd onaimationend animationend';
                const modal = document.getElementById("modal")

                // modal.style.display = "flex"
                modal.css("display", "flex").addClass(animation).one(animationEnd, function () {
                    modal.removeClass(animation);
                });
            })
        },
        methods: {
            apply: function () {
                eventBus.$emit('applyChanges')
            }
        }
    }
</script>
