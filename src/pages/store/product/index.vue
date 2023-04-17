<template>
  <div class="services_section layout_padding">
    <div class="container">
      <h1 class="services_taital">
        <span>스토어</span>
        <img
          src="@/assets/images/offMeeting/paw-print.png"
          style="width: 70px"
        />
        <span style="color: #1f1f1f">멍멍스토어</span>
      </h1>

      <ProductCategory />

      <!--새로나온 친구들 리스트-->
      <div class="con prod-list hot-stuff">
        <nav class="prod-list-1">
          <div class="prod-list-title">멍멍스토어 상품들</div>
          <ul class="row">
            <li class="cell">
              <div class="img-box">
                <span
                  >prod-img-1<img
                    src="https://images-dev.wefluffy.co.kr/product-option/1192/modify_detail_056.webp"
                    alt=""
                    class="img1"
                /></span>
              </div>
              <div class="title">프로플랜 센서티브 스킨 앤 스토막 어덜트</div>
              <div class="price"><span>87,000원</span></div>
            </li>
            <li class="cell">
              <div class="img-box">
                <span
                  >prod-img-2<img
                    src="https://images-dev.wefluffy.co.kr/product-option/1234/1000010255_detail_034.webp"
                    alt=""
                    class="img2"
                /></span>
              </div>
              <div class="title">울트라 그레인프리 닭고기</div>
              <div class="price"><span>142,400원</span></div>
            </li>
            <li class="cell">
              <div class="img-box">
                <span
                  >prod-img-3<img
                    src="https://images-dev.wefluffy.co.kr/product-option/1143/register_detail_095.webp"
                    alt=""
                    class="img3"
                /></span>
              </div>
              <div class="title">스페셜 특수견 프로</div>
              <div class="price"><span>29,200원</span></div>
            </li>
            <li class="cell">
              <div class="img-box">
                <span
                  >prod-img-4<img
                    src="https://images.pet-high.com/product-option/1204/natural_balance2.webp"
                    alt=""
                    class="img4"
                /></span>
              </div>
              <div class="title">LID 고구마&연어 알러지 포뮬라</div>
              <div class="price"><span>82,600원</span></div>
            </li>
            <li class="cell">
              <div class="img-box">
                <span
                  >prod-img-5<img
                    src="https://images-dev.wefluffy.co.kr/product-option/2618/modify_detail_128.webp"
                    alt=""
                    class="img5"
                /></span>
              </div>
              <div class="title">후각놀이 킁킁볼</div>
              <div class="price"><span>13,500원</span></div>
            </li>
            <li class="cell">
              <div class="img-box">
                <span
                  >prod-img-6<img
                    src="https://images-dev.wefluffy.co.kr/product-option/2619/modify_detail_180.webp"
                    alt=""
                    class="img6"
                /></span>
              </div>
              <div class="title">멍도날드 후각놀이 매트</div>
              <div class="price"><span>19,300원</span></div>
            </li>
            <li class="cell">
              <div class="img-box">
                <span
                  >prod-img-7<img
                    src="https://shopping-phinf.pstatic.net/main_8303605/83036053704.jpg?type=f300"
                    alt=""
                    class="img7"
                /></span>
              </div>
              <div class="title">개코볼 노즈워크 강아지 장난감 강아지공</div>
              <div class="price"><span>23,400원</span></div>
            </li>
            <li class="cell">
              <div class="img-box">
                <span
                  >prod-img-8<img
                    src="https://shop-phinf.pstatic.net/20230414_7/1681454943916lVMSV_JPEG/42415862824398183_1730661470.jpg?type=f300"
                    alt=""
                    class="img8"
                /></span>
              </div>
              <div class="title">얼레벌레 애벌레 터그 장난감</div>
              <div class="price"><span>12,900원</span></div>
            </li>
          </ul>
        </nav>
        <span
          id="spanId"
          @click="removeHideFunc"
          style="margin-top: 50px"
          class="more-prod hide"
          >상품 더 보기</span
        >
        <ul id="ulId" class="row prod-list-1-2 hide">
          <li class="cell">
            <div class="img-box">
              <span
                ><img
                  src="https://images-dev.wefluffy.co.kr/product-option/8888/modify_detail_029.webp"
                  alt=""
                  class="img1"
              /></span>
            </div>
            <div class="title">도라에몽 하네스 S</div>
            <div class="price"><span>18,700원</span></div>
          </li>
          <li class="cell">
            <div class="img-box">
              <span
                ><img
                  src="https://images-dev.wefluffy.co.kr/product-option/4839/modify_detail_051.webp"
                  alt=""
                  class="img2"
              /></span>
            </div>
            <div class="title">매쉬 하네스(브라운)L</div>
            <div class="price"><span>19,000원</span></div>
          </li>
          <li class="cell">
            <div class="img-box">
              <span
                ><img
                  src="https://shopping-phinf.pstatic.net/main_8284201/82842012334.jpg?type=f300"
                  alt=""
                  class="img3"
              /></span>
            </div>
            <div class="title">강아지 슬링백</div>
            <div class="price"><span>29,500원</span></div>
          </li>
          <li class="cell">
            <div class="img-box">
              <span
                ><img
                  src="https://shopping-phinf.pstatic.net/main_8483522/84835221258.jpg?type=f300"
                  alt=""
                  class="img4"
              /></span>
            </div>
            <div class="title">포그니 강아지 이동가방</div>
            <div class="price"><span>89,000원</span></div>
          </li>
          <li class="cell">
            <div class="img-box">
              <span
                ><img
                  src="https://images-dev.wefluffy.co.kr/product-option/1794/addgoods_7jik66as7kea64sqide0ca%253d%253d.webp"
                  alt=""
                  class="img5"
              /></span>
            </div>
            <div class="title">건강한 덴탈껌 오리지널</div>
            <div class="price"><span>40,20원</span></div>
          </li>
          <li class="cell">
            <div class="img-box">
              <span
                ><img
                  src="https://images-dev.wefluffy.co.kr/product-option/8183/1000011243_detail_020.webp"
                  alt=""
                  class="img6"
              /></span>
            </div>
            <div class="title">동결건조 큐브 오징어</div>
            <div class="price"><span>18,000원</span></div>
          </li>
          <li class="cell">
            <div class="img-box">
              <span
                ><img
                  src="https://images-dev.wefluffy.co.kr/product-option/8509/1000011455_detail_273.webp"
                  alt=""
                  class="img7"
              /></span>
            </div>
            <div class="title">메타멍스</div>
            <div class="price"><span>1,600원</span></div>
          </li>
          <li class="cell">
            <div class="img-box">
              <span
                ><img
                  src="https://images-dev.wefluffy.co.kr/product-option/6333/1000010672_detail_058.webp"
                  alt=""
                  class="img8"
              /></span>
            </div>
            <div class="title">띵커바우츄 오리 딩고껌</div>
            <div class="price"><span>9,870원</span></div>
          </li>
        </ul>
      </div>

      <!--카드-->
      <div class="card-box con text-align-center">
        <ul class="row">
          <li class="cell">
            <a href="#">
              <div class="text">강아지 <br />패션트렌드</div>
              <img
                id="product-card"
                src="@/assets/images/store/product/dog-card-3.jpg"
                alt=""
              />
            </a>
          </li>
          <li class="cell">
            <a href="#">
              <div class="text">산책할 때 <br />필요한 건?</div>
              <img
                id="product-card"
                src="@/assets/images/store/product/dog-card-2.png"
                alt=""
              />
            </a>
          </li>
          <li class="cell">
            <a href="#">
              <div class="text">스마트함을 <br />더하는 인싸템</div>
              <img
                id="product-card"
                src="@/assets/images/store/product/dog-card-1.png"
                alt=""
              />
            </a>
          </li>
          <li class="cell">
            <a href="#">
              <div class="text">간식 충전할 <br />시간이에요</div>
              <img
                id="product-card"
                src="@/assets/images/store/product/dog-card-8.jpg"
                alt=""
              />
            </a>
          </li>
        </ul>
        <!--어피치 리스트-->
        <div class="con prod-list hot-stuff">
          <nav class="prod-list-1">
            <a href="" class="prod-list-bn relative">
              <div class="top-text">강아지 MBTI<br />DBTI 하러가기!</div>
              <!-- <div class="bottom-text">잔망둥이 어피치가 한 곳에!</br>어피치를 '픽'해보아요</!br></div> -->
              <div class="img-box">
                <img
                  src="https://t1.daumcdn.net/friends/prod/theme/themeAPEACH_PC.png"
                  alt=""
                />
              </div>
            </a>
          </nav>
        </div>
      </div>

      <!--모바일 풋터 메뉴-->
      <div class="mobile-footer mobile">
        <h3>혹시, 아직 못정했나요?</h3>
        <nav class="footer-menu">
          <ul class="row">
            <li class="cell"><a href="#">전체</a></li>
            <li class="cell"><a href="#">사료</a></li>
            <li class="cell"><a href="#">간식 & 건강</a></li>
            <li class="cell"><a href="#">위생 & 배변</a></li>
            <li class="cell"><a href="#">미용 & 목욕</a></li>
            <li class="cell"><a href="#">의류 & 악세사리</a></li>
            <li class="cell"><a href="#">장난감</a></li>
            <li class="cell"><a href="#">홈으로...</a></li>
          </ul>
        </nav>
      </div>

      <div class="scrollbar" id="style-1">
        <div class="force-overflow"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from "@/pages/store/product/index.vue";
import ProductCategory from "@/components/store/product/ProductCategory.vue";
import { onMounted } from "vue";

export default {
  name: "ProductList",
  components: {
    ProductList,
    ProductCategory,
  },
  setup() {
    const removeHideFunc = () => {
      document.getElementById("ulId").classList.remove("hide");
      document.getElementById("spanId").remove();
    };

    onMounted(() => {
      checkFunc();
    });

    const checkFunc = () => {
      let overlay = null;
      let headerSection = null;

      check();

      function check() {
        if (overlay == null) {
          overlay = document.getElementsByClassName("overlay")[0];
        }
        if (headerSection == null) {
          headerSection = document.getElementsByClassName("header_section")[0];
        }
      }

      headerSection.classList.add("background_bg");
      document.getElementById("bannerDiv").style.display = "none";
    };

    return {
      checkFunc,
      removeHideFunc,
    };
  },
};
</script>

<style scoped>
@import "@/assets/css/store/product/list/product-list.css";
</style>
