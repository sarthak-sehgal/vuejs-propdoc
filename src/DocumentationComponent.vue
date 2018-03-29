<template>
	<section>
		<prop-doc :component="MyTest"></prop-doc>
		<div>
	    	<h1>{{ myComponentDoc.name }}</h1>
	    	<p>{{ myComponentDoc.introduction }}</p>
	    </div>
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
			},
		computed: {
    		myComponentDoc() { return propDoc.getDoc(MyTest) }
  		}
	}
</script>