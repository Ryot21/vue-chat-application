<template>
  <SideBerComponents/>
  <div class="l-container c-flex">
    <div class="l-contents">
      <HeadBerComponents></HeadBerComponents>
      <main class="l-main main-mg-top">
        <UserListsContents></UserListsContents>
      </main>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SideBerComponents from '@/components/SideBerComponents.vue';
import HeadBerComponents from '@/components/HeadBerComponents.vue';
import UserListsContents from '@/components/UserListsContents.vue';

export default {
  name: 'UserListsView',
  components: {
    SideBerComponents,
    HeadBerComponents,
    UserListsContents
  }
}
</script>
