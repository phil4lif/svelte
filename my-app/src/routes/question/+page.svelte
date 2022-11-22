<script>
  /** @type {import('./$types').PageServerData} */
  export let data;
</script>

<h1>{data?.question}</h1>
<h2>This is the page</h2>
<div>{@html data?.question}</div>
