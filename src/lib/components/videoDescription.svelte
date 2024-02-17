<script lang="ts">
	let showMore = false;
</script>

<div
	class:h-fit={showMore}
	class:h-[100px]={!showMore}
	class="bg-darkgrey rounded-lg text-white overflow-hidden text-sm p-3 mt-2 relative"
>
	<div>
		<span class="text-lg font-semibold">1,000,000,000,000 Views</span>
	</div>
	<p class="mb-6 text-sm">
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos autem eius eaque fugit
		beatae provident harum reprehenderit, rerum odit velit, deleniti ab officia ipsa asperiores esse
		quod eos minus modi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos autem
		eius eaque fugit beatae provident harum reprehenderit, rerum odit velit, deleniti ab officia
		ipsa asperiores esse quod eos minus modi. Lorem ipsum dolor sit amet consectetur adipisicing
		elit. Dignissimos autem eius eaque fugit beatae provident harum reprehenderit, rerum odit velit,
		deleniti ab officia ipsa asperiores esse quod eos minus modi.
	</p>
	<button
		on:click={() => {
			showMore = !showMore;
		}}
		class="absolute bottom-1 right-1 bg-darkgrey group-hover:bg-darkgrey capitalize font-semibold p-1"
		>Show {showMore ? 'Less' : 'More...'}</button
	>
</div>
