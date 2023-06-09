<template>
  <div id="app">

  <!-- Header -->
  <header class="container">
    <h1>Shopping Cart</h1>
    <ul class="breadcrumb">
      <li>Home</li>
      <li>Shopping Cart</li>
    </ul>
    <span class="count">{{ itemCount }} items in the bag</span>
  </header>
  <!-- End Header -->

  <!-- Product List -->
  <section class="container">
    <div v-if="products.length > 0">
      <ul class="products">
      <li class="row" v-for="(product, index) in products" :key="product">
        <div class="col left">
          <div class="thumbnail">
            <a href="#">
              <img :src="product.image" :alt="product.name" />
            </a>
          </div>
          <div class="detail">
            <div class="name"><a href="#">{{ product.name }}</a></div>
            <div class="description">{{ product.description }}</div>
            <div class="price">{{ product.price | currencyFormatted }}</div>
          </div>
        </div>

        <div class="col right">
          <div class="quantity">
            <input type="number" class="quantity" step="1" :value="product.quantity" @input="updateQuantity(index, $event)" @blur="checkQuantity(index, $event)" />
          </div>
          
          <div class="remove">
            <svg @click="removeItem(index)" version="1.1" class="close" xmlns="//www.w3.org/2000/svg" xmlns:xlink="//www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve"><polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812"></polygon></svg>
          </div>
        </div>
      </li>
    </ul>
    </div>
    <div v-else class="empty-product">
      <h3>There are no products in your cart.</h3>
      <button>Shopping now</button>
    </div>
  </section>
  <!-- End Product List -->
  
  <!-- Summary -->
  <section class="container" v-if="products.length > 0">
    <div class="promotion">
      <label for="promo-code">Have A Promo Code?</label>
      <input type="text" id="promo-code" v-model="promoCode" /> <button type="button" @click="checkPromoCode"></button>
    </div>

    <div class="summary">
      <ul>
        <li>Subtotal <span>{{ subTotal | currencyFormatted }}</span></li>
        <li v-if="discount > 0">Discount <span>{{ discountPrice | currencyFormatted }}</span></li>
        <li>Tax <span>{{ tax | currencyFormatted }}</span></li>
        <li class="total">Total <span>{{ totalPrice | currencyFormatted }}</span></li>
      </ul>
    </div>

    <div class="checkout">
      <button type="button">Check Out</button>
    </div>
  </section>
  <!-- End Summary -->
</div>
</template>

<script>
export default {
    name: "Cart",
    data: {
        products: [
        {
            image: "https://via.placeholder.com/200x150",
            name: "PRODUCT ITEM NUMBER 1",
            description: "Description for product item number 1",
            price: 5.99,
            quantity: 2
        },
        {
            image: "https://via.placeholder.com/200x150",
            name: "PRODUCT ITEM NUMBER 2",
            description: "Description for product item number 1",
            price: 9.99,
            quantity: 1
        }
        ],
        tax: 5,
        promotions: [
        {
            code: "SUMMER",
            discount: "50%"
        },
        {
            code: "AUTUMN",
            discount: "40%"
        },
        {
            code: "WINTER",
            discount: "30%"
        }
        ],
        promoCode: "",
        discount: 0
  },
  computed: {
    itemCount: function() {
      var count = 0;

      for (var i = 0; i < this.products.length; i++) {
        count += parseInt(this.products[i].quantity) || 0;
      }

      return count;
    },
    subTotal: function() {
      var subTotal = 0;

      for (var i = 0; i < this.products.length; i++) {
        subTotal += this.products[i].quantity * this.products[i].price;
      }

      return subTotal;
    },
    discountPrice: function() {
      return this.subTotal * this.discount / 100;
    },
    totalPrice: function() {
      return this.subTotal - this.discountPrice + this.tax;
    }
  },
  filters: {
    currencyFormatted: function(value) {
      return Number(value).toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
      });
    }
  },
  methods: {
    updateQuantity: function(index, event) {
      var product = this.products[index];
      var value = event.target.value;
      var valueInt = parseInt(value);

      // Minimum quantity is 1, maximum quantity is 100, can left blank to input easily
      if (value === "") {
        product.quantity = value;
      } else if (valueInt > 0 && valueInt < 100) {
        product.quantity = valueInt;
      }

      this.$set(this.products, index, product);
    },
    checkQuantity: function(index, event) {
      // Update quantity to 1 if it is empty
      if (event.target.value === "") {
        var product = this.products[index];
        product.quantity = 1;
        this.$set(this.products, index, product);
      }
    },
    removeItem: function(index) {
      this.products.splice(index, 1);
    },
    checkPromoCode: function() {
      for (var i = 0; i < this.promotions.length; i++) {
        if (this.promoCode === this.promotions[i].code) {
          this.discount = parseFloat(
            this.promotions[i].discount.replace("%", "")
          ); 
          return;
        }
      }

      alert("Sorry, the Promotional code you entered is not valid!");
    }
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  font-size: 12px;
}

body {
  margin: 20px 0;
  padding: 0;
  font-family: arial, sans-serif;
  overflow: scroll;
}

img {
  max-width: 100%;
  vertical-align: middle;
  border-radius: 4px;
}

a {
  text-decoration: none;
  color: #333333;
}

a:hover {
  color: #f58551;
}

button {
  background-color: #16cc9b;
  border: 2px solid #16cc9b;
  color: #ffffff;
  transition: all 0.25s linear;
  cursor: pointer;
}

button::after {
  position: relative;
  right: 0;
  content: " \276f";
  transition: all 0.15s linear;
}

button:hover {
  background-color: #f58551;
  border-color: #f58551;
}

button:hover::after {
  right: -5px;
}

button:focus {
  outline: none;
}

ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

input {
  transition: all 0.25s linear;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}

input {
  outline: none;
}

.container {
  width: 90%;
  margin: 0 auto;
  overflow: auto;
}

/* --- HEADER --- */
header.container {
  margin-bottom: 1.5rem;
}

header .breadcrumb {
  color: #7d7d7d;
}

header .breadcrumb li {
  float: left;
  padding: 0 6px;
  height: 20px;
  line-height: 20px;
}

header .breadcrumb li:first-child {
  padding-left: 2px;
}

header .breadcrumb li:not(:last-child)::after {
  content: " \276f";
  padding-left: 8px;
}

header .count {
  float: right;
  color: #333333;
  height: 20px;
  line-height: 20px;
}

/* --- PRODUCT LIST --- */
.products {
  border-top: 1px solid #ddd;
}

.products > li {
  padding: 1rem 0;
  border-bottom: 1px solid #ddd;
}

.row {
  position: relative;
  overflow: auto;
  width: 100%;
}

.col,
.quantity,
.remove {
  float: left;
}

.col.left {
  width: 70%;
}

.col.right {
  width: 30%;
  position: absolute;
  right: 0;
  top: calc(50% - 30px);
}

.detail {
  padding: 0 0.5rem;
  line-height: 2.2rem;
}

.detail .name {
  font-size: 1.2rem;
}

.detail .description {
  color: #7d7d7d;
  font-size: 1rem;
}

.detail .price {
  font-size: 1.5rem;
}

.quantity,
.remove {
  width: 50%;
  text-align: center;
}

.remove svg {
  width: 60px;
  height: 60px;
}

.quantity > input {
  display: inline-block;
  width: 60px;
  height: 60px;
  position: relative;
  left: calc(50% - 30px);
  background: #fff;
  border: 2px solid #ddd;
  color: #7f7f7f;
  text-align: center;
  font: 600 1.5rem Helvetica, Arial, sans-serif;
}

.quantity > input:hover,
.quantity > input:focus {
  border-color: #f58551;
}

.close {
  fill: #7d7d7d;
  transition: color 150ms linear, background-color 150ms linear,
    fill 150ms linear, 150ms opacity linear;
  cursor: pointer;
}

.close:hover {
  fill: #f58551;
}

/* --- SUMMARY --- */
.promotion,
.summary,
.checkout {
  float: left;
  width: 100%;
  margin-top: 1.5rem;
}

.promotion > label {
  float: left;
  width: 100%;
  margin-bottom: 1rem;
}

.promotion > input {
  float: left;
  width: 80%;
  font-size: 1rem;
  padding: 0.5rem 0 0.5rem 1.8rem;
  border: 2px solid #16cc9b;
  border-radius: 2rem 0 0 2rem;
}

.promotion:hover > input {
  border-color: #f58551;
}

.promotion > button {
  float: left;
  width: 20%;
  height: 2.4rem;
  border-radius: 0 2rem 2rem 0;
}

.promotion:hover > button {
  border-color: #f58551;
  background-color: #f58551;
}

.promotion > button::after {
  content: "\276f";
  font-size: 1rem;
}

.summary {
  font-size: 1.2rem;
  text-align: right;
}

.summary ul li {
  padding: 0.5rem 0;
}

.summary ul li span {
  display: inline-block;
  width: 30%;
}

.summary ul li.total {
  font-weight: bold;
}

.checkout {
  text-align: right;
}

.checkout > button {
  font-size: 1.2rem;
  padding: 0.8rem 2.8rem;
  border-radius: 1.5rem;
}

.empty-product {
  text-align: center;
}

.empty-product > button {
  font-size: 1.3rem;
  padding: 10px 30px;
  border-radius: 5px;
}

/* --- SMALL SCREEN --- */
@media all and (max-width: 599px) {
  .thumbnail img {
    display: none;
  }

  .quantity > input {
    width: 40px;
    height: 40px;
    left: calc(50% - 20px);
  }

  .remove svg {
    width: 40px;
    height: 40px;
  }
}

/* --- MEDIUM & LARGE SCREEN --- */
@media all and (min-width: 600px) {
  html {
    font-size: 14px;
  }

  .container {
    width: 75%;
    max-width: 960px;
  }

  .thumbnail,
  .detail {
    float: left;
  }

  .thumbnail {
    width: 35%;
  }

  .detail {
    width: 65%;
  }

  .promotion,
  .summary {
    width: 50%;
  }

  .checkout {
    width: 100%;
  }

  .checkout,
  .summary {
    text-align: right;
  }
}

/* --- LARGE SCREEN --- */
@media all and (min-width: 992px) {
  html {
    font-size: 16px;
  }
}


</style>