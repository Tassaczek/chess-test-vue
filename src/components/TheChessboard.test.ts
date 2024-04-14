import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import type { VueWrapper } from '@vue/test-utils';
import TheChessboard from './TheChessboard.vue';
import ChessboardSquare from './ChessboardSquare.vue';

describe('Chessboard', () => {
	let wrapper: VueWrapper<InstanceType<typeof TheChessboard>>;
	beforeEach(() => {
		wrapper = mount(TheChessboard, {
			global: {
				components: {
					ChessboardSquare,
				},
			},
			props: {
				activeSquare: -1,
			},
		});
	});

	it('renders 64 chessboard squares', () => {
		const squares = wrapper.findAllComponents(ChessboardSquare);
		expect(squares.length).toBe(64);
	});

	it('correctly assigns dark and light color based on position', () => {
		const squares = wrapper.findAllComponents(ChessboardSquare);

		// Testing sample dark squares
		const a1 = squares.find((item) => item.attributes('id') === 'a1');
		expect(a1?.props('dark')).toBe(true);

		const h4 = squares.find((item) => item.attributes('id') === 'h4');
		expect(h4?.props('dark')).toBe(true);

		// Testing sample light squares
		const a8 = squares.find((item) => item.attributes('id') === 'a8');
		expect(a8?.props('dark')).toBe(false);

		const e6 = squares.find((item) => item.attributes('id') === 'e6');
		expect(e6?.props('dark')).toBe(false);
	});

	it('emits click event with the correct position when a square is clicked', async () => {
		const square = wrapper.find('#a1');
		await square.trigger('click');
		expect(wrapper.emitted()).toHaveProperty('click');
		expect(wrapper.emitted('click')?.[0]).toEqual(['a1']);
	});

	it('change color of activeSquare passed as prop', async () => {
		const activeSquare = 'd5';
		await wrapper.setProps({ activeSquare });
		const square = wrapper.findComponent<typeof ChessboardSquare>('#d5');
		expect(square.props('active')).toBe(true);
	});
});
