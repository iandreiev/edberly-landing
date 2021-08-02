<template>
  <button class="btn" :class="[btnClass, darkClass]" @click="callback($event)">
      <slot name="btnText"></slot>
      <div class="badge" v-if="useBadge == true">
          <slot name="btnBadge"></slot>
      </div>
      <div v-if="useIcon == true" class="btn-regular-icon">
          <slot name="btnIcon"></slot>
      </div>
  </button>
</template>

<script>
export default {
    props:{
        darkClass: String,
        btnClass: String,
        useIcon: {
            type:Boolean,
            default:false
        },
        useBadge:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        callback(e){
            this.$emit('click', e)
        }
    }
}
</script>

<style>

</style>


