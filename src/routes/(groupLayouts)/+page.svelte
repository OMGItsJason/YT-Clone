<script>
	import VideoCard from '$lib/components/videoCard.svelte';
	export let data;
</script>

<div class="grid sm:grid-cols-4 space-y-2 sm:space-y-0 sm:space-x-2">
	{#each data.contents as { type, video }}
		{#if type === 'video'}
			<VideoCard
				title={video.title}
				videoId={video.videoId}
				views={video.stats.views}
				publishedTimeText={video.publishedTimeText}
				channelName={video.author.title}
				avatar={video.author.avatar[0].url}
				thumbnail={video.thumbnail[0].url}
			/>
		{/if}
	{/each}
</div>
