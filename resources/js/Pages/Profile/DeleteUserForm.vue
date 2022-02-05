<template>
  <jet-action-section>
    <template #title>
        حذف الحساب
    </template>

    <template #description>
        احذف حسابك بشكل دائم.
    </template>

    <template #content>
      <div>
          بمجرد حذف حسابك ، سيتم حذف جميع موارده وبياناته نهائيًا. قبل حذف حسابك ، يرجى تنزيل أي بيانات أو معلومات ترغب في الاحتفاظ بها.
      </div>

      <div class="mt-3">
        <jet-danger-button @click="confirmUserDeletion">
            حذف الحساب
        </jet-danger-button>
      </div>

      <!-- Delete Account Confirmation Modal -->
      <jet-dialog-modal id="confirmingUserDeletionModal">
        <template #title>
            حذف الحساب
        </template>

        <template #content>
            هل انت متأكد انك تريد حذف حسابك؟ بمجرد حذف حسابك ، سيتم حذف جميع موارده وبياناته نهائيًا. الرجاء إدخال كلمة المرور الخاصة بك لتأكيد رغبتك في حذف حسابك بشكل دائم.
          <div class="mt-4">
            <jet-input type="password" placeholder="Password"
                       ref="password"
                       v-model="form.password"
                       :class="{ 'is-invalid': form.errors.password }"
                       @keyup.enter="deleteUser" />

            <jet-input-error :message="form.errors.password" />
          </div>
        </template>

        <template #footer>
          <jet-secondary-button data-dismiss="modal" @click="closeModal">
              إلغاء
          </jet-secondary-button>

          <jet-danger-button @click="deleteUser" :class="{ 'text-white-50': form.processing }" :disabled="form.processing">
              حذف الحساب
          </jet-danger-button>
        </template>
      </jet-dialog-modal>
    </template>
  </jet-action-section>
</template>

<script>
import JetActionSection from '@/Jetstream/ActionSection'
import JetDialogModal from '@/Jetstream/DialogModal'
import JetDangerButton from '@/Jetstream/DangerButton'
import JetInput from '@/Jetstream/Input'
import JetInputError from '@/Jetstream/InputError'
import JetSecondaryButton from '@/Jetstream/SecondaryButton'

export default {
  components: {
    JetActionSection,
    JetDangerButton,
    JetDialogModal,
    JetInput,
    JetInputError,
    JetSecondaryButton,
  },

  data() {
    return {
      bootstrap: null,
      form: this.$inertia.form({
        password: '',
      })
    }
  },

  methods: {
    confirmUserDeletion() {
      this.form.password = '';

      this.bootstrap = $('#confirmingUserDeletionModal')
      this.bootstrap.modal('toggle')

      setTimeout(() => this.$refs.password.focus(), 250)
    },

    deleteUser() {
      this.form.delete(route('current-user.destroy'), {
        preserveScroll: true,
        onSuccess: () => this.closeModal(),
        onError: () => this.$refs.password.focus(),
        onFinish: () => this.form.reset(),
      })
    },

    closeModal() {
      this.form.reset()

      this.bootstrap.modal('toggle')
    },
  },
}
</script>
