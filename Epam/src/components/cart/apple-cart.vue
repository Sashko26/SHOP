<template>
  <div class='apple-cart'>
    <router-link :to="{name: 'catalog'}">
      <div class="apple-catalog__link_to_cart">Back to Catalog</div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!cart_data.length">There are no products in cart...</p>
    <apple-cart-item
        v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
    />
    <div class="apple-cart__total">
      <p class="total__name">Total:</p>
      <p>{{cartTotalCost}}</p>
    </div>
  </div>
</template>

<script>
  import appleCartItem from './apple-cart-item'
  import {mapActions} from 'vuex'

  export default {
    name: "apple-cart",
    components: {
      appleCartItem
    },
    props: {
      cart_data: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {}
    },
   
    computed: {
      cartTotalCost() {
        let result = []

        if (this.cart_data.length) {
          for (let item of this.cart_data) {
            result.push(item.price * item.quantity)
          }

          result = result.reduce(function (sum, el) {
            return sum + el;
          })
          return result;
        } else {
          return 0
        }
      }
    },
    methods: {
      ...mapActions([
        'DELETE_FROM_CART',
        'INCREMENT_CART_ITEM',
        'DECREMENT_CART_ITEM'
      ]),
      increment(index) {
        this.INCREMENT_CART_ITEM(index)
      },
      decrement(index) {
        this.DECREMENT_CART_ITEM(index)
      },
      deleteFromCart(index) {
        this.DELETE_FROM_CART(index)
      }
    }
  }
</script>

<style lang="scss">
  .apple-cart {
    margin-bottom: 100px;
    &__total {
      display: flex;
      justify-content: center;
      background: $black-space-bg;
      color: #ffffff;
      font-size: 20px;
    }

    .total__name {
      margin-right: $margin*2;
    }
  }
</style>
