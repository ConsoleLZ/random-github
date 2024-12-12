<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script setup lang="ts">
import autofit from 'autofit.js'

autofit.init()
</script>
