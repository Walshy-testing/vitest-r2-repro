import { env } from 'cloudflare:test';
import { test, expect } from 'vitest';

test('Can repro', async () => {
	const file = await env.R2.put('abc', 'def');
	expect(file).not.toBe(null);
	expect(file?.etag).toBe('4ed9407630eb1000c0f6b63842defa7d');

	// Check the file exists
	const read = await env.R2.get('abc');
	expect(read).not.toBe(null);
});
