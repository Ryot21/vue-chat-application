<template>
	<div class="l-inputArea__chatBoard c-fixed bottom">
		<textarea class="pd-10" v-model="value" :rows="rows" placeholder="メッセージを入力"></textarea>
	</div>
</template>

<script>
  export default {
		name: 'CustomTextareaComponents',
		data(){
			return{
				value:""
			}
		},
    props: {
    },
		computed:{
			rows(){
				let num = this.value.split("\n").length;
				return (num > 3) ? num : 3;
			}
		},
    mounted() {
    },
    methods: {
    }
  }
</script>