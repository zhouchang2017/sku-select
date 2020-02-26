<template>
    <button
        @click="onClick"
        class="radio-button box-content mr-2 px-2 py-1 rounded overflow-hidden text-xs focus:outline-none"
        :class="classObject"
        :disabled="label.disabled"
    >{{label.name}}</button>
</template>

<script>
export default {
  props: {
    label: {
      type: Object,
      defaule: () => {}
    },
    value: {
      type: [Object, String, Number, Boolean]
    }
  },
  model: {
    prop: "value",
    event: "input"
  },
  methods: {
    onClick() {
      if (!this.label.disabled) {
        this.$emit("input", this.checked ? null : this.label);
      }
    }
  },
  computed: {
    checked() {
      if (!this.value) {
        return false;
      }
      return this.value.id === this.label.id;
    },
    classObject(){
        return {
            'text-indigo-500 border-indigo-500 border': !this.label.disabled && !this.checked,
            'border-none bg-gray-300 text-white cursor-not-allowed':this.label.disabled,
            'border-none bg-indigo-500 text-white':this.checked 
        }
    }
  }
};
</script>
