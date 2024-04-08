<script setup lang="ts">
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
		<div class="history-sidebar__navigation">
			<button>prev</button>
			<button>next</button>
			<button @click="emit('clearHistory')">Reset</button>
		</div>

		<ol>
			<li
				v-for="position in props.history"
				:key="position"
			>
				{{ position }}
			</li>
		</ol>
	</div>
</template>

<style scoped lang="scss">
.history-sidebar {
	border-radius: 5px;
	width: 100%;
	background-color: rgb(249, 236, 211);
	&__navigation {
		display: flex;
		justify-content: center;
	}
}

@media (min-width: 960px) {
	.history-sidebar {
		max-width: 200px;
	}
}
</style>
