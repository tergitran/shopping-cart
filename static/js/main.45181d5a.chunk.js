(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{17:function(e,t,c){e.exports={Cart:"Cart_Cart__kW0Or",Item:"Cart_Item__gbws2",Detail:"Cart_Detail__3fkSI",ItemInfor:"Cart_ItemInfor__mvrBS",Thumbnail:"Cart_Thumbnail__1LcJM",QuantityBtn:"Cart_QuantityBtn__XV0kd",Summary:"Cart_Summary__3VzBU",Functional:"Cart_Functional__Q_7Lo"}},25:function(e,t,c){e.exports={Card:"Product_Card__3Xuuq",Label:"Product_Label__kP8_K",ProductName:"Product_ProductName__Xw24W",Image:"Product_Image__19-iP"}},30:function(e,t,c){e.exports={Home:"Home_Home__343Ex",Background:"Home_Background__2q75K"}},33:function(e,t,c){e.exports={Header:"ToolBar_Header__O_JM5",NavigationItems:"ToolBar_NavigationItems__16Nco"}},43:function(e,t,c){e.exports={Products:"Products_Products__3hLh5"}},53:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(0),r=c.n(a),i=c(20),s=c.n(i),o=c(22),l=c(15),j=c(28),d=c(18),m=c(4),u=(c(53),c(76)),b=c(77),h=c(79),O=c(17),x=c.n(O);function p(e,t){return console.log("count"),e+t.price*t.quantity}var _=function(e){var t=e.itemsInCart,c=e.onChangeQuantity,r=e.onRemoveItem,i=0,s=Object(n.jsx)("h1",{children:"You have no items in your Cart."});return console.log(t),t.length>0&&(i=t.reduce(p,0),console.log(i),s=Object(n.jsxs)(a.Fragment,{children:[Object(n.jsx)("div",{children:t.map((function(e){var t=Object(o.a)({},e),a=t.name,i=t.price,s=t.quantity;return Object(n.jsxs)("div",{className:x.a.Item,children:[Object(n.jsx)("img",{className:x.a.Thumbnail,alt:"thumball",src:"/shopping-cart/images/"+a+".png"}),Object(n.jsxs)("div",{className:x.a.Detail,children:[Object(n.jsxs)("div",{className:x.a.ItemInfor,children:[Object(n.jsx)("h3",{children:a}),Object(n.jsxs)("p",{children:["Price: ",Object(n.jsxs)("strong",{children:["$",i]})]})]}),Object(n.jsxs)("div",{className:x.a.Functional,children:[Object(n.jsxs)("label",{children:["Quantity",Object(n.jsx)("input",{className:x.a.QuantityBtn,type:"number",min:"1",value:s,onChange:function(t){return c(t,e)}})]}),Object(n.jsx)(u.a,{onClick:function(e){return r(e)},children:Object(n.jsx)(h.a,{})})]})]})]},e.name)}))}),Object(n.jsxs)("div",{className:x.a.Summary,children:[Object(n.jsx)("h1",{children:"Oder Summary"}),Object(n.jsxs)("h2",{children:["Total Price: $",i]}),Object(n.jsx)(b.a,{variant:"contained",color:"primary",children:"Checkout"})]})]})),Object(n.jsx)("div",{className:x.a.Cart,children:s})},g=c(30),v=c.n(g),f=function(){return Object(n.jsx)("div",{className:v.a.Home,children:Object(n.jsxs)("div",{className:v.a.Background,children:[Object(n.jsx)("h1",{children:"Welcome you to Casio Shop!"}),Object(n.jsx)(d.b,{to:"/products",children:Object(n.jsx)(b.a,{size:"large",color:"secondary",variant:"contained",children:"Shopping Now"})})]})})},C=c(33),I=c.n(C),y=c(42),N=c.n(y),k=c(78),P=function(e){var t=e.itemsInCart,c={color:"beige"};return Object(n.jsxs)("header",{className:I.a.Header,children:[Object(n.jsx)("h2",{children:"CASIO"}),Object(n.jsxs)("ul",{className:I.a.NavigationItems,children:[Object(n.jsx)("li",{children:Object(n.jsx)(d.c,{activeStyle:c,to:"/shopping-cart",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(d.c,{activeStyle:c,to:"/products",children:"Shop"})}),Object(n.jsx)("li",{children:Object(n.jsx)(d.c,{activeStyle:c,to:"/cart",children:Object(n.jsx)(k.a,{badgeContent:t.length,color:"primary",children:Object(n.jsx)(N.a,{})})})})]})]})},S=function(e){var t=e.itemsInCart;return Object(n.jsxs)(a.Fragment,{children:[Object(n.jsx)(P,{itemsInCart:t}),Object(n.jsx)("main",{children:e.children})]})},w=[{name:"a168wa-1wdf",price:100},{name:"bsa-b100mt-1adr",price:100},{name:"ca-53wf-8b",price:100},{name:"dw-5610dn-9dr",price:100},{name:"ga-900-2adr",price:100},{name:"gbx-100-2",price:100},{name:"gmd-b800su-3dr",price:100},{name:"gm-s5600g-7dr",price:100},{name:"gmw-b5000cs-1",price:100},{name:"ltp-vt01l-5budf",price:100},{name:"mtp-e170l-1bvdf",price:100},{name:"w-737h-2avdf",price:100}],B=c(25),H=c.n(B),q=function(e){var t=e.onItemClick,c=e.product,a=c.name,r=c.price;return Object(n.jsxs)("div",{className:H.a.Card,children:[Object(n.jsx)("img",{className:H.a.Image,alt:"product",src:"/shopping-cart/images/"+a+".png"}),Object(n.jsx)("h2",{className:H.a.ProductName,children:a}),Object(n.jsxs)("p",{className:H.a.Label,children:["Price: ",Object(n.jsxs)("strong",{children:["$",r]})]}),Object(n.jsx)(b.a,{onClick:function(){return t(c)},variant:"contained",children:"Add to cart"})]})},Q=c(43),L=c.n(Q),T=function(e){var t=e.onItemClick;return Object(n.jsx)("div",{className:L.a.Products,children:w.map((function(e){return Object(n.jsx)(q,{onItemClick:t,product:e},e.name)}))})};var F=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),c=t[0],r=t[1];return Object(n.jsx)(d.a,{children:Object(n.jsx)(S,{itemsInCart:c,children:Object(n.jsxs)(m.c,{children:[Object(n.jsx)(m.a,{path:"/shopping-cart",exact:!0,children:Object(n.jsx)(f,{})}),Object(n.jsx)(m.a,{path:"/products",children:Object(n.jsx)(T,{onItemClick:function(e){var t=c.map((function(e){return e.name})).indexOf(e.name),n=[];t>-1?(n=Object(l.a)(c))[t].quantity++:(e=Object(o.a)(Object(o.a)({},e),{},{quantity:1}),console.log(e),n=[].concat(Object(l.a)(c),[e])),r(n),console.log(n)}})}),Object(n.jsx)(m.a,{path:"/cart",children:Object(n.jsx)(_,{itemsInCart:c,onChangeQuantity:function(e,t){var n=c.map((function(e){return e.name})).indexOf(t.name),a=Object(l.a)(c);console.log(e.target.value),n>-1&&(a[n].quantity=+e.target.value),r(a)},onRemoveItem:function(e){var t=c.map((function(e){return e.name})).indexOf(e.name),n=[];(n=Object(l.a)(c)).splice(t,1),r(n)}})})]})})})};c(61);s.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(F,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.45181d5a.chunk.js.map