<template>
  <div class='apple-catalog-item'>

    <apple-popup
        v-if="isInfoPopupVisible"
        rightBtnTitle="Add to cart"
        :popupTitle="product_data.name"
        @closePopup="closeInfoPopup"
        @rightBtnAction="addToCart"
    >
      <img class="apple-catalog-item__image" :src=" require('../../assets/images/' + product_data.image) " alt="img">
      <div>
        <p class="apple-catalog-item__name">{{product_data.name}}</p>
        <p class="apple-catalog-item__price">Price: {{product_data.price}} $</p>
        <p class="apple-catalog-item__price">{{product_data.category}}</p>
      </div>
    </apple-popup>


    <img class="apple-catalog-item__image" :src=" require('../../assets/images/' + product_data.image) " alt="img">
    <p class="apple-catalog-item__name">{{product_data.name}}</p>
    <p class="apple-catalog-item__price">Price: {{product_data.price}}</p>
    <button
        class="apple-catalog-item__show-info"
        @click="showPopupInfo"
    >
      Show info
    </button>
    <br>
    <button
        class="apple-catalog-item__add_to_cart_btn btn"
        @click="addToCart"
    >Add to cart
    </button>
  </div>
</template>

<script>
  import applePopup from '../popup/apple-popup'


  export default {
    name: "apple-catalog-item",
    components: {
      applePopup
    },
    props: {
      product_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
       
        isInfoPopupVisible: false
      }
    },
    computed: {},
    methods: {
      showPopupInfo() {
        this.isInfoPopupVisible = true;
      },
      closeInfoPopup() {
        this.isInfoPopupVisible = false;
      },
      addToCart() {
        this.$emit('addToCart', this.product_data);
      }
    },
    mounted() {
      this.$set(this.product_data, 'quantity', 1)
    }
  }
</script>

<style lang="scss">
  .apple-catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: $padding*2;
    margin-bottom: $margin*2;

    &__image {
      width: 100px;
      height:200px;
    }
  }
</style>
