<template>
  <div class="component-partner">
    <b-container class="partner-panel">
      <div class="main_title">
        <span>合作伙伴</span>
      </div>
      <div v-if="!isMobile" class="partnerListBox">
        <ul ref="partnerList" :style="{left: ListLeft+'px'}">
          <li v-for="(item, index) in partnerImgs" :key="index">
            <div>
              <b-img :src="item.img" fluid alt="image" @load="imgLoading" />
            </div>
          </li>
          <li v-for="(item, index) in partnerImgs" :key="'0'+index">
            <div>
              <b-img :src="item.img" fluid alt="image" @load="imgLoading" />
            </div>
          </li>
        </ul>
      </div>
      <div v-else class="partnerMobileListBox">
        <b-row>
          <b-col v-for="(item, index) in partnerImgs" :key="index" cols="4">
            <div class="mobileImgBox">
              <b-img :src="item.img" fluid alt="image" />
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
import { $get } from '~/plugins/axios'
export default {
  name: 'PartnerBox',
  components: {},
  props: {},
  data () {
    return {
      partnerImgs: [],
      isMobile: false,
      ListLeft: 0,
      loadingNum: 0
    }
  },
  computed: {},
  watch: {},
  created () {
    this.isMobile = this.$isMobile === 1
    this.partnerImgs = []
    this.getImages()
  },
  mounted () {
  },
  methods: {
    getImages () {
      // $get('/api/partners').then((res) => {
      $get('/_data/partners.json').then((res) => {
        if (res) {
          res.forEach((item) => {
            this.partnerImgs.push({
              img: item.imgs[0].url
            })
          })
        }
      }).catch((rej) => {
        this.partnerImgs = []
      })
    },
    imgLoading () {
      this.loadingNum++
      if (this.loadingNum === this.partnerImgs.length * 2) {
        this.$nextTick(() => {
          this.imgMove()
        })
      }
    },
    imgMove () {
      if (this.isMobile) { return false }
      const _dom = this.$refs.partnerList
      const _w = _dom.scrollWidth
      setInterval(() => {
        this.ListLeft -= 5
        if (0 - this.ListLeft > _w / 2) {
          this.ListLeft = 0
        }
      }, 100)
    }
  }
}
</script>

<style lang="less">
.component-partner{
  padding: 40px 0 60px;
  background: #fff;
  >.container{
    padding: 0;
    .partnerListBox{
      position: relative;
      width: 100%;
      height: 90px;
      overflow: hidden;
      &::before{
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        width: 100px;
        height: 100%;
        background: linear-gradient(to right,rgba(255,255,255,1), rgba(255,255,255,0));
        z-index: 2;
      }
      &::after{
        position: absolute;
        content: "";
        right: 0;
        top: 0;
        width: 100px;
        height: 100%;
        background: linear-gradient(to left,rgba(255,255,255,1), rgba(255,255,255,0));
      }
      ul{
        width: auto;
        position: absolute;
        left: 0;
        top: 0;
        height: 90px;
        white-space: nowrap;
        li{
          display: inline-block;
          max-width: 200px;
          height: 90px;
          padding: 0 20px;
          vertical-align:middle;
          div{
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
          }
        }
      }
      .img-fluid{
        max-height: 100%;
      }
    }
  }
}

@media (max-width: 576px ) {
  .component-partner{
    padding: 0;
    .partnerMobileListBox{
      position: relative;
      width: 100%;
      padding: 4vw 4vw 12vw;
      .mobileImgBox{
        width: 100%;
        height: 15vw;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          max-height: 100%;
        }
      }
    }
  }
}
</style>
