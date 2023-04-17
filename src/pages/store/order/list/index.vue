<template>
	<div class="services_section layout_padding">
		<div class="container">
			<OrderList/>
		</div>
	</div>
</template>

<script>
import OrderList from "../../../../components/store/order/OrderList.vue";

export default{
	components: {
		OrderList
	}
}
</script>

<style>

</style>