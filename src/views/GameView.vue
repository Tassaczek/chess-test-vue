<script setup lang="ts">
import TheChessboard from '../components/TheChessboard.vue';
</script>

<template>
	<div class="game-view">
		<TheChessboard />
	</div>
</template>

<style scoped lang="scss">
.game-view {
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
