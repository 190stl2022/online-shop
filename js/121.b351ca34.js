"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[121],{5121:function(t,e,l){l.r(e),l.d(e,{default:function(){return nt}});var a=l(3396),d=l(7139),r=l(9242);const i={class:"table mt-4"},s=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"購買時間"),(0,a._)("th",null,"Email"),(0,a._)("th",null,"購買款項"),(0,a._)("th",null,"應付金額"),(0,a._)("th",null,"是否付款"),(0,a._)("th",null,"編輯")])],-1),n=["textContent"],o={class:"list-unstyled"},u={class:"text-right"},p={class:"form-check form-switch"},c=["id","onUpdate:modelValue","onChange"],h=["for"],_={key:0},m={key:1},g={class:"btn-group"},w=["onClick"],b=["onClick"];function y(t,e,l,y,O,f){const k=(0,a.up)("LoadingView"),M=(0,a.up)("OrderModal"),D=(0,a.up)("DelModal"),v=(0,a.up)("PaginationView");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(k,{active:O.isLoading},null,8,["active"]),(0,a._)("table",i,[s,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(O.orders,((e,l)=>((0,a.wg)(),(0,a.iD)(a.HY,{key:l},[O.orders.length?((0,a.wg)(),(0,a.iD)("tr",{key:0,class:(0,d.C_)({"text-secondary":!e.is_paid})},[(0,a._)("td",null,(0,d.zw)(t.$filters.date(e.create_at)),1),(0,a._)("td",null,[e.user?((0,a.wg)(),(0,a.iD)("span",{key:0,textContent:(0,d.zw)(e.user.email)},null,8,n)):(0,a.kq)("",!0)]),(0,a._)("td",null,[(0,a._)("ul",o,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.products,((t,e)=>((0,a.wg)(),(0,a.iD)("li",{key:e},(0,d.zw)(t.product.title)+" 數量："+(0,d.zw)(t.qty)+" "+(0,d.zw)(t.product.unit),1)))),128))])]),(0,a._)("td",u,(0,d.zw)(e.total),1),(0,a._)("td",null,[(0,a._)("div",p,[(0,a.wy)((0,a._)("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${e.id}`,"onUpdate:modelValue":t=>e.is_paid=t,onChange:t=>f.updatePaid(e)},null,40,c),[[r.e8,e.is_paid]]),(0,a._)("label",{class:"form-check-label",for:`paidSwitch${e.id}`},[e.is_paid?((0,a.wg)(),(0,a.iD)("span",_,"已付款")):((0,a.wg)(),(0,a.iD)("span",m,"未付款"))],8,h)])]),(0,a._)("td",null,[(0,a._)("div",g,[(0,a._)("button",{class:"btn btn-outline-primary btn-sm",onClick:t=>f.openModal(e)},"檢視",8,w),(0,a._)("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>f.openDelOrderModal(e)},"刪除",8,b)])])],2)):(0,a.kq)("",!0)],64)))),128))])]),(0,a.Wm)(M,{order:O.tempOrder,ref:"orderModal",onConfirm:f.confirmOrder},null,8,["order","onConfirm"]),(0,a.Wm)(D,{item:O.tempOrder,ref:"delModal",onDelItem:f.delOrder},null,8,["item","onDelItem"]),(0,a.Wm)(v,{pages:O.pagination,onEmitPages:f.getOrders},null,8,["pages","onEmitPages"])],64)}const O={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},f={class:"modal-dialog modal-xl",role:"document"},k={class:"modal-content border-0"},M=(0,a._)("div",{class:"modal-header bg-dark text-white"},[(0,a._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,a._)("span",null,"訂單細節")]),(0,a._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),D={class:"modal-body"},v={class:"row"},$={class:"col-md-4"},x=(0,a._)("h3",null,"用戶資料",-1),z={class:"table"},C={key:0},P=(0,a._)("th",{style:{width:"100px"}},"姓名",-1),L=(0,a._)("th",null,"Email",-1),q=(0,a._)("th",null,"電話",-1),H=(0,a._)("th",null,"地址",-1),V={class:"col-md-8"},Y=(0,a._)("h3",null,"訂單細節",-1),Z={class:"table"},E=(0,a._)("th",{style:{width:"100px"}},"訂單編號",-1),S=(0,a._)("th",null,"下單時間",-1),W=(0,a._)("th",null,"付款時間",-1),j={key:0},K={key:1},I=(0,a._)("th",null,"付款狀態",-1),U={key:0,class:"text-success"},A={key:1,class:"text-muted"},B=(0,a._)("th",null,"總金額",-1),F=(0,a._)("h3",null,"選購商品",-1),G={class:"table"},J=(0,a._)("thead",null,[(0,a._)("tr")],-1),N={class:"text-end"},Q={class:"modal-footer"},R=(0,a._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function T(t,e,l,r,i,s){return(0,a.wg)(),(0,a.iD)("div",O,[(0,a._)("div",f,[(0,a._)("div",k,[M,(0,a._)("div",D,[(0,a._)("div",v,[(0,a._)("div",$,[x,(0,a._)("table",z,[i.tempOrder.user?((0,a.wg)(),(0,a.iD)("tbody",C,[(0,a._)("tr",null,[P,(0,a._)("td",null,(0,d.zw)(i.tempOrder.user.name),1)]),(0,a._)("tr",null,[L,(0,a._)("td",null,(0,d.zw)(i.tempOrder.user.email),1)]),(0,a._)("tr",null,[q,(0,a._)("td",null,(0,d.zw)(i.tempOrder.user.tel),1)]),(0,a._)("tr",null,[H,(0,a._)("td",null,(0,d.zw)(i.tempOrder.user.address),1)])])):(0,a.kq)("",!0)])]),(0,a._)("div",V,[Y,(0,a._)("table",Z,[(0,a._)("tbody",null,[(0,a._)("tr",null,[E,(0,a._)("td",null,(0,d.zw)(i.tempOrder.id),1)]),(0,a._)("tr",null,[S,(0,a._)("td",null,(0,d.zw)(t.$filters.date(i.tempOrder.create_at)),1)]),(0,a._)("tr",null,[W,(0,a._)("td",null,[i.tempOrder.paid_date?((0,a.wg)(),(0,a.iD)("span",j,(0,d.zw)(t.$filters.date(i.tempOrder.paid_date)),1)):((0,a.wg)(),(0,a.iD)("span",K,"尚未付款"))])]),(0,a._)("tr",null,[I,(0,a._)("td",null,[i.tempOrder.is_paid?((0,a.wg)(),(0,a.iD)("strong",U,"已付款")):((0,a.wg)(),(0,a.iD)("span",A,"尚未付款"))])]),(0,a._)("tr",null,[B,(0,a._)("td",null,(0,d.zw)(t.$filters.currency(i.tempOrder.total)),1)])])]),F,(0,a._)("table",G,[J,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.tempOrder.products,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("th",null,(0,d.zw)(e.product.title),1),(0,a._)("td",null,(0,d.zw)(e.qty)+" / "+(0,d.zw)(e.product.unit),1),(0,a._)("td",N,(0,d.zw)(t.$filters.currency(e.final_total)),1)])))),128))])])])])]),(0,a._)("div",Q,[R,(0,a._)("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=e=>t.$emit("updatePaid",i.tempOrder))},"確認")])])])],512)}var X=l(1339),tt={name:"orderModal",data(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},props:{order:{type:Object,default(){return{}}}},emits:["confirm"],watch:{order(){this.tempOrder=this.order,this.isPaid=this.tempOrder.is_paid}},mixins:[X.Z]},et=l(89);const lt=(0,et.Z)(tt,[["render",T]]);var at=lt,dt=l(7447),rt=l(3050),it={data(){return{orders:{},pagination:{},currentPage:1,tempOrder:{},isLoading:!1}},components:{OrderModal:at,DelModal:dt.Z,PaginationView:rt.Z},methods:{getOrders(t=1){this.currentPage=t;const e=`https://vue3-course-api.hexschool.io/api/yang-leo-api/admin/orders?page=${t}`;this.isLoading=!0,this.$http.get(e).then((t=>{console.log(t),this.orders=t.data.orders,this.pagination=t.data.pagination,this.isLoading=!1}))},openModal(t){this.tempOrder={...t},this.$refs.orderModal.showModal()},openDelOrderModal(t){this.tempOrder={...t,title:"此筆訂單"},this.$refs.delModal.showModal()},updatePaid(t){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/yang-leo-api/admin/order/${t.id}`,l={is_paid:t.is_paid};this.$http.put(e,{data:l}).then((t=>{console.log(t),this.isLoading=!1,this.getOrders(this.currentPage),this.$httpMessageState(t,"更新付款狀態")}))},delOrder(){const t=`https://vue3-course-api.hexschool.io/api/yang-leo-api/admin/order/${this.tempOrder.id}`;this.isLoading=!0,this.$http.delete(t).then((t=>{console.log(t),this.$refs.delModal.hideModal(),this.isLoading=!1,this.$httpMessageState(t,"刪除訂單"),this.getOrders()}))},confirmOrder(){this.$refs.orderModal.hideModal()}},created(){this.getOrders()}};const st=(0,et.Z)(it,[["render",y]]);var nt=st}}]);
//# sourceMappingURL=121.b351ca34.js.map