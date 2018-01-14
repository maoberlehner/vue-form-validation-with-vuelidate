<template>
  <div class="ContactForm">
    <div class="ContactForm__element">
      <label for="name" class="ContactForm__label">Name</label>
      <app-input
        id="name"
        v-model="name"
        :status="$v.name.$error ? 'error' : null"
        @blur="$v.name.$touch()"
      >
      </app-input>
      <ul class="ContactForm__messages" v-if="$v.name.$error">
        <li v-if="!$v.name.required">
          This field is required.
        </li>
      </ul>
    </div>

    <div class="ContactForm__element">
      <label for="email" class="ContactForm__label">Email</label>
      <app-input
        id="email"
        type="email"
        v-model="email"
        :status="$v.email.$error ? 'error' : null"
        @blur="$v.email.$touch()"
      >
      </app-input>
      <ul class="ContactForm__messages" v-if="$v.email.$error">
        <li v-if="!$v.email.required">
          This field is required.
        </li>
        <li v-if="!$v.email.email">
          Please enter a valid email address.
        </li>
      </ul>
    </div>

    <div class="ContactForm__element">
      <label for="message" class="ContactForm__label">Message</label>
      <app-textarea
        id="message"
        v-model="message"
        :status="$v.message.$error ? 'error' : null"
        @blur="$v.message.$touch()"
      >
      </app-textarea>
      <ul class="ContactForm__messages" v-if="$v.message.$error">
        <li v-if="!$v.message.required">
          This field is required.
        </li>
      </ul>
    </div>

    <button @click="validate">
      Submit
    </button>
  </div>
</template>

<script>
import { email, required } from 'vuelidate/lib/validators';

import formMixin from '../mixins/form';

import AppInput from './AppInput';
import AppTextarea from './AppTextarea';

export default {
  name: 'ContactForm',
  mixins: [formMixin],
  components: {
    AppInput,
    AppTextarea,
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  validations: {
    name: {
      required,
    },
    email: {
      required,
      email,
    },
    message: {
      required,
    },
  },
};
</script>

<style>
.ContactForm > :not(:first-child) {
  margin-top: 1em;
}

.ContactForm__label {
  display: block;
}

.ContactForm__messages {
  list-style-type: none;
  padding-left: 0;
  color: red;
}
</style>
