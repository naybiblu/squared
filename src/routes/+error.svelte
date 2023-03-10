<script>
    import { page } from '$app/stores';
</script>
  
<svelte:head>
  <title>{$page.status} | Squared</title>
	<meta name="description" content={$page.error?.message}>
  <link rel="icon" href="../img/cube_orange.svg" />
</svelte:head>

<section class="h-screen w-screen flex justify-center font-['ABC-Regular'] overflow-hidden bg-default
  default-bg items-center">
  <div class="h-1/2 w-full bg-white flex justify-center items-center">
    <h1>{$page.status}: {$page.error?.message}</h1>
  </div> 
</section>