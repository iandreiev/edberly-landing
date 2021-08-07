<template>
  <div class="faq-item" @click="expandItem()">
     <div class="faq-item-box">
         <div class="faq-item-box-question">
             <p class="faq-title">{{data.question}}</p>
             <icon-regular :size="18"  :name="controlClass" :asButton="true" @click="expandItem()" />
         </div>
         <div class="faq-item-box-answer" v-if="data.active == true">
            <p class="text-muted">
                 {{data.answer}}
             </p>
         </div>
     </div>
  </div>
</template>

<script>
import iconRegular from '../icons/icon-regular.vue'
export default {
  components: { iconRegular },
    props: {
        data:{
            type:Object
        }
    },
    computed:{
        controlClass(){
            let active = this.data.active

           return active == true ? 'minus' : 'plus'
        }
    },
    methods:{
        expandItem(){
            this.data.active = !this.data.active
        }
    }
}
</script>

<style>

</style>