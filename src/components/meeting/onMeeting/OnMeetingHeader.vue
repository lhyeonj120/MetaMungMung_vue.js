<template>
    <div class="pageHeader">
        <router-link :to="{name: 'OnMeeting'}" @click="moveToPage">
            <div class="pageTitle">
                모임
                <img src="@/assets/images/offMeeting/paw-print.png" style="width: 70px"/>
            </div>
            </router-link>
        <SearchLocationBtn :addr="addr" v-if="showLoc"/>
        <OnMeetingSearchBar @send-type="sendType" :isMain="isMain"/>
    </div>
</template>

<script>
import SearchLocationBtn from './SearchLocationBtn.vue'
import OnMeetingSearchBar from './OnMeetingSearchBar.vue'
import {useRouter} from 'vue-router'
import {ref, watchEffect} from 'vue';


export default {
    mounted() {
        // api 스크립트 소스 불러오기 및 지도 출력
        if (window.kakao && window.kakao.maps) {
            this.loadMap();
        } else {
            this.loadScript();
        }
    },
    props: {
        isMain: Boolean,
        showLocation: Boolean
    },
    components: {
        SearchLocationBtn,
        OnMeetingSearchBar
    },
    setup(props, {emit}){
        const router = useRouter();
        const addr = ref('');
        const showLoc = ref(true);

        watchEffect(() => {
            if(!props.showLocation){
                showLoc.value = false;
            } else{
                showLoc.value = true;
            }
        });

        const sendType = () => {
            emit('send-type', 'search');
        }

        const moveToPage = () => {
            emit('send-type');
        }

        function loadScript() {
            const script = document.createElement('script')
            script.src =
                '//dapi.kakao.com/v2/maps/sdk.js?appkey=331e2b8989b90b725f0ab6a607cf49f9&autoload=false&libraries=services'
            script.onload = () => window.kakao.maps.load(this.loadMap)

            document.head.appendChild(script)
        }
        function loadMap() {
            let lat = 0;
            let lon = 0;

            geolocationFunc();

            function geolocationFunc () {
                if (navigator.geolocation) {
                    // GeoLocation을 이용해서 접속 위치를 얻어옴
                    navigator.geolocation.getCurrentPosition(function (position) {
                        lat = position.coords.latitude // 위도

                        lon = position.coords.longitude // 경도

                        const locPosition = new kakao.maps.LatLng(lat, lon)

                        // 주소 태그에 포함 + 주소 파악 되면 띄우기
                        searchAddrFromCoords(locPosition, function(result, status){
                            if (status === kakao.maps.services.Status.OK) {
                                for(var i = 0; i < result.length; i++) {
                                    // 행정동의 region_type 값은 'H' 이므로
                                    if (result[i].region_type === 'H') {
                                        // 동만 추출
                                        const strArr = result[i].address_name.split(' ');
                                        addr.value = strArr[strArr.length - 1];
                                        break;
                                    }
                                }
                            }
                        });
                    })
                } else {
                    var locPostion = new kakao.maps.LatLng(33.450701, 126.570667) 
                    var message = '현재위치를 찾을 수 없습니다.'
                }
            }
            // 주소-좌표 변환 객체를 생성합니다
            var geocoder = new kakao.maps.services.Geocoder();

            function searchAddrFromCoords(coords, callback) {
                // 좌표로 행정동 주소 정보를 요청합니다
                geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);         
            }

        } // loadMap() end
               

        return{
            showLoc,
            addr,
            sendType,
            moveToPage,
            loadScript,
            loadMap
        }
    }
}
</script>

<style scoped>
.pageTitle{
    /* font-weight: 900; */
    font-size: 40px;
    margin: 0;
    float: left;
    color: #addaed;
    font-weight: 600;
}
.pageHeader {
    position: relative;
    /* display: -webkit-box; */
    /* display: flex; */
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    max-width: 1034px;
    height: 70px;
    margin: 0 0 35px 0;
}
</style>