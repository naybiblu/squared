<script>
    /**
	 * @type {any}
	 */
    export let text;
    export let color = "text-white";
    export let underlineColor = "bg-white";

</script>


<style>
    .hover-underline-animation {
        display: inline-block;
        position: relative;
    }

    .hover-underline-animation::after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
    }

    .hover-underline-animation:hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
</style>

<span class="hover-underline-animation {color} after:{underlineColor}">{text}</span>