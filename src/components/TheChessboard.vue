<script setup lang="ts">
import { useGameStore } from '../stores/game';
import ChessboardSquare from './ChessboardSquare.vue';

const store = useGameStore();
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
	<div class="chessboard__container">
		<div class="chessboard">
			<template v-for="y in [...vertical].reverse()">
				<ChessboardSquare
					v-for="x in horizontal"
					:key="x + y"
					:dark="(charToNumber(x) + y) % 2 === 0"
					:active="x + y === store.history[store.activeSquareIndex]"
					@click="emit('click', x + y)"
				></ChessboardSquare>
			</template>
		</div>
	</div>
</template>

<style scoped lang="scss">
.chessboard {
	&__container {
		width: 100%;
		max-width: calc(100vh - 4rem);
	}
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	width: 100%;
	/* Ensures the chessboard is fully visible by adjusting its size based on
    the viewport's height, useful for desktops where height can limit visibility.
    100% view height minus top and bottom margin. */
	max-width: calc(100vh - 4rem);
	border: 1px solid var(--primary);
	border-radius: 1%;
	overflow: hidden;
}
</style>
