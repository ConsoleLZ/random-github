<template>
	<loading-comp v-if="isLoading" />
	<div v-else>
		<h3 style="font-size: 1.5rem; padding: 10px">报告船长，已发现宝藏！！🍪</h3>
		<div class="card-list">
			<div v-for="item in data" :key="item">
				<card-comp :data="item" />
			</div>
		</div>
		<div @click="changeProject" class="btn" style="margin-top: 60px">
			<button class="pushable">
				<span class="shadow"></span>
				<span class="edge"></span>
				<span class="front">换一批</span>
			</button>
		</div>
		<div @click="onTranslate" class="btn" style="margin-top: 20px">
			<button class="pushable">
				<span class="shadow"></span>
				<span class="edge"></span>
				<span class="front">翻译</span>
			</button>
		</div>
		<div @click="onGoHome" class="btn" style="margin-top: 20px">
			<button class="pushable">
				<span class="shadow"></span>
				<span class="edge"></span>
				<span class="front">返回首页</span>
			</button>
		</div>
	</div>
</template>

<script lang="ts" src="./index.ts"></script>
<style src="./index.css" scoped></style>
