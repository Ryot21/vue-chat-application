<template>
		<button class="submit-btn" :class="btnStyle">{{ buttonText }}</button>
</template>

<script>
export default {
	name: 'AddButtonComponents',
	props: {
		btnStyle: {
			type: String,
			default: ''
		},
		buttonText: {
			type: String,
			default: ''
		},
	}
}
</script>

<style scoped>
button {
	color: white;
  background: rgb(57, 177, 213);
  padding: 2px 5px;
  cursor: pointer;
  border: 1px solid rgb(57, 177, 213);
	border-radius: 7px;
}

button:hover,
button:active {
  background: rgb(51, 51, 51);
  border: 1px solid red;
}

button:disabled {
	background: #8a8a8a;
}
button:disabled:hover {
	background: #8a8a8a;
}
</style>