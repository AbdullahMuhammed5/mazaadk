<template>
  <jet-action-section class="text-right">
    <template #title>
        المصادقة الثنائية
    </template>

    <template #description>
        أضف أمانًا إضافيًا إلى حسابك باستخدام المصادقة الثنائية.
    </template>

    <template #content>
      <h3 class="h5 font-weight-bold" v-if="twoFactorEnabled">
          لقد قمت بتمكين المصادقة الثنائية.
      </h3>

      <h3 class="h5 font-weight-bold" v-else>
          لم تقم بتمكين المصادقة الثنائية.
      </h3>

      <div class="mt-3">
        <p>
            عند تمكين المصادقة الثنائية ، ستتم مطالبتك برمز مميز آمن وعشوائي أثناء المصادقة. يمكنك استرداد هذا الرمز المميز من تطبيق Google Authenticator بهاتفك.
        </p>
      </div>

      <div v-if="twoFactorEnabled">
        <div v-if="qrCode">
          <div class="mt-3">
            <p>
                تم تمكين المصادقة الثنائية الآن. امسح رمز الاستجابة السريعة التالي ضوئيًا باستخدام تطبيق المصادقة بهاتفك.
            </p>
          </div>

          <div class="mt-3" v-html="qrCode">
          </div>
        </div>

        <div v-if="recoveryCodes.length > 0">
          <div class="mt-3">
            <p>
                قم بتخزين رموز الاسترداد هذه في مدير كلمات مرور آمن. يمكن استخدامها لاستعادة الوصول إلى حسابك في حالة فقد جهاز المصادقة الثنائية الخاص بك.
            </p>
          </div>

          <div class="w-75 bg-light rounded p-3">
            <div v-for="code in recoveryCodes">
              {{ code }}
            </div>
          </div>
        </div>
      </div>

      <div class="mt-3">
        <div v-if="! twoFactorEnabled">
          <jet-confirms-password @confirmed="enableTwoFactorAuthentication">
            <jet-button type="button" :class="{ 'text-white-50': enabling }" :disabled="enabling">
              تمكين
            </jet-button>
          </jet-confirms-password>
        </div>

        <div v-else>
          <jet-confirms-password @confirmed="regenerateRecoveryCodes">
            <jet-secondary-button class="mr-3"
                                  v-if="recoveryCodes.length > 0">
                إعادة إنشاء رموز الاسترداد
            </jet-secondary-button>
          </jet-confirms-password>

          <jet-confirms-password @confirmed="showRecoveryCodes">
            <jet-secondary-button class="mr-3" v-if="recoveryCodes.length == 0">
                إظهار رموز الاسترداد
            </jet-secondary-button>
          </jet-confirms-password>

          <jet-confirms-password @confirmed="disableTwoFactorAuthentication">
            <jet-danger-button
                :class="{ 'text-white-50': disabling }"
                :disabled="disabling">
                تعطيل
            </jet-danger-button>
          </jet-confirms-password>
        </div>
      </div>
    </template>
  </jet-action-section>
</template>

<script>
import JetActionSection from '@/Jetstream/ActionSection'
import JetButton from '@/Jetstream/Button'
import JetConfirmsPassword from '@/Jetstream/ConfirmsPassword'
import JetDangerButton from '@/Jetstream/DangerButton'
import JetSecondaryButton from '@/Jetstream/SecondaryButton'

export default {
  components: {
    JetActionSection,
    JetButton,
    JetConfirmsPassword,
    JetDangerButton,
    JetSecondaryButton,
  },

  data() {
    return {
      enabling: false,
      disabling: false,

      qrCode: null,
      recoveryCodes: [],
    }
  },

  methods: {
    enableTwoFactorAuthentication() {
      this.enabling = true

      this.$inertia.post('/user/two-factor-authentication', {}, {
        preserveScroll: true,
        onSuccess: () => Promise.all([
          this.showQrCode(),
          this.showRecoveryCodes(),
        ]),
        onFinish: () => (this.enabling = false),
      })
    },

    showQrCode() {
      return axios.get('/user/two-factor-qr-code')
          .then(response => {
            this.qrCode = response.data.svg
          })
    },

    showRecoveryCodes() {
      return axios.get('/user/two-factor-recovery-codes')
          .then(response => {
            this.recoveryCodes = response.data
          })
    },

    regenerateRecoveryCodes() {
      axios.post('/user/two-factor-recovery-codes')
          .then(response => {
            this.showRecoveryCodes()
          })
    },

    disableTwoFactorAuthentication() {
      this.disabling = true

      this.$inertia.delete('/user/two-factor-authentication', {
        preserveScroll: true,
        onSuccess: () => (this.disabling = false),
      })
    },
  },

  computed: {
    twoFactorEnabled() {
      return ! this.enabling && this.$page.props.user.two_factor_enabled
    }
  }
}
</script>
