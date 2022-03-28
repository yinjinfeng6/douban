<template>
  <div class="douban">
    <div class="fashion">
      <h1 class="douban-title">
        <div class="head-nav">
          <div class="head-title">&nbsp;时尚&nbsp;</div>
          <p class="head-con">美容、护肤、化妆、育儿</p>
        </div>
      </h1>
      <div class="fashion-con">
        <div class="fashion-l">
          <ul class="fashion-list">
            <li class="fashion-item" v-for="(item, index) in arrL" :key="index">
              <div class="likes-box">
                <div class="count">{{ item.likesCount }}</div>
                <div class="likes">{{ item.likes }}</div>
              </div>
              <div class="bd">
                <div class="bd-title">{{ item.bdTitle }}</div>
                <div class="bd-block">
                  <div class="bd-img">
                    <img :src="item.bdPic" alt="" class="bd-pic" />
                  </div>
                  <div class="bd-con">{{ item.bdCon }}</div>
                </div>
                <div class="source">{{ item.bdForm }}</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="fashion-r">
          <h2 class="hd">时尚类别值得加入的小组</h2>
          <ul class="fashion-rlist">
            <li
              class="fashion-ritem"
              v-for="(item, index) in arrR"
              :key="index"
            >
              <img :src="item.imgSrc" alt="" class="item-img" />
              <div class="fashion-rinfo">
                <div class="rinfo-title">{{ item.title }}</div>
                <div class="rinfo-control">
                  <div class="rinfo-num">{{ item.num }}</div>
                  <div class="rinfo-join">{{ item.join }}</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MyFashion",
  data() {
    return {
      arrL: null,
      arrR: null,
    };
  },
  methods: {
    async getFashionL() {
      let { data } = await axios.get("/api/fashionL");
      this.arrL = data;
    },
    async getFashionR() {
      let { data } = await axios.get("/api/fashionR");
      this.arrR = data;
    },
  },
  created() {
    this.getFashionL();
    this.getFashionR();
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  vertical-align: middle;
}
/* fashion-r开始 */
.fashion-r {
  width: 300px;
  text-align: left;
}
.hd {
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.3;
  color: #666;
}
.fashion-rlist {
  border-top: 1px solid #e5e5e5;
  display: flex;
  flex-direction: column;
}
.fashion-ritem {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e5e5e5;
  color: #666;
}
.item-img {
  width: 48px;
  height: 48px;
}
.fashion-rinfo {
  width: 236px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.rinfo-title {
  font-size: 14px;
  color: #259;
}
.rinfo-title:hover {
  cursor: pointer;
}
.rinfo-control {
  display: flex;
}
.rinfo-num {
  font-size: 13px;
  color: #666;
  margin-right: 10px;
}
.rinfo-num:hover {
  cursor: pointer;
}
.rinfo-join {
  font-size: 13px;
  color: #259;
}
.rinfo-join:hover {
  cursor: pointer;
}
/* fashion-r结束 */
.douban {
  width: 100%;
  padding-top: 102px;
}
.fashion {
  width: 1040px;
  margin: 0 auto;
  margin-bottom: 40px;
}
.douban-title {
  font-size: 26px;
  margin-bottom: 20px;
}
.head-nav {
  display: flex;
  align-items: center;
}
.head-title {
  font-weight: 500;
}
.head-con {
  margin-left: 16px;
  font-size: 12px;
  font-weight: normal;
  color: #666;
}
.fashion-con {
  width: 1040px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.fashion-l {
  width: 675px;
}
.fashion-list {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.fashion-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}
.likes-box {
  padding: 8px 0;
  width: 48px;
  height: 48px;
  box-sizing: border-box;
  line-height: 1.3;
  text-align: center;
  font-size: 13px;
  color: #ca6445;
  background: #fae9da;
}
.bd {
  width: 608px;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-bottom: 10px;
  border-bottom: 1px solid #e5e5e5;
}
.bd-title {
  margin-bottom: 12px;
  color: #259;
  font-size: 15px;
  font-weight: 500;
}
.bd-title:hover {
  cursor: pointer;
}
.bd-block {
  width: 100%;
  padding: 10px;
  color: #999;
  box-sizing: border-box;
  background: #f9f9f9;
  display: flex;
  justify-content: space-between;
}
.bd-img {
  position: relative;
  width: 60px;
  height: 60px;
  overflow: hidden;
  white-space: nowrap;
}
.bd-pic {
  position: absolute;
  width: 120px;
  height: 120px;
  top: -30px;
  left: -30px;
  text-align: center;
}
.bd-con {
  width: 488px;
}
.bd-con:hover {
  cursor: pointer;
}
.source {
  margin-top: 10px;
  color: #666;
}
.source:hover {
  cursor: pointer;
}
</style>
