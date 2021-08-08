<template>
  <div id="cta" class="cta-masthead">
    <slot name="content"></slot>
    <div class="cta-masthead-illustration">
      <div id="toAnimate-0" class="pos-fm-hundred-1 fm-hundred"></div>
      <div id="toAnimate-1" class="pos-fm-hundred-2 fm-hundred"></div>
      <div id="toAnimate-2" class="pos-fm-student-1 fm-student"></div>
      <div id="toAnimate-3" class="pos-fm-student-2 fm-student"></div>
      <div id="toAnimate-4" class="pos-fm-writing-1 fm-writing"></div>
      <div id="toAnimate-5" class="pos-fm-brain-1 fm-brain"></div>
      <div id="toAnimate-6" class="pos-fm-brain-2 fm-brain"></div>
      <div id="toAnimate-7" class="pos-fm-teacher-1 fm-teacher"></div>
      <div id="toAnimate-8" class="pos-fm-heart-1 fm-heart"></div>
      <div id="toAnimate-9" class="pos-fm-heart-2 fm-heart"></div>
      <div id="toAnimate-10" class="pos-fm-monocle-1 fm-monocle"></div>
      <div id="toAnimate-11" class="pos-fm-laptop-1 fm-student-laptop"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      observer: null,
    };
  },
  mounted() {

      // REFACTOR THIS SHIT!
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.querySelector('#toAnimate-0').classList.add('pos-fm-hundred-1--active')
            entry.target.querySelector('#toAnimate-1').classList.add('pos-fm-hundred-2--active')
            entry.target.querySelector('#toAnimate-2').classList.add('pos-fm-student-1--active')
            entry.target.querySelector('#toAnimate-3').classList.add('pos-fm-student-2--active')
            entry.target.querySelector('#toAnimate-4').classList.add('pos-fm-writing-1--active')
            entry.target.querySelector('#toAnimate-5').classList.add('pos-fm-brain-1--active')
            entry.target.querySelector('#toAnimate-6').classList.add('pos-fm-brain-2--active')
            entry.target.querySelector('#toAnimate-7').classList.add('pos-fm-teacher-1--active')
            entry.target.querySelector('#toAnimate-8').classList.add('pos-fm-heart-1--active')
            entry.target.querySelector('#toAnimate-9').classList.add('pos-fm-heart-2--active')
            entry.target.querySelector('#toAnimate-10').classList.add('pos-fm-monocle-1--active')
            entry.target.querySelector('#toAnimate-11').classList.add('pos-fm-laptop-1--active')
        }else{
            entry.target.querySelector('#toAnimate-0').classList.remove('pos-fm-hundred-1--active')
            entry.target.querySelector('#toAnimate-1').classList.remove('pos-fm-hundred-2--active')
            entry.target.querySelector('#toAnimate-2').classList.remove('pos-fm-student-1--active')
            entry.target.querySelector('#toAnimate-3').classList.remove('pos-fm-student-2--active')
            entry.target.querySelector('#toAnimate-4').classList.remove('pos-fm-writing-1--active')
            entry.target.querySelector('#toAnimate-5').classList.remove('pos-fm-brain-1--active')
            entry.target.querySelector('#toAnimate-6').classList.remove('pos-fm-brain-2--active')
            entry.target.querySelector('#toAnimate-7').classList.remove('pos-fm-teacher-1--active')
            entry.target.querySelector('#toAnimate-8').classList.remove('pos-fm-heart-1--active')
            entry.target.querySelector('#toAnimate-9').classList.remove('pos-fm-heart-2--active')
            entry.target.querySelector('#toAnimate-10').classList.remove('pos-fm-monocle-1--active')
            entry.target.querySelector('#toAnimate-11').classList.remove('pos-fm-laptop-1--active')
        }
       
      });
    });

    this.observer.observe(this.$el);
  },
  destroyed() {
    this.observer.disconnect();
  },
};
</script>

<style>
</style>