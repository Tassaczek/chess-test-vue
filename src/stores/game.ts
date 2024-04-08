import { defineStore } from 'pinia';

type GameStoreState = {
	clickHistory: string[];
	activeSquareIndex: number;
};

export const useGameStore = defineStore('game', {
	state: () => {
		return {
			clickHistory: [],
			activeSquareIndex: 0,
		} as GameStoreState;
	},
	actions: {
		addClick(position: string) {
			this.clickHistory.push(position);
		},
		clearHistory() {
			this.$reset();
		},
	},
});
