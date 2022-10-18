<template>
  <div class="l-container c-flex">
    <div class="l-contents">
      <HeadBer></HeadBer>
      <main class="l-main main-mg-top">
        <UserListsContents></UserListsContents>
      </main>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeadBer from '@/components/HeadBer.vue';
import UserListsContents from '@/components/UserListsContents.vue';
import '../css/style.css';

export default {
name: 'UserListsView',
components: {
  HeadBer,
  UserListsContents
}
}
</script>
