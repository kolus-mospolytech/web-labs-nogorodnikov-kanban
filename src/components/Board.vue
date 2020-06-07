<template>
    <section :id="id" @dragover.prevent @drop.prevent="drop" class="tasks">
        <h1 class="tasks__title">План (1)</h1>
        <slot/>
    </section>
</template>

<script>
    export default {
        name: "Board",
        props: ['id'],
        methods: {
            drop: e => {
                const card_id = e.dataTransfer.getData('card_id');
                const card = document.getElementById(card_id);

                card.style.display = "flex";
                e.target.appendChild(card);
            }
        }
    }
</script>
