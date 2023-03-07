<script lang="ts">
    export let version = 1;
    export let text = "Upload profile picture";
    export let accepts = "image/jpg, image/png, image/svg, image/jpeg";
    export let name = "pfp";
    export let displayScript: any;
</script>

<style>
    input::file-selector-button {
        padding: 0.5em;
        border: none;
        border-radius: 9999px;
        background-color: rgb(226 232 240);
        padding-left: 1.25rem/* 20px */;
        padding-right: 1.25rem/* 20px */;
        width: 15rem;
        cursor: pointer;
    }

    input::file-selector-button:hover {
        background-color: rgb(203 213 225);
    }
</style>

{#if version === 1}
    <label for="upload" class="cursor-pointer px-8 bg-slate-200 hover:bg-slate-300 rounded-full
        py-[0.6rem]">
        {text}
    </label>
    <input type="file" id="upload" class="hidden" accept={accepts} name={name} on:change={displayScript}>
{:else}
    <div class="flex items-center justify-center w-full">
        <label for="dropzone-file" class="flex flex-col items-center justify-center 
            w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer 
            bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 
            dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" 
                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12">
                </path></svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
        </label>
    </div>
{/if}