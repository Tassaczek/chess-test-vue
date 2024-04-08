<script setup lang="ts">
const horizontal = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const vertical = [1, 2, 3, 4, 5, 6, 7, 8];

const emit = defineEmits<{
	(e: 'click', position: string): void;
}>();

const charToNumber = (char: string): number => {
	return char.toLowerCase().charCodeAt(0) - 96;
};
</script>

<template>
	<div class="chessboard">
		<template v-for="y in [...vertical].reverse()">
			<div
				v-for="x in horizontal"
				:key="x + y"
				class="chessboard__square"
				:class="[
					{ 'chessboard__square--dark': (charToNumber(x) + y) % 2 === 0 },
				]"
				@click="emit('click', x + y)"
			></div>
		</template>
	</div>
</template>

<style scoped lang="scss">
.chessboard {
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	width: 100%;
	/* Ensures the chessboard is fully visible by adjusting its size based on
    the viewport's height, useful for desktops where height can limit visibility.
    100% view height minus top and bottom margin. */
	max-width: calc(100vh - 4rem);
	border: 1px solid rgb(249, 236, 211);
	border-radius: 1%;
	overflow: hidden;
	&__square {
		aspect-ratio: 1 / 1;
		display: grid;
		place-items: center;
		background-color: rgb(249, 236, 211);
		&--dark {
			background-color: #743c1e;
		}
		// TODO: Use it as active
		&:hover {
			background-color: #77c8c5;
		}
	}
}
</style>
