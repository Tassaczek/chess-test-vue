<script setup lang="ts">
import TheChessboard from '../components/TheChessboard.vue';
import HistorySidebar from '../components/HistorySidebar.vue';
import { useGameStore } from '../stores/game';

const store = useGameStore();

function updateClickedPosition(position: string) {
	store.addClick(position);
}
</script>

<template>
	<div class="game-view">
		<TheChessboard
			:active-square="store.history[store.activeSquareIndex]"
			@click="updateClickedPosition($event)"
		/>
		<HistorySidebar
			:history="store.history"
			:active-square-index="store.activeSquareIndex"
			@clear-history="store.clearHistory()"
		/>
	</div>
</template>

<style scoped lang="scss">
.game-view {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 2rem;
	margin-right: 2rem;
	margin-left: 2rem;
	gap: 2rem;
}

@media (min-width: 960px) {
	.game-view {
		flex-direction: row;
		justify-content: center;
		gap: 2rem;
		align-items: stretch;
	}
}
</style>
