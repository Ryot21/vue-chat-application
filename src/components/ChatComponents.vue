<template>
	<main class="l-main main-mg-top">
		<section class="messageListsArea pd-10 message-mg-bottom"
		v-for="day in days"
		:key="day"
	>
		<p class="dayTitle mg-b20">{{ day }}</p>
		<ul class="c-messageLists">
			<li class="me pd-b10 pd-l5 mg-b10"
				v-for="(data, index) in messages"
				:key="index"
			>
				<div class="c-flex">
					<div class="c-avatar__small"></div>
					<div class="c-messageBox">
						<p class="description">{{ index }} : {{ data.message }}</p>
					</div>
				</div>
			</li>

			<li class="you pd-b10 pd-l5 mg-b10">
				<div class="c-flex">
					<div class="c-avatar__small"></div>
					<div class="c-messageBox">
						<p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique</p>
					</div>
				</div>
			</li>
		</ul>
	</section>
	</main>
	<!-- <CustomTextareaComponents></CustomTextareaComponents> -->
	<div class="l-inputArea__chatBoard c-fixed bottom">
		<form method="post" @submit.prevent="submit">
			<textarea
				class="pd-10"
				v-model="body"
				:rows="rows"
				placeholder="メッセージを入力">
			</textarea>
			<div class="l-btnArea c-flex c-flex-03">
				<AddButtonComponents 
						:button-text="pushBtn.btnText"
						:btn-style="pushBtn.btnStyle"
						:disabled="textCheck"
						@click="push"
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

import firebase from "firebase/app";
import "firebase/firestore";
import AddButtonComponents from '@/components/AddButtonComponents.vue';

export default {
  name: 'ChatComponents',
  components: {
		AddButtonComponents
  },
	async created(){
    // const user_id = this.$route.query.user_id;
		// this.user_id = this.$route.query.user_id;//data内で指定先（user_id）がある場合は「this」を使用する
		// console.log("user_id: " + this.user_id);

		const firebaseConfig = {
			apiKey: "AIzaSyDldzSqBqro_UJLINocI3-S1-tbo6gC2HY",
			authDomain: "vuechat-4c6dc.firebaseapp.com",
			projectId: "vuechat-4c6dc",
			storageBucket: "vuechat-4c6dc.appspot.com",
			messagingSenderId: "506418610193",
			appId: "1:506418610193:web:38a80e9e37311b6ae0b1b0"
		};

		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);

		const db = firebase.firestore();
		const chatRef = db.collection('chats');
		const snapShot = await chatRef.get();
		// console.log(snapShot);

		snapShot.forEach(doc => {
			// console.log(doc.data())
			this.messages.push(doc.data())
		})
  },
	data(){
		return{
			user_id: '',
			days: ['Today'],
			messages: [],
			body:"",//textarea内のテキストが入る箱
			pushBtn:{
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
		rows(){//textarea内の改行を検知してtextareaの高さを調整する
			let num = this.body.split("\n").length;
			return (num > 3) ? num : 3;
		},
		textCheck(){//textareaに文字入力されているかの確認
			if( !this.body ){
				return true
			}
			return false
		},
	},
	mounted() {
	},
	methods: {
		push(){
			console.log({ message: this.body });
			this.messages.push({ message: this.body });
			// this.messages.unshift({ message: this.body });
			this.body = "";
		},
		clear(){
			console.log("clearメソッド");
			this.body = "";
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
