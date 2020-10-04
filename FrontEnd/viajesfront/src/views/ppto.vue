<template>
    <div id="secure">
        <h1>Presupueste su Viaje gratis</h1>
        <v-combobox
        :items="this.transportes"
        item-text="nombre"
        item-value="idUnidadTransporte"
        return object
        auto-select-first/>

    </div>
</template>

<script>
    export default {
        name: 'ppto',
        data() {
            return {
                transportes: [1,2,3,4]
            };
        }
    }
</script>

<style scoped>
    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>
