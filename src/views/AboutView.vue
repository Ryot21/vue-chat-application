<template>
  <div class="l-container c-flex">
    <!-- <SideBer></SideBer> -->
    <div class="l-contents">
      <HeadBerComponents></HeadBerComponents>
      <main class="l-main main-mg-top">
        ABOUT
      </main>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeadBerComponents from '@/components/HeadBerComponents.vue';

export default {
  name: 'TopView',
  components: {
    HeadBerComponents,
  }
}
</script>