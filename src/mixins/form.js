import { validationMixin } from 'vuelidate';

export default {
  mixins: [validationMixin],
  methods: {
    focusFirstStatus(component = this) {
      if (component.status) {
        component.$el.focus();
        return true;
      }

      let focused = false;

      component.$children.some((childComponent) => {
        focused = this.focusFirstStatus(childComponent);
        return focused;
      });

      return focused;
    },
    validate() {
      this.$v.$touch();
      this.$nextTick(() => this.focusFirstStatus());
    },
  },
};
