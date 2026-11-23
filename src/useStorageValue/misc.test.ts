import {vi, type Mocked} from 'vite-plus/test';

export const newStorage = (
	get: Storage['getItem'] = () => null,
	set: Storage['setItem'] = () => {},
	remove: Storage['removeItem'] = () => {},
) =>
	// eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
	({
		getItem: vi.fn(get),
		setItem: vi.fn(set),
		removeItem: vi.fn(remove),
	}) as unknown as Mocked<Storage>;
