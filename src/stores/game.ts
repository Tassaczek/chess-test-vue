import { defineStore } from 'pinia';

type GameStoreState = {
	history: string[];
	activeSquareIndex: number;
};

export const useGameStore = defineStore('game', {
	state: () => {
		return {
			history: [],
			activeSquareIndex: -1, // Keeps track of the current highlighted square
		} as GameStoreState;
	},
	actions: {
		addClick(position: string) {
			this.history.push(position);
			this.activeSquareIndex++;
		},
		clearHistory() {
			// this.$reset() causes problems with reference retention.
			// After reset, changes are no longer observed by the watcher in HistorySidebar.
			this.history.splice(0, this.history.length);
			this.activeSquareIndex = -1;
		},
	},
});
