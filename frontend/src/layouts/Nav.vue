<script setup>
import NavItem from "../components/NavItem.vue";
</script>

<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">NewsGaming</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
                    <NavItem text="Home" />
                    <NavItem text="News" />
                    <NavItem text="Profile" />
				</ul>
			</div>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
</style>
