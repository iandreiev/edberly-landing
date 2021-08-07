<template>
  <div id="lesson-item" class="lesson-item">
      <div class="lesson-item-title-wrapper">
          <div class="lesson-item-title-meta">
              <div class="lesson-item-title-meta-wrapper">
                  <p class="theme">Temat #{{data.meta.theme}}</p>
                  <p class="lesson-qty">{{data.meta.lesson_quantity}} lekcje</p>
              </div>
              <h4>{{data.meta.title}}</h4>
          </div>
          <btn-regular @click="toggleItem" :useIcon="true" :btnClass="'btn-icon btn-secondary--white'">
              <icon-regular slot="btnIcon" :size="24" :name="iconClass" />
          </btn-regular>
      </div>
      <div :class="contentClass">
          <ul>
              <li v-for="(i,index) in data.list" :key="index">{{i}}</li>
          </ul>
      </div>
  </div>
</template>

<script>
import btnRegular from '../btn/btn-regular.vue'
import IconRegular from '../icons/icon-regular.vue'
export default {
  components: { btnRegular, IconRegular },
    props:{
        data:Object
    },
    computed:{
        contentClass(){
            return this.data.active == true ? 'lesson-item-content--active' : 'lesson-item-content'
        },
        iconClass(){
            return this.data.active == true ? 'chevron-up' : 'chevron-down';
        }
    },
    methods:{
        toggleItem(){
            this.data.active = !this.data.active
        }
    }
}
</script>

<style>

</style>