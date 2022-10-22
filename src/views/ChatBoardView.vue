<template>
  <div class="l-container c-flex">
    <div class="l-contents">
      <HeadBerComponents></HeadBerComponents>
      <ChatComponents></ChatComponents>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeadBerComponents from '@/components/HeadBerComponents.vue';
import ChatComponents from '@/components/ChatComponents.vue';

export default {
  name: 'ChatBoardView',
  components: {
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