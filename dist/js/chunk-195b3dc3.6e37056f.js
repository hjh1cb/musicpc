(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-195b3dc3"],{"09a4":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comments"},[n("div",{staticClass:"comment_hd"},[n("h2",[t._v("评论"),n("em",[t._v("共"+t._s(t.total)+"条评论")])]),t.userInfo?n("div",{staticClass:"userInfo"},[n("span",[t._v(t._s(t.userInfo.nickname))]),n("el-image",{staticClass:"avatar",attrs:{src:t.userInfo.avatarUrl}},[n("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[n("i",{staticClass:"iconfont icon-placeholder"})])])],1):t._e()]),n("el-form",{staticClass:"comment_box"},[n("div",{staticClass:"comment_textarea"},[n("div",{staticClass:"pre"},[t._v(t._s(t.msg))]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],staticClass:"J_inpBox inp-paragraph",attrs:{name:"leave_msg",id:"leave_msg",placeholder:"期待你的神评论……"},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}})]),n("div",{staticClass:"comment_box_footer"},[n("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.subComment}},[t._v("评论")]),n("span",{staticClass:"comment_limit"},[n("em",{staticClass:"num"},[t._v(t._s(t.msg.length))]),t._v("/"+t._s(t.maxLen))])],1)]),n("div",{staticClass:"comment_area"},[t.comments.length?[t._l(t.comments,(function(e,s){return n("div",{key:e.commentId+s+"",staticClass:"comment_item"},[n("router-link",{staticClass:"comment_avatar",attrs:{to:{path:"/user",query:{id:e.user.userId}}}},[n("el-image",{attrs:{src:e.user.avatarUrl+"?param=120y120"}},[n("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[n("i",{staticClass:"iconfont icon-placeholder"})])])],1),n("div",{staticClass:"comment_info"},[n("router-link",{attrs:{to:{path:"/user",query:{id:e.user.userId}}}},[t._v(t._s(e.user.nickname))]),n("div",{staticClass:"comment_content"},[t._v(" "+t._s(e.content)+" ")]),t._l(e.beReplied,(function(e){return n("div",{key:e.beRepliedCommentId,staticClass:"comment_reply"},[n("router-link",{attrs:{to:{path:"/user",query:{id:e.user.userId}}}},[t._v(t._s(e.user.nickname))]),t._v(": "+t._s(e.content)+" ")],1)})),n("div",{staticClass:"comment_footer"},[n("div",{staticClass:"comment_time"},[t._v(t._s(t.$utils.formatMsgTime(e.time)))]),n("div",{staticClass:"comment_oper"},[t.userInfo&&t.userInfo.userId===e.user.userId?n("em",{staticClass:"comment_del",on:{click:function(n){return t.delComment(e)}}},[n("i",{staticClass:"iconfont icon-del"})]):t._e(),n("span",{class:[e.liked?"active":""],on:{click:function(n){return t.likeComment(e)}}},[n("i",{staticClass:"iconfont icon-praise"}),t._v("("+t._s(e.likedCount)+")")]),n("span",{staticClass:"replyComment",on:{click:function(n){return t.replyComment(e,s)}}},[n("i",{staticClass:"iconfont icon-comment"})])])]),e.isHot?n("div",{staticClass:"isHot"},[n("i",{staticClass:"iconfont icon-choicest"})]):t._e(),n("transition",{attrs:{name:"fade",mode:"out-in"}},[t.isShowReply(e,s)?n("replyComment",{attrs:{params:e},on:{replyMsg:t.replyMsg}}):t._e()],1)],2)],1)})),n("div",{staticClass:"pagination"},[n("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:this.total},on:{"current-change":t.currentChange}})],1)]:n("div",{staticClass:"comments_status"},[t.isEmpty?n("div",{staticClass:"empty"},[t._m(0),n("p",[t._v("暂无留言")])]):n("div",{staticClass:"loading"},[t._v("评论加载中...")])])],2)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("i",{staticClass:"iconfont icon-empty-main"})])}],a=(n("99af"),n("d81d"),n("a9e3"),n("2909")),r=(n("96cf"),n("1da1")),o=n("5530"),m=n("2f62"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"reply-comment"},[n("h3",[t._v("我回复@"+t._s(t.params.user.nickname)+":")]),n("div",{staticClass:"comment_textarea"},[n("div",{staticClass:"pre"},[t._v(t._s(t.msg))]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],staticClass:"J_inpBox inp-paragraph",attrs:{name:"leave_msg",id:"leave_msg",placeholder:"期待你的神评论……"},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}})]),n("div",{staticClass:"comment_box_footer"},[n("span",{staticClass:"comment_limit"},[n("em",{staticClass:"num"},[t._v(t._s(t.msg.length))]),t._v("/"+t._s(t.maxLen))]),n("el-button",{attrs:{type:"primary",size:"mini",round:""},on:{click:t.subReplyComment}},[t._v("评论")])],1)])},l=[],u={name:"replyComment",components:{},props:["params"],data:function(){return{msg:"",maxLen:140}},computed:{},methods:{subReplyComment:function(){this.$emit("replyMsg",this.msg)}},watch:{msg:function(){this.msg=this.maxLen>=this.msg?this.msg:this.msg.substring(0,this.maxLen)}}},d=u,p=(n("c761"),n("2877")),h=Object(p["a"])(d,c,l,!1,null,"0b3f7d27",null),f=h.exports,g={name:"Comments",components:{replyComment:f},props:{type:{type:Number,default:0},id:{type:String,default:"0"}},data:function(){return{msg:"",maxLen:140,curId:this.id,limit:20,offset:0,before:0,hotComments:[],comments:[],total:0,currentPage:0,isEmpty:!1,replyCommentId:0,replyIndex:-1}},computed:Object(o["a"])(Object(o["a"])({},Object(m["c"])(["isLogin","userInfo"])),{},{isShowReply:function(){return function(t,e){return t.commentId===this.replyCommentId&&this.replyIndex===e}}}),mounted:function(){this.getComment()},methods:Object(o["a"])(Object(o["a"])({},Object(m["d"])(["setLoginDialog"])),{},{getComment:function(){switch(this.type){case 0:this.getSongComment();break;case 1:this.getMvComment();break;case 3:this.getAlbumComment();break;case 5:this.getVideoComment();break}},getSongComment:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.commentSong({id:t.curId,limit:t.limit,offset:t.offset,before:t.before});case 2:n=e.sent,s=n.data,t.msgHandler(s);case 5:case"end":return e.stop()}}),e)})))()},getMvComment:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.commentMv({id:t.curId,limit:t.limit,offset:t.offset,before:t.before});case 2:n=e.sent,s=n.data,t.msgHandler(s);case 5:case"end":return e.stop()}}),e)})))()},getAlbumComment:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.albumComment({id:t.curId,limit:t.limit,offset:t.offset,before:t.before});case 2:n=e.sent,s=n.data,t.msgHandler(s);case 5:case"end":return e.stop()}}),e)})))()},getVideoComment:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.commentVideo({id:t.curId,limit:t.limit,offset:t.offset,before:t.before});case 2:n=e.sent,s=n.data,t.msgHandler(s);case 5:case"end":return e.stop()}}),e)})))()},msgHandler:function(t){if(200!==t.code)return this.$msg.error("数据请求失败");this.total=t.total,this.hotComments=t.hotComments||[],this.hotComments.map((function(t){return t.isHot=!0,t})),this.comments=[].concat(Object(a["a"])(this.hotComments),Object(a["a"])(t.comments)),this.isEmpty=0===this.before&&!this.comments.length},commentHandler:function(t,e,n){var s=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){var a,r,o;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a={t:t,type:s.type,id:s.curId,content:e,commentId:n},i.next=3,s.$http.comment(a);case 3:if(r=i.sent,o=r.data,200===o.code){i.next=7;break}return i.abrupt("return",s.$msg.error("数据请求失败"));case 7:s.msg="",s.getComment(),0===t?s.$msg.success("删除评论成功！"):1===t?s.$msg.success("评论成功！"):2===t&&(s.$msg.success("回复评论成功！"),s.replyCommentId=0,s.replyIndex=-1);case 10:case"end":return i.stop()}}),i)})))()},subComment:function(){this.isLogin?this.commentHandler(1,this.msg):this.setLoginDialog(!0)},delComment:function(t){var e=this;this.$msgBox.confirm("确定删除评论？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",center:!0}).then((function(){e.commentHandler(0,"",t.commentId)})).catch((function(){}))},replyComment:function(t,e){this.isLogin?(this.replyCommentId=this.replyCommentId===t.commentId&&this.replyIndex===e?0:t.commentId,this.replyIndex=e):this.setLoginDialog(!0)},replyMsg:function(t){this.isLogin?this.commentHandler(2,t,this.replyCommentId):this.setLoginDialog(!0)},likeComment:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function n(){var s,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.isLogin){n.next=3;break}return e.setLoginDialog(!0),n.abrupt("return");case 3:return n.next=5,e.$http.commentLike({id:e.curId,cid:t.commentId,t:Number(!t.liked),type:e.type});case 5:if(s=n.sent,i=s.data,200===i.code){n.next=9;break}return n.abrupt("return",e.$msg.error("数据请求失败"));case 9:e.getComment();case 10:case"end":return n.stop()}}),n)})))()},currentChange:function(t){this.offset=(t-1)*this.limit,this.getComment()}}),watch:{id:function(t,e){this.curId=t,this.offset=0,this.getComment()},msg:function(){this.msg=this.maxLen>=this.msg?this.msg:this.msg.substring(0,this.maxLen)}}},v=g,C=(n("25cd"),Object(p["a"])(v,s,i,!1,null,"005fd303",null));e["a"]=C.exports},"25cd":function(t,e,n){"use strict";var s=n("aed7"),i=n.n(s);i.a},ac94:function(t,e,n){},aed7:function(t,e,n){},c761:function(t,e,n){"use strict";var s=n("ac94"),i=n.n(s);i.a}}]);
//# sourceMappingURL=chunk-195b3dc3.6e37056f.js.map