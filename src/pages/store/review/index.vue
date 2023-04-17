<template>
  <div class="services_section layout_padding">
    <ReviewHeader />
    <div class="container">
      <div class="header">Write your review</div>
      <div id="app">
        <label>Insert your Name:</label>
        <input name="name" type="text" v-model="name" /><br />
        <label>Insert your City:</label>
        <input name="city" type="text" v-model="city" /><br />
        <label>Insert your Review:</label>
        <textarea name="content" v-model="content"></textarea>

        <button v-on:click="addReview()">Send</button>

        <div v-for="item in list" :key="item.name" class="review">
          <div class="review-photo">
            <img v-bind:src="item.photo" />
          </div>

          <div class="review-box">
            <div class="review-author">
              <p>
                <strong>{{ item.name }}</strong> -
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                - {{ item.city }}
              </p>
            </div>
            <div class="review-comment">
              <p>{{ item.content }}</p>
            </div>

            <div class="review-date">
              <time>July, 27th, 2016</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReviewHeader from "@/components/store/product/ReviewHeader.vue";
import { ref } from "vue";

export default {
  components: {
    ReviewHeader,
  },
  setup() {
    const content = ref("");
    const name = ref("");
    const photo = ref(
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    );
    const city = ref("");
    const list = ref([
      {
        name: "Hélio Marcondes",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consequat magna ut dui egestas, in varius diam ultricies. Phasellus suscipit magna id arcu auctor, nec vulputate dolor elementum.",
        photo: "https://randomuser.me/api/portraits/men/88.jpg",
        city: "São Paulo, SP",
      },
      {
        name: "Arya Stark",
        content:
          "Minhas cadeiras chegaram no prazo e super bem embaladas!!! Além das cadeiras serem lindas, os preços são ótimos! Indico, com certeza!",
        photo: "https://randomuser.me/api/portraits/women/54.jpg",
        city: "Winterfell, LO",
      },
    ]);

    const addReview = () => {
      list.value.push({
        name: name.value,
        city: city.value,
        photo: photo.value,
        content: content.value,
      }),
        (name.value = ""),
        (city.value = ""),
        (content.value = "");
    };

    return {
      addReview,
      content,
      name,
      photo,
      city,
      list,
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.header {
  width: 100%;
  font-size: 2em;
  text-align: center;
  background: #34495e;
  color: #fff;
  padding: 0.5em;
}
body {
  max-width: 1024px;
  margin: 20px auto;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
}
img {
  max-width: 100%;
  display: block;
}
p {
  margin: 0;
}
.fa.fa-star {
  color: #fec902;
}
label {
  width: 15%;
  margin: 10px 1% 0 0;
  display: inline-block;
  float: left;
}
input[type="text"] {
  width: 84%;
  margin: 10px 0;
  height: 40px;
  border: none;
  background: #f6f6f6;
  padding: 1em;
}
textarea {
  width: 84%;
  border: none;
  background: #f6f6f6;
  margin: 10px 0;
  height: 100px;
  padding: 1em;
}
button {
  float: right;
  width: 20%;
  height: 40px;
  border: none;
  background: #2ecc71;
  font-size: 16px;
  color: white;
}
.review {
  width: 100%;
  display: inline-block;
  margin: 10px 0;
}
.review-photo {
  height: 80px;
  width: 80px;
  display: inline-block;
  float: left;
  margin-right: 3em;
}
.review-box {
  float: left;
  display: inline-block;
  width: 87.5%;
  background: #f6f6f6;
  padding: 1.5em;
  position: relative;
}
.review-box:after,
.review-box:before {
  right: 100%;
  top: 10%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
}
.review-box:after {
  border-right-color: #f6f6f6;
  border-width: 25px;
}
.review-comment {
  color: #9a9999;
}
.review-date {
  color: #c7c7c7;
}
.review-author {
  color: #c7c7c7;
}
.review-author strong {
  color: black;
}
</style>
