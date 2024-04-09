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
	background-color: rgb(249, 236, 211);
	&--dark {
		background-color: #743c1e;
	}
	&--active {
		background-color: #77c8c5;
	}
}
</style>
