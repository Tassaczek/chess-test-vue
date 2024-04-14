import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useGameStore } from './game';

describe('useGameStore', () => {
	beforeEach(() => {
		// creates a fresh pinia and makes it active
		// so it's automatically picked up by any useStore() call
		// without having to pass it to it: `useStore(pinia)`
		setActivePinia(createPinia());
	});

	it('initializes with correct default state', () => {
		const store = useGameStore();
		expect(store.history).toEqual([]);
		expect(store.activeSquareIndex).toBe(-1);
	});

	it('adds a click to the history and updates activeSquareIndex', () => {
		const store = useGameStore();
		store.addClick('a1');
		expect(store.history).toEqual(['a1']);
		expect(store.activeSquareIndex).toBe(0);
		store.addClick('b1');
		expect(store.history).toEqual(['a1', 'b1']);
		expect(store.activeSquareIndex).toBe(1);
	});

	it('clears the history and resets the activeSquareIndex', () => {
		const store = useGameStore();
		store.addClick('a1');
		store.addClick('b8');
		expect(store.history.length).toBe(2);
		store.clearHistory();
		expect(store.history).toEqual([]);
		expect(store.activeSquareIndex).toBe(-1);
	});
});
