import{a as l}from"./axios-4a70c6fc.js";import{_ as p,o,c as a,a as t,F as _,r as h,w as m,b as f,e as y,p as g,d as v}from"./index-52add00e.js";const x={name:"ToBuy",data(){return{products:[]}},async created(){try{const e=await l.get("https://shoplist-tm2s.onrender.com/products/all");this.products=e.data}catch(e){console.log(e)}},beforeRouteLeave(e,d,r){const n=this.products.map(s=>({name:s.name,bought:s.bought}));console.log(n),l.post("https://shoplist-tm2s.onrender.com/products/all",n).then(s=>{console.log(s.data)}).catch(s=>{console.error(s)}),r()}},B=e=>(g("data-v-946f87d9"),e=e(),v(),e),T={class:"site"},b=B(()=>t("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"},null,-1)),w={class:"hero"},k={class:"hero-text container"},L=["innerHTML"],I=["onUpdate:modelValue"];function S(e,d,r,n,s,V){return o(),a("div",T,[b,t("section",w,[t("div",k,[t("h1",{class:"list-h",innerHTML:e.$t("message.toBuyList")},null,8,L),t("ul",null,[(o(!0),a(_,null,h(s.products,(c,i)=>(o(),a("li",{key:i},[c.bought?y("",!0):m((o(),a("input",{key:0,class:"inProd","onUpdate:modelValue":u=>c.name=u},null,8,I)),[[f,c.name]])]))),128))])])])])}const j=p(x,[["render",S],["__scopeId","data-v-946f87d9"]]);export{j as default};
