import { describe, it, expect } from 'vitest';
import type { VueWrapper } from '@vue/test-utils';
import { mount } from '@vue/test-utils';
import ChessboardSquare from './ChessboardSquare.vue';

describe('ChessboardSquare', () => {
	let wrapper: VueWrapper<InstanceType<typeof ChessboardSquare>>;

	beforeEach(() => {
		wrapper = mount(ChessboardSquare);
	});

	it('renders with default light and not active square', () => {
		expect(wrapper.classes()).toContain('chessboard-square');
		expect(wrapper.classes()).not.toContain('chessboard-square--dark');
		expect(wrapper.classes()).not.toContain('chessboard-square--active');
	});

	it('adds active class based on active prop', async () => {
		await wrapper.setProps({ active: true });
		expect(wrapper.classes()).toContain('chessboard-square--active');
	});

	it('renders dark square', () => {
		const wrapper = mount(ChessboardSquare, {
			props: {
				dark: true,
			},
		});
		expect(wrapper.classes()).toContain('chessboard-square--dark');
	});

	it('emits a click event when clicked', async () => {
		await wrapper.trigger('click');
		expect(wrapper.emitted()).toHaveProperty('click');
	});
});
