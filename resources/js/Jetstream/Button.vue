<template>
  <button :type="type" class="btn btn-primary text-uppercase">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'submit',
      },
    }
  }
</script>
