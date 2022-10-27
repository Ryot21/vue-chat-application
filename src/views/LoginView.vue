<template>
		<div class="c-modal bg">
			<div class="modalBlock -login">
				<div class="modalWrap">
					<h1 class="loginTitle mg-b20">VueChat</h1>
					<form action="" >
						<!-- <input type="text" placeholder="ユーザーネームを入力してください"> -->
						<div class="l-inputArea__login mg-b10">
							<input type="text" placeholder="メールアドレスを入力してください">
						</div>
						<div class="l-inputArea__login mg-b20">
							<input type="text" placeholder="パスワードを入力してくだい">
						</div>
						<div class="l-btnArea -center mg-b20">
							<button class="loginBtn">ログイン</button>
						</div>
					</form>
					<div class="loginOrText mg-b20"><span>または</span></div>
					<div class="l-btnArea -center mg-b20">
						<button class="entryBtn">新規登録</button>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
	export default{
		name: 'LoginView',
		props: {

		}
	}
</script>

<style scoped>
	.whiteText{
		color: white;
	}
</style>