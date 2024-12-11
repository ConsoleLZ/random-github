import { defineComponent, reactive, toRefs } from 'vue';
import LoadingComp from '@/components/loading/index.vue'

export default defineComponent({
    components: {
        LoadingComp
    },
	setup() {
		const state = reactive({
			data: {
				name: null, // 项目名称
				description: null, // 项目描述信息
				stars: null, // 项目星数
				url: null, // 项目地址
				readme: null // 项目的md文件
			},
            search: {
                stars: 1000
            },
            isLoading: false
		});

		const methods = {
			// 随机获取一个项目
			async getRandomHighQualityProject() {
                state.isLoading = true
				const query = `stars:>${state.search.stars}`; // 查询条件：至少有1000颗星的项目
				const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc`;

				try {
					const response = await fetch(url);
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					const data = await response.json();

					// 检查是否有结果返回
					if (data.items && data.items.length > 0) {
						// 从结果中随机选择一个项目
						const randomIndex = Math.floor(Math.random() * data.items.length);
						const project = data.items[randomIndex];

						methods.getProjectReadme(project.full_name).then(readmeData => {
							state.data.name = project.full_name;
							state.data.description = project.description;
							state.data.stars = project.stargazers_count;
							state.data.url = project.html_url;
							state.data.readme = readmeData;
                            state.isLoading = false
							console.log(state.data);
						});
					} else {
						console.log('No projects found.');
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
            // 换一个项目
            changeProject(){
                methods.getRandomHighQualityProject()
            },
            // 跳转项目地址
            onJumpProject(){
                window.open(state.data.url)
            }
		};

		methods.getRandomHighQualityProject();

		return {
            ...toRefs(state),
			...methods
		};
	}
});
