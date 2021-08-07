<template>
  <div id="callback" class=" callback-form">
      <h2>Zostali pytania? Chętnie na nich odpowiemy</h2>
      <input-regular :type="'email'" :name="'name'" :placeholder="'Imię'" />
      <input-regular :type="'text'" :name="'phone'" :placeholder="'Numer telefonu'" />
      <btn-regular :btnClass="'btn-default btn-default--regular'">
          <span slot="btnText">Startujemy!</span>
      </btn-regular>
  </div>
</template>

<script>
import BtnRegular from '../btn/btn-regular.vue'
import inputRegular from '../input/input-regular.vue'
export default {
  components: { inputRegular, BtnRegular },

}
</script>

<style>

</style>