<template>
    <div class="input-group flex-nowrap mb-2" style="direction: rtl">
        <div class="input-group-prepend" v-if="icon">
            <div class="input-group-text bg-special text-white" style="border-radius: 0px 5px 5px 0px"><i :class="'fas fa-' + icon"></i></div>
        </div>
        <input class="form-control" :type="modalType" :value="modelValue" id="inlineFormInputGroup" @input="$emit('update:modelValue', $event.target.value)" ref="input">
    </div>
</template>

<script>
  export default {
    props: ['modelValue','icon','modalType'],

    emits: ['update:modelValue'],

    methods: {
      focus() {
        this.$refs.input.focus()
      }
    }
  }
</script>

