<script>
import {fetchPosts} from "@/api/posts";

export default {
  data() {
    return {
      posts: [],
      currentDate: (new Date()).toLocaleDateString()
    }
  },
  methods: {
    async fetchData() {
      try {
        const {data: posts} = await fetchPosts();
        this.posts = posts;
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.fetchData();
  },
}
</script>

<template>
  <v-row>
    <v-col v-for="post in posts" :key="post.id" cols="12" sm="12" md="6" xl="4">
      <v-card :to="`/posts/${post.id}`" class="card">
        <v-img
            src="https://post-phinf.pstatic.net/MjAxOTA0MjZfMjc2/MDAxNTU2MjE2Njc1NjAz.5GjTVBEPY0kd2SExs3uiK2eeZ1K6pCae4MwViLxf8rcg.BN2Tr6BXUaFG_IJJOB4pSFLRdHqprgQxk-ugh-W0uZ4g.JPEG/KakaoTalk_20190426_032248653.jpg?type=w800_q75"
            :alt="post.title"
            height="300"
            :cover="true"
            class="thumbnail"
        ></v-img>
        <v-card-text class="details">
          <div class="title">{{ post.title }}</div>
          <div class="discount-info">
            <div class="discount-percentage">52%</div>
            <div class="price">14,900원</div>
          </div>
          <div class="viewers">369,197명이 구경함</div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.details {
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
