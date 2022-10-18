<template>
		<div class="l-container c-flex">
			<!-- <SideBer></SideBer> -->
			<div class="l-contents">
				<HeadBer></HeadBer>
				<main class="l-main main-mg-top">
					<MessagesListsContents></MessagesListsContents>
				</main>
			</div>
		</div>
</template>

<script>
// @ is an alias to /src
import HeadBer from '@/components/HeadBer.vue';
import MessagesListsContents from '@/components/MessagesListsContents.vue';
import '../css/style.css';

export default {
  name: 'MessageListsView',
  components: {
    HeadBer,
		MessagesListsContents
  }
}
</script>

<style >
	#app{
		text-align: start;
	}
</style>