<template>
  <div class="form-controller">
      <input :type="type" :name="name" id="`form-input-${name}`" @input="$emit('input', $event.target.value)" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
    props:{
        type:{
            type:String,
            default:'text'
        },
        name:{
            type:String
        },
        placeholder:{
            type:String
        }
    }
}
</script>

<style>

</style>