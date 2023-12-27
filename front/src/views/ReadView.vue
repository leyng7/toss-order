<script>
export default {
  props: ['postId'],
  data() {
    return {
      post: {
        id: 1,
        title: "웰럽 무릎/허리/발목/손목 보호대 BEST 6종 모음",
        thumbnail: "https://post-phinf.pstatic.net/MjAxOTA0MjZfMjc2/MDAxNTU2MjE2Njc1NjAz.5GjTVBEPY0kd2SExs3uiK2eeZ1K6pCae4MwViLxf8rcg.BN2Tr6BXUaFG_IJJOB4pSFLRdHqprgQxk-ugh-W0uZ4g.JPEG/KakaoTalk_20190426_032248653.jpg?type=w800_q75"
      },
    }
  },
  methods: {}
}
</script>

<template>
  <div class="product-container">
    <div class="product-image">
      <img class="image" :src="post.thumbnail" :alt="post.title">
    </div>
    <div class="product-info">
      <div class="brand">매일유업</div>
      <div class="product-name">아몬드 브리즈</div>
      <div class="viewers">377,879명 구경함</div>
      <div class="discount-info">
        <div class="discount-percentage">52%</div>
        <div class="current-price">14,900원</div>
      </div>
      <div class="original-price">
        <del>31,200원</del>
      </div>
      <div class="shipping-info">배송비 무료, 이 상품 배송은 평균 1~6일 걸려요</div>
      <div class="rating">
        <div class="star-icons">⭐⭐⭐⭐⭐</div>
        <div class="average-rating">4.8</div>
      </div>
    </div>
    <div class="tabs">
      <div class="tab active">정보</div>
      <div class="tab">리뷰</div>
    </div>
    <div class="content"></div>
  </div>
</template>

<style scoped>
.image {
  width: 100%;
  max-height: 600px;
  object-fit: cover;
}

.product-info {
  padding: 5px;
}

.brand {
  font-size: 0.9rem;
  color: gray;
}

.product-name {

}

.viewers {
  margin-top: 3px;
  font-size: 0.7rem;
  color: gray;
}

.discount-info {
  margin-top: 10px;
  display: flex;
  align-content: center;
  font-size: 1.1rem;
  font-weight: bold;
}

.discount-percentage {
  color: red;
}

.price {
  margin-left: 5px;
}

.original-price {
  font-size: 0.9rem;
  color: rgb(128, 128, 128);
}

.shipping-info {
  margin-top: 10px;
  font-size: 0.9rem;
  color: rgb(128, 128, 128);
}

.rating {
  align-items: baseline;
  display: flex;
}

.average-rating {
  margin-left: 5px;
}

.tabs {
  display: flex;
  .tab {
    flex-grow: 1;
    text-align: center;
    padding: 10px;
  }
  .active {
    border-bottom: black 1px solid;
  }
}
</style>