<template>
  <input
    class="AppInput"
    :class="{ [`has-status-${status}`]: status }"
    @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    status: {
      type: String,
    },
  },
};
</script>

<style>
.AppInput {
  padding: 1em;
  border: 1px solid grey;
  border-radius: 0.25rem;
}

.AppInput.has-status-error {
  border-color: red;
}
</style>
