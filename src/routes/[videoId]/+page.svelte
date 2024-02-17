<script lang="ts">
	import ChannelInfo from '$lib/components/channelInfo.svelte';
	import CommentSection from '$lib/components/commentSection.svelte';
	import RecommendedVideo from '$lib/components/recommendedVideo.svelte';
	import VideoDescription from '$lib/components/videoDescription.svelte';
</script>

<iframe
	class="w-full h-[150px]"
	src={'https://www.youtube.com/embed/${videoId}'}
	title="Youtube Video Player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	allowfullscreen
/>

<div class="max-w-[1150px] px-2 w-full mx-auto">
	<h1 class="text-2xl text-white font-semibold capitalize">Jason Rules</h1>
	<div class="flex flex-col gap-5 items-start">
		<div>
			<ChannelInfo />
			<VideoDescription />
			<CommentSection />
		</div>
		<RecommendedVideo />
	</div>
</div>
