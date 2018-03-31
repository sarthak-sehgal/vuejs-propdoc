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
		name: 'checkbox',
	  	introduction: 'an amazing checkbox',
		  description: `
		  This \`checkbox\` is amazing, you should _check_ it out.
		  `,
		  token: "<checkbox label='foo'></checkbox>",
		  props: {
		    label: {
		      type: String,
		      default: '',
		      note: "a label to be appended after the checkbox"
		    }
		  }
	}
</script>