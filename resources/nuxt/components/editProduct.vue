<template>
  <v-card>
    <v-snackbar
      v-model="message.activate"
      :color="message.color"
    >
      {{ message.text }}
      <v-btn
        color="white"
        text
        @click="message.activate = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <v-card-title>{{ $t('edit_product') }}</v-card-title>
    <v-card-text>
      <v-autocomplete
        :items="categories"
        readonly
        disabled
        :loading="$apollo.loading"
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
          disabled
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

      <v-file-input accept="image/*" counter
                    :label="$t('images')" multiple show-size v-model="fields.images"/>
      <v-divider />
      <v-layout>
        <v-avatar v-for="img in images" tile size="150" class="ma-3">
          <v-img :src="'/storage/' + img">
            <v-overlay absolute>
              <v-btn icon color="white" @click="deleteImage(img)"><v-icon>mdi-delete</v-icon></v-btn>
            </v-overlay>
          </v-img>
        </v-avatar>
      </v-layout>
      <v-divider />
      <v-radio-group disabled :rules="[ (v) => !!v || $t('validation.required')]" v-model="fields.status">
        <v-radio :label="$t('product.new')" value="new"/>
        <v-radio :label="$t('product.used')" value="used"/>
      </v-radio-group>
      <small class="overline" v-if="detail">{{ $t('detail') }}</small>
      <v-text-field :label="item" v-for="item in detail" v-model="features[item]"/>
      <v-date-picker :min="today" full-width v-model="fields.close_time"></v-date-picker>
    </v-card-text>
    <v-card-actions>
      <v-spacer/>
      <v-btn @click="save" class="white--text" color="blue">{{ $t('save') }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: "editProduct",
    props: ['productId'],
    middleware: 'auth',
    apollo: {
      categories: {
        query: require('~/apollo/queries/categories'),
        prefetch: true,
      }
    },
    data() {
      return {
        features: {},
        detail: [],
        fields: {
          category: null,
          name: null,
          description: null,
          price: null,
          images: [],
          min_increment: null,
          status: 'new',
          close_time: null,
        },
        images:[],
        message: {
          activate: false,
          text: '',
        }
      }
    },
    computed: {
      today()
      {
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
    mounted() {
      const id = this.productId;
      this.$apollo.query({
        query: require('~/apollo/queries/product'),
        variables: {
          id
        }
      }).then(res => {
        this.fields = res.data.product;
        this.images = JSON.parse(res.data.product.images);
        this.fields.images = null;
        this.features = JSON.parse(this.fields.features);
        this.fields.close_time = this.convertDate(this.fields.close_time);
        this.getDetails();
      })
    },
    methods:{
      getDetails() {
        this.categories.map(item => {
          if(item.id === this.fields.category.id)
          {
            if(item.details)
            {
              this.detail = item.details.details.split(",");
            }else {
              this.detail = [];
            }
          }
        });
      },
      deleteImage(img)
      {
        const image = img;
        const id = this.fields.id;
        if(this.images.length > 1)
        {
          this.$apollo.mutate({
            mutation: require('~/apollo/mutation/deleteProductImage'),
            variables: {
              image,
              id
            }
          }).then(res => {
            if(res.data.deleteProductImage === true)
            {
              this.images.map((item , key) => {
                if(item === image)
                {
                  this.images.splice(key,1);
                }
              })
            }
          })
        }
        else {
          this.message = {
            activate: true,
            color: 'warning',
            text: 'you should have one image at least',
          }
        }
      },
      save()
      {
        const { id, name, description,images,price,min_increment,status , close_time } = this.fields;
        const features = JSON.stringify(this.features);
        this.$apollo.mutate({
          mutation: require('~/apollo/mutation/updateProduct'),
          variables: {
             id ,name, description,images,price,min_increment,status , close_time , features
          }
        }).then(res => {
          if(res.data.updateProduct)
          {
            this.message = {
              activate: true,
              color: 'success',
              text: 'you should have one image at least',
            }
          }
        })
      },
      convertDate(d)
      {
        let today = new Date(d);
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
    }
  }
</script>

<style scoped>

</style>
