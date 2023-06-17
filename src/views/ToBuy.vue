<template>
    <div class="site">
        <section class="hero">
            <div class="hero-text container">
                <h1 class="list-h">Lista zakupów</h1>
                <div v-html="$t('message.home')"></div>
                <h2>
                    With Vue <br/>
                    Animations
                </h2>
            </div>

        </section>
    </div>
</template>

<script>
export default {
    name: "ToBuy"
}
</script>

<style scoped>

</style>