<script lang="ts">
	export let title: string;
	export let publishedTimeText: string;
	export let views: number;
	export let videoId: string;
	export let thumbnail: string;
	export let channelName: string;
	export let avatar: string;
</script>

<a href="/${videoId}">
	<div class="text-white">
		<div class="relative">
			<div class="absolute bottom-1 right-1 bg-black/80 text-xs p-2 rounded-lg mb-1 mr-1">1:00</div>
			<img src={thumbnail} alt="" class="h-56 w-full object-cover rounded-lg sm:mt-5" />
		</div>
		<div class="flex space-x-2 items-center py-2">
			<img src={avatar} alt="" class="rounded-full h-12 w-12" />
			<div>
				<h2 class="font-semibold capitalize">{title}</h2>
				<div class="flex text-sm">
					<p>{channelName} Views •</p>
					<p>&nbsp;{views} •</p>
					<p>&nbsp;{publishedTimeText}</p>
				</div>
			</div>
		</div>
	</div>
</a>
