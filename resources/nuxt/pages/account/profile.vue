<template>
  <section>
    <v-container fluid>
      <v-row>
        <v-col cols="12" lg="4">
          <v-card>
            <v-list-item>
              <v-list-item-avatar size="70" tile>
                <v-img :alt="user.name" :src="user.avatar" v-if="/(https?:\/\/[^\s]+)/.test(user.avatar)"/>
                <v-img :alt="user.name" :src="'/storage/' + user.avatar" v-else/>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ user.name }}
                  <v-icon color="cyan" v-if="user.verified">mdi-check-decagram</v-icon>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <v-card class="mt-4">
            <v-card-text>
              <v-list>
                <v-list-item :to="link.link" nuxt v-for="link in links">
                  <v-list-item-icon>
                    <v-icon>mdi-{{ link.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>{{ $t(link.name) }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" lg="8">
          <v-card>
            <v-list v-if="products">
              <v-list-item class="mt" selectable v-for="product in products">
                <v-list-item-avatar color="cyan" size="70" tile>
                  <img :src="'/storage/' + JSON.parse(product.images)[0]">
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ product.name }}</v-list-item-title>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn color="cyan" @click="openEditDialog(product.id)" icon small>
                    <v-icon>mdi-circle-edit-outline</v-icon>
                  </v-btn>
                  <v-btn @click="openDeleteDialog(product.id)" color="red" icon small>
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
      <v-dialog max-width="290" persistent v-model="deleteDialog">
        <v-card>
          <v-card-title class="headline">Are you sure you want to delete it</v-card-title>
          <v-card-text>if you delete it you can't restore it and you lose all your bids</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="deleteDialog = false" color="cyan darken-1" text>cancel</v-btn>
            <v-btn @click="deleteProduct" color="red darken-1" text>Delete</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="editDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card>
          <v-toolbar dark color="primary">
            <v-toolbar-title>{{ $t('edit_product') }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon dark @click="editDialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <edit-product v-if="editDialog" :product-id="productId"/>
        </v-card>
      </v-dialog>
    </v-container>
  </section>
</template>

<script>
  import EditProduct from "../../components/editProduct";
  export default {
    name: "profile",
    components: {EditProduct},
    middleware: "auth",
    data() {
      return {
        links: [
          {
            link: "/setting",
            icon: "settings",
            name: "setting",
          },
          {
            link: "/products/new",
            icon: "format-list-text",
            name: "new_product",
          },
        ],
        productId: null,
        deleteDialog: false,
        editDialog: false,
        products: [],
      }
    },
    computed: {

      auth() {
        return this.$auth.loggedIn
      },
      user() {
        return this.$auth.user
      }

    },
    mounted() {
      this.$apollo.query({
        query: require('~/apollo/queries/me'),
      }).then(res => {
        if(res.data.me.products)
        {
          this.products = res.data.me.products
        }
      })
    },
    methods: {
      openDeleteDialog(product_id) {
        this.productId = product_id;
        this.deleteDialog = true;
      },
      openEditDialog(product_id)
      {
        this.productId = product_id;
        this.editDialog = true;
      },
      deleteProduct() {
        const id = this.productId;
        this.$apollo.mutate({
          mutation: require('~/apollo/mutation/deleteProduct'),
          variables: {
            id
          }
        }).then(res => {
          if (res.data.deleteProduct === true) {
            this.products.map((item,key) => {
              if(item.id === id)
              {
                this.products.splice(key,1);
                this.productId = null;
                this.deleteDialog = false;
              }
            })
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
