<script lang="ts">
    let text: String;

    const wiggle = () => {
        if (!text) document?.getElementById("shake").classList.toggle("animate-wiggle");
    }
</script>

<svelte:head>
    <title>Squared | Publish</title>
    <meta name="og:title" content="Squared | Publish" />
	<meta name="description" content="Post something you like to share!" />
	<meta name="og:description" content="Post something you like to share!" />
    <meta name="og:image" content="img/bg.svg" />
</svelte:head>

<div class="w-full h-full">
    <form class="w-full h-full overflow-hidden" method="POST">
        <!-- svelte-ignore a11y-autofocus -->
        <textarea class="fixed top-16 w-full h-full p-3 outline-none bg-transparent 
            resize-none" placeholder="Express yourself..." autofocus bind:value={text}
            name="post"></textarea>
        <div class="fixed flex bottom-8 right-10 flex-col gap-5">
            <a href="/">
                <button type="reset" class="flex bg-amber-600
                    items-center justify-center rounded-full h-16 w-16">
                    <img src="img/return.svg" alt="return" class="h-8 invert">
                </button>
            </a>
            <button type="submit" class="flex bg-amber-600
            items-center justify-center rounded-full h-16 w-16" on:click={wiggle} id="shake">
            <img src="img/send.svg" alt="publish" class="h-8 invert">
        </button>
        </div>
        
    </form>
</div>