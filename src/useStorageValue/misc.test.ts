import type {Mocked} from 'vite-plus/test';
import {vi} from 'vite-plus/test';

export const newStorage = (
	get: Storage['getItem'] = () => null,
	set: Storage['setItem'] = () => {},
	remove: Storage['removeItem'] = () => {},
) =>
	({
		getItem: vi.fn(get),
		setItem: vi.fn(set),
		removeItem: vi.fn(remove),
		// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
	}) as unknown as Mocked<Storage>;
