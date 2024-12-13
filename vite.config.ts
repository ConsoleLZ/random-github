import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		plugins: [vue()],
		base: env.VITE_BASE_URL || '/',
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src')
			}
		}
	};
});
