<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "웰럽 무릎/허리/발목/손목 보호대 BEST 6종 모음",
          thumbnail: "https://post-phinf.pstatic.net/MjAxOTA0MjZfMjc2/MDAxNTU2MjE2Njc1NjAz.5GjTVBEPY0kd2SExs3uiK2eeZ1K6pCae4MwViLxf8rcg.BN2Tr6BXUaFG_IJJOB4pSFLRdHqprgQxk-ugh-W0uZ4g.JPEG/KakaoTalk_20190426_032248653.jpg?type=w800_q75"
        },
        {
          id: 2,
          title: "웰럽 무릎/허리/발목/손목 보호대 BEST 6종 모음",
          thumbnail: "https://post-phinf.pstatic.net/MjAxOTA0MjZfMjc2/MDAxNTU2MjE2Njc1NjAz.5GjTVBEPY0kd2SExs3uiK2eeZ1K6pCae4MwViLxf8rcg.BN2Tr6BXUaFG_IJJOB4pSFLRdHqprgQxk-ugh-W0uZ4g.JPEG/KakaoTalk_20190426_032248653.jpg?type=w800_q75"
        },
        {
          id: 3,
          title: "웰럽 무릎/허리/발목/손목 보호대 BEST 6종 모음",
          thumbnail: "https://post-phinf.pstatic.net/MjAxOTA0MjZfMjc2/MDAxNTU2MjE2Njc1NjAz.5GjTVBEPY0kd2SExs3uiK2eeZ1K6pCae4MwViLxf8rcg.BN2Tr6BXUaFG_IJJOB4pSFLRdHqprgQxk-ugh-W0uZ4g.JPEG/KakaoTalk_20190426_032248653.jpg?type=w800_q75"
        },
        {
          id: 4,
          title: "웰럽 무릎/허리/발목/손목 보호대 BEST 6종 모음",
          thumbnail: "https://post-phinf.pstatic.net/MjAxOTA0MjZfMjc2/MDAxNTU2MjE2Njc1NjAz.5GjTVBEPY0kd2SExs3uiK2eeZ1K6pCae4MwViLxf8rcg.BN2Tr6BXUaFG_IJJOB4pSFLRdHqprgQxk-ugh-W0uZ4g.JPEG/KakaoTalk_20190426_032248653.jpg?type=w800_q75"
        },
        {
          id: 5,
          title: "웰럽 무릎/허리/발목/손목 보호대 BEST 6종 모음",
          thumbnail: "https://post-phinf.pstatic.net/MjAxOTA0MjZfMjc2/MDAxNTU2MjE2Njc1NjAz.5GjTVBEPY0kd2SExs3uiK2eeZ1K6pCae4MwViLxf8rcg.BN2Tr6BXUaFG_IJJOB4pSFLRdHqprgQxk-ugh-W0uZ4g.JPEG/KakaoTalk_20190426_032248653.jpg?type=w800_q75"
        },
      ],
      currentDate: (new Date()).toLocaleDateString()
    }
  },
  methods: {}
}
</script>

<template>
  <div class="container">
    <div class="card" v-for="post in posts" :key="post.id">
      <router-link :to="`/posts/${post.id}`">
        <img class="thumbnail" :src="post.thumbnail" alt="{{ post.title }}"/>
        <div class="details">
          <div class="title">{{ post.title }}</div>
          <div class="discount-info">
            <div class="discount-percentage">52%</div>
            <div class="price">14,900원</div>
          </div>
          <div class="viewers">369,197명이 구경함</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.card {
  flex: 1 0 400px; /* grow(여유공간 차지 비율) shrink(부족한 공간 차지 비율) basis(최소값) */
  box-shadow: 1px 1px 3px gray;
  margin: 2px;
}

.thumbnail {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
}

.details {
  padding: 10px;

  .title {
    font-size: 0.8rem;
  }

  .discount-info {
    margin-top: 3px;
    display: flex;
    align-content: center;
    font-size: 1.1rem;
    font-weight: bold;

    .discount-percentage {
      color: red;
    }

    .price {
      margin-left: 5px;
    }
  }

  .viewers {
    margin-top: 3px;
    font-size: 0.7rem;
    color: gray;
  }
}


</style>
