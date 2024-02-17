<script lang="ts">
	import SearchBar from './searchBar.svelte';
</script>

<header class="sticky top-0 bottom-0 z-10 bg-dark">
	<nav class="flex justify-between py-2 items-center">
		<div class="flex items-center">
			<a href="/" class="sm:ml-5 mr-3 hover:bg-grey rounded-full p-1"
				><img src="/svg/Hamburger.svg" alt="" /></a
			>
			<a href="/"> <img src="/svg/Youtube.svg" alt="" /> </a>
		</div>
		<SearchBar />
		<div class="flex space-x-5 items-center">
			<button type="button" class="sm:hidden block">
				<img src="/svg/Search.svg" alt="" />
			</button>
			<button type="button" class="hidden sm:block hover:bg-grey rounded-full p-1">
				<img src="/svg/CreateVid.svg" alt="" />
			</button>
			<button type="button" class="hidden sm:block hover:bg-grey rounded-full p-1">
				<img src="/svg/Notif.svg" alt="" />
			</button>
			<button type="button">
				<img src="/img/Profile-Picture.png" alt="" class="w-8 rounded-full" />
			</button>
		</div>
	</nav>
</header>
