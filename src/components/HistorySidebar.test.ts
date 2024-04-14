import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import type { VueWrapper } from '@vue/test-utils';
import HistorySidebar from './HistorySidebar.vue';
import BaseButton from './BaseButton.vue';

describe('HistorySidebar', () => {
	let wrapper: VueWrapper<InstanceType<typeof HistorySidebar>>;

	beforeEach(() => {
		wrapper = mount(HistorySidebar, {
			props: {
				history: ['a1', 'e4', 'd8', 'd4'],
				activeSquareIndex: 3,
			},
			global: {
				components: {
					BaseButton,
				},
			},
		});
	});

	it('renders list items for each history entry, and last item has active class', () => {
		const listItems = wrapper.findAll('li');
		expect(listItems.length).toBe(4);
		expect(listItems[wrapper.props().activeSquareIndex].classes()).toContain(
			'item--active',
		);
		expect(listItems[0].text()).toBe('a1');
		expect(listItems[1].text()).toBe('e4');
		expect(listItems[2].text()).toBe('d8');
		expect(listItems[3].text()).toBe('d4');
	});

	it('emits clearHistory when the reset button is clicked', async () => {
		await wrapper.findComponent(BaseButton).trigger('click');
		expect(wrapper.emitted()).toHaveProperty('clearHistory');
	});
});
