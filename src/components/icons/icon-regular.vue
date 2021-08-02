<template>
  <div class="icon" :slot="slotname" :class="iconClass"></div>
</template>

<script>
export default {
    props:{
        size: {
            type: Number,
            required: true,
            default: 18
        },
        name: {
            type:String,
            required: true
        },
        slotname:{
            type:String
        }
    },
    computed:{
        iconClass(){
            return `ic-${this.size} ic-${this.name}`
        }
    }
}
</script>

<style>

</style>