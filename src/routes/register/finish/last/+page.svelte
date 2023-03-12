<script lang="ts">
	import FileUpload from '$lib/components/FileUpload.svelte';

	const loadPhoto = (e: any) => {
		const target = e.target.parentNode.childNodes[0];
		target.src = URL.createObjectURL(e.target.files[0]);
	};
</script>

<svelte:head>
	<title>Register | Squared</title>
	<meta name="description" content="Join us in our quadrilateral world." />
	<link rel="icon" href="../../img/cube_orange.svg" />
</svelte:head>

<section
	class="h-screen w-screen flex justify-start font-['ABC-Regular'] overflow-hidden bg-default
  default-bg"
>
	<div
		class="h-full w-1/3 backdrop-brightness-50 flex flex-col 
    justify-center items-center sm:w-full text-white"
	>
		<div
			style="transform: rotate(-90deg); font-size: 6rem;"
			class="flex flex-col 
      items-start gap-5"
		>
			<img src="../../img/cube.svg" alt="logo" class="a700 h-16 scale-150" />
			<h1 class="font-black leading-[1] break-words text-left tracking-wider">
				<span style="color: #D3D3D3;">Finalizing</span><br />
				everything.
			</h1>
		</div>
	</div>
	<div
		class="h-full w-2/3 bg-white flex justify-self-end
    flex-col gap-4 py-20 pl-16 justify-center"
	>
		<div>
			<div class="flex gap-5 flex-wrap animate-fadeIn">
				<div class="flex-col flex gap-4 justify-center">
					<div class="flex flex-col gap-1">
						<h1 class="font-bold text-3xl">Fancy Things</h1>
						<p class="text-sm opacity-60">Make your profile (we call 'em square) identifiable!</p>
					</div>
					<div class="flex gap-2">
						<hr
							style="background: rgb(180 83 9); height: 0.75rem; width: 8rem;"
							class="rounded-full"
						/>
						<hr
							style="background: rgb(180 83 9); height: 0.75rem; width: 8rem;"
							class="rounded-full animate-pulse"
						/>
					</div>
				</div>
			</div>
			<form
				class="flex flex-col gap-8 py-5 animate-fadeIn"
				enctype="multipart/form-data"
				method="POST"
			>
				<div class="flex flex-wrap gap-16">
					<div class="flex flex-col items-center w-60 gap-5 justify-center">
						<img
							src="../../img/cube.png"
							alt="uploadedPhoto"
							class="h-36 border-slate-200 border-8
              bg-slate-200 rounded-full w-36"
							style="aspect-ratio: 1 / 1;"
						/>
						<FileUpload displayScript={loadPhoto} />
					</div>
					<div>
						<textarea
							class="resize-none outline-none bg-slate-200 rounded-lg h-56 w-96
              p-5"
							placeholder="Bio"
							name="bio"
						/>
					</div>
				</div>
				<div class="flex flex-wrap gap-5">
					<button
						type="submit"
						class="rounded-full px-5 bg-amber-700
            h-10 w-56 text-white font-bold hover:bg-slate-300
            hover:text-black sm:w-36">Go Wild</button
					>
				</div>
			</form>
		</div>
	</div>
</section>
