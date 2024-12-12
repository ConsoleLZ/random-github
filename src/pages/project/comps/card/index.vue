<template>
	<div class="card" @click="onJumpProject(data.url)">
		<div class="card__img">
			<img width="60px" src="@/assets/images/github.svg" alt="">
		</div>
		<div class="card__subtitle">{{ data.description }}</div>
        <div class="flex-10" style="margin: 10px 0;">
            <div>{{ data.language }}</div>
            <div class="flex-10">
                <img width="30px" src="@/assets/images/star.svg" alt="">
                <div>{{ data.stars }}</div>
            </div>
            <div class="flex-10">
                <img width="30px" src="@/assets/images/fork.svg" alt="">
                <div>{{ data.forks }}</div>
            </div>
        </div>
        <div style="font-size: 22px;color: gray;">更新时间: {{ convertISOToCustomFormat(data.updateTime) }}</div>
		<div class="card__wrapper">
			<div class="card__title oneline">{{ data.name }}</div>
		</div>
	</div>
</template>

<script lang="ts" src="./index.ts"></script>
<style src="./index.css" scoped></style>
