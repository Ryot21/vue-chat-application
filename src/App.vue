<template>
	<div class="l-sideber c-fixed left">
		<div class="l-userArea mg-b20">
			<div class="c-avatar"></div>
			<div class="c-avatar-name  mg-t5">アカウント名</div>
		</div>
		<nav class="l-navArea">
			<ul class="navLists">
				<li>
          <router-link to="/" class="c-navLink">
						<div class="c-navIcon mg-b10">
							<img src="./images/user-solid.svg" alt="メンバーアイコン">
						</div>
						<div class="c-navTitle">
							メンバーリスト
						</div>
          </router-link>
				</li>
				<li>
          <router-link to="/chat" class="c-navLink">
						<div class="c-navIcon mg-b10">
							<img src="./images/comment-solid.svg" alt="トークアイコン">
						</div>
						<div class="c-navTitle">
							チャット
						</div>
          </router-link>
				</li>
								<!-- <li>
          <router-link to="/messagelists" class="c-navLink">
						<div class="c-navIcon mg-b10">
							<img src="./images/user-solid.svg" alt="メンバーアイコン">
						</div>
						<div class="c-navTitle">
							メッセージリスト
						</div>
          </router-link>
				</li> -->
        <!-- <li>
          <router-link to="/about" class="c-navLink">
						<div class="c-navIcon mg-b10">
							<img src="./images/comment-solid.svg" alt="トークアイコン">
						</div>
						<div class="c-navTitle">
							About
						</div>
            </router-link>
				</li> -->
			</ul>
		</nav>
	</div>

  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
