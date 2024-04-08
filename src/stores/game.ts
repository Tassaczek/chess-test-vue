import { defineStore } from 'pinia';

type GameStoreState = {
	history: string[];
	activeSquareIndex: number;
};

export const useGameStore = defineStore('game', {
	state: () => {
		return {
			history: [],
			activeSquareIndex: 0,
		} as GameStoreState;
	},
	actions: {
		addClick(position: string) {
			this.history.push(position);
		},
		clearHistory() {
			this.$reset();
		},
	},
});
