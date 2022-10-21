<template>
	<div class="l-inputArea__chatBoard c-fixed bottom">
		<form method="post" @submit.prevent="submit">
			<textarea
				class="pd-10"
				v-model="message"
				:rows="rows"
				placeholder="メッセージを入力">
			</textarea>
			<div class="l-btnArea c-flex c-flex-03">
				<AddButtonComponents 
						:button-text="postBtn.btnText"
						:btn-style="postBtn.btnStyle"
						:disabled="textCheck"
						@click="post"
					>
				</AddButtonComponents>
				<AddButtonComponents 
						:button-text="clearBtn.btnText" 
						:btn-style="clearBtn.btnStyle"
						@click="clear"
					>
				</AddButtonComponents>
			</div>
		</form>
	</div>
</template>

<script>
import AddButtonComponents from '@/components/AddButtonComponents.vue'

  export default {
		name: 'CustomTextareaComponents',
		components:{
			AddButtonComponents
		},
		data(){
			return{
				message:"",
				postBtn:{
					btnText: '送信する',
					btnStyle: 'reverse',
				},
				clearBtn:{
					btnText: 'キャンセル',
					btnStyle: 'cancel',
				}
			}
		},
		computed:{
			rows(){
				let num = this.message.split("\n").length;
				return (num > 3) ? num : 3;
			},
			textCheck(){
				if( !this.message ){
					return true
				}
				return false
			},
		},
    mounted() {
    },
		methods: {
			post(){
				console.log("postメソッド")
			},
			clear(){
				console.log("clearメソッド")
			}
		}
  }
</script>

<style scoped>
.reverse {
  background: #e9db40;
  color: black;
  border: 1px solid transparent;
}

.reverse:hover,
.reverse:active {
  background: #b8ac25;
  border: 1px solid transparent;
}

.cancel {
  background: #777070;
  color: white;
  border: 1px solid transparent;
}

.cancel:hover,
.cancel:active {
  background: #6a6363;
  border: 1px solid transparent;
  color: white;
}
</style>