<template>
<div>
    <div>
        <span><strong>지도 첨부</strong></span>
        <span @click="$emit('close')" class="close" id="closeModal"
        >&times;</span>
    </div>
    <div class="map_wrap" style="position: relative;">
        <div id="map2">
            <div class="hAddr">
                <span class="title">지도중심기준 행정동 주소정보</span>
                <span id="centerAddr"></span>
            </div>
        </div>
    </div>
</div>
  
</template>

<script>
export default {
    name: 'MapModal',
    components: {

    },
    data() {
        return {
            currentLocation: '',
            currentLat: '',
            currentLng: ''
        }

    },
    mounted() {
        // api 스크립트 소스 불러오기 및 지도 출력
        if (window.kakao && window.kakao.maps) {
        this.loadMap()
        } else {
        this.loadScript()
        }
    },
    methods: {
        loadScript () {
            const script = document.createElement('script')
            script.src =
                '//dapi.kakao.com/v2/maps/sdk.js?appkey=331e2b8989b90b725f0ab6a607cf49f9&autoload=false&libraries=services'
            script.onload = () => window.kakao.maps.load(this.loadMap)

            document.head.appendChild(script)
            },
        loadMap () {
            const container = document.getElementById('map2')
            const currentBtn = document.getElementById('current-location-btn');
            let lat = 0;
            let lon = 0;
            let locationAddress= '';

            const option = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 3
            }

            /* 지도 생성 코드 */
            const map = new kakao.maps.Map(container, option)

            // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
            var zoomControl = new kakao.maps.ZoomControl();
            map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

            geolocationFunc();

            // 지도에 마커와 인포윈도우를 표시하는 함수
            function displayMarker (locPosition, message) {
                const marker = new kakao.maps.Marker({
                map: map,
                position: locPosition
                })
                const iwContent = message // 인포윈도우에 표시할 내용
                const iwRemovaable = true
                // 인포 윈도우 생성
                var infowindow = new kakao.maps.InfoWindow({
                content: iwContent,
                removavle: iwRemovaable
                })
                infowindow.open(map, marker)

                map.setCenter(locPosition)
            }

            function kangFunc() {
                if (navigator.geolocation) {
                // GeoLocation을 이용해서 접속 위치를 얻어옴
                navigator.geolocation.getCurrentPosition(function (position) {
                    lat = position.coords.latitude // 위도

                    lon = position.coords.longitude // 경도

                    const locPosition = new kakao.maps.LatLng(lat, lon)
                    return locPosition;
                })
                } else {
                var locPostion = new kakao.maps.LatLng(33.450701, 126.570667)
                return locPostion;
                }
            }

            function geolocationFunc () {
                if (navigator.geolocation) {
                // GeoLocation을 이용해서 접속 위치를 얻어옴
                navigator.geolocation.getCurrentPosition(function (position) {
                    lat = position.coords.latitude // 위도

                    lon = position.coords.longitude // 경도

                    const locPosition = new kakao.maps.LatLng(lat, lon)
                    const message = '<div style="padding:5px;">이 위치를 추가<span style="margin-left:10px"><img src="https://github.com/hyegyeong-kang/MetaMungMung-vue.js/blob/main/src/assets/images/offMeeting/paw-print.png?raw=true" height="20px" width="15px"/></span></div>' // 인포윈도우에 표시될 내용

                    // 마커와 인포윈도우를 표시한다.
                    displayMarker(locPosition, message)
                })
                } else {
                var locPostion = new kakao.maps.LatLng(33.450701, 126.570667) 
                var message = '현재위치를 찾을 수 없습니다.'

                displayMarker(locPostion, message)
                }
            }

            let base = this;

      /* 지도 중심좌표 찾는 코드 start */
      // 지도가 이동, 확대, 축소로 인해 중심좌표가 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
    //   kakao.maps.event.addListener(map, 'center_changed', function() {
    //     // 지도의 중심좌표를 얻어옵니다
    //     var latlng = map.getCenter();

    //     const latitude = latlng.getLat();
    //     const longitude = latlng.getLng();

    //     base.currentLat = latitude;
    //     base.currentLng = longitude;

    //     /* 주소 얻어오기 */
    //     getAddr(latitude,longitude);

    //     function getAddr(lat,lon){
    //         /* 주소-좌표 변환 객체 생성 */
    //         let geocoder = new kakao.maps.services.Geocoder();

    //         let coord = new kakao.maps.LatLng(lat, lon);
    //         let callback = function(result, status) {
    //             if (status === kakao.maps.services.Status.OK) {
    //               locationAddress = result[0].address.address_name;
    //               // console.log(locationAddress);
    //               base.currentLocation = locationAddress;
    //               // console.log('ssssss'+base.currentLocation)
    //             }
    //         }
    //         geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
    //     }

    //         // var message = '';
    //         // message += '중심 좌표는 위도 ' + latlng.getLat() + ', 경도 ' + latlng.getLng() + '입니다';
    //         // console.log(message);
    //   });


      // ** 클릭한 위치에 마커 표시하기 **
      // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new kakao.maps.services.Geocoder();

        var marker = new kakao.maps.Marker(), // 클릭한 위치를 표시할 마커입니다
            infowindow = new kakao.maps.InfoWindow({zindex:1}); // 클릭한 위치에 대한 주소를 표시할 인포윈도우입니다
        const locPosition = kangFunc();
        // 현재 지도 중심좌표로 주소를 검색해서 지도 좌측 상단에 표시합니다
        searchAddrFromCoords(map.getCenter(), displayCenterInfo);

        // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록합니다
        kakao.maps.event.addListener(map, 'click', function(mouseEvent) {
            searchDetailAddrFromCoords(mouseEvent.latLng, function(result, status) {
                if (status === kakao.maps.services.Status.OK) {
                    var detailAddr = !!result[0].road_address ? '<div>도로명주소 : ' + result[0].road_address.address_name + '</div>' : '';
                    detailAddr += '<div>지번 주소 : ' + result[0].address.address_name + '</div>';
                    
                    var content = '<div class="bAddr">' +
                                    '<span class="title"><strong>주소정보</strong></span>' + 
                                    detailAddr + 
                                '</div>';

                    // 마커를 클릭한 위치에 표시합니다 
                    marker.setPosition(mouseEvent.latLng);
                    marker.setMap(map);

                    // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
                    infowindow.setContent(content);
                    infowindow.open(map, marker);
                }   
            });
        });

        // 중심 좌표나 확대 수준이 변경됐을 때 지도 중심 좌표에 대한 주소 정보를 표시하도록 이벤트를 등록합니다
        kakao.maps.event.addListener(map, 'idle', function() {
            searchAddrFromCoords(map.getCenter(), displayCenterInfo);
        });

        function searchAddrFromCoords(coords, callback) {
            // 좌표로 행정동 주소 정보를 요청합니다
            geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);         
        }

        function searchDetailAddrFromCoords(coords, callback) {
            // 좌표로 법정동 상세 주소 정보를 요청합니다
            geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        }

        // 지도 좌측상단에 지도 중심좌표에 대한 주소정보를 표출하는 함수입니다
        function displayCenterInfo(result, status) {
            if (status === kakao.maps.services.Status.OK) {
                var infoDiv = document.getElementById('centerAddr');

                for(var i = 0; i < result.length; i++) {
                    // 행정동의 region_type 값은 'H' 이므로
                    if (result[i].region_type === 'H') {
                        infoDiv.innerHTML = result[i].address_name;
                        break;
                    }
                }
            }    
        }

    //   // 지도를 클릭한 위치에 표출할 마커입니다
    //     var marker = new kakao.maps.Marker({ 
    //         // 지도 중심좌표에 마커를 생성합니다 
    //         position: map.getCenter() 
    //     }); 
    //     // 지도에 마커를 표시합니다
    //     marker.setMap(map);

    //     // 지도에 클릭 이벤트를 등록합니다
    //     // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
    //     kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
            
    //         // 클릭한 위도, 경도 정보를 가져옵니다 
    //         var latlng = mouseEvent.latLng; 
            
    //         // 마커 위치를 클릭한 위치로 옮깁니다
    //         marker.setPosition(latlng);

    //         console.log(`위도::::: ${latlng.getLat()} //// 경도:::: ${latlng.getLng()}`)
            
    //         var message = '클릭한 위치의 위도는 ' + latlng.getLat() + ' 이고, ';
    //         message += '경도는 ' + latlng.getLng() + ' 입니다';
            
    //         var resultDiv = document.getElementById('clickLatlng'); 
    //         resultDiv.innerHTML = message;
            
    //     });

        // 지도 위에 표시되고 있는 마커를 모두 제거합니다
        function removeMarker() {
            for ( var i = 0; i < markers.length; i++ ) {
                markers[i].setMap(null);
            }   
            markers = [];
        }







        } // loadMap() end
    }
}
</script>

<style scoped>
@import "@/assets/css/meeting/offMeeting/map-modal.css";
</style>