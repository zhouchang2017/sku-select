<template>
    <div class="flex flex-col">
        <div class="text-xs mb-2">{{option.name}}</div>
        <div class="flex flex-wrap">
            <option-selection-radio v-model="checked" :label="value" v-for="value in option.values" :key="value.id"/>
        </div>
    </div>
</template>

<script>
export default {
  components: {
    "option-selection-radio": () => import("./OptionSelectionRadio")
  },
  props: {
    option: {
      type: Object,
      default: () => {}
    },
    value: {
      type: Object
    }
  },
  computed: {
    checked: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input",value);
      }
    }
  }
};
</script>
