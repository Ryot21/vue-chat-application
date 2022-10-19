<template>
	<section class="messageListsArea pd-10 message-mg-bottom"
		v-for="day in days"
		:key="day"
	>
		<p class="dayTitle mg-b20">{{ day }}</p>
		<ul class="c-messageLists">
			<li class="me pd-b10 pd-l5 mg-b10"
				v-for="message in messages"
				:key="message"
			>
				<div class="c-flex">
					<div class="c-avatar__small"></div>
					<div class="c-messageBox">
						<p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique</p>
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
</template>

<script>
export default {
  name: 'ChatComponents',
  props: {
    
  },
	created(){
    // const user_id = this.$route.query.user_id;
		this.user_id = this.$route.query.user_id;//data内で指定先（user_id）がある場合は「this」を使用する
		console.log("user_id: " + this.user_id);
  },
	data(){
		return{
			user_id: '',
			days: ['Today'],
			messages: 8,
			value: ""
		}
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
