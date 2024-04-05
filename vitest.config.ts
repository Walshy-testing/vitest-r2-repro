import { defineWorkersConfig } from '@cloudflare/vitest-pool-workers/config';

export default defineWorkersConfig({
	test: {
		pool: '@cloudflare/vitest-pool-workers',
		coverage: {
			provider: 'istanbul',
			reporter: ['json', 'html'],
		},
		poolOptions: {
			workers: {
				isolatedStorage: true,
				wrangler: {
					configPath: './wrangler.toml',
				},
				miniflare: {
					r2Buckets: ['R2'],
				},
			},
		},
	},
});
