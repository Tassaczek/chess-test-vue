<script setup lang="ts">
interface Props {
	type?: 'button' | 'submit' | 'reset';
}
withDefaults(defineProps<Props>(), { type: 'button' });

const emit = defineEmits<{
	(e: 'click'): void;
}>();

function clicked() {
	emit('click');
}
</script>

<template>
	<button
		class="base-button"
		:type="type"
		@click.prevent="clicked"
	>
		<slot></slot>
	</button>
</template>

<style lang="scss" scoped>
.base-button {
	padding: 0.75rem 1.625rem;
	font-size: 0.875rem;
	font-weight: 500;
	border-radius: 5px;
	border: none;
	background-color: var(--black);
	color: var(--primary);
	&:hover {
		cursor: pointer;
		background-color: var(--primary);
		color: var(--black);
	}
	&:focus {
		outline-offset: 0.5rem;
		outline-color: var(--primary);
	}
}
</style>
