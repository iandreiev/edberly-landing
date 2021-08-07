<template>
  <div id="course">
      <navbar-regular />

    <section class="section-row section-cta--course">
        <div class="section-block">
                    <h1>Przygotuj się do matury z matematyki podstawowej na 100%</h1>
        <p class="only-text">Kurs przygotowawczy z gwarancją zdawalności egzaminu.3 razy tańszy niż zwykły korepetytor.</p>
           <div class="btn-row">
          <btn-regular :btnClass="'btn-default btn-default--regular'">
            <span slot="btnText">Zacząć uczyć się za darmo</span>
          </btn-regular>
          <btn-regular :btnClass="'btn-flat btn-flat--regular'">
            <span slot="btnText">Potrzebuję konsultacji</span>
          </btn-regular>
        </div>
        </div>
        <div class="section-block">
            <img src="img/redhead_1.png" alt="">
     
        </div>
    </section>
<section class="section-grid section-blue">
    <h2>Jak odbywa się nauka w naszej skole?</h2>
       <div class="list-image-wrapper">
            <div class="list-image-item" v-for="i in howto" :key="i.id">
                <img :src="i.image" alt="">
                <h3>{{i.title}}</h3>
            </div>
        </div>
</section>

<section class="section-grid">
    <h2>Program kursu</h2>
    <div class="list-row list-icon">

        <div class="list-icon-item">
            <div class="list-icon-item-wrapper">
                <div class="fm-teacher"></div>
            </div>
            <p>Zajęcia są prowadzone 2 razy w tygodniu: Poniedziałki i Czwartki w godzinach 16:00-17:30</p>
        </div>

         <div class="list-icon-item">
            <div class="list-icon-item-wrapper">
                <div class="fm-teacher"></div>
            </div>
            <p>Każde nagrane zajęcie jest dostępne do końca kursu</p>
        </div>
    </div>

    <lesson-wrapper>
        <lesson-item v-for="i in themes" :key="i.id" :data="i" />
    </lesson-wrapper>

              <btn-regular :btnClass="'btn-default btn-default--regular'">
            <span slot="btnText">Startujemy!</span>
          </btn-regular>
    
</section>

<section class="section-grid">
    <h2>Kto prowadzi zajęcia?</h2>
    <div class="teacher-wrapper">
        <div class="teacher-block-image">
            <img src="img/teacher/Image.png" class="teacher-block-image image" />
            <div class="teacher-block-image-links">
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
            </div>
        </div>
        <div class="teacher-block-summary">
            <div class="teacher-block-summary-name">
                <h3>Anna Kowalska</h3>
                <p>Pasjonatka matematyki</p>
            </div>
            <div class="teacher-block-summary-list">
                <div class="teacher-block-summary-list-item">
                    <div class="fm-student"></div>
                    <p>At id libero tristique nisi magna ultrices</p>
                </div>
                <div class="teacher-block-summary-list-item">
                    <div class="fm-hundred"></div>
                    <p>Nullam et mollis nunc nibh et diam nulla vitae</p>
                </div>
                <div class="teacher-block-summary-list-item">
                    <div class="fm-heart"></div>
                    <p>Felis, venenatis sit nisl metus, sodales mi at bibendum tristique</p>
                </div>
                <div class="teacher-block-summary-list-item">
                    <div class="fm-teacher"></div>
                    <p>At id libero tristique nisi magna ultrices</p>
                </div>
            </div>
            <btn-regular :btnClass="'btn-secondary btn-secondary--regular'">
            <span slot="btnText">Potrzebujesz konsultacji?</span>
          </btn-regular>
        </div>
    </div>
</section>

<section class="section-grid section-pricing">
    <h2>Rozpocznij naukę teraz</h2>
    <h4>Ucz się za darmo przez 7 dni</h4>
    <p>Po okresie próbnym opłata wyniesie</p>
    <h2 class="price">195 zl./msc</h2>

    <h3>Subskrypcja zawiera</h3>
    <div class="sub-grid">
        <div class="sub-item" v-for="i in subscription.advantages" :key="i.id">
            <div :class="`fm-${i.icon}`"></div>
            <p>{{i.title}}</p>
        </div>
    </div>
     <btn-regular :btnClass="'btn-default btn-default--regular'">
            <span slot="btnText">Startujemy!</span>
          </btn-regular>
</section>

      <faq-wrapper>
          <h2 class="text-center text-heading">FAQ</h2>
          <faq-item v-for="i in faq" :key="i.id" :data="i" />
      </faq-wrapper>

      <callback />

      <footer-regular />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BtnRegular from '../components/btn/btn-regular.vue';
import Callback from '../components/callback/callback.vue';
import FaqItem from '../components/faq/faq-item.vue'
import FaqWrapper from '../components/faq/faq-wrapper.vue'
import FooterRegular from '../components/footer/footer-regular.vue'
import IconRegular from '../components/icons/icon-regular.vue';
import LessonItem from '../components/lessons/lesson-item.vue';
import LessonWrapper from '../components/lessons/lesson-wrapper.vue';
import navbarRegular from '../components/navbar/navbar-regular.vue'
export default {
  components: { navbarRegular, FooterRegular,FaqWrapper, FaqItem, BtnRegular,LessonWrapper, LessonItem, IconRegular, Callback },
    computed:{
          ...mapState(["faq", "howto", "themes", "subscription"])
    }
}
</script>

<style>

</style>