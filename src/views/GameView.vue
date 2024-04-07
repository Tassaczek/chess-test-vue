<script setup lang="ts">
const horizontal = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const vertical = [1, 2, 3, 4, 5, 6, 7, 8];

const charToNumber = (char: string): number => {
	return char.toLowerCase().charCodeAt(0) - 96;
};
</script>

<template>
	<div class="chessboard__wrapper">
		<div class="chessboard">
			<template v-for="y in [...vertical].reverse()">
				<div
					v-for="x in horizontal"
					:key="x + y"
					class="chessboard__square"
					:class="[
						{ 'chessboard__square--dark': (charToNumber(x) + y) % 2 === 0 },
					]"
				>
					<!-- {{ x }}, {{ y }} -->
				</div>
			</template>
		</div>
	</div>
</template>

<style scoped lang="scss">
.chessboard {
	&__wrapper {
		padding: 20px;
	}
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	max-width: 600px;
	border: 1px solid rgb(249, 236, 211);
	&__square {
		background-color: rgb(249, 236, 211);
		aspect-ratio: 1 / 1;
		display: grid;
		place-items: center;
		&--dark {
			background-color: #743c1e;
		}
	}
}
</style>
