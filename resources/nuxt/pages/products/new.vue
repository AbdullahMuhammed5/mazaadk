<template>
  <section>
    <v-container>
      <v-layout>
        <v-breadcrumbs :items="breadcrumbs" nuxt>
          <template v-slot:divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>
        <v-spacer/>
        <v-btn color="cyan" text>{{ $t('my_products') }}</v-btn>
      </v-layout>
      <v-card>
        <v-card-title>{{ $t('new_product') }}</v-card-title>
        <v-card-text>
          <v-autocomplete
            :items="categories"
            :loading="$apollo.loading"
            :rules="[ (v) => !!v || $t('validation.required')]"
            @input="getDetails"
            item-text="name"
            item-value="id"
            :label="$t('category')"
            v-model="fields.category"
          />
          <v-text-field
            :rules="[ (v) => !!v || $t('validation.required')]"
            :label="$t('product.name')"
            v-model="fields.name"
          />
          <v-textarea
            :rules="[ (v) => !!v || $t('validation.required')]"
            :label="$t('description')"
            v-model="fields.description"
          />
          <v-layout>
            <v-text-field
              :rules="[ (v) => !!v || $t('validation.required')]"
              class="mr-1 ml-1"
              :label="$t('price')"
              type="number"
              v-model="fields.price"
            />
            <v-text-field
              :rules="[ (v) => !!v || $t('validation.required')]"
              class="mr-1 ml-1"
              :label="$t('min_increment')"
              type="number"
              v-model="fields.min_increment"
            />
          </v-layout>

          <v-file-input :rules="[ (v) => !!v || $t('validation.required')]" accept="image/*" counter
                        :label="$t('images')" multiple show-size v-model="fields.images"/>

          <v-radio-group :rules="[ (v) => !!v || $t('validation.required')]" v-model="fields.status">
            <v-radio :label="$t('product.new')" value="new"/>
            <v-radio :label="$t('product.used')" value="used"/>
          </v-radio-group>
          <small class="overline" v-if="detail">{{ $t('detail') }}</small>
          <v-text-field :label="item" v-for="item in detail" disabled v-model="features[item]"/>
          <v-date-picker :min="today" full-width v-model="fields.close_time"></v-date-picker>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn color="red" text>{{ $t('close') }}</v-btn>
          <v-btn @click="newProduct" class="white--text" color="cyan">{{ $t('create') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </section>
</template>

<script>

  export default {
    name: "new",
    middleware: "auth",
    apollo: {
      categories: {
        query: require('~/apollo/queries/categories'),
      }
    },
    computed: {
      today() {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!

        let yyyy = today.getFullYear();
        if (dd < 10) {
          dd = '0' + dd;
        }
        if (mm < 10) {
          mm = '0' + mm;
        }
        return yyyy + '-' + mm + '-' + dd;
      }
    },
    data() {
      return {
        breadcrumbs: [
          {
            text: 'Dashboard',
            disabled: false,
            to: '/home',
          },
          {
            text: 'Products',
            to: '/products',
          },
          {
            text: 'new',
            to: '/products/new',
          },
        ],
        features: {},
        detail: [],
        fields: {
          category: null,
          name: null,
          description: null,
          price: null,
          images: [],
          min_increment: null,
          status: 'new',
          close_time: null,
        }
      }
    },
    methods: {
      getDetails() {
        this.categories.map(item => {
          if (item.id === this.fields.category) {
            if (item.details) {
              this.detail = item.details.details.split(",");
              this.detail.map(item => {
                this.features[item] = null;
              })
            } else {
              this.detail = [];
              this.features = {};
            }

          }
        });
      },
      newProduct() {
        const {category, name, description, images, price, min_increment, status, close_time} = this.fields;
        const features = JSON.stringify(this.features);
        this.$apollo.mutate({
          mutation: require('~/apollo/mutation/newProduct'),
          variables: {
            category, name, description, images, price, min_increment, status, close_time, features
          }
        }).then(res => {
          this.$router.push('/account/profile');
        })
      },
    }
  }
</script>

<style scoped>

</style>
