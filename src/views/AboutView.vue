<template>
  <SideBerComponents/>
  <div class="l-container c-flex">
    <div class="l-contents">
      <HeadBerComponents/>
      <main class="l-main main-mg-top">
        ABOUT
      </main>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SideBerComponents from '@/components/SideBerComponents.vue';
import HeadBerComponents from '@/components/HeadBerComponents.vue';

export default {
  name: 'TopView',
  components: {
    SideBerComponents,
    HeadBerComponents,
  }
}
</script>