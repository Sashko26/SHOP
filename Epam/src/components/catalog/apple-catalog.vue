<template>
  <div class='apple-catalog'>
  <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="apple-catalog__link_to_cart">Cart: {{CART.length}}</div>
    </router-link>
    <h1>Catalog</h1>
    <div class="filters">
      <apple-select
          :selected="selected"
          :options="categories"
          @select="sortByCategories"
      />
    </div>
    <div class="apple-catalog__list">
      <apple-catalog-item
          v-for="product in filteredProducts"
          :key="product.article"
          :product_data="product"
          @addToCart="addToCart"
      />
    </div>
  </div>
 
</template>

<script>
  import appleCatalogItem from './apple-catalog-item'
  import {mapActions, mapGetters} from 'vuex'
  import appleSelect from '../apple-select'


  export default {
    name: "apple-catalog",
    components: {
      appleCatalogItem,
      appleSelect,

    },
    props: {},
    data() {
      return {
         currentPage:1,
        categories: [
          {name: 'All', value: 'A'},
          {name: 'Iphone', value: 'I'},
          {name: 'Ipod', value: 'P'},
        ],
        selected: 'All',
        sortedProducts: [],
        messages: []
      }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'CART',
        'SEARCH_VALUE'
      ]),
      filteredProducts() {
        if (this.sortedProducts.length) {
          return this.sortedProducts
        } else {
          return this.PRODUCTS
        }
      },
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
      ]),
      

      sortByCategories(category) {
          let vm = this;
          this.sortedProducts = this.PRODUCTS;
          if (category) { 
          this.sortedProducts = this.sortedProducts.filter(function (e) {
              vm.selected === category.name;
              return e.category === category.name
          })
           this.selected = category.name;
        }
        else{
            this.sortedProducts = this.sortedProducts.filter(function (e) {
            vm.selected === category.name;
            return e.category === category.name;

            
           
          })
        }
      },
      addToCart(data) {
        this.ADD_TO_CART(data)
          .then(() => {
            let timeStamp = Date.now().toLocaleString();
            this.messages.unshift(
              {name: 'Products added to your cart', icon: 'check_circle', id: timeStamp}
            )
          })
      },
      sortProductsBySearchValue(value) {
        this.sortedProducts = [...this.PRODUCTS]
        if (value) {
          this.sortedProducts = this.sortedProducts.filter(function (item) {
            return item.name.toLowerCase().includes(value.toLowerCase())
          })
        } else {
          this.sortedProducts = this.PRODUCTS;
        }
      }
    },
    watch: {
      SEARCH_VALUE() {
        this.sortProductsBySearchValue(this.SEARCH_VALUE);
      }
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API()
        .then((response) => {
          if (response.data) {
            this.sortByCategories()
            this.sortProductsBySearchValue(this.SEARCH_VALUE)
          }
        })
    }
  }
</script>

<style lang="scss">
  .apple-catalog {
    &__list {
      display: flex;     
      justify-content: space-between;
      align-items: center;
    }

    &__link_to_cart {
      position: fixed;
      top: 80px;
      right: 10px;
      padding: $padding*2;
      border: solid 1px #aeaeae;
      background: #ffffff;
    }
  }

  .filters {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
