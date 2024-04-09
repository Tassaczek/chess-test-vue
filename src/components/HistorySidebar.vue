<script setup lang="ts">
import BaseButton from './BaseButton.vue';
interface Props {
	history: string[];
	activeSquareIndex: number;
}
const props = defineProps<Props>();

const emit = defineEmits<{
	(e: 'clearHistory'): void;
}>();
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
		<section class="history-sidebar__main">
			<ol>
				<li
					v-for="position in props.history"
					:key="position"
				>
					{{ position }}
				</li>
			</ol>
		</section>
		<section class="history-sidebar__navigation">
			<BaseButton
				aria-label="Reset"
				@click="emit('clearHistory')"
				>Navigation here</BaseButton
			>
		</section>
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
