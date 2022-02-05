<!--
  - Copyright (c) 2020.
  - Author:  Belgacemi mohamed seddik
  - github:  http://github.com/seddik32
  - facebook: https://www.facebook.com/Qsd5k
  - email: sed75dik@gmail.com
  - Last modified: 4/16/20, 10:44 PM
  -->

<template>
  <section>
    <v-container>
      <v-card class="pa-4">
        <v-card-text>
          <v-layout>
            <h3>
              <b>المجموع</b
              >
              <v-chip class="white--text" color="blue">{{
                tickets.length
                }}
              </v-chip>
            </h3>
            <v-spacer/>
            <v-btn @click="dialog = true" class="white--text" color="blue">انشاء تذكرة جديدة
            </v-btn>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-container>
    <v-card class="mt-3">
      <v-card-title>
       تذاكر
        <v-spacer></v-spacer>
        <v-text-field
                :label="$t('search')"
                append-icon="mdi-magnify"
                hide-details
                single-line
                v-model="search"
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="tickets" :search="search">
        <template v-slot:item.status="{ item }">
          <v-chip :color="getStatusColor(item.status)" dark small>{{
            item.status
            }}
          </v-chip>
        </template>
        <template v-slot:item.priority="{ item }">
          <v-chip :color="getPriorityColor(item.priority)" dark small>{{
            item.priority
            }}
          </v-chip>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn @click="openCommentDialog(item.id)" color="blue" icon
          >
            <v-icon>mdi-comment-eye</v-icon>
          </v-btn
          >
        </template>
      </v-data-table>
    </v-card>
    <v-dialog
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            v-model="dialog"
    >
      <v-card>
        <v-toolbar color="blue" dark>
          <v-btn @click="dialog = false" dark icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>تذكرة جديدة</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn :disabled="!valid" @click="newTicket" dark text>{{
              $t('ارسال')
              }}
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-form v-model="valid">
            <v-text-field
                    :label="الموضوع"
                    :rules="[(v) => !!v || $t('validation.required')]"
                    v-model="fields.subject"
            />
            <v-select
                    :items="['high', 'medium', 'low']"
                    :label="$t('priority')"
                    :rules="[(v) => !!v || $t('validation.required')]"
                    v-model="fields.priority"
            />
            <v-textarea
                    :label="$t('الرسالة')"
                    :rules="[(v) => !!v || $t('validation.required')]"
                    v-model="fields.message"
            />
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
            v-model="commentDialog"
    >
      <v-card>
        <v-toolbar color="transparent" flat>
          <v-btn @click="commentDialog = false" icon>
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>{{ $t('ticket') }}</v-toolbar-title>
        </v-toolbar>
        <ticket :ticket-id="ticketId" v-if="commentDialog"/>
      </v-card>
    </v-dialog>
  </section>
</template>

<script>
  import Ticket from '../../components/ticket'

  export default {
    name: 'List',
    components: {Ticket},
    middleware: 'auth',
    data() {
      return {
        search: '',
        dialog: false,
        valid: false,
        commentDialog: false,
        headers: [
          {
            text: 'رقم',
            align: 'start',
            sortable: true,
            value: 'id'
          },
          {
            text: 'الموضوع',
            align: 'start',
            sortable: false,
            value: 'subject'
          },
          {text: 'الحالة', value: 'status'},
          {text: 'تاريخ', value: 'created_at'},
          {text: 'الاولوية', value: 'priority'},
          {text: 'الإجراءات', value: 'actions'}
        ],
        tickets: [],
        ticketId: null,
        fields: {
          subject: '',
          priority: '',
          message: '',
          attachments: ''
        }
      }
    },
    mounted() {
      this.$apollo
              .query({
                query: require('~/apollo/queries/myTickets')
              })
              .then((res) => {
                this.tickets = res.data.me.tickets
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
      newTicket() {
        const {subject, priority, message, attachments} = this.fields
        this.$apollo
                .mutate({
                  mutation: require('~/apollo/mutation/newTicket'),
                  variables: {
                    subject,
                    priority,
                    message,
                    attachments
                  }
                })
                .then((res) => {
                  this.tickets.push(res.data.newTicket)
                  this.dialog = false
                })
      },
      openCommentDialog(ticket_id) {
        this.ticketId = ticket_id
        this.commentDialog = true
      }
    }
  }
</script>

<style scoped></style>
