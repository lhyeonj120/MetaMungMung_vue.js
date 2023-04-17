import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/index.vue";
import Signup from "../pages/member/signup.vue";
import Login from "../pages/member/login.vue";
import Modify from "../pages/member/modify.vue";
import OffMeeting from "../pages/meeting/offMeeting/index.vue";
import OnMeeting from "../pages/meeting/onMeeting/index.vue";
import OnMeetingCreate from "../pages/meeting/onMeeting/create/index.vue";
import RegisterModal from "../pages/meeting/onMeeting/board/index.vue";
import ProductList from "../pages/store/product/index.vue";
import ProductDetail from "../pages/store/product/detail/_id.vue";
import ProductReviews from "../pages/store/product/review/index.vue";
import OnMeetingDetail from "../pages/meeting/onMeeting/_id.vue";
import OnMeetingSearch from "../pages/meeting/onMeeting/search/index.vue";
import OnMeetingDetailSetting from "../pages/meeting/onMeeting/modify/index.vue";
import OnMeetingModify from "../pages/meeting/onMeeting/modify/_id.vue";
import Order from "../pages/store/order/index.vue";
import OrderSuccess from "../pages/store/order/success/index.vue";
import OrdersList from "../pages/store/order/list/index.vue";
import OrderDetail from "../pages/store/order/_id.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/members/signup",
      name: "Signup",
      component: Signup,
    },
    {
      path: "/members/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/members/modify",
      name: "Modify",
      component: Modify,
    },
    {
      path: "/offMeeting",
      name: "OffMeeting",
      component: OffMeeting,
    },
    {
      path: "/onMeeting",
      name: "OnMeeting",
      component: OnMeeting,
    },
    {
      path: "/onMeeting/create",
      name: "OnMeetingCreate",
      component: OnMeetingCreate
    },
    {
      path: "/onMeeting/board",
      name: "RegisterModal",
      component: RegisterModal
    },
    {
      path: "/products",
      name: "ProductList",
      component: ProductList,
    },
    {
      path: "/products/:id",
      name: "ProductDetail",
      component: ProductDetail,
    },
    {
      path: "/products/:id/reviews",
      name: "ProductReviews",
      component: ProductReviews,
    },
    {
      path: "/onMeeting/:id",
      name: "OnMeetingDetail",
      component: OnMeetingDetail
    },
    {
      path: "/onMeeting/search",
      name: "OnMeetingSearch",
      component: OnMeetingSearch
    },
    {
      path: "/onMeeting/:id/setting",
      name: "OnMeetingDetailSetting",
      component: OnMeetingDetailSetting
    },
    {
      path: "/onMeeting/:id/modify",
      name: "OnMeetingModify",
      component: OnMeetingModify
    },
    {
      path: "/store/order",
      name: "Order",
      component: Order
    },
    {
        path: "/store/order/success",
        name: "OrderSuccess",
        component: OrderSuccess
    },
    {
        path: "/store/order/list",
        name: "OrderList",
        component: OrdersList
    },
    {
        path: "/store/order/:id",
        name: "OrderDetail",
        component: OrderDetail
    }
  ],
  scrollBehavior(){
    return { top: 0 }
  },
});

export default router;
