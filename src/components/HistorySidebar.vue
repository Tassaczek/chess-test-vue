<script setup lang="ts"></script>

<template>
	<div class="history-sidebar">
		<div class="history-sidebar__navigation">
			<button>prev</button>
			<button>next</button>
		</div>

		<ol>
			<li>a8</li>
			<li>a8</li>
			<li>a8</li>
			<li>a8</li>
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
		flex-grow: 1;
		max-width: 200px;
	}
}
</style>
