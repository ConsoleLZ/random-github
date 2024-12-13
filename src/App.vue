<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

// 定义一个函数用于根据屏幕宽度动态计算根元素字体大小
function setRemFontSize() {
	const screenWidth = window.innerWidth;
	const baseWidth = 1028;
	const baseFontSize = 16;
	const ratio = screenWidth / baseWidth;
	const fontSize = baseFontSize * ratio;
	document.documentElement.style.fontSize = fontSize + 'px';
}

onMounted(() => {
	// 页面加载时先设置一次字体大小
	setRemFontSize();

	// 监听窗口大小变化事件，当窗口大小改变时重新计算并设置字体大小
	window.addEventListener('resize', setRemFontSize);
});
</script>
