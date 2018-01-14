<template>
  <textarea
    class="AppTextarea"
    :class="{ [`has-status-${status}`]: status }"
    @input="$emit('input', $event.target.value)"
  >
  </textarea>
</template>

<script>
export default {
  name: 'AppTextarea',
  props: {
    status: {
      type: String,
    },
  },
};
</script>

<style>
.AppTextarea {
  padding: 1em;
  border: 1px solid grey;
  border-radius: 0.25rem;
}

.AppTextarea.has-status-error {
  border-color: red;
}
</style>
