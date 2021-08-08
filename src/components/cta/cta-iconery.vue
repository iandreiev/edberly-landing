<template>
  <div id="cta-iconery"  :class="[blockClass,`section-cta--${name}`]">
      <slot name="content"></slot>
      <div :class="`cta-${name}-illustration`">
          <div 
            v-for="i in icons" 
            :key="i.id" 
            :id="`toAnimate-${i.id}`"
            :class="`fm-${i.icon} pos-fm-${name}-${i.icon}-${i.meta}`"
            ></div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        icons: Array,
        blockClass: String,
        name: String
    },
    data(){
        return{
            observe: null
        }
    },

    mounted(){
        this.observe = new IntersectionObserver(entries =>{
            const data = this.icons 

            entries.forEach(entry=>{
                if(entry.isIntersecting){
                    data.forEach(item => {
                        return entry.target.querySelector(`#toAnimate-${item.id}`).classList.add(`pos-fm-${this.name}-${item.icon}-${item.meta}--active`)
                    })
                }

                else{
                    data.forEach(item => {
                        return entry.target.querySelector(`#toAnimate-${item.id}`).classList.remove(`pos-fm-${this.name}-${item.icon}-${item.meta}--active`)
                    })
                }
            })
        })

        this.observe.observe(this.$el);
    },
    destroyed(){
        this.observe.disconnected()
    }
}
</script>

<style>

</style>