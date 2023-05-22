"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[113],{2113:function(o,e,t){t.r(e),t.d(e,{default:function(){return K}});var n=t(3396),a=t(7139);const l={class:"text-end mt-4"},s={class:"table mt-4"},i=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"名稱"),(0,n._)("th",null,"折扣百分比"),(0,n._)("th",null,"到期日"),(0,n._)("th",null,"是否啟用"),(0,n._)("th",null,"編輯")])],-1),p={key:0,class:"text-success"},d={key:1,class:"text-muted"},u={class:"btn-group"},c=["onClick"],r=["onClick"];function h(o,e,t,h,m,_){const b=(0,n.up)("LoadingView"),C=(0,n.up)("PaginationView"),g=(0,n.up)("couponModal"),f=(0,n.up)("delModal");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.Wm)(b,{active:m.isLoading},null,8,["active"]),(0,n._)("div",l,[(0,n._)("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=o=>_.openCouponModal(!0))}," 建立新的優惠券 ")]),(0,n._)("table",s,[i,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(m.coupons,(o=>((0,n.wg)(),(0,n.iD)("tr",{key:o.id},[(0,n._)("td",null,(0,a.zw)(o.title),1),(0,n._)("td",null,(0,a.zw)(o.percent)+"%",1),(0,n._)("td",null,(0,a.zw)(this.$filters.date(o.due_date)),1),(0,n._)("td",null,[o.is_enabled?((0,n.wg)(),(0,n.iD)("span",p,"啟用")):((0,n.wg)(),(0,n.iD)("span",d,"未起用"))]),(0,n._)("td",null,[(0,n._)("div",u,[(0,n._)("button",{class:"btn btn-outline-primary btn-sm",onClick:e=>_.openCouponModal(!1,o)},"編輯",8,c),(0,n._)("button",{class:"btn btn-outline-danger btn-sm",onClick:e=>_.openDelCouponModal(o)},"刪除",8,r)])])])))),128))])]),(0,n.Wm)(C,{pages:m.pagination,onEmitPages:_.getCoupons},null,8,["pages","onEmitPages"]),(0,n.Wm)(g,{ref:"couponModal",coupon:m.tempCoupon,onUpdateCoupon:_.updateCoupon},null,8,["coupon","onUpdateCoupon"]),(0,n.Wm)(f,{ref:"delModal",item:m.tempCoupon,onDelItem:_.delCoupon},null,8,["item","onDelItem"])])}var m=t(9242);const _={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},b={class:"modal-dialog",role:"document"},C={class:"modal-content"},g=(0,n._)("div",{class:"modal-header"},[(0,n._)("h5",{class:"modal-title",id:"exampleModalLabel"},"優惠券"),(0,n._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),f={class:"modal-body"},v={class:"mb-3"},w=(0,n._)("label",{for:"title"},"標題",-1),M={class:"mb-3"},y=(0,n._)("label",{for:"coupon_code"},"優惠碼",-1),k={class:"mb-3"},$=(0,n._)("label",{for:"due_date"},"到期日",-1),x={class:"mb-3"},D=(0,n._)("label",{for:"price"},"折扣百分比",-1),L={class:"mb-3"},V={class:"form-check"},U=(0,n._)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),P={class:"modal-footer"},S=(0,n._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function Z(o,e,t,a,l,s){return(0,n.wg)(),(0,n.iD)("div",_,[(0,n._)("div",b,[(0,n._)("div",C,[g,(0,n._)("div",f,[(0,n._)("div",v,[w,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[0]||(e[0]=o=>l.tempCoupon.title=o),placeholder:"請輸入標題"},null,512),[[m.nr,l.tempCoupon.title]])]),(0,n._)("div",M,[y,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":e[1]||(e[1]=o=>l.tempCoupon.code=o),placeholder:"請輸入優惠碼"},null,512),[[m.nr,l.tempCoupon.code]])]),(0,n._)("div",k,[$,(0,n.wy)((0,n._)("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":e[2]||(e[2]=o=>l.due_date=o)},null,512),[[m.nr,l.due_date]])]),(0,n._)("div",x,[D,(0,n.wy)((0,n._)("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[3]||(e[3]=o=>l.tempCoupon.percent=o),placeholder:"請輸入折扣百分比"},null,512),[[m.nr,l.tempCoupon.percent,void 0,{number:!0}]])]),(0,n._)("div",L,[(0,n._)("div",V,[(0,n.wy)((0,n._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[4]||(e[4]=o=>l.tempCoupon.is_enabled=o),id:"is_enabled"},null,512),[[m.e8,l.tempCoupon.is_enabled]]),U])])]),(0,n._)("div",P,[S,(0,n._)("button",{type:"button",class:"btn btn-primary",onClick:e[5]||(e[5]=e=>o.$emit("update-coupon",l.tempCoupon))},"更新優惠券 ")])])])],512)}var N=t(1339),W={name:"couponModal",data(){return{tempCoupon:{},due_date:""}},props:{coupon:{type:Object,default(){return{}}}},emits:["update-coupon"],watch:{coupon(){this.tempCoupon=this.coupon,console.log(this.tempCoupon.due_date);const o=new Date(1e3*this.tempCoupon.due_date).toISOString().split("T");[this.due_date]=o},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mixins:[N.Z]},j=t(89);const z=(0,j.Z)(W,[["render",Z]]);var I=z,E=t(7447),O=t(3050),T={data(){return{coupons:{},pagination:{},currentPage:1,tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isLoading:!1,isNew:!1}},components:{couponModal:I,delModal:E.Z,PaginationView:O.Z},methods:{getCoupons(o=1){this.currentPage=o,this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/yang-leo-api/admin/coupons?page=${o}`;this.$http.get(e).then((o=>{console.log(o),this.coupons=o.data.coupons,this.pagination=o.data.pagination,this.isLoading=!1}))},openCouponModal(o,e){this.isNew=o,this.isNew?this.tempCoupon={due_date:(new Date).getTime()/1e3,is_enabled:0}:this.tempCoupon={...e};const t=this.$refs.couponModal;t.showModal()},openDelCouponModal(o){this.tempCoupon={...o},this.$refs.delModal.showModal()},updateCoupon(o){if(this.isNew){const e="https://vue3-course-api.hexschool.io/api/yang-leo-api/admin/coupon";this.$http.post(e,{data:o}).then((e=>{console.log(e,o),this.$httpMessageState(e,"新增優惠券"),this.getCoupons(),this.$refs.couponModal.hideModal()}))}else{const o=`https://vue3-course-api.hexschool.io/api/yang-leo-api/admin/coupon/${this.tempCoupon.id}`;this.$http.put(o,{data:this.tempCoupon}).then((o=>{console.log(o),this.$httpMessageState(o,"修改優惠券"),this.getCoupons(),this.$refs.couponModal.hideModal()}))}},delCoupon(){const o=`https://vue3-course-api.hexschool.io/api/yang-leo-api/admin/coupon/${this.tempCoupon.id}`;this.isLoading=!0,this.$http.delete(o).then((o=>{console.log(o,this.tempCoupon),this.$httpMessageState(o,"刪除優惠券"),this.$refs.delModal.hideModal(),this.getCoupons()}))}},created(){this.getCoupons()}};const H=(0,j.Z)(T,[["render",h]]);var K=H}}]);
//# sourceMappingURL=113.a64f9d93.js.map