<script lang="ts">
    import Post from "$lib/components/Post.svelte";

    let post = {
        author: {
            name: {
                first: "Mharc Nyvhie",
                last: "Guillermo",
            },
            username: "naybiblu"
        },
        content: "Test",
        time: "5d",
        interactions: {
            likes: 14,
            comments: 87,
            shares: 0
        }
    }
</script>

<svelte:head>
    <title>Squared</title>
    <meta name="og:title" content="Squared" />
	<meta name="description" content="Express yourself in quadrilaterals." />
	<meta name="og:description" content="Express yourself in quadrilaterals." />
    <meta name="og:image" content="img/bg.svg" />
</svelte:head>

<div class="h-screen w-screen flex justify-center py-5 gap-5">
    <section class="h-screen w-2/5 flex gap-5 flex-col">
        <!-- publish component -->
        <div class="h-16 w-full bg-white rounded-lg shadow-sm
            flex justify-center items-center gap-2 px-4 py-3 border-slate-200 border">
            <a href="/">
                <img src="img/example.jpg" alt="sample" class="rounded-full w-[2.75rem]">
            </a>
            <form class="flex items-center gap-2">
                <input type="text" placeholder="Express yourself..." 
                    class="bg-slate-100 h-10 px-3 outline-none w-[26rem] rounded-md">
                <button type="submit" class="p-2 rounded-md hover:bg-slate-100">
                    <img src="img/send.svg" alt="publish" class="h-6 opacity-50">
                </button>
            </form>
        </div>
        
        <!-- post components-->
        <div class="w-full flex flex-col gap-3">
            <Post data={post}/>
        </div>
    </section>
    <section class="h-screen w-1/4 flex gap-3 flex-col">
        <div class="h-60 w-full flex flex-col bg-white shadow-sm py-2 px-4 
            border-slate-200 border rounded-lg">
            Something here
        </div>
        <div class="h-60 w-full flex flex-col bg-white shadow-sm py-2 px-4
          border-slate-200 border rounded-lg">
            Footer
        </div>
    </section>
</div>