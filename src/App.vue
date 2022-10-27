<template>
	<router-view/>
</template>

<script>

	export default {
		// name: 'App',
		// components: {
		// }
	}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Zen+Antique+Soft&display=swap');
#app {
  font-family: 'Zen Antique Soft', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
