<script lang="ts">
	import Underline from '$lib/components/Underline.svelte';
	/** @type {import('./$types').ActionData} */
	export let form: any;

	let check: boolean;
	let error = {
		general: form?.error,
		username: ''
	};
	let data = {
		email: '',
		username: ''
	};
	$: {
		error = error;
		data = data;
		check = false;

		if (!Object.values(data).includes('') && Object.values(error).every((v) => v === ''))
			check = true;
		else check = false;

		setTimeout(() => (error.general = ''), 5000);
	};

	const usernameValidator = () => {
		if (data.username) {
			if (data.username.length <= 5)
				return (error.username = 'It should be 6 characters and above for length.');
			if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(data.username))
				return (error.username = 'Username should not contain any special characters.');
		}
		error.username = '';
	};
</script>

<svelte:head>
	<title>Register | Squared</title>
	<meta name="description" content="Join us in our quadrilateral world." />
	<link rel="icon" href="../img/cube_orange.svg" />
</svelte:head>

<section
	class="h-full w-full flex justify-center items-center font-['ABC-Regular'] overflow-hidden
  bg-default default-bg"
>
	<div
		class="w-2/5 bg-white flex flex-col p-5 gap-3 justify-center items-center sm:w-full
    text-center rounded-3xl"
	>
		<div class="flex flex-col justify-center gap-2">
			<img src="../img/cube.svg" alt="squared" class="a700 h-16" />
			<h1 class="text-4xl font-extrabold">Register time!</h1>
			<p>Start by inputting your email address!</p>
		</div>
		<hr class="bg-gray-300 h-1 w-60 rounded-full my-3" />
		{#if error.general}
			<div class="bg-red-200 w-72 p-5 text-left rounded-xl flex items-center justify-center">
				<p class="break-words">{error.general}</p>
			</div>
		{/if}
		<form class="flex flex-col justify-center items-center gap-3" method="POST">
			<input
				type="email"
				class="rounded-full px-5 bg-slate-200
        h-10 w-96 sm:w-72 {!data.email ? 'outline-red-500' : ''}"
				placeholder="Email"
				name="email"
				bind:value={data.email}
			/>
			<div class="relative w-96">
				{#if error.username}
					<div class="absolute -top-[4.4rem] h-16 left-5 flex gap-3 items-end text-left">
						<img src="../img/warning.svg" alt="warning" class="h-6 animate-pulse peer/unwarn" />
						<div
							class="bg-red-500 max-w-[19rem] p-2 rounded-lg text-white scale-0
                peer-hover/unwarn:scale-100 transition-transform origin-left"
						>
							<p class="text-sm">{error.username}</p>
						</div>
					</div>
				{/if}
				<input
					type="text"
					class="rounded-full px-5 bg-slate-200
          h-10 w-full sm:w-72 {!data.username || error.username ? 'outline-red-500' : ''}"
					placeholder="Username"
					name="username"
					bind:value={data.username}
					required
					on:input={usernameValidator}
				/>
			</div>
			<button
				type={!check ? 'button' : 'submit'}
				class="rounded-full px-5 bg-amber-700
        h-10 w-56 text-white font-bold {!check
					? 'opacity-50 cursor-default'
					: 'hover:bg-slate-300 hover:text-black'}
        sm:w-36">Register</button
			>
		</form>
		<hr class="bg-gray-300 h-1 w-60 rounded-full my-3" />
		<p>
			<a
				href="/login"
				class="decoration-none
        after:bg-amber-700 text-amber-700 font-bold"
			>
				<Underline text={'Log in'} />
			</a>
			if you have a ducking account already. Tss.
		</p>
	</div>
</section>
