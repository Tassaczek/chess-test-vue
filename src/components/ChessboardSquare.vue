<script setup lang="ts">
interface Props {
	dark: boolean;
	active: boolean;
}
const props = defineProps<Props>();

const emit = defineEmits<{
	(e: 'click'): void;
}>();
</script>

<template>
	<div
		class="chessboard-square"
		:class="[
			{ 'chessboard-square--dark': props.dark },
			{ 'chessboard-square--active': props.active },
		]"
		@click="emit('click')"
	></div>
</template>

<style scoped lang="scss">
.chessboard-square {
	aspect-ratio: 1 / 1;
	display: grid;
	place-items: center;
	background-color: var(--chessboard-square--light);
	&--dark {
		background-color: var(--chessboard-square--dark);
	}
	&--active {
		background-color: var(--active);
	}
}
</style>
