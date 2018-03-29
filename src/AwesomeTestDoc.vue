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
		name: "my-test",
		introduction: "abc",
		description: "xyz",
		token: "blablabla",

		props: {
			isFlat: {
				type: Boolean,
				default: false,
				note: 'abcbabnhvb'
			},
			isRaised: {
				type: Boolean,
				default: true,
				note: 'poiuytrew'
			}
		}
	}
</script>