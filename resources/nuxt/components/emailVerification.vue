<template>
  <div>
    <v-btn v-if="!me.email_verified_at" @click="emailVerification = true" color="orange accent-4" text>Verify</v-btn>
    <v-dialog v-model="emailVerification">
      <v-card :loading="loading">
        <v-stepper v-model="e6" vertical>
          <v-stepper-step :complete="e6 > 1" step="1">
            ارسال رمز التحقق
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-card height="200px">
              <v-overlay absolute color="white">
                <v-layout class="black--text mb-2">
                  <v-spacer/>
                   {{ me.email }}
                  <v-spacer/>
                </v-layout>
                <v-btn :loading="loading" @click="sendVerificationCode" color="orange">تحقق</v-btn>
                <v-btn color="orange" nuxt text to="/setting/">تغيير الايميل</v-btn>
              </v-overlay>
            </v-card>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 2" step="2">تأكيد البريد الالكتروني</v-stepper-step>

          <v-stepper-content step="2">
            <v-card>
              <v-card-text>
                <v-text-field color="blue" dense label="verification code" outlined type="number" v-model="code"/>
              </v-card-text>
              <v-card-actions>
                <v-spacer/>
                <v-btn @click="verificationCode" class="white--text" color="orange">تأكيد</v-btn>
              </v-card-actions>
            </v-card>
          </v-stepper-content>
        </v-stepper>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

  export default {
    name: "emailVerification",
    data() {
      return {
        e6: 1,
        steps: 2,
        code: null,
        emailVerification: false,
        loading: false,
      }
    },
    computed:
      {
        me() {
          return this.$auth.user
        }
      },
    methods: {
      sendVerificationCode() {
        this.loading = true;
        this.$apollo.mutate({
          mutation: require('~/apollo/mutation/sendEmailVerification.gql')
        }).then(res => {
          console.log(res);
          this.e6 = 2;
        })
          .catch(e => {
            console.log(e)
          })
          .finally(() => {
            this.loading = false;
          });
      },
      verificationCode() {
        this.loading = true;
        const code = this.code;
        this.$apollo.mutate({
          mutation: require('~/apollo/mutation/verifyEmail.gql'),
          variables: {
            code
          }
        }).then(res => {
          console.log(res);
          this.$auth.setUser(res.data.EmailVerification);
          this.emailVerification = false;
        })
          .catch(e => {
            console.log(e);
          })
          .finally(() => {
            this.loading = false;
          })
      }
    },
  }
</script>

<style scoped>

</style>
