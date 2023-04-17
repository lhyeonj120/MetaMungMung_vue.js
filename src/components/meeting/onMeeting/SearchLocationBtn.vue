<template>
    <div style="float: left">
        <button type="button" class="btnMySetting" 
            :class="{active: isActive}" aria-haspopup="true" :aria-expanded=isActive aria-controls="gnbProfileMenuPopup" @click="menuToggle">
                {{curLocation}}
        </button>
        <div class="menuModalLayer">
            <ul class="menuModalList">
                <li class="menuModalItem" @click="changeList">
                    <div class="menuModalText">{{selectCate}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {ref, watchEffect} from 'vue';

export default {
    props: {
        addr: String
    },
    setup(props){
        const isActive = ref(false);
        const selectCate = ref('모든 동네');
        const curLocation = ref('연지동');

        const menuToggle = () => {
            isActive.value = !isActive.value;
            console.log(isActive.value);
        }

        const changeList = () => {
            let tmp = selectCate.value;
            selectCate.value = curLocation.value;
            curLocation.value = tmp;
            menuToggle();
        }

        const locationSetting = () => {
            console.log(props.addr);
            curLocation.value = props.addr;
        }
        
        watchEffect(() => {
            locationSetting();
        });

        return{
            isActive,
            selectCate,
            curLocation,
            menuToggle,
            changeList
        }
    }
}
</script>

<style scoped>
.btnMySetting {
    display: -webkit-box;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-left: 9px;
    border-radius: 20px;
    color: #444;
    float: left;
    width: 95px;
    /* margin-bottom: 30px; */
    margin-top: 20px;
    margin-left: 20px;
}
.btnMySetting.active:after {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
}
.btnMySetting:after {
    width: 7px;
    height: 7px;
    -webkit-mask-image: url(@/assets/images/common/arrow.png);
    mask-image: url(@/assets/images/common/arrow.png);
    -webkit-mask-size: 7px 7px;
    mask-size: 7px 7px;
    background-color: #83879B;
    display: inline-block;
    margin-left: 9px;
    margin-right: 9px;
    margin-top: -3px;
    vertical-align: top;
    opacity: .55;
    content: '';
}
.btnMySetting.active~.menuModalLayer {
    display: block!important;
}
.menuModalLayer {
    margin-top: 46px;
    margin-left: 20px;
}
.menuModalLayer {
    display: none;
    position: absolute;
    /* min-width: 158px; */
    /* padding: 12px 0; */
    border-radius: 16px;
    background-color: #fff;
    -webkit-box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.15),0px 0px 2px 1px rgba(0, 0, 0, 0.02);
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.15),0px 0px 2px 1px rgba(0, 0, 0, 0.02);
    z-index: 10;
    width: 95px;
}
.menuModalItem{
    padding-left: 3px;
    background-color: #F5F6F8;
    border-radius: 15px;
}
.menuModalText{
    width: 80px;
    margin-left: 10px;
}
</style>