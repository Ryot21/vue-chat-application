<template>
  <div class="l-container c-flex">
    <!-- <SideBer></SideBer> -->
    <div class="l-contents">
      <HeadBerComponents></HeadBerComponents>
      <main class="l-main main-mg-top">
        <ChatComponents></ChatComponents>
      </main>
      <CustomTextareaComponents></CustomTextareaComponents>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeadBerComponents from '@/components/HeadBerComponents.vue';
import ChatComponents from '@/components/ChatComponents.vue';
import CustomTextareaComponents from '@/components/CustomTextareaComponents.vue';


export default {
  name: 'ChatBoardView',
  components: {
    HeadBerComponents,
    ChatComponents,
    CustomTextareaComponents
  }
}
</script>

<style >
#app{
  text-align: start;
}
</style>