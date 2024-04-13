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
			this.$reset();
		},
	},
});
