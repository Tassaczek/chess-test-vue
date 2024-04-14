<script setup lang="ts">
import charToNumber from '../utils/charToNumber';
import ChessboardSquare from './ChessboardSquare.vue';

// Store returns string: 'a1', 'b8', etc or -1 for empty arrays.
type ActiveSquare = string | -1;

interface Props {
	activeSquare: ActiveSquare;
}
const props = defineProps<Props>();

const horizontal = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const vertical = [1, 2, 3, 4, 5, 6, 7, 8];

const emit = defineEmits<{
	(e: 'click', position: string): void;
}>();
</script>

<template>
	<div class="chessboard__container">
		<div class="chessboard">
			<template v-for="y in [...vertical].reverse()">
				<ChessboardSquare
					v-for="x in horizontal"
					:key="x + y"
					:dark="(charToNumber(x) + y) % 2 === 0"
					:active="x + y === props.activeSquare"
					@click="emit('click', x + y)"
				></ChessboardSquare>
			</template>
		</div>
	</div>
</template>

<style scoped lang="scss">
.chessboard {
	/* Ensures the chessboard is fully visible by adjusting its size based on
    the viewport's height, useful for desktops where height can limit visibility.
    100% view height minus top and bottom margin. */
	&__container {
		width: 100%;
		max-width: calc(100vh - 4rem);
	}
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	border: 1px solid var(--primary);
	border-radius: 1%;
	overflow: hidden;
}
</style>
