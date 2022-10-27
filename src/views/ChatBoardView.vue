<template>
  <SideBerComponents/>
  <div class="l-container c-flex">
    <div class="l-contents">
      <HeadBerComponents/>
      <ChatComponents/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SideBerComponents from '@/components/SideBerComponents.vue';
import HeadBerComponents from '@/components/HeadBerComponents.vue';
import ChatComponents from '@/components/ChatComponents.vue';

export default {
  name: 'ChatBoardView',
  components: {
    SideBerComponents,
    HeadBerComponents,
    ChatComponents,
  }
}
</script>

<style >
#app{
  text-align: start;
}
</style>