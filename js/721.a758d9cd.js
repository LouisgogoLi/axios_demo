"use strict";(self["webpackChunkapp"]=self["webpackChunkapp"]||[]).push([[721],{7721:function(a,e,t){t.r(e),t.d(e,{default:function(){return I}});var n=t(3396),s=t(7139),c=t(4870);function o(){const a=(0,c.qj)({x:0,y:0});function e(e){a.x=e.pageX,a.y=e.pageY}return(0,n.bv)((()=>{window.addEventListener("mousemove",e)})),(0,n.Ah)((()=>{window.removeEventListener("mousemove",e)})),(0,c.BK)(a)}function i(){const a=(0,c.iH)(0),e=()=>{a.value++};return{idx:a,addState:e}}const u=o,l=i,r={class:"box"},d=(0,n._)("h1",null,"Mouse Position",-1),v={name:"MousePosition"};var g=Object.assign(v,{setup(a){const{x:e,y:t}=u();return(a,o)=>((0,n.wg)(),(0,n.iD)("div",r,[d,(0,n._)("h2",null,"x: "+(0,s.zw)((0,c.SU)(e))+" : y: "+(0,s.zw)((0,c.SU)(t)),1)]))}});const w=g;var m=w;const p={class:"block"},b={name:"StateTodo"};var k=Object.assign(b,{setup(a){const{idx:e,addState:t}=l();return(a,o)=>((0,n.wg)(),(0,n.iD)("div",p,[(0,n._)("h1",null,"number: "+(0,s.zw)((0,c.SU)(e)),1),(0,n._)("button",{onClick:o[0]||(o[0]=(...a)=>(0,c.SU)(t)&&(0,c.SU)(t)(...a))},"add")]))}}),f=t(89);const h=(0,f.Z)(k,[["__scopeId","data-v-75c01b55"]]);var y=h,D=t(7923),_=t(4498);const x={key:0,class:"loading",src:D,alt:""},S={key:1},j={key:2,class:"imgBlock"},U=["src"],q={name:"FetchData"};var z=Object.assign(q,{setup(a){const e=(0,c.qj)({data:[]}),t=(0,c.iH)(!1),o=(0,c.iH)(""),i=async()=>{try{const a=await(0,_.z)();t.value=!0,e.data=a.data}catch(a){t.value=!0,o.value=a.message}};return(0,n.bv)((()=>{i()})),(a,i)=>((0,n.wg)(),(0,n.iD)("div",null,[t.value?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("img",x)),o.value?((0,n.wg)(),(0,n.iD)("h1",S,"ERROR: "+(0,s.zw)(o.value),1)):(0,n.kq)("",!0),t.value?((0,n.wg)(),(0,n.iD)("div",j,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)((0,c.SU)(e).data,(a=>((0,n.wg)(),(0,n.iD)("img",{key:a.url,src:a.url,alt:""},null,8,U)))),128))])):(0,n.kq)("",!0)]))}});const H=(0,f.Z)(z,[["__scopeId","data-v-8c8c7e1e"]]);var O=H;const W={name:"AxiosGet"};var C=Object.assign(W,{setup(a){return(a,e)=>((0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(m),(0,n.Wm)(y),(0,n.Wm)(y),(0,n.Wm)(O)],64))}});const E=(0,f.Z)(C,[["__scopeId","data-v-47e1188c"]]);var I=E},7923:function(a,e,t){a.exports=t.p+"img/load.00b4701f.gif"}}]);