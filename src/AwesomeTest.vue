<template>
	<div>
		Who is more awesome: {{ name }}!
		<br>
		<button @click="changeName">Is Panda more awesome?</button>
		<hr>
		<br><br>
	</div>
</template>

<script type="text/javascript">
	export default {
		data: 
			function() {
				return {
					name: 'Doggo'
				}
			},
		methods: {
			changeName() {
				this.name = 'Still doggo! Panda boooooooo!'
			}
		}
	}
</script>