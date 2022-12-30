<script>
    /** @type {import('./$types').PageData} */
    //export let data;

    /**
      * @type {any[]}
      */
    $: posts = [];
    $: text = "";
   /**
	 * @type {any[]}
	 */
     $: states = [];
    $: counter = 0;

    import { time as humanizer } from "$lib/helpers/time";
    import Logo from '$lib/components/Logo.svelte';
    import Note from '$lib/components/Note.svelte';
    import LowerThirds from '$lib/components/LowerThirds.svelte';

    /*const url = `/api/136501080131/posts`;

    setInterval(() => {
      posts.forEach((post, index) => {
        posts[index]["time"] = humanizer(Date.now() - post.timestamp);
      });
    }, 15000);*/

    /**
	 * @param {number} id
	 */
    function clear(id) {
        setTimeout(() => {
            states = states.filter(state => state.id !== id);
        }, 3000);
    }

    async function fetchPosts() {
        let response = await fetch(url);
        let postsFetched = await response.json();
        postsFetched = postsFetched.sort((/** @type {{ timestamp: number; }} */ a, /** @type {{ timestamp: number; }} */ b) => b.timestamp - a.timestamp);
        postsFetched.forEach((/** @type {{ timestamp: number; }} */ post, /** @type {number} */ index) => {
          let time = humanizer(Date.now() - post.timestamp);
          postsFetched[index] = {...post, time: time };
        });
        posts = [...posts, ...postsFetched];
    }

    /**
	 * @param {any} event
	 */
    async function validator(event) {

        if (!text) {
            ++counter;
            let state = { text: "Please do not send an empty post!", error: true, id: counter };
            states = [...states, state];
            return clear(state.id);
        }
        
    }

   
</script>

<svelte:head>
	<title>Squared</title>
	<meta name="description" content="Express yourself in quadrilaterals." />
</svelte:head>

<section class="flex flex-wrap p-5 gap-5 justify-center relative w-full">
    <div class="h-72 w-72 flex drop-shadow-md bg-yellow-100 relative group/post">
        <form class="w-full" method="POST" action="?/post">
            <div class="w-full h-9 px-3 flex absolute top-0 left-0 bg-yellow-200
                flex-col justify-center items-start">
                <button class="absolute right-0 px-3 hover:scale-110" type="reset">
                    <img class="h-3" src="img/ex.svg" alt="x">
                </button>
            </div>
            <textarea class="w-full h-64 mt-8 bg-transparent resize-none 
                p-3 outline-none placeholder:italic" 
                placeholder="Thoughts here, {data.user.username}..." bind:value={text} name="text"></textarea>
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="absolute bottom-5 right-4 drop-shadow-md bg-white rounded-lg
                scale-0 hover:bg-blue-400 hover:invert group-hover/post:scale-100"
                on:click={validator}>
                <button class="p-2 flex flex-row gap-2
                    items-center justify-center text-sm font-bold" type={!text ? "button" : "submit"}>
                    <img class="h-3" src="img/send.svg" alt="send">
                    <p>Publish</p>
                </button>
            </div>
        </form>
    </div>
    {#await fetchPosts()}
        <section class="w-full h-full
        flex justify-center items-center top-0 bg-slate-200 fixed">
            <div class="flex flex-col justify-center items-center gap-5">
                <Logo/>
            </div>
        </section>
    {:then postx}
            {#each posts as post}
                <Note data={post}/>
            {/each}
    {/await}
    <div class="w-full h-2"></div>
</section>
<section class="w-full h-full z-50">
{#if states.length > 0}
    <div class="fixed top-0 right-5 h-full w-56">
        <div class="flex flex-col-reverse items-end gap-10 h-full w-full
            py-12">
            {#each states as state}
                <LowerThirds {...state}/>
            {/each}
        </div>
    </div>
{/if}
</section>
