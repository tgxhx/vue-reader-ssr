<template>
  <div class="similar">
    <router-link :to="`/bookdetail/${like.id}`">
      <div class="similar-img">
        <img :src="like.images" alt="" @error="loadImage($event)">
      </div>
      <p>{{like.name}}</p>
    </router-link>
  </div>
</template>

<script>
  import axios from 'axios'
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        bookDetail: {}
      }
    },
    props: {
      like: {
        type: Object,
        required: true
      }
    },
    computed: {
      ...mapState([])
    },
    created() {
      // this.getBookDetail(this.like)
    },
    methods: {
      getBookDetail(id) {
        this.$router.push(`bookdetail/${id}`)
        /*axios.get(`${this.common.api}/booklist?id=${id}`).then((res) => {
          this.bookDetail = res.data
        })*/
      },
      toBookDetail(id) {
        this.$router.push({path: '/bookdetail/' + id})
        document.body.scrollTop = 0
      },
      loadImage(e) {
        this.common.defaultImage(e)
      }
    },
    filters: {},
    watch: {
      /* like(val, old) {
         this.getBookDetail(val)
       }*/
    }
  }
</script>

<style lang="less">
  .similar {
    width: 110px;
    height: 165px;
    > a {
      display: block;
    }
    .similar-img {
      height: 140px;
    }
    img {
      width: 100%;
      height: 100%;
      &[src=""] {
        opacity: 0;
      }
    }
  }
</style>
