<template>
  <div id="home">
    <navbar-regular />
    <section class="section-cta section-cta--header" name="cta_1">
      <h1>Przygotuj się na 100% do matury</h1>
      <p class="only-text">
        Kursy online z najlepszymi nauczycielami 4 razy tańsze niż zwykły
        korepetytor
      </p>
      <btn-regular :btnClass="'btn-default btn-default--regular'">
        <span slot="btnText">Wybierz kurs</span>
      </btn-regular>
    </section>
    <section class="section-cta section-cta--szkolenie">
      <h1>Jak idzie Szkolenie?</h1>
    </section>

    <section class="section-row section-default">
      <div class="section-block">
        <h2>Zajęcia w czasie rzeczywistym</h2>
        <p class="section-block-paragraph">
          Oglądasz webinary na naszej platformie Lektor prowadzi lekcję w czasie
          rzeczywistym Podczas lekcji wszyscy uczestnicy mogą zadawać pytania
          nauczycielowi. Możesz obejrzeć lekcję w nagraniu
        </p>
        <div class="btn-row">
          <btn-regular :btnClass="'btn-secondary btn-secondary--regular'">
            <span slot="btnText">Wybierz kurs</span>
          </btn-regular>
          <btn-regular :btnClass="'btn-flat btn-flat--regular'">
            <span slot="btnText">Wybierz kurs</span>
          </btn-regular>
        </div>
      </div>
      <div class="section-block-image">
        <div class="section-placeholder"></div>
      </div>
    </section>

     <section class="section-row section-blue">
      <div class="section-block">
        <h2>Zadania Domowe</h2>
        <p class="section-block-paragraph">
          Wypełnij interaktywne zadania - część zostanie sprawdzona automatycznie, a druga zostanie obejrzana przez nauczyciela i opatrzona szczegółowym komentarzem.
Użyj specjalnego systemu podpowiedzi, jeśli zadanie jest zbyt trudne
        </p>
        <div class="btn-row">
          <btn-regular :btnClass="'btn-secondary btn-secondary--white'">
            <span slot="btnText">Wybierz kurs</span>
          </btn-regular>
          <btn-regular :btnClass="'btn-flat btn-flat--regular'">
            <span slot="btnText">Potrzebujesz konsultacji?</span>
          </btn-regular>
        </div>
      </div>
      <div class="section-block-image">
        <div class="section-placeholder"></div>
      </div>
    </section>

        <section class="section-row section-default">
      <div class="section-block">
        <h2>Osobisty mentor</h2>
        <p class="section-block-paragraph">
          Każdy uczeń ma przydzielonego osobistego mentora, który pomaga radzić sobie z błędami, pilnuje terminów, motywuje i wspiera ucznia w całym procesie uczenia się
        </p>
        <div class="btn-row">
          <btn-regular :btnClass="'btn-secondary btn-secondary--regular'">
            <span slot="btnText">Wybierz kurs</span>
          </btn-regular>
          <btn-regular :btnClass="'btn-flat btn-flat--regular'">
            <span slot="btnText">Potrzebujesz konsultacji?</span>
          </btn-regular>
        </div>
      </div>
      <div class="section-block-image">
        <div class="section-placeholder"></div>
      </div>
    </section>

     <section class="section-row section-golden">
      <div class="section-block">
        <h2>Egzaminy próbne</h2>
        <p class="section-block-paragraph">
          W procesie przygotowania student rozwiązuje egzaminy próbne, odpowiedzi są sprawdzane przez członków komisji egzaminacyjnej, po sprawdzeniu egzaminu student otrzyma szczegółową informację zwrotną
        </p>
        <div class="btn-row">
          <btn-regular :btnClass="'btn-secondary btn-secondary--white'">
            <span slot="btnText">Wybierz kurs</span>
          </btn-regular>
          <btn-regular :btnClass="'btn-flat btn-flat--regular'">
            <span slot="btnText">Potrzebujesz konsultacji?</span>
          </btn-regular>
        </div>
      </div>
      <div class="section-block-image">
        <div class="section-placeholder"></div>
      </div>
    </section>

     <section class="section-row section-default">
      <div class="section-block">
        <h2>Śledzenie postępu</h2>
        <p class="section-block-paragraph">
         Co tydzień otrzymasz raport z postępów: zajęć, prac domowych i oceny grupowej
        </p>
        <div class="btn-row">
          <btn-regular :btnClass="'btn-secondary btn-secondary--regular'">
            <span slot="btnText">Wybierz kurs</span>
          </btn-regular>
          <btn-regular :useIcon="true" :btnClass="'btn-flat btn-flat--regular'">
            <span slot="btnText">Potrzebujesz konsultacji?</span>
            <icon-regular slot="btnIcon" :name="'close'" :size="18" />
          </btn-regular>
        </div>
      </div>
      <div class="section-block-image">
        <div class="section-placeholder"></div>
      </div>
    </section>
    <div class="section-cta section-cta--grosze">
       <h1>Zwrócimy pieniądze, jeśli nie zdasz egzaminu</h1>
    </div>
  </div>
</template>

<script>
import BtnRegular from "../components/btn/btn-regular.vue";
import IconRegular from '../components/icons/icon-regular.vue';
import NavbarRegular from "../components/navbar/navbar-regular.vue";
export default {
  components: {
    NavbarRegular,
    BtnRegular,
    IconRegular,
  },
};
</script>

<style>
</style>
