<template>
	<section>
		<prop-doc :component="MyTest"></prop-doc>
	</section>
</template>

<script>
	import propDoc from 'propdoc';
	import MyTest from './AwesomeTestDoc.vue';
	export default {
		components: {
			propDoc
		},

		data: 
			function() {
				return {
					MyTest
				}
			}
	}
</script>