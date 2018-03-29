<template>
	<div>
		<awesome-tests v-for="(test, k) in 5" :key="test.id"></awesome-tests>
	</div>
</template>

<script>
	import AwesomeTest from './AwesomeTest.vue';
	export default {
		components: {
			'awesome-tests': AwesomeTest,
		}
	}
</script>