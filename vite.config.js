import { sveltekit } from '@sveltejs/kit/vite';
import pkg from './package.json' assert { type: 'json' };
import { defineConfig, loadEnv } from 'vite';

/** @type {import('vite').UserConfig} */
export default ({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
	return defineConfig({
		plugins: [sveltekit()],
		ssr: {
			external: Object.keys(pkg.dependencies || {})
		}
	});
};
