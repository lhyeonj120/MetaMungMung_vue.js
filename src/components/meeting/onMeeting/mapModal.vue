<template>
    <!-- 모임생성 모달 start -->
    <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content slideDown">
            <div class="modal-header">
                <span @click="closeModalFunc" class="close" id="closeModal">&times;</span>
                <h2>모임생성</h2>
            </div>
            <div class="modal-body">
                <form action="" class="modal-form">
                    <div class="form-row">
                        <input type="text" placeholder="주소를 입력해주세요." v-model ="address">
                    </div>
                </form>
            </div>
            <div class="modal-footer">
                <button type="submit" class="btn btn-primary">Save</button>
            </div>
        </div>
    </div>
    <!-- 모임생성 모달 end -->
</template>

<script>
import {ref} from 'vue';

export default {
    setup(){
        const address = ref('');

        const openModal = () => {
            modal[0].style.display = "block"
        }
        const closeModal = () => {
            modal[0].style.display = "none"
        }

        return{
            address
        }
    }
}
</script>

<style>

</style>