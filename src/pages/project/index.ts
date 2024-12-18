import { defineComponent, reactive, toRefs } from 'vue';
import CardComp from './comps/card/index.vue';
import LoadingComp from '@/components/loading/index.vue';
import {translateText} from '@/utils/utils'

export default defineComponent({
	components: {
		CardComp,
		LoadingComp
	},
	setup() {
		const state = reactive({
			data: null,
			search: {
				stars: 100
			},
			isLoading: false
		});

		const methods = {
			// 随机获取项目
			async getRandomHighQualityProjects() {
				state.isLoading = true;
				const query = `stars:>${state.search.stars}`;
				// 随机选择一个页面
				const randomPage = Math.floor(Math.random() * 20) + 1;
				const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&page=${randomPage}`;

				try {
					const response = await fetch(url);
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					const data = await response.json();

					// 检查是否有足够的项目可供选择
					if (data.items && data.items.length > 3) {
						// 从结果中随机选择三个不同项目
						const selectedIndices = [];
						while (selectedIndices.length < 3) {
							let randomIndex = Math.floor(Math.random() * data.items.length);
							if (!selectedIndices.includes(randomIndex)) {
								selectedIndices.push(randomIndex);
							}
						}

						// 获取选中的三个项目的详情
						Promise.all(
							selectedIndices.map(index => methods.getProjectReadme(data.items[index].full_name))
						).then(readmes => {
							state.data = selectedIndices.map((index, i) => ({
								name: data.items[index].full_name,
								language: data.items[index].language,
								description: data.items[index].description,
								stars: data.items[index].stargazers_count,
								forks: data.items[index].forks_count,
								url: data.items[index].html_url,
								readme: readmes[i],
								updateTime: data.items[index].updated_at
							}));
							state.isLoading = false;
						});
					} else {
						console.log('Not enough projects found.');
					}
				} catch (error) {
					console.error('There was a problem with the fetch operation:', error);
				}
			},
			// 获取这个项目的README文件
			async getProjectReadme(name: string) {
				const url = `https://api.github.com/repos/${name}/readme`;

				try {
					const response = await fetch(url, {
						headers: {
							Accept: 'application/vnd.github.VERSION.html' // 请求HTML格式的README
						}
					});

					if (!response.ok) {
						throw new Error('Network response was not ok');
					}

					const data = await response.text();
					return data;
				} catch (error) {
					console.error('There was a problem with the fetch operation:', error);
				}
			},
			// 翻译
			onTranslate(){
				state.data.forEach(async (item)=>{
					try {
						item.description = await translateText(item.description)	
					} catch (error) {
						console.log('网络连接超时,翻译失败')
					}
				})
			},
			// 换一个项目
			changeProject() {
				methods.getRandomHighQualityProjects();
			},
			// 跳转项目地址
			onJumpProject() {
				window.open(state.data.url);
			},
			onGoHome() {
				location.href = import.meta.env.VITE_BASE_URL;
			}
		};

		methods.getRandomHighQualityProjects();

		return {
			...toRefs(state),
			...methods
		};
	}
});
