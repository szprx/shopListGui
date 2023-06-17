<template>
    <div class="locale-changer">
        <select v-model="$i18n.locale" :items=$i18n.availableLocales variant="outlined">
            <option v-for="locale in $i18n.availableLocales" :key=locale :value="locale">{{ locale.toUpperCase() }}</option>
        </select>
    </div>
</template>

<script>

</script>

<style>
.locale-changer {
    margin: auto;
    padding: 5px;
}
</style>