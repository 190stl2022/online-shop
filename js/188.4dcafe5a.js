"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[188],{9188:function(t,i,s){s.r(i),s.d(i,{default:function(){return q}});var a=s(3396),e=s(7139);const r={class:"container"},c={"aria-label":"breadcrumb"},o={class:"breadcrumb"},d={class:"breadcrumb-item"},u={class:"breadcrumb-item active","aria-current":"page"},l={class:"row justify-content-center"},n={class:"col-8"},p=["src"],h={class:"col-4"},g={key:0,class:"h5"},m={key:1,class:"h6"},_={key:2,class:"h5"},b=(0,a._)("hr",null,null,-1),v=["disabled"],w={key:0,class:"spinner-grow spinner-grow-sm text-danger",role:"status"},k=(0,a._)("span",{class:"visually-hidden"},"Loading...",-1),y=[k];function f(t,i,s,k,f,z){const I=(0,a.up)("Loading"),$=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(I,{active:t.isLoading},null,8,["active"]),(0,a._)("div",r,[(0,a._)("nav",c,[(0,a._)("ol",o,[(0,a._)("li",d,[(0,a.Wm)($,{to:"/user/cart"},{default:(0,a.w5)((()=>[(0,a.Uk)("購物車")])),_:1})]),(0,a._)("li",u,(0,e.zw)(f.product.title),1)])]),(0,a._)("div",l,[(0,a._)("article",n,[(0,a._)("h2",null,(0,e.zw)(f.product.title),1),(0,a._)("div",null,(0,e.zw)(f.product.content),1),(0,a._)("div",null,(0,e.zw)(f.product.description),1),(0,a._)("img",{src:f.product.imageUrl,alt:"",class:"img-fluid mb-3"},null,8,p)]),(0,a._)("div",h,[f.product.price?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",g,(0,e.zw)(f.product.origin_price)+" 元",1)),f.product.price?((0,a.wg)(),(0,a.iD)("del",m,"原價 "+(0,e.zw)(f.product.origin_price)+" 元",1)):(0,a.kq)("",!0),f.product.price?((0,a.wg)(),(0,a.iD)("div",_,"現在只要 "+(0,e.zw)(f.product.price)+" 元",1)):(0,a.kq)("",!0),b,(0,a._)("button",{type:"button",class:"btn btn-outline-danger",disabled:this.status.loadingItem===f.product.id,onClick:i[0]||(i[0]=t=>z.addToCart(f.product.id))},[this.status.loadingItem===f.product.id?((0,a.wg)(),(0,a.iD)("div",w,y)):(0,a.kq)("",!0),(0,a.Uk)(" 加到購物車 ")],8,v)])])])],64)}s(7658);var z={data(){return{product:{},id:"",status:{loadingItem:""}}},methods:{getProduct(){const t=`https://vue3-course-api.hexschool.io/api/yang-leo-api/product/${this.id}`;this.isLoading=!0,this.$http.get(t).then((t=>{console.log(t.data),this.isLoading=!1,t.data.success&&(this.product=t.data.product)}))},addToCart(t,i=1){const s="https://vue3-course-api.hexschool.io/api/yang-leo-api/cart";this.status.loadingItem=t;const a={product_id:t,qty:1};this.$http.post(s,{data:a}).then((t=>{console.log(t),this.status.loadingItem="",this.$httpMessageState(t,"加入購物車"),this.$router.push("/user/cart")}))}},created(){this.id=this.$route.params.productId,this.getProduct()}},I=s(89);const $=(0,I.Z)(z,[["render",f]]);var q=$}}]);
//# sourceMappingURL=188.4dcafe5a.js.map