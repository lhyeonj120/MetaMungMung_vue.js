<template>
    <div class="page-section">
        <div class="container">

            <div class="widget-box">
                <h4 class="widget-title">주문내역</h4>
                <div class="divider"></div>
            
                <div v-for="order in orders" :key="order.o_id">
                    <div class="blog-item">
                        <!-- <router-link class="post-thumb" :to="{name: 'ProductsDetail', params: {id: order.orderDetailList[0].p_id}}"> -->
                        <a class="post-thumb" @click="moveToProductsDetail(order.orderDetailList[0].p_id)">
                            <img :src="`${order.orderDetailList[0].productDTO.img_url}`" alt="">
                        </a>
                        <div class="content">
                            <div class="meta">
                                {{order.status}}
                            </div>
                            <h6 class="post-title">
                                <a @click="moveToOrdersDetail(order.o_id)">
                                <!-- <router-link :to="{name: 'OrdersDetail', params: {id: order.o_id}}"> -->
                                    {{order.orderDetailList[0].productDTO.brand}} {{order.orderDetailList[0].productDTO.name}}
                                    <span v-if="order.orderDetailList.length != 1"> 외 {{order.orderDetailList.length - 1}}개</span>
                                </a>
                            </h6>
                            <div class="meta">
                            <!-- <a href="#"><span class="mai-person"></span> Admin</a> -->
                                <a href='#'>주문번호 {{order.o_id}}</a>
                                <span class="mai-calendar">📅{{order.orders_date}}</span>
                            <!-- <a href="#"><span class="mai-chatbubbles"></span> 19</a> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue';
import axios from 'axios';
import {useRouter} from 'vue-router';

export default {
  setup(){
	const router = useRouter();
    const order = ref('');
    const orders = ref([
      {o_id: 1, orders_date: '2023-02-22', status: '배송완료', total_amount: 3, orderDetailList: [{p_id: 1, productDTO: {img_url: 'https://img-cf.kurly.com/shop/data/goods/1655775819130l0.jpg', brand: '스윗밸런스', name: '오늘의 샐러드', price: 17700}}]},
      {o_id: 2, orders_date: '2023-03-10', status: '배송준비중', total_amount: 3, orderDetailList: [{p_id: 3, productDTO: {img_url: 'https://img-cf.kurly.com/shop/data/goods/1637926173262l0.jpeg', brand: '크리넥스', name: '데코앤소프트 화장지', price: 45500}}]}
    ]);

	const getOrderList = async () => {
		// try{
		// 	const res = await axios.get('/members/1/orders');
		// 	orders.value = {...res.data};
		// 	console.log(res);
		// } catch(err){
		// 	console.log(err);
		// }
	}

	getOrderList();

	const moveToProductsDetail = (pid) => {
		console.log(pid);
		router.push({
			name: 'ProductDetail',
			params: {
				id: pid
			}
		});
	}

	const moveToOrdersDetail = (oid) => {
		console.log(oid);
		router.push({
			name: 'OrderDetail',
			params: {
				id: oid
			}
		});
	}
    
    return{
      order,
      orders,
	  moveToProductsDetail,
	  moveToOrdersDetail
    }
  }
}
</script>

<style scoped>
.page-section {
    position: relative;
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: #fff;
    overflow: hidden;
}
.blog-item {
    position: relative;
    display: flex;
    flex-direction: row;
    padding-bottom: 12px;
    margin-bottom: 20px;
    border-bottom: 1px solid #e4e7ee;
}

.blog-item .post-thumb {
    flex-shrink: 0;
    position: relative;
    display: inline-block;
    margin-right: 15px;
    width: 100px;
    height: 80px;
    background-color: #F6F5FC;
    overflow: hidden;
}

.blog-item .post-thumb img {
    width: auto;
    height: 100%;
}

.post-title {
    font-weight: 500;
    color: #212529;
}

.blog-item .post-title a {
    color: #007bff;
    transition: all .2s ease;
}

.blog-item .post-title a:hover {
    color: #0072ff;
    text-decoration: none;
}

.blog-item .meta a {
    margin-right: 6px;
    font-size: 12px;
    color: #89cbeb;
}

.blog-item .meta a:hover {
    text-decoration: none;
}
.widget-box {
    display: block;
    padding: 20px;
    margin-bottom: 32px;
    border-radius: 6px;
    border: 1px solid #EDECF5;
    box-shadow: 0 3px 9px rgba(100, 95, 136, 0.15);
}
  
.widget-title {
    color: #007bff;
    font-weight: 800;
}

.divider {
    display: block;
    margin-top: 16px;
    margin-bottom: 32px;
    width: 32px;
    height: 3px;
    border-radius: 40px;
    background-color: #a1b5cb;
}

</style>