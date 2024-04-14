import { describe, it, expect } from 'vitest';
import type { VueWrapper } from '@vue/test-utils';
import { mount } from '@vue/test-utils';
import BaseButton from './BaseButton.vue';

describe('BaseButton.vue', () => {
	let wrapper: VueWrapper<InstanceType<typeof BaseButton>>;

	beforeEach(() => {
		wrapper = mount(BaseButton, {
			slots: {
				default: 'Click me',
			},
		});
	});

	it('renders content inside default slot correctly', () => {
		expect(wrapper.text()).toContain('Click me');
	});

	it('emits click event when clicked', async () => {
		await wrapper.find('button').trigger('click');
		expect(wrapper.emitted()).toHaveProperty('click');
	});

	it('renders the default button type when no type is provided', () => {
		const wrapper = mount(BaseButton);
		const button = wrapper.find('button');
		expect(button.attributes('type')).toBe('button');
	});

	it('renders provided in props button type', () => {
		const wrapper = mount(BaseButton, {
			props: {
				type: 'submit',
			},
		});
		const button = wrapper.find('button');
		expect(button.attributes('type')).toBe('submit');
	});
});
