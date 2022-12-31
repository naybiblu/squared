<script lang="ts">
    export let text: any;
    export let color = "text-black";
    export let underlineColor = "bg-amber-700";
</script>


<style>
    /*.hover-underline-animation {
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
    }*/
</style>

<span class="hover-underline-animation {color} after:{underlineColor} inline-block
    relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px]
    after:bottom-0 after:left-0 after:origin-bottom-right after:transition-transform
    after:duration-[0.25s] ease-out hover:after:scale-x-100 hover:after:origin-bottom-left">{text}</span>