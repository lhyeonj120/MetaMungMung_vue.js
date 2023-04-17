<template>
<div class="services_section layout_padding">
      <div class="container">
        
  <div class="page-section">
      <div class="container">
      	<!--중단 상품리스트 -->
	      <div style="margin: 0; padding: 0; border: 0; box-sizing: border-box; font-family: '맑은고딕', 'Malgun Gothic', 'dotum', sans-serif; letter-spacing: -1px; padding: 11px 0 0; color: #89cbeb; font-size: 32px; line-height: 41px; letter-spacing: -2px;">
          주문하기
        </div>
			</div>
	</div>

  <form @submit.prevent="doPay">
  <!-- <form> -->
    <div class="contents">

        <OrderMemInfo/>
        <OrderProductInfo/>
        <OrderPayInfo/>
      <input type="hidden" name="payment_amount" id="paymentAmountInput" v-model="paymentAmount"/>
      <input type="hidden" name="usePoint" id="usePointInput" v-model="usePoint"/>
      <div class="btnFooter">
        <button type="button" class="_btnCancel uButton -sizeXL -cancel" @click="cancel">취소</button>
        <button type="submit" class="_btnConfirm uButton -sizeXL -disabled" id="paymentBtn" @click="check">결제</button>
    </div>
    </div>
  </form>
      </div>
</div>
</template>

<script>
import {useRoute, useRouter} from 'vue-router';
import {ref} from 'vue';
import axios from 'axios';
import OrderMemInfo from '../../../components/store/order/OrderMemInfo.vue';
import OrderProductInfo from '../../../components/store/order/OrderProductInfo.vue';
import OrderPayInfo from '../../../components/store/order/OrderPayInfo.vue';

export default {
    components:{
        OrderMemInfo,
        OrderProductInfo,
        OrderPayInfo
    },
  setup(){
    const route = useRoute();
    const router = useRouter();
    const pid = route.params.id;
    const quantity = route.params.quantity;
    // const orderProducts = ref([]);
    const member = ref(
       {id: 1, name: '홍길동', email: 'kosa@metanet.com', phone: '010-1234-5678', address: '서울', point: 0}
    );
    const orderDetails = ref([
      {id: 1, quantity: 2, 
        productDTO: {id: 1, brand: '스윗밸런스', price: 5900, name: '오늘의 샐러드', img_url: 'https://img-cf.kurly.com/shop/data/goods/1655775819130l0.jpg'}}
    ]);
    const usePoint = ref(0);
    const totalPrice = ref(0);
    const paymentAmount = ref();
    const toggleErrorMsg = ref(false);
    const selected = ref('선택');
    const toggleDisabledPayMethod = ref(false);
    const msg = ref('');
 

    const inputPoint = () => {
      selected.value = '';
      toggleDisabledPayMethod.value = false;
      if(totalPrice.value < usePoint.value || member.value.point < usePoint.value){
        toggleErrorMsg.value = true;
        usePoint.value = 0;
        paymentAmount.value = totalPrice.value - usePoint.value;
      }
      else{
        toggleErrorMsg.value = false;
        paymentAmount.value = totalPrice.value - usePoint.value;
        if(paymentAmount.value == 0){
          selected.value = '적립금';
          toggleDisabledPayMethod.value = true;
        }
      }
    }

    // const getProductsInfo = () => {
    //   orderProducts.add({
    //     p_id: pid,
    //     quantity: quantity
    //   });
    // }

    // getProductsInfo();

    const getOrderPage = async () => {
    //   try{
    //     const res = await axios.post('/members/21/orders', {
    //         orderProductList: [
    //             {
    //                 p_id: pid,
    //                 quantity: quantity
    //             }
    //         ]
    //     });
    //     console.log(res.data.length);
    //     orderDetails.value = {...res.data};
    //     console.log(orderDetails.value);
    //     for(let i = 0; i < res.data.length; i++){
    //       totalPrice.value = totalPrice.value + orderDetails.value[i].totalPrice;
    //       console.log(totalPrice.value);
    //     }
    //     paymentAmount.value = totalPrice.value;

    //     console.log('paymentAmount : ' + paymentAmount.value);
    //     //console.log(orderDetails.length);
    //   } catch(err) {
    //     console.log(err);
    //   }
      
    }

    getOrderPage();

    const doPay = async () => {
    //   try{
    //     const res = await axios.post('/members/21/orders/payment', {
    //       deliveryMsg: msg.value,
    //       orderProductList: [
    //         {
    //           p_id: pid,
    //           quantity: quantity,
    //           totalPrice: totalPrice.value
    //         }
    //       ],
    //       total_amount: quantity,
    //       price: totalPrice.value,
    //       method: selected.value,
    //       payment_amount: paymentAmount.value,
    //       usePoint: usePoint.value
    //     });
    //   }catch(err) {
    //     console.log("err !!!!!!!!!!!! :  " + err);
    //   }
      router.push({
        name: 'OrderSuccess'
      });
    }


    return {
      route,
      member,
      orderDetails,
      usePoint,
      totalPrice,
      paymentAmount,
      inputPoint,
      toggleErrorMsg,
      selected,
      toggleDisabledPayMethod,
      msg,
      doPay,
    }
  }
}
</script>

<style scoped>
button {
  padding: 20px 50px;
  border: none;
  border-radius: 40px;
  background-color: #89cbeb;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
/* button {
  width: 90%;
  margin: 1rem 5% 5rem 5%;
  padding: 13px 0;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  background: #5f0080;
  border-radius: 4px;
  cursor: pointer;
} */
.btnFooter {
    margin: 40px 0 58px;
    text-align: center;
}
.btnFooter .-cancel {
    background: 0 0;
}
.btnFooter button {
    margin: 0 15px;
}
.uButton.-cancel {
    border: 1px solid #ccc;
    background: #fff;
    color: #666;
}
</style>