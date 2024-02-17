<script>
	import VideoCard from '$lib/components/videoCard.svelte';
	export let data;
	console.log(data.content);
</script>

<div class="grid sm:grid-cols-4 space-y-2 sm:space-y-0 sm:space-x-2">
	<VideoCard />
	<VideoCard />
	<VideoCard />
	<VideoCard />
	<VideoCard />
</div>
