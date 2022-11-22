<script>
  /** @type {import('./$types').LayoutData} */
  export let data;
</script>

<div class="submenu">
  {#each data.sections as section}
    <a href="/settings/{section.slug}">{section.title}</a>
  {/each}
</div>

<slot></slot>