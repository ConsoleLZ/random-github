import { defineComponent, onMounted } from 'vue';
import TextComp from './comps/text-logo/index.vue';
import Typed from 'typed.js';
import ButtonComp from './comps/button/index.vue'
import {useRouter} from 'vue-router'
import {badgeList} from './constants'

export default defineComponent({
	components: {
		TextComp,
		ButtonComp
	},
	setup() {
		const constants = {
			badgeList
		}
		const router = useRouter()

		const methods = {
			// 打字机效果
			typedText(dom) {
				new Typed(dom, {
					strings: ['发现宝藏🍪', 'GitHub随机优质项目发现, 或许有你感兴趣的项目哦😚'],
					typeSpeed: 60,
					loop: true,
				});
			},
			// 徽章跳转
			onJumpLink(url: string){
				window.open(url)
			},
			// 跳转到项目页
			onChangeProject(){
				router.push('/project')
			},
			// 跳转到该项目的git地址
			onJumpGithub(){
				window.open('https://github.com/ConsoleLZ/random-github')
			}
		};

		onMounted(() => {
			methods.typedText('#typedText');
		});

		return {
			...constants,
			...methods
		};
	}
});
