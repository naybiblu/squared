<script lang="ts">
    import { page } from '$app/stores';
    import ErrorPage from '$lib/components/ErrorPage.svelte';
</script>

<ErrorPage code={$page.status} message={$page.error?.message}/>