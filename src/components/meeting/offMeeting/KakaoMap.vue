<template>
  <div>
    <div class="map_wrap" style="position: relative">
      <div id="map">
        <ul id="category">
          <!-- <li id="BK9" data-order="0">  -->
          <li id="HP8" data-order="0">
            <span class="category_bg hospital"></span>
            동물병원
          </li>
          <li id="CE7" data-order="4">
            <span class="category_bg cafe"></span>
            애견카페
          </li>
          <li id="FD6" data-order="4">
            <span class="category_bg life"></span>
            편의시설
          </li>
        </ul>
        <div style="top: 45%" class="center-marker">
          <img src="@/assets/images/offMeeting/center-marker.png" alt="" />
        </div>
        <div class="current-location">
          <button
            id="current-location-btn"
            style="background-color: transparent"
          >
            <img src="@/assets/images/offMeeting/current-location.png" alt="" />
          </button>
        </div>
      </div>
      <button
        @click="openCreateModal"
        class="custom-btn btn-12 modal-button"
        style="position: absolute; z-index: 2; bottom: 5%; right: 5%"
      >
        <span>클릭하세요!</span><span>모임생성</span>
      </button>
    </div>
    <CreateModal
      :currentLocation="currentLocation"
      :currentLat="this.currentLat"
      :currentLng="this.currentLng"
      ref="createModal"
    ></CreateModal>
    <DetailModal
      :selectedMarker="selectedMarker"
      :boardDetails="boardDetails"
      ref="detailModal"
    />
    <div>{{ this.currentLocation }}</div>
    <div>{{ this.currentLat }}</div>
    <div>{{ this.currentLng }}</div>
  </div>
</template>

<script>
import CreateModal from "@/components/meeting/offMeeting/modal/createModal.vue";
import DetailModal from "@/components/meeting/offMeeting/modal/detailModal.vue";
// import {ref} from 'vue';
export default {
  name: "KakaoMap",
  components: {
    CreateModal,
    DetailModal,
  },
  data() {
    return {
      currentLocation: "",
      currentLat: "",
      currentLng: "",
      openDetailModal: null,
      openCreateModal: null,
      selectedMarker: null,
      boardMarkers: [],
      boardDetails: [
        {
          idx: 1,
          title: "첫게시글!!!!",
          host: "손정아",
          addr: "헤이그카페",
          latitude: 37.25974040657983,
          longitude: 127.14262381993633,
          limit: "5",
          date: "2023-04-13",
          startTime: "18:00",
          content:
            "여기서 모여요~ 여기 카페 음식도 맛있고, 강아지들 잘 놀아요!!!!!",
        },
        {
          idx: 2,
          title: "두번째 게시글!!!!",
          host: "홍길동",
          addr: "스타벅스",
          latitude: 37.25967098625983,
          longitude: 127.1422826831307,
          limit: "4",
          date: "2023-04-15",
          startTime: "12:00",
          content: "카페는 역시 스타벅스죠~~~~~ 여기 어떠세요????!!!!!",
        },
        {
          idx: 3,
          title: "세번째 게시글!!!!",
          host: "박길동",
          addr: "경찰병원역 스타벅스",
          latitude: 37.494784448894926,
          longitude: 127.12194168816411,
          limit: "4",
          date: "2023-04-15",
          startTime: "12:00",
          content: "카페는 역시 스타벅스죠~~~~~ 여기 어떠세요????!!!!!",
        },
        {
          idx: 4,
          title: "네번째 게시글!!!!",
          host: "박길동",
          addr: "우불식당",
          latitude: 37.495170738242564,
          longitude: 127.12086238052915,
          limit: "4",
          date: "2023-04-15",
          startTime: "12:00",
          content: "카페는 역시 스타벅스죠~~~~~ 여기 어떠세요????!!!!!",
        },
        {
          idx: 5,
          title: "다섯번째 게시글!!!!",
          host: "박길동",
          addr: "빽다방",
          latitude: 37.21333912528333,
          longitude: 127.3225686617836,
          limit: "4",
          date: "2023-04-15",
          startTime: "12:00",
          content: "카페는 역시 스타벅스죠~~~~~ 여기 어떠세요????!!!!!",
        },
      ],
    };
  },
  // created() {
  //   let base = this;
  //   //비동기적으로 selectedMarker를 업데이트
  // },
  mounted() {
    // api 스크립트 소스 불러오기 및 지도 출력
    if (window.kakao && window.kakao.maps) {
      this.loadMap();
    } else {
      this.loadScript();
    }
    let base = this;
    base.openCreateModal = this.$refs.createModal.openCreateModalFunc;
    base.openDetailModal = this.$refs.detailModal.openDetailModalFunc;
    console.log(base.openCreateModal);
    console.log(base.openDetailModal);
  },
  methods: {
    openCreateModal() {
      base.openCreateModal();
    },
    loadScript() {
      const script = document.createElement("script");
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=331e2b8989b90b725f0ab6a607cf49f9&autoload=false&libraries=services";
      script.onload = () => window.kakao.maps.load(this.loadMap);
      document.head.appendChild(script);
    },
    loadMap() {
      const container = document.getElementById("map");
      const currentBtn = document.getElementById("current-location-btn");
      let lat = 0;
      let lon = 0;
      let locationAddress = "";
      let base = this;
      const option = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      /* 지도 생성 코드 */
      const map = new kakao.maps.Map(container, option);
      // 지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성합니다
      var zoomControl = new kakao.maps.ZoomControl();
      map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
      geolocationFunc();
      /* 지도에 마커와 인포윈도우를 표시하는 함수 */
      function displayMarker(locPosition, message) {
        const marker = new kakao.maps.Marker({
          map: map,
          position: locPosition,
        });
        const iwContent = message; // 인포윈도우에 표시할 내용
        const iwRemovaable = true;
        // 인포 윈도우 생성
        var infowindow = new kakao.maps.InfoWindow({
          content: iwContent,
          removavle: iwRemovaable,
        });
        infowindow.open(map, marker);
        map.setCenter(locPosition);
      }
      /* 현재 위치 조회하는 함수 (GeoLocation) */
      function geolocationFunc() {
        if (navigator.geolocation) {
          // GeoLocation을 이용해서 접속 위치를 얻어옴
          navigator.geolocation.getCurrentPosition(function (position) {
            lat = position.coords.latitude; // 위도
            lon = position.coords.longitude; // 경도
            const locPosition = new kakao.maps.LatLng(lat, lon);
            const message = '<div style="padding:5px;">여기에 계신가요?</div>'; // 인포윈도우에 표시될 내용
            // 마커와 인포윈도우를 표시한다.
            displayMarker(locPosition, message);
          });
        } else {
          var locPostion = new kakao.maps.LatLng(33.450701, 126.570667);
          var message = "현재위치를 찾을 수 없습니다.";
          displayMarker(locPostion, message);
        }
      }
      /* 내 위치 찾기 버튼 클릭 시 현재 위치로 지도 이동하는 코드 start */
      currentBtn.addEventListener("click", function (event) {
        const locPosition = new kakao.maps.LatLng(lat, lon);
        map.setCenter(locPosition);
      });
      /* 지도 중심좌표 찾는 코드 start */
      // 지도가 이동, 확대, 축소로 인해 중심좌표가 변경되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
      kakao.maps.event.addListener(map, "center_changed", function () {
        // 지도의 중심좌표를 얻어옵니다
        var latlng = map.getCenter();
        const latitude = latlng.getLat();
        const longitude = latlng.getLng();
        base.currentLat = latitude;
        base.currentLng = longitude;
        /* 주소 얻어오기(주소-좌표 변환) */
        getAddr(latitude, longitude);
        function getAddr(lat, lon) {
          /* 주소-좌표 변환 객체 생성 */
          let geocoder = new kakao.maps.services.Geocoder();
          let coord = new kakao.maps.LatLng(lat, lon);
          let callback = function (result, status) {
            if (status === kakao.maps.services.Status.OK) {
              locationAddress = result[0].address.address_name;
              base.currentLocation = locationAddress;
            }
          };
          geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
        }
      });
      // // 커스텀 오버레이에 표시할 컨텐츠 입니다
      // // 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
      // // 별도의 이벤트 메소드를 제공하지 않습니다
      // var content =
      //   '<div class="wrap">' +
      //   '    <div class="info">' +
      //   '        <div class="title">' +
      //   "            카카오 스페이스닷원" +
      //   '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
      //   "        </div>" +
      //   '        <div class="body">' +
      //   '            <div class="img">' +
      //   '                <img src="" width="73" height="70">' +
      //   "           </div>" +
      //   '            <div class="desc">' +
      //   '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' +
      //   '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' +
      //   '                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' +
      //   "            </div>" +
      //   "        </div>" +
      //   "    </div>" +
      //   "    <button>버튼</button>";
      // ("</div>");
      // let overlay = new Object();
      // createCustomOverlay();
      addBoardMarker();
      /* 등록된 게시물의 좌표를 통해 마커 생성 */
      function addBoardMarker() {
        let boardMarkerPosition = 0;
        let cnt = 1;
        for (let i = 0; i < base.boardDetails.length; i++) {
          boardMarkerPosition = new kakao.maps.LatLng(
            base.boardDetails[i].latitude,
            base.boardDetails[i].longitude
          );
          const boardMarker = new kakao.maps.Marker({
            position: boardMarkerPosition,
            title: cnt + i,
          });
          boardMarker.setMap(map);
          base.boardMarkers.push(boardMarker);
          /* 등록된 게시글의 마커를 클릭 시 발생하는 이벤트 */
          kakao.maps.event.addListener(boardMarker, "click", function () {
            if (base.selectedMarker || base.selectedMarker !== boardMarker) {
              base.selectedMarker = boardMarker;
              console.log(
                "선택된 마커 : " +
                  base.selectedMarker.getTitle() +
                  ", 위도경도는" +
                  base.selectedMarker.getPosition()
              );
              base.openDetailModal(base.selectedMarker);
            }
          });
          // // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
          // kakao.maps.event.addListener(boardMarker, "click", function () {
          //   overlay.setMap(map);
          // });
          // // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
          // function closeOverlay() {
          //   overlay.setMap(null);
          // }
        }
      }
      // // 마커 위에 커스텀오버레이를 표시합니다
      // // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
      // function createCustomOverlay() {
      //   let boardMarkerPosition = 0;
      //   for (let i = 0; i < base.boardDetails.length; i++) {
      //     boardMarkerPosition = new kakao.maps.LatLng(
      //       base.boardDetails[i].latitude,
      //       base.boardDetails[i].longitude
      //     );
      //     overlay = new kakao.maps.CustomOverlay({
      //       content: content,
      //       map: map,
      //       position: boardMarkerPosition,
      //     });
      //   }
      // }
      //강혜경
      selectCategory();
      function selectCategory() {
        var placeOverlay = new kakao.maps.CustomOverlay({ zIndex: 1 }),
          contentNode = document.createElement("div"), // 커스텀 오버레이의 컨텐츠 엘리먼트 입니다
          markers = [], // 마커를 담을 배열입니다
          currCategory = ""; // 현재 선택된 카테고리를 가지고 있을 변수입니다
        // 장소 검색 객체를 생성합니다
        var ps = new kakao.maps.services.Places(map);
        // 지도에 idle 이벤트를 등록합니다
        kakao.maps.event.addListener(map, "idle", searchPlaces);
        // 커스텀 오버레이의 컨텐츠 노드에 css class를 추가합니다
        contentNode.className = "placeinfo_wrap";
        // 커스텀 오버레이의 컨텐츠 노드에 mousedown, touchstart 이벤트가 발생했을때
        // 지도 객체에 이벤트가 전달되지 않도록 이벤트 핸들러로 kakao.maps.event.preventMap 메소드를 등록합니다
        addEventHandle(contentNode, "mousedown", kakao.maps.event.preventMap);
        addEventHandle(contentNode, "touchstart", kakao.maps.event.preventMap);
        // 커스텀 오버레이 컨텐츠를 설정합니다
        placeOverlay.setContent(contentNode);
        // 각 카테고리에 클릭 이벤트를 등록합니다
        addCategoryClickEvent();
        // 엘리먼트에 이벤트 핸들러를 등록하는 함수입니다
        function addEventHandle(target, type, callback) {
          if (target.addEventListener) {
            target.addEventListener(type, callback);
          } else {
            target.attachEvent("on" + type, callback);
          }
        }
        // 카테고리 검색을 요청하는 함수입니다
        function searchPlaces() {
          if (!currCategory) {
            return;
          }
          // 커스텀 오버레이를 숨깁니다
          placeOverlay.setMap(null);
          // 지도에 표시되고 있는 마커를 제거합니다
          removeMarker();
          // HP8: 동물병원/ CE7: 애견카페 / FD6: 편의시설
          switch (currCategory) {
            case "HP8": {
              ps.keywordSearch("동물병원", placesSearchCB, {
                location: new kakao.maps.LatLng(lat, lon),
              });
              break;
            }
            case "CE7": {
              ps.keywordSearch("애견카페", placesSearchCB, {
                location: new kakao.maps.LatLng(lat, lon),
              });
              break;
            }
            case "FD6": {
              ps.keywordSearch("애견", placesSearchCB, {
                location: new kakao.maps.LatLng(lat, lon),
              });
              break;
            }
          }
          //ps.categorySearch(currCategory, placesSearchCB, {useMapBounds:true});
        }
        // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
        function placesSearchCB(data, status, pagination) {
          // console.log(`kang_data!!  ${JSON.stringify(data, null, 2)}`);
          if (status === kakao.maps.services.Status.OK) {
            // 정상적으로 검색이 완료됐으면 지도에 마커를 표출합니다
            displayPlaces(data);
          } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
            // 검색결과가 없는경우 해야할 처리가 있다면 이곳에 작성해 주세요
          } else if (status === kakao.maps.services.Status.ERROR) {
            // 에러로 인해 검색결과가 나오지 않은 경우 해야할 처리가 있다면 이곳에 작성해 주세요
          }
        }
        // 지도에 마커를 표출하는 함수입니다
        function displayPlaces(places) {
          // 몇번째 카테고리가 선택되어 있는지 얻어옵니다
          // 이 순서는 스프라이트 이미지에서의 위치를 계산하는데 사용됩니다
          var order = document
            .getElementById(currCategory)
            .getAttribute("data-order");
          for (var i = 0; i < places.length; i++) {
            // 마커를 생성하고 지도에 표시합니다
            var marker = addMarker(
              new kakao.maps.LatLng(places[i].y, places[i].x),
              order
            );
            // 마커와 검색결과 항목을 클릭 했을 때
            // 장소정보를 표출하도록 클릭 이벤트를 등록합니다
            (function (marker, place) {
              kakao.maps.event.addListener(marker, "click", function () {
                displayPlaceInfo(place);
              });
            })(marker, places[i]);
          }
        }
        // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
        function addMarker(position, order) {
          var imageSrc =
              "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png", // 마커 이미지 url, 스프라이트 이미지를 씁니다
            imageSize = new kakao.maps.Size(27, 28), // 마커 이미지의 크기
            imgOptions = {
              spriteSize: new kakao.maps.Size(72, 208), // 스프라이트 이미지의 크기
              spriteOrigin: new kakao.maps.Point(46, order * 36), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
              offset: new kakao.maps.Point(11, 28), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
            },
            markerImage = new kakao.maps.MarkerImage(
              imageSrc,
              imageSize,
              imgOptions
            ),
            marker = new kakao.maps.Marker({
              position: position, // 마커의 위치
              image: markerImage,
            });
          marker.setMap(map); // 지도 위에 마커를 표출합니다
          markers.push(marker); // 배열에 생성된 마커를 추가합니다
          return marker;
        }
        // 지도 위에 표시되고 있는 마커를 모두 제거합니다
        function removeMarker() {
          for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
          }
          markers = [];
        }
        // 클릭한 마커에 대한 장소 상세정보를 커스텀 오버레이로 표시하는 함수입니다
        function displayPlaceInfo(place) {
          var content =
            '<div class="placeinfo">' +
            '   <a class="title" href="' +
            place.place_url +
            '" target="_blank" title="' +
            place.place_name +
            '">' +
            place.place_name +
            "</a>";
          if (place.road_address_name) {
            content +=
              '    <span title="' +
              place.road_address_name +
              '">' +
              place.road_address_name +
              "</span>" +
              '  <span class="jibun" title="' +
              place.address_name +
              '">(지번 : ' +
              place.address_name +
              ")</span>";
          } else {
            content +=
              '    <span title="' +
              place.address_name +
              '">' +
              place.address_name +
              "</span>";
          }
          content +=
            '    <span class="tel">' +
            place.phone +
            "</span>" +
            "</div>" +
            '<div class="after"></div>';
          contentNode.innerHTML = content;
          placeOverlay.setPosition(new kakao.maps.LatLng(place.y, place.x));
          placeOverlay.setMap(map);
        }
        // 각 카테고리에 클릭 이벤트를 등록합니다
        function addCategoryClickEvent() {
          var category = document.getElementById("category"),
            children = category.children;
          for (var i = 0; i < children.length; i++) {
            children[i].onclick = onClickCategory;
          }
        }
        // 카테고리를 클릭했을 때 호출되는 함수입니다
        function onClickCategory() {
          var id = this.id,
            className = this.className;
          placeOverlay.setMap(null);
          if (className === "on") {
            currCategory = "";
            changeCategoryClass();
            removeMarker();
          } else {
            currCategory = id;
            changeCategoryClass(this);
            searchPlaces();
          }
        }
        // 클릭된 카테고리에만 클릭된 스타일을 적용하는 함수입니다
        function changeCategoryClass(el) {
          var category = document.getElementById("category"),
            children = category.children,
            i;
          for (i = 0; i < children.length; i++) {
            children[i].className = "";
          }
          if (el) {
            el.className = "on";
          }
        }
      }
      // ----강혜경 끝
    },
  },
};
</script>
