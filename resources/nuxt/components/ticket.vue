<template>
  <div>
    <v-card-text class="pa-2">
      <div class="mt-5 mb-5">
        <h3 class="mt-2 mb-2">الموضوع: {{ ticket.subject }}</h3>
        <h3 class="mt-2 mb-2">
          الاهمية:
          <v-chip :color="getPriorityColor(ticket.priority)" dark small>{{
            $t(ticket.priority)
            }}
          </v-chip>
        </h3>
        <h3 class="mt-2 mb-2">
          الحالة:
          <v-chip :color="getStatusColor(ticket.status)" dark small>{{
            $t(ticket.status)
            }}
          </v-chip>
        </h3>
      </div>
      <p class="text-center">
        {{ ticket.message }}
      </p>
      <div class="messages" style="padding-bottom: 100px">
        <div v-for="comment in comments">
          <div
                  class="message mb-2 mt-2 blue white--text pa-2 elevation-6 ml-auto"
                  style="width: fit-content"
                  v-if="comment.user_id == $auth.user.id"
          >
            {{ comment.content }}
          </div>
          <div
                  class="message mb-2 mt-2 mr-auto purple white--text pa-2 elevation-6"
                  style="width: fit-content"
                  v-else
          >
            {{ comment.content }}
          </div>
        </div>
      </div>
    </v-card-text>
    <v-card height="100px" class="pa-2" width="100%" style="position: fixed;bottom: 0px;">
      <v-form v-model="valid">
        <v-text-field
                :rules="[(v) => !!v || $t('validation.required')]"
                v-model="comment"
        >
          <v-btn
                  :disabled="!valid"
                  @click="newComment"
                  color="blue"
                  icon
                  slot="append"
          >
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </v-text-field>
      </v-form>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'Ticket',
    props: ['ticketId'],
    data() {
      return {
        valid: false,
        sendCommentDialog: false,
        comment: '',
        comments: [],
        ticket: {}
      }
    },
    mounted() {
      const ticket_id = this.ticketId
      this.$apollo
              .query({
                query: require('~/apollo/queries/ticketComments'),
                variables: {
                  ticket_id
                }
              })
              .then((res) => {
                this.comments = res.data.ticketComments.comments
                this.ticket = res.data.ticketComments
                this.$echo
                        .channel('ticket.' + ticket_id)
                        .listen('Ticket', (e) => {
                          console.log(e);
                          this.comments.push(e.comment)
                        })
              })
    },
    methods: {
      getStatusColor(status) {
        if (status === 'open') {
          return 'green'
        } else if (status === 'pending') {
          return 'orange'
        } else {
          return 'red'
        }
      },
      getPriorityColor(priority) {
        if (priority === 'high') {
          return 'red'
        } else if (priority === 'medium') {
          return 'orange'
        } else {
          return 'green'
        }
      },
      newComment() {
        const ticket_id = this.ticketId
        const comment = this.comment
        const attachments = []
        this.$apollo
                .mutate({
                  mutation: require('~/apollo/mutation/newComment'),
                  variables: {
                    ticket_id,
                    comment,
                    attachments
                  }
                })
                .then((res) => {
                  //this.comments.push(res.data.newComment)
                  this.comment = '';
                  this.sendCommentDialog = false
                })
      }
    }
  }
</script>

<style scoped>
  .message {
    border-radius: 10px;
  }
</style>
