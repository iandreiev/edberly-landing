<template>
  <div class="icon" :slot="slotname" @click="cb($event)" :class="iconClass"></div>
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
        },
        asButton:{
            type:Boolean,
            default: false
        }
    },
    computed:{
        iconClass(){
            return `ic-${this.size} ic-${this.name}`
        }
    },
    methods:{
        cb(event){
            if(this.asButton == true){
                this.$emit('click',event)
            }
        }
    }
}
</script>

<style>

</style>