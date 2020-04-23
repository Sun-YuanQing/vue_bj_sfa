<template>
	<div class="home">
		<!-- <img alt="Vue logo" src="../assets/logo.png" />-->
		<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
		<demo></demo>
	</div>
</template>

<script>
	// @ is an alias to /src
	import HelloWorld from "@/components/HelloWorld.vue";
	import demo from "@/components/demo/demo.vue";
	export default {
		name: "home",
		components: {
			/* HelloWorld, */
			demo
		}
	};
</script>
