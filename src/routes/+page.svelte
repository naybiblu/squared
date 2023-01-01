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
            <a href="/" class="w-1/12">
                <img src="img/example.jpg" alt="sample" class="rounded-full h-10">
            </a>
            <form class="flex items-center gap-3 w-11/12" action="?/publish">
                <input type="text" placeholder="Express yourself..." 
                    class="bg-slate-100 h-10 px-3 outline-none w-11/12 rounded-md">
                <button type="submit" class="p-2 w-1/12 rounded-md hover:bg-slate-100">
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
        <div class="w-full flex flex-col">
            <div class="h-24 w-full bg-[url('img/bg.svg')] default-bg rounded-t-lg
                shadow-sm border-t-slate-200 border-x-slate-200 border
                flex items-center justify-center">
                <img src="img/github.svg" alt="github" class="h-16">
            </div>
            <div class="flex flex-col w-full bg-white rounded-b-lg
                shadow-sm border-b-slate-200 border-x-slate-200 border
                p-4 items-center justify-center gap-3 h-44 font-[ABC-Regular]">
                <h1 class="font-extrabold text-3xl text-amber-700">Join us!</h1>
                <p class="text-center -mt-2">Let's make this squaretown<br> 
                    <span class="text-amber-700 font-semibold underline">as better as f#ck</span>.</p>
                <a href="https://github.com/naybiblu/squared">
                    <button class="h-10 px-5 rounded-full bg-amber-700 flex
                        justify-center items-center hover:bg-amber-600 gap-2">
                        <img src="img/github.svg" alt="github" class="h-6 invert">
                        <p class="text-white font-medium">Contribute</p>
                    </button>
                </a>
            </div>
        </div>
        <!--<div class="h-60 w-full flex flex-col bg-white shadow-sm py-2 px-4
          border-slate-200 border rounded-lg">
            Footer
        </div>-->
    </section>
</div>
