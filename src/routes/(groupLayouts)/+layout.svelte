<script lang="ts">
	import SideBar from '$lib/components/sideBar.svelte';
</script>

<div class="flex">
	<SideBar />
	<main class="sm:ml-20">
		<slot />
	</main>
</div>
