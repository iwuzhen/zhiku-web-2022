(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{354:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));t(1);var o=t(109),r=t.n(o);function c(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((function(t,o){r.a.get(e,{params:n}).then((function(e){t(e.data)})).catch((function(e){o(e)}))}))}r.a.defaults.timeout=5e3,r.a.defaults.baseURL="",r.a.interceptors.request.use((function(e){return e.data=JSON.stringify(e.data),e.headers={"Content-Type":"application/x-www-form-urlencoded"},e}),(function(e){return Promise.reject(e)})),r.a.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)}))},355:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));t(18);function o(e){if(e)return e.slice(0,10)}},356:function(e,n,t){e.exports=t.p+"img/newsbanner.194a4f0.webp"},359:function(e,n,t){var content=t(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(62).default)("411d94b6",content,!0,{sourceMap:!1})},379:function(e,n,t){"use strict";t(359)},380:function(e,n,t){var o=t(61),r=t(252),c=t(356),w=o(!1),l=r(c);w.push([e.i,".page-news{width:100%;background:#f7f7f7}.page-news .newsBanner{background-image:url("+l+")}.page-news .newsPageCount{min-height:calc(100vh - 616px)}.page-news .newsPageCount .newsItemBox{display:flex;width:100%;padding:45px 0;flex-wrap:wrap;justify-content:space-between;cursor:pointer;border-bottom:1px solid hsla(0,0%,80%,.50196)}.page-news .newsPageCount .newsItemBox:nth-child(4){border-bottom:none}.page-news .newsPageCount .newsItemImg{width:42%;padding-right:30px}.page-news .newsPageCount .newsItemCount{width:58%}.page-news .newsPageCount .newsTitle{font-size:18px;line-height:24px;color:#04142b}.page-news .newsPageCount .newsTime{color:#a1a7bd;line-height:28px;font-size:14px;margin-bottom:15px}.page-news .newsPageCount .newsContent{color:#a1a7bd;line-height:24px;font-size:14px;text-align:justify;margin-bottom:10px}.page-news .newsPageCount .newsLink{color:#04142b;font-size:12px;line-height:24px}.page-news .newsPageCount .newsItemBox:hover .newsLink,.page-news .newsPageCount .newsItemBox:hover .newsTitle{color:#526df9}.page-news .newsPageCount .newsMoreBotton{display:none}.page-news .page-item.active .page-link{background-color:#526df9;border-color:#526df9}.page-news .page-link{color:#526df9}@media (max-width:768px){.page-news .newsPageCount .newsItemBox{padding:0;margin-top:6.6667vw;border-bottom:none}.page-news .newsPageCount .newsTitle{font-size:3.7333vw;line-height:1.7;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.page-news .newsPageCount .newsTime{display:none}.page-news .newsPageCount .newsContent{line-height:1.7;font-size:3.7333vw;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden}.page-news .newsPageCount .mian_Pagination,.page-news .newsPageCount .newsLink{display:none}.page-news .newsPageCount .newsMoreBotton{display:block;text-align:center;color:#526df9;font-size:3.4667vw;padding:10.6667vw 0 6.6667vw}}",""]),e.exports=w},415:function(e,n,t){"use strict";t.r(n);t(1),t(3),t(18);var o=t(354),filter=t(355),r={name:"NewsPage",components:{},filters:{timeFilter:function(e){return Object(filter.a)(e)}},props:{},data:function(){return{currentPage:0,perPage:4,rows:0,newsData:[],hasMore:!0,isMobile:!1}},computed:{},watch:{currentPage:function(e){e&&this.getNewsList()}},created:function(){this.isMobile=1===this.$isMobile,this.getNewsCount()},mounted:function(){},methods:{getNewsCount:function(){this.rows=37,this.currentPage=1},getNewsList:function(){var e=this,n={offset:(this.currentPage-1)*this.perPage,limit:this.perPage};this.isMobile||(this.newsData=[]),Object(o.a)("/_data/news.json",n).then((function(n){try{n.forEach((function(n){e.newsData.push({id:n.news_id,time:n.release_time,abstract:n.abstract,title:n.title,img:n.imgs[0].url,url:n.url})}));var t=(e.currentPage-1)*e.perPage;e.isMobile?e.newsData=e.newsData.slice(0,t+e.perPage):e.newsData=e.newsData.slice(t,t+e.perPage)}catch(n){e.isMobile||(e.newsData=[]),e.hasMore=!1}})).catch((function(e){}))},linkDetail:function(e){e&&window.open(e,"_blank")},getMoreNews:function(){this.rows>(this.currentPage-1)*this.perPage?this.currentPage=this.currentPage+1:this.hasMore=!1}}},c=(t(379),t(49)),component=Object(c.a)(r,(function(){var e=this,n=e._self._c;return n("div",{staticClass:"page-news"},[e._m(0),e._v(" "),n("div",{staticClass:"newsPageCount container"},[e._l(e.newsData,(function(t,o){return n("div",{key:o,staticClass:"newsItemBox",on:{click:function(n){return e.linkDetail(t.url)}}},[n("div",{staticClass:"newsItemImg"},[n("b-img",{attrs:{src:t.img,fluid:"",alt:"image"}})],1),e._v(" "),n("div",{staticClass:"newsItemCount"},[n("div",{staticClass:"newsTitle"},[e._v("\n          "+e._s(t.title)+"\n        ")]),e._v(" "),n("div",{staticClass:"newsTime"},[e._v("\n          "+e._s(e._f("timeFilter")(t.time))+"\n        ")]),e._v(" "),n("div",{staticClass:"newsContent"},[e._v("\n          "+e._s(t.abstract)+"\n        ")]),e._v(" "),n("div",{staticClass:"newsLink"},[e._v("\n          查看更多\n        ")])])])})),e._v(" "),e.newsData.length>0?n("div",{staticClass:"mian_Pagination"},[n("b-pagination",{attrs:{"total-rows":e.rows,"per-page":e.perPage,"hide-goto-end-buttons":"","prev-text":"上一页","next-text":"下一页",align:"center"},model:{value:e.currentPage,callback:function(n){e.currentPage=n},expression:"currentPage"}})],1):e._e(),e._v(" "),n("div",{staticClass:"newsMoreBotton",on:{click:e.getMoreNews}},[e.hasMore?n("span",[e._v("查看更多新闻")]):n("span",{staticStyle:{color:"#ccc"}},[e._v("暂无更多")])])],2)])}),[function(){var e=this,n=e._self._c;return n("div",{staticClass:"main_banner newsBanner"},[n("div",{staticClass:"main_bannerTitle container"},[n("span",{staticClass:"main_bannerTitleZh"},[e._v("新闻动态")]),e._v(" "),n("i",{staticClass:"main_bannerTitleLine"}),e._v(" "),n("span",{staticClass:"main_bannerTitleEn"},[e._v("News")])])])}],!1,null,null,null);n.default=component.exports}}]);