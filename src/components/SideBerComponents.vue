<template>
	<div class="l-sideber c-fixed left">
		<div class="l-appArea mg-b20">
			<div class="c-app"></div>
			<div class="c-app-name  mg-t5">アプリ名</div>
		</div>
		<nav class="l-navArea">
			<ul class="navLists">
				<li>
          <router-link to="/" class="c-navLink">
						<div class="c-navIcon mg-b10">
							<img src="@/images/user-solid.svg" alt="メンバーアイコン">
						</div>
						<div class="c-navTitle">
							メンバーリスト
						</div>
          </router-link>
				</li>
				<li>
          <router-link to="/chat" class="c-navLink">
						<div class="c-navIcon mg-b10">
							<img src="@/images/comment-solid.svg" alt="トークアイコン">
						</div>
						<div class="c-navTitle">
							チャット
						</div>
          </router-link>
				</li>
			</ul>
		</nav>
	</div>

</template>

<script>
	export default{
		name: 'SideBerComponents',
		props: {

		}
	}
</script>

<style scoped>
</style>