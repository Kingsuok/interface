<template>
  <form @submit.prevent="">
    <fieldset class="dvs-fieldset dvs-mb-4">
      <label>Page Title</label>
      <input
        v-model="newPage.title"
        type="text"
        placeholder="Title of the Page"
        class="dvs-w-full"
      >
    </fieldset>

    <fieldset class="dvs-fieldset dvs-mb-4">
      <label>Language</label>
      <select
        v-model="newPage.language_id"
        class="dvs-w-full"
      >
        <option :value="null">Please select a language</option>
        <option
          v-for="language in languages.data"
          :key="language.id"
          :value="language.id"
        >
          {{
            language.code }}
        </option>
      </select>
    </fieldset>

    <fieldset class="dvs-fieldset dvs-mb-4">
      <label>Slug</label>
      <div>
        <input
          v-model="newPage.slug"
          type="text"
          placeholder="Url of the Page"
          class="dvs-w-full"
        >
      </div>
    </fieldset>

    <fieldset class="dvs-fieldset dvs-mb-4">
      <label>Published?</label>
      <div class="dvs-flex">
        <input
          v-model="newPage.published"
          type="checkbox"
        >
      </div>
    </fieldset>

    <fieldset class="dvs-fieldset dvs-mb-4">
      <label>Go to page after creation?</label>
      <div class="dvs-flex">
        <input
          v-model="redirect"
          type="checkbox"
        >
      </div>
    </fieldset>

    <button
      class="dvs-btn dvs-btn-primary dvs-text-xs mr-4"
      :disabled="createInvalid"
      @click="requestCopyPage"
    >Create</button>
    <button
      class="dvs-btn dvs-btn-secondary dvs-text-xs "
      @click="cancel"
    >Cancel</button>
  </form>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'DevisePagesCopy',
  props: {
    values: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      redirect: true,
      newPage: {
        layout: '',
        language_id: null,
        translated_from_page_id: 0,
        title: null,
        slug: null,
        canonical: null,
        head: null,
        footer: null,
        middleware: 'web',
        published: true,
        copy_page_id: 0,
      },
    };
  },
  computed: {
    ...mapState('devise', ['languages']),
    createInvalid () {
      return (
        this.newPage.title === null ||
        this.newPage.language_id === null ||
        this.newPage.slug === null
      );
    },
    layouts () {
      return window.deviseSettings.$config.layouts;
    },
  },
  mounted () {
    this.loadLanguages()
  },
  methods: {
    ...mapActions('devise', ['createGeneric', 'getGeneric']),
    requestCopyPage () {
      this.newPage.copy_page_id = this.values.id
      this.createGeneric({
        config: {
          apiendpoint: 'pages',
          recordLabel: 'title'
        },
        record: this.newPage
      }).then(() => {
        if (this.redirect) {
          setTimeout(() => {
            window.location.href = this.newPage.slug
          }, 1000);
        } else {
          this.$emit('done')
        }
      });
    },
    loadLanguages () {
      this.getGeneric({
        config: {
          apiendpoint: 'languages',
          store: 'languages',
        }
      }).then(response => {
        if (response.data && response.data.data && response.data.data.length > 0) {
          this.newPage.language_id = response.data.data[0].id
        }
      })
    },
    cancel () {
      this.$emit('cancel')
    }
  },

};
</script>
