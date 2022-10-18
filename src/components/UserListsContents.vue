<template>
  <section class="userListsArea">
    <div class="flex-container">
      <div class="flex-item col-5" v-for="n in 12" :key="n">
        <!-- <router-link to="/about" class="user-link"></router-link> -->
        <router-link class="user-link" :to="{ path: '/about', query: { user_id: n }}"></router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UserListsContents',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
