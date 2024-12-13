<template>
	<text-comp />
	<div class="flex-center des"><span id="typedText"></span></div>
	<div class="flex-center"><button-comp @click="onChangeProject" /></div>
	<div class="flex-10 badge">
		<img style="cursor: pointer;" v-for="item in badgeList" :key="item" @click="onJumpLink(item.url)" :src="item.ico" alt="">
	</div>
	<div class="github" @click="onJumpGithub"><img src="@/assets/images/github.svg" alt=""></div>
</template>

<script src="./index.ts"></script>
<style src="./index.css" scoped></style>