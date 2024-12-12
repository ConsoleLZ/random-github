<template>
	<loading-comp v-if="isLoading" />
	<div v-else>
		<h3 style="font-size: 30px; padding: 10px">报告船长，已发现宝藏！！🍪</h3>
		<div class="flex-40 card-list">
			<div v-for="item in data" :key="item">
				<card-comp :data="item" />
			</div>
		</div>
		<div class="flex-center" style="gap: 50px;">
			<div class="flex-center" @click="changeProject" style="margin-top: 100px">
				<button class="btn">换一批</button>
			</div>
			<div class="flex-center" @click="onGoHome" style="margin-top: 100px"><button class="btn">返回首页</button></div>
		</div>
	</div>
</template>

<script lang="ts" src="./index.ts"></script>
<style src="./index.css" scoped></style>
