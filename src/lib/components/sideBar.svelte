<script lang="ts">
	const nav = [
		{
			icon: 'Home',
			title: 'Home'
		},
		{
			icon: 'Short',
			title: 'Short'
		},
		{
			icon: 'Subscriptions',
			title: 'Subscriptions'
		},
		{
			icon: 'You',
			title: 'You'
		}
	];
</script>

<aside class="text-white text-xs fixed top-16 bg-dark hidden sm:block">
	<div class="space-y-5">
		{#each nav as item}
			<a href="/" class="flex flex-col items-center justify-center hover:bg-grey rounded-xl"
				><img src={`svg/${item.icon}.svg`} alt="" />
				<p>{item.title}</p></a
			>
		{/each}
	</div>
</aside>
