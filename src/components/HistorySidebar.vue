<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';
import type { Ref } from 'vue';
import BaseButton from './BaseButton.vue';

interface Props {
	history: string[];
	activeSquareIndex: number;
}
const props = defineProps<Props>();

const emit = defineEmits<{
	(e: 'clearHistory'): void;
}>();

// Watcher scrolls to the bottom when new items are added to history, ensuring visibility of the latest item.
const historySidebar: Ref<HTMLElement | null> = ref(null);

watch(
	props.history,
	async () => {
		await nextTick();
		if (historySidebar.value) {
			historySidebar.value.scrollTop = historySidebar.value.scrollHeight;
		}
	},
	{ deep: true },
);
</script>

<template>
	<div class="history-sidebar">
		<section class="history-sidebar__reset">
			<BaseButton
				aria-label="Reset"
				@click="emit('clearHistory')"
				>RESET</BaseButton
			>
		</section>
		<section
			ref="historySidebar"
			class="history-sidebar__main"
		>
			<ol>
				<li
					v-for="(position, index) in props.history"
					:key="index"
					:class="[index === props.activeSquareIndex ? 'item--active' : '']"
				>
					{{ position }}
				</li>
			</ol>
		</section>
		<section class="history-sidebar__navigation"></section>
	</div>
</template>

<style scoped lang="scss">
.history-sidebar {
	width: 100%;
	max-height: calc(100vh - 4rem);
	&__reset {
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		padding: 1rem;
		background-color: var(--neutral-1);
		display: flex;
		justify-content: center;
	}
	&__main {
		background-color: var(--primary);
		overflow-y: auto;
		height: 350px;
		li {
			list-style-position: inside;
			padding-left: 1rem;
			line-height: 2;
			font-size: 0.875rem;
			font-weight: 600;
			color: var(--black);
			&:nth-child(even) {
				background-color: var(--li-bg-alternate);
			}
			&.item--active {
				background-color: var(--active);
			}
		}

		&::-webkit-scrollbar {
			width: 6px;
		}
		&::-webkit-scrollbar-track {
			background: var(--primary);
		}
		&::-webkit-scrollbar-thumb {
			background: var(--neutral-1);
		}
		// for Firefox 64+
		scrollbar-width: thin;
		scrollbar-color: var(--neutral-1) var(--primary);
	}
	&__navigation {
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		background-color: var(--neutral-1);
		display: flex;
		justify-content: center;
		padding: 1rem;
	}
}

@media (min-width: 960px) {
	.history-sidebar {
		max-width: 200px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		&__main {
			flex-grow: 1;
		}
	}
}
</style>
