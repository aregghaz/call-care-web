(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[395],{7677:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/[id]",function(){return i(5207)}])},4549:function(e,s,i){"use strict";var c=i(5893);i(7294);var r=i(733),t=i.n(r);let n=e=>{let{fullscreen:s=!0}=e;return(0,c.jsx)("div",{style:{width:"100%",height:s?"100vh":"100%",display:"grid",placeItems:"center"},children:(0,c.jsx)(t(),{type:"bars",color:"#D33834",height:100,width:100})})};s.Z=n},4373:function(e,s){"use strict";s.Z={db:"https://phenixdemosite.000webhostapp.com/db.json",services:"services",global:"global"}},5207:function(e,s,i){"use strict";i.r(s);var c=i(5893),r=i(7294),t=i(3005),n=i.n(t),a=i(5675),v=i.n(a),l=i(1649),m=i(1163),o=i(6154),d=i(4373),h=i(4549);let _=e=>{var s;let{}=e,i=(0,l.v9)(e=>e.services),[t,a]=(0,r.useState)({}),_=(0,m.useRouter)().query.id;return(0,r.useEffect)(()=>{Object.keys(i).length<=0&&_?(async()=>{let e=await o.Z.get("".concat(d.Z.db,"/").concat(d.Z.services,"?serviceId=").concat(_));a(e.data[0])})():a(i)},[_]),Object.keys(t).length>0?(0,c.jsxs)("div",{className:n().serviceContainer,children:[(0,c.jsx)("div",{className:n().serviceImg,children:(0,c.jsx)("div",{className:n().imgWrapper,children:(0,c.jsx)(v(),{className:n().servicePsImg,src:"/images/serviceImg.webp",alt:"service",width:470,height:470})})}),(0,c.jsxs)("div",{className:n().serviceInfo,children:[(0,c.jsx)("div",{className:"".concat(n().serviceItem),children:(0,c.jsx)("h1",{children:t.serviceName})}),(0,c.jsx)("div",{className:"".concat(n().serviceText," ").concat(n().serviceItem),children:(null!==(s=t.serviceDetails)&&void 0!==s?s:[]).map((e,s)=>(0,c.jsxs)("div",{children:[(0,c.jsx)("h3",{className:n().itemsName,children:e.detailName}),(0,c.jsx)("p",{className:n().itemText,children:e.detailDescription})]},s))}),(0,c.jsxs)("div",{className:"".concat(n().serviceItem),children:[(0,c.jsxs)("div",{className:n().companyCont,children:[(0,c.jsx)(v(),{src:"/images/mailIcon.svg",alt:"mail",width:30,height:30}),(0,c.jsx)("p",{children:"info@mygeneralmed.com"})]}),(0,c.jsxs)("div",{className:n().companyCont,children:[(0,c.jsx)(v(),{src:"/images/phoneIcon.svg",alt:"phone",width:30,height:30}),(0,c.jsx)("p",{children:"888-543-9468"})]})]})]})]}):(0,c.jsx)(h.Z,{})};s.default=_},3005:function(e){e.exports={serviceContainer:"service_serviceContainer__KfpBI",serviceImg:"service_serviceImg__AX8sT",imgWrapper:"service_imgWrapper__Zhu17",servicePsImg:"service_servicePsImg__54SEk",serviceInfo:"service_serviceInfo__KS2nb",serviceItem:"service_serviceItem__VabGf",serviceText:"service_serviceText__pahEl",itemsName:"service_itemsName__mNMwH",itemText:"service_itemText__ZUzXT",companyCont:"service_companyCont__fU1eF"}},1163:function(e,s,i){e.exports=i(6885)}},function(e){e.O(0,[383,774,888,179],function(){return e(e.s=7677)}),_N_E=e.O()}]);