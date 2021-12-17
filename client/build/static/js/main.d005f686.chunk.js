(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{166:function(e,t,n){},194:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(61),s=n.n(r),i=(n(166),n(60)),l=n(10),j=n(208),o=n(204),d=n(149),b=n(57),h=n(206),u=function(){return window.localStorage.getItem("token")},x=function(){var e=u();if(e){var t=e.split(".");if(!(t.length<3)){var n=t[1];return JSON.parse(atob(n))}}},O=n(15),m=n(45),p=n(38),g=n(9),f=n(12),v=n.n(f),y=n(211),w=n(207),C=n(218),k=n(215),S=n(216),_=n(16),T=n.n(_),I=n(1),z=function(){var e=Object(l.f)(),t=Object(a.useState)(!1),n=Object(g.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)({email:"",password:""}),i=Object(g.a)(s,2),j=i[0],o=i[1],d=Object(a.useState)(!1),h=Object(g.a)(d,2),u=(h[0],h[1]),x=function(e){var t=Object(p.a)(Object(p.a)({},j),{},Object(m.a)({},e.target.name,e.target.value));o(t)},f=function(){var t=Object(O.a)(v.a.mark((function t(n){var a,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,T.a.post("/api/auth/login/",j);case 4:a=t.sent,c=a.data,r=c.token,window.localStorage.setItem("token",r),e("/browse"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),u(!0);case 13:case"end":return t.stop()}var r}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(I.jsx)("div",{className:"modal-wrapper",children:Object(I.jsxs)(y.a,{as:w.a,onSubmit:f,onClose:function(){return r(!1)},onOpen:function(){return r(!0)},open:c,trigger:Object(I.jsx)("p",{children:"Login"}),children:[Object(I.jsx)(C.a,{as:"h1",children:"Login"}),Object(I.jsxs)(y.a.Content,{style:{backgroundColor:"#F6DFEB"},children:[Object(I.jsxs)(w.a.Field,{required:!0,onChange:x,value:j.email,children:[Object(I.jsx)("label",{children:"Email"}),Object(I.jsx)("input",{name:"email",placeholder:"e.g. janesmith@email.com"})]}),Object(I.jsxs)(w.a.Field,{required:!0,onChange:x,value:j.password,children:[Object(I.jsx)("label",{children:"Password"}),Object(I.jsx)("input",{name:"password",type:"password"})]})]}),Object(I.jsxs)(y.a.Actions,{children:[Object(I.jsxs)(S.a,{animated:!0,type:"submit",color:"red",onClick:function(){return r(!1)},children:[Object(I.jsx)(S.a.Content,{visible:!0,children:"Close"}),Object(I.jsx)(S.a.Content,{hidden:!0,children:Object(I.jsx)(b.a,{name:"close"})})]}),Object(I.jsxs)(S.a,{animated:!0,type:"submit",color:"teal",children:[Object(I.jsx)(S.a.Content,{visible:!0,children:"Login"}),Object(I.jsx)(S.a.Content,{hidden:!0,children:Object(I.jsx)(b.a,{name:"sign-in"})})]})]})]})})},A=function(){var e=Object(a.useState)(!1),t=Object(g.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)({username:"",email:"",password:"",password_confirmation:"",firstName:"",lastName:""}),s=Object(g.a)(r,2),i=s[0],l=s[1],j=Object(a.useState)({username:"",email:"",password:"",password_confirmation:"",firstName:"",lastName:""}),o=Object(g.a)(j,2),d=o[0],h=o[1],u=Object(a.useState)(!1),x=Object(g.a)(u,2),f=x[0],_=x[1],z=function(e){console.log(e.target.value);var t=Object(p.a)(Object(p.a)({},i),{},Object(m.a)({},e.target.name,e.target.value));l(t)},A=function(){var e=Object(O.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("Form Data ->",i),e.prev=2,e.next=5,T.a.post("api/auth/register/",i);case 5:_(!1),c(!0),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0),h(e.t0.response.data.errors),c(!1);case 14:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsx)("div",{className:"modal-wrapper",children:Object(I.jsxs)(y.a,{as:w.a,onSubmit:A,onClose:function(){return _(!1)},onOpen:function(){return _(!0)},open:f,trigger:Object(I.jsx)("p",{children:"Register"}),success:!0,children:[Object(I.jsx)(C.a,{as:"h1",children:"Register"}),Object(I.jsxs)(y.a.Content,{style:{backgroundColor:"#F6DFEB"},children:[Object(I.jsxs)(w.a.Field,{required:!0,onChange:z,value:i.username,children:[Object(I.jsx)("label",{children:"Username"}),Object(I.jsx)("input",{name:"username",placeholder:"e.g. janesmith123"})]}),Object(I.jsxs)(w.a.Field,{required:!0,onChange:z,value:i.email,children:[Object(I.jsx)("label",{children:"Email"}),Object(I.jsx)("input",{name:"email",placeholder:"e.g. jane@email.com"})]}),Object(I.jsxs)(w.a.Group,{widths:2,children:[Object(I.jsxs)(w.a.Field,{required:!0,onChange:z,value:i.password,children:[Object(I.jsx)("label",{children:"Password"}),Object(I.jsx)("input",{name:"password",type:"password"})]}),Object(I.jsxs)(w.a.Field,{required:!0,onChange:z,value:i.password_confirmation,children:[Object(I.jsx)("label",{children:"Password Confirmation"}),Object(I.jsx)("input",{name:"password_confirmation",type:"password"})]})]}),Object(I.jsxs)(w.a.Group,{widths:2,children:[Object(I.jsxs)(w.a.Field,{onChange:z,value:i.firstName,children:[Object(I.jsx)("label",{children:"First Name"}),Object(I.jsx)("input",{name:"firstName",placeholder:"e.g. Jane"})]}),Object(I.jsxs)(w.a.Field,{onChange:z,value:i.lastName,children:[Object(I.jsx)("label",{children:"Last Name"}),Object(I.jsx)("input",{name:"lastName",placeholder:"e.g. Smith"})]})]}),n?Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(k.a,{success:!0,header:"Your user registration was successful",content:"You may now log-in with the username you have chosen"})}):d&&Object(I.jsx)(k.a,{error:!0,header:"Action Forbidden",content:"Please check all fields have been entered correctly."})]}),Object(I.jsxs)(y.a.Actions,{children:[Object(I.jsxs)(S.a,{animated:!0,type:"submit",color:"red",onClick:function(){return _(!1)},children:[Object(I.jsx)(S.a.Content,{visible:!0,children:"Close"}),Object(I.jsx)(S.a.Content,{hidden:!0,children:Object(I.jsx)(b.a,{name:"close"})})]}),Object(I.jsxs)(S.a,{animated:!0,type:"submit",color:"teal",children:[Object(I.jsx)(S.a.Content,{visible:!0,children:"Register"}),Object(I.jsx)(S.a.Content,{hidden:!0,children:Object(I.jsx)(b.a,{name:"check"})})]})]})]})})},F=function(){var e=Object(l.f)(),t=Object(l.e)(),n=x();Object(a.useEffect)((function(){}),[t.pathname]);return console.log("PAYLOAD",n),Object(I.jsx)(j.a,{style:{padding:"0px 50px"},color:"teal",secondary:!0,inverted:!0,size:"large",id:"nav",children:Object(I.jsxs)(o.a,{children:[Object(I.jsxs)(j.a.Item,{header:!0,as:"a",href:"/",position:"left",children:[Object(I.jsx)(d.a,{style:{marginRight:"10px"},size:"tiny",src:"https://i.imgur.com/uOjwmDf.png",circular:!0}),Object(I.jsx)("h3",{style:{marginTop:"unset",color:"white"},children:"TKG Fashion"})]}),Object(I.jsxs)(j.a.Item,{as:"a",href:"/browse",children:[Object(I.jsx)(b.a,{name:"search",size:"large"}),"Browse"]}),function(){var e=x();return!!e&&Math.round(Date.now()/1e3)<e.exp}()?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(j.a.Item,{as:"a",href:"/orders",children:[Object(I.jsx)(b.a,{name:"shopping bag",size:"large"}),"Bag"]}),Object(I.jsxs)(j.a.Item,{children:[Object(I.jsx)(b.a,{name:"user",size:"large"}),Object(I.jsx)(h.a,{floating:!0,closeOnChange:!0,inline:!0,direction:"left",children:Object(I.jsxs)(h.a.Menu,{size:"mini",children:[Object(I.jsxs)(h.a.Header,{children:["Signed in as: ",n.username," "]}),Object(I.jsx)(h.a.Item,{as:"a",icon:"log out",size:"large",text:"Log Out",onClick:function(){window.localStorage.removeItem("token"),e("/")}})]})})]})]}):Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(j.a.Item,{as:"a",position:"right",fitted:"horizontally",children:[Object(I.jsx)(b.a,{name:"signup",size:"large"}),Object(I.jsx)(A,{})]}),Object(I.jsxs)(j.a.Item,{as:"a",children:[Object(I.jsx)(b.a,{name:"user circle",size:"large"}),Object(I.jsx)(z,{})]})]})]})})},D=n(219),B=n(220),N=n(212),R=(n(93),function(){return Object(I.jsx)(D.a,{color:"black",inverted:!0,style:{padding:"30px 0em 0 0",margin:"revert"},children:Object(I.jsxs)(o.a,{children:[Object(I.jsx)(B.a,{inverted:!0,stackable:!0,children:Object(I.jsxs)(B.a.Row,{centered:!0,children:[Object(I.jsxs)(B.a.Column,{width:5,textAlign:"center",children:[Object(I.jsx)(C.a,{inverted:!0,as:"h3",content:"ABOUT US"}),Object(I.jsxs)(N.a,{link:!0,inverted:!0,animated:!0,verticalAlign:"middle",size:"medium",children:[Object(I.jsx)(N.a.Item,{as:"a",href:"",children:"About TKG Fashion"}),Object(I.jsx)(N.a.Item,{as:"a",href:"https://github.com/taliaglantz",target:"_blank",children:"Talia"}),Object(I.jsx)(N.a.Item,{as:"a",href:"https://github.com/Kumarmehta019",target:"_blank",children:"Kumar"}),Object(I.jsx)(N.a.Item,{as:"a",href:"https://github.com/gayatrirajgor",target:"_blank",children:"Gayatri"})]})]}),Object(I.jsxs)(B.a.Column,{width:5,textAlign:"center",children:[Object(I.jsx)(C.a,{inverted:!0,as:"h3",content:"SHOP NOW"}),Object(I.jsxs)(N.a,{link:!0,inverted:!0,animated:!0,verticalAlign:"middle",size:"medium",children:[Object(I.jsxs)(N.a.Item,{children:[" ",Object(I.jsx)(A,{})]}),Object(I.jsxs)(N.a.Item,{children:[" ",Object(I.jsx)(z,{})]}),Object(I.jsx)(N.a.Item,{as:"a",href:"/browse",children:"Browse"})]})]}),Object(I.jsxs)(B.a.Column,{width:5,textAlign:"center",children:[Object(I.jsx)(C.a,{inverted:!0,as:"h3",content:"HELP & SUPPORT"}),Object(I.jsxs)(N.a,{link:!0,inverted:!0,animated:!0,verticalAlign:"middle",size:"medium",children:[Object(I.jsx)(N.a.Item,{as:"a",href:"",children:"How To Order"}),Object(I.jsx)(N.a.Item,{as:"a",href:"",children:"Size Guide"}),Object(I.jsx)(N.a.Item,{as:"a",href:"",children:"Returns"}),Object(I.jsx)(N.a.Item,{as:"a",href:"",children:"Delivery"}),Object(I.jsx)(N.a.Item,{as:"a",href:"",children:"COVID-19"})]})]})]})}),Object(I.jsx)(o.a,{children:Object(I.jsx)(B.a.Column,{style:{margin:"5px 0 0 0"},children:Object(I.jsx)(d.a,{src:"https://i.imgur.com/Iv07pIc.gif",size:"small",centered:!0,circular:!0})})}),Object(I.jsx)(o.a,{textAlign:"center",children:Object(I.jsxs)(D.a,{color:"black",inverted:!0,children:[Object(I.jsxs)(N.a,{horizontal:!0,relaxed:!0,style:{margin:"5px 0 5px 0"},children:[Object(I.jsx)(N.a.Item,{children:Object(I.jsx)(N.a.Item,{as:"a",href:"https://twitter.com/home",target:"_blank",children:Object(I.jsx)(b.a,{name:"twitter",size:"big",color:"teal"})})}),Object(I.jsx)(N.a.Item,{children:Object(I.jsx)(N.a.Item,{as:"a",href:"https://www.instagram.com/",target:"_blank",children:Object(I.jsx)(b.a,{name:"instagram",size:"big",color:"pink"})})}),Object(I.jsx)(N.a.Item,{children:Object(I.jsx)(N.a.Item,{as:"a",href:"https://www.facebook.com/",target:"_blank",children:Object(I.jsx)(b.a,{className:"facebookicon",name:"facebook",size:"big",color:"blue"})})}),Object(I.jsx)(N.a.Item,{children:Object(I.jsx)(N.a.Item,{as:"a",href:"https://www.youtube.com/",target:"_blank",children:Object(I.jsx)(b.a,{name:"youtube",size:"big",color:"red"})})})]}),Object(I.jsxs)("p",{style:{margin:"5px 0px 5px 0px"},children:["\xa9",(new Date).getFullYear()," TKG Fashion | All Rights Reserved | Terms of Service | Privacy"]})]})})]})})}),E=function(){var e=Object(l.f)(),t=function(t){console.log("EVENT",t.currentTarget.value),"T-Shirts"===t.currentTarget.value?e("/browse?value=T-Shirts"):"Jumpers"===t.currentTarget.value?e("/browse?value=Jumpers"):"Dresses"===t.currentTarget.value?e("/browse?value=Dresses"):"Shorts"===t.currentTarget.value?e("/browse?value=Shorts"):"Jeans"===t.currentTarget.value?e("/browse?value=Jeans"):"Shirts"===t.currentTarget.value?e("/browse?value=Shirts"):"Socks"===t.currentTarget.value?e("/browse?value=Socks"):"Trousers"===t.currentTarget.value&&e("/browse?value=Trousers")};return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(S.a,{animated:!0,inverted:!0,color:"red",size:"huge",value:"T-Shirts",style:{marginBottom:"5px",marginTop:"5px"},onClick:t,id:"category-button",children:[Object(I.jsx)(S.a.Content,{visible:!0,children:"T-Shirts"}),Object(I.jsxs)(S.a.Content,{hidden:!0,children:[Object(I.jsx)(b.a,{name:"angle double right"})," T-Shirts"]})]}),Object(I.jsxs)(S.a,{animated:!0,inverted:!0,color:"orange",size:"huge",value:"Jumpers",style:{marginBottom:"5px",marginTop:"5px"},onClick:t,id:"category-button",children:[Object(I.jsx)(S.a.Content,{visible:!0,children:"Jumpers"}),Object(I.jsxs)(S.a.Content,{hidden:!0,value:"Jumpers",children:[Object(I.jsx)(b.a,{name:"angle double right"})," Jumpers"]})]}),Object(I.jsxs)(S.a,{animated:!0,inverted:!0,color:"blue",size:"huge",value:"Dresses",style:{marginBottom:"5px",marginTop:"5px"},onClick:t,id:"category-button",children:[Object(I.jsx)(S.a.Content,{visible:!0,children:"Dresses"}),Object(I.jsxs)(S.a.Content,{hidden:!0,children:[Object(I.jsx)(b.a,{name:"angle double right"})," Dresses"]})]}),Object(I.jsxs)(S.a,{animated:!0,inverted:!0,color:"purple",size:"huge",value:"Shorts",style:{marginBottom:"5px",marginTop:"5px"},onClick:t,id:"category-button",children:[Object(I.jsx)(S.a.Content,{visible:!0,children:"Shorts"}),Object(I.jsxs)(S.a.Content,{hidden:!0,children:[Object(I.jsx)(b.a,{name:"angle double right"})," Shorts"]})]}),Object(I.jsxs)(S.a,{animated:!0,inverted:!0,color:"green",size:"huge",value:"Jeans",style:{marginBottom:"5px",marginTop:"5px"},onClick:t,id:"category-button",children:[Object(I.jsx)(S.a.Content,{visible:!0,children:"Jeans"}),Object(I.jsxs)(S.a.Content,{hidden:!0,children:[Object(I.jsx)(b.a,{name:"angle double right"})," Jeans"]})]}),Object(I.jsxs)(S.a,{animated:!0,inverted:!0,color:"pink",size:"huge",value:"Shirts",style:{marginBottom:"5px",marginTop:"5px"},onClick:t,id:"category-button",children:[Object(I.jsx)(S.a.Content,{visible:!0,children:"Shirts"}),Object(I.jsxs)(S.a.Content,{hidden:!0,children:[Object(I.jsx)(b.a,{name:"angle double right"})," Shirts"]})]}),Object(I.jsxs)(S.a,{animated:!0,inverted:!0,color:"blue",size:"huge",value:"Socks",style:{marginBottom:"5px",marginTop:"5px"},onClick:t,id:"category-button",children:[Object(I.jsx)(S.a.Content,{visible:!0,children:"Socks"}),Object(I.jsxs)(S.a.Content,{hidden:!0,children:[Object(I.jsx)(b.a,{name:"angle double right"})," Socks"]})]}),Object(I.jsxs)(S.a,{animated:!0,inverted:!0,color:"violet",size:"huge",value:"Trousers",style:{marginBottom:"5px",marginTop:"5px"},onClick:t,id:"category-button",children:[Object(I.jsx)(S.a.Content,{visible:!0,children:"Trousers"}),Object(I.jsxs)(S.a.Content,{hidden:!0,children:[Object(I.jsx)(b.a,{name:"angle double right"})," Trousers"]})]})]})},H=n(14),P=(n(142),function(){var e=Object(a.useState)([]),t=Object(g.a)(e,2),n=t[0],c=t[1];Object(a.useEffect)((function(){var e=function(){var e=Object(O.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.a.get("/api/products/");case 2:t=e.sent,n=t.data,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var r=n.map((function(e){return e})).map((function(e){return e.image_set[0].image}));return console.log("IMAGES ARRAY->",r),Object(I.jsxs)(D.a,{style:{backgroundColor:"#F6DFEB"},children:[Object(I.jsx)("h2",{style:{textAlign:"center",textDecoration:"underline",color:"black",fontFamily:"Cinzel, serif"},children:"OUR COLLECTION"}),Object(I.jsx)(H.a,{naturalSlideWidth:100,naturalSlideHeight:125,totalSlides:r.length,interval:5e3,isPlaying:!0,playDirection:"forward",orientation:"horizontal",visibleSlides:3,infinite:!0,children:Object(I.jsx)(H.c,{children:r.map((function(e,t){return Object(I.jsx)(H.b,{index:t,children:Object(I.jsx)(d.a,{src:e})},t)}))})})]})}),G=function(){return Object(I.jsx)(o.a,{children:Object(I.jsxs)(D.a,{style:{marginTop:"20px",marginBottom:"20px",backgroundColor:"lightBlue"},children:[Object(I.jsx)("h2",{style:{textAlign:"center",textDecoration:"underline",color:"black",textShadow:"0px 0px 8px #ffffff",margin:"0px",fontFamily:"Cinzel, serif"},children:"WINTER SALE NOW ON!"}),Object(I.jsxs)(B.a,{container:!0,columns:3,style:{marginTop:"1px",marginBottom:"1px"},children:[Object(I.jsx)(B.a.Column,{children:Object(I.jsx)(d.a,{src:"https://i.imgur.com/Vik8Spe.png",as:"a",href:"/browse",id:"ads-image"})}),Object(I.jsx)(B.a.Column,{children:Object(I.jsx)(d.a,{src:"https://i.imgur.com/nhWk941.png",as:"a",href:"/browse",id:"ads-image"})}),Object(I.jsx)(B.a.Column,{children:Object(I.jsx)(d.a,{src:"https://i.imgur.com/Xxa1Ykz.png",as:"a",href:"/browse",id:"ads-image"})})]})]})})},J=n(213),L=function(){var e=Object(a.useState)(null),t=Object(g.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),s=Object(g.a)(r,2),i=s[0],l=s[1],j=Object(a.useState)(null),h=Object(g.a)(j,2),u=h[0],x=h[1],m=Object(a.useState)(!1),p=Object(g.a)(m,2),f=p[0],y=p[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(O.a)(v.a.mark((function e(){var t,n,a,r,s,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("api/products/");case 3:t=e.sent,n=t.data,a=Math.floor(Math.random()*n.length),r=(r=n.splice(a,1))[0],a=Math.floor(Math.random()*n.length),s=(s=n.splice(a,1))[0],a=Math.floor(Math.random()*n.length),i=(i=n.splice(a,1))[0],c(r),l(s),x(i),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),y(!0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(I.jsx)(o.a,{style:{marginTop:"20px",marginBottom:"20px"},children:n&&i&&u?Object(I.jsxs)(D.a,{style:{backgroundColor:"#F6DFEB"},children:[Object(I.jsx)("h2",{style:{textAlign:"center",textDecoration:"underline",color:"black",textShadow:"0px 0px 8px #ffffff",fontFamily:"Cinzel, serif"},children:"CAN'T DECIDE WHAT YOU WANT?"}),Object(I.jsx)(B.a,{columns:3,children:Object(I.jsxs)(B.a.Row,{children:[Object(I.jsx)(B.a.Column,{style:{textAlign:"center",fontWeight:"bold"},children:Object(I.jsxs)(J.a,{as:"a",href:"/browse/".concat(n.id),style:{background:"black"},id:"random-card",children:[Object(I.jsx)(d.a,{src:void 0!==n.image_set?n.image_set[0].image:null}),Object(I.jsxs)(J.a.Content,{children:[Object(I.jsx)(J.a.Header,{style:{color:"white"},children:n.name}),Object(I.jsxs)(J.a.Description,{style:{color:"white"},children:["GBP \xa3",n.price,".00"]})]})]})}),Object(I.jsx)(B.a.Column,{style:{textAlign:"center",fontWeight:"bold"},children:Object(I.jsxs)(J.a,{as:"a",href:"/browse/".concat(i.id),style:{background:"black"},id:"random-card",children:[Object(I.jsx)(d.a,{src:void 0!==i.image_set?i.image_set[0].image:null}),Object(I.jsxs)(J.a.Content,{children:[Object(I.jsx)(J.a.Header,{style:{color:"white"},children:i.name}),Object(I.jsxs)(J.a.Description,{style:{color:"white"},children:["GBP \xa3",i.price,".00"]})]})]})}),Object(I.jsx)(B.a.Column,{style:{textAlign:"center",fontWeight:"bold"},children:Object(I.jsxs)(J.a,{as:"a",href:"/browse/".concat(u.id),style:{background:"black"},id:"random-card",children:[Object(I.jsx)(d.a,{src:void 0!==u.image_set?u.image_set[0].image:null}),Object(I.jsxs)(J.a.Content,{children:[Object(I.jsx)(J.a.Header,{style:{color:"white"},children:u.name}),Object(I.jsxs)(J.a.Description,{style:{color:"white"},children:["GBP \xa3",u.price,".00"]})]})]})})]})})]}):Object(I.jsx)(I.Fragment,{children:f?Object(I.jsx)(D.a,{children:Object(I.jsxs)(k.a,{icon:!0,color:"red",children:[Object(I.jsx)(b.a,{name:"exclamation circle"}),Object(I.jsxs)(k.a.Content,{children:[Object(I.jsx)(k.a.Header,{children:"Error:"}),"\u26d4\ufe0f Oops! Something has gone wrong, please refresh the page."]})]})}):Object(I.jsx)(D.a,{children:Object(I.jsxs)(k.a,{icon:!0,color:"blue",children:[Object(I.jsx)(b.a,{name:"circle notched",loading:!0}),Object(I.jsxs)(k.a.Content,{children:[Object(I.jsx)(k.a.Header,{children:"Just one second"}),"\ud83d\ude0e We are fetching that content for you."]})]})})})})},W=function(){return Object(I.jsxs)(D.a,{style:{backgroundColor:"lightBlue"},children:[Object(I.jsx)("h2",{style:{textAlign:"center",textDecoration:"underline",color:"black",textShadow:"0px 0px 8px #ffffff",fontFamily:"Cinzel, serif"},children:"TRENDING BRANDS"}),Object(I.jsx)(H.a,{naturalSlideWidth:100,naturalSlideHeight:100,totalSlides:15,interval:8e3,isPlaying:!0,playDirection:"forward",orientation:"horizontal",visibleSlides:3,infinite:!0,children:Object(I.jsxs)(H.c,{children:[Object(I.jsx)(H.b,{index:0,children:Object(I.jsx)(d.a,{src:"https://i.imgur.com/HVWTKQT.jpg"})}),Object(I.jsx)(H.b,{index:1,children:Object(I.jsx)(d.a,{src:"https://i.imgur.com/v4IJUX3.png"})}),Object(I.jsx)(H.b,{index:2,children:Object(I.jsx)(d.a,{src:"https://i.imgur.com/NFC2wRY.png"})}),Object(I.jsx)(H.b,{index:3,children:Object(I.jsx)(d.a,{src:"https://i.imgur.com/CukmfSk.png"})}),Object(I.jsx)(H.b,{index:4,children:Object(I.jsx)(d.a,{src:"https://i.imgur.com/FnZAiTK.png"})}),Object(I.jsx)(H.b,{index:5,children:Object(I.jsx)(d.a,{src:"https://i.imgur.com/wqikhH0.png"})}),Object(I.jsx)(H.b,{index:6,children:Object(I.jsx)(d.a,{src:"https://i.imgur.com/L5IcNcS.png"})}),Object(I.jsx)(H.b,{index:7,children:Object(I.jsx)(d.a,{src:"https://i.imgur.com/vVj9th6.png"})}),Object(I.jsx)(H.b,{index:8,children:Object(I.jsx)(d.a,{src:"https://i.imgur.com/4Vq5rSK.png"})}),Object(I.jsx)(H.b,{index:9,children:Object(I.jsx)(d.a,{src:"https://i.imgur.com/jzb1p4b.png"})}),Object(I.jsx)(H.b,{index:10,children:Object(I.jsx)(d.a,{src:"https://i.imgur.com/hEGLgsS.png"})}),Object(I.jsx)(H.b,{index:11,children:Object(I.jsx)(d.a,{src:"https://i.imgur.com/OqYJqcB.png"})}),Object(I.jsx)(H.b,{index:12,children:Object(I.jsx)(d.a,{src:"https://i.imgur.com/mqHGR4e.png"})}),Object(I.jsx)(H.b,{index:13,children:Object(I.jsx)(d.a,{src:"https://i.imgur.com/dURdKjt.png"})}),Object(I.jsx)(H.b,{index:14,children:Object(I.jsx)(d.a,{src:"https://i.imgur.com/OpNjAzb.png"})})]})})]})},M=function(){return Object(I.jsxs)("div",{id:"home-section",children:[Object(I.jsx)(o.a,{children:Object(I.jsx)(P,{})}),Object(I.jsx)(o.a,{style:{textAlign:"center",margin:"18px"},children:Object(I.jsx)(E,{})}),Object(I.jsx)(o.a,{children:Object(I.jsx)(G,{})}),Object(I.jsx)(o.a,{children:Object(I.jsx)(L,{})}),Object(I.jsx)(o.a,{style:{marginBottom:"20px"},children:Object(I.jsx)(W,{})})]})},U=n(221),K=function(){var e=new Date(null).getHours(null),t=null;return e<12?t="\ud83c\udf1e Good Morning,":e>=12&&e<=17?t="\u2600\ufe0f Good Afternoon,":e>=17&&e<=24&&(t="\ud83c\udf1c Good Evening,"),Object(I.jsxs)("section",{id:"profile-section",children:[Object(I.jsx)(D.a,{secondary:!0,textAlign:"center",size:"mini",inverted:!0,color:"grey",children:Object(I.jsxs)(U.a,{children:[Object(I.jsx)(U.a.Section,{link:!0,href:"/",children:"Home"}),Object(I.jsx)(U.a.Divider,{}),Object(I.jsx)(U.a.Section,{link:!0,href:"/",children:"Registration"}),Object(I.jsx)(U.a.Divider,{}),Object(I.jsx)(U.a.Section,{active:!0,children:"Profile"})]})}),Object(I.jsx)("div",{children:Object(I.jsx)("h1",{children:t})})]})},q=[{key:1,text:"T-Shirts",value:"T-Shirts"},{key:2,text:"Jumpers",value:"Jumpers"},{key:3,text:"Dresses",value:"Dresses"},{key:4,text:"Shorts",value:"Shorts"},{key:5,text:"Jeans",value:"Jeans"},{key:6,text:"Shirts",value:"Shirts"},{key:7,text:"Socks",value:"Socks"},{key:8,text:"Trousers",value:"Trousers"}],Y=[{key:1,text:"Male",value:"M",icon:"male"},{key:2,text:"Female",value:"F",icon:"female"}],V=[{key:1,text:"Low to High",value:1,icon:"sort amount down"},{key:2,text:"High to Low",value:2,icon:"sort amount up"}],Q=function(){var e=Object(a.useState)([]),t=Object(g.a)(e,2),n=t[0],r=t[1],s=Object(l.e)(),i=Object(a.useState)(!1),u=Object(g.a)(i,2),x=u[0],m=u[1],p=c.a.useState(null),f=Object(g.a)(p,2),y=f[0],w=f[1],S=c.a.useState(null),_=Object(g.a)(S,2),z=_[0],A=_[1],F=c.a.useState(null),N=Object(g.a)(F,2),R=N[0],E=N[1];Object(a.useEffect)((function(){var e=new URLSearchParams(s.search).get("value"),t=function(){var t=Object(O.a)(v.a.mark((function t(){var n,a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,T.a.get("api/products/");case 3:n=t.sent,a=n.data,e&&w(e),r(a),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0),m(!0);case 13:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[s.search]);var H=n.filter((function(e){return(e.category===y||null===y)&&(e.gender===z||null===z)})).sort((function(e,t){return null===R?0:1===R?e.price-t.price:2===R?t.price-e.price:void 0}));return Object(I.jsx)(o.a,{style:{marginBottom:"10px"},id:"productindex-container",children:Object(I.jsx)(B.a,{columns:"two",children:Object(I.jsxs)(B.a.Row,{children:[Object(I.jsxs)(B.a.Column,{width:3,textAlign:"left",children:[Object(I.jsx)(o.a,{className:"animate__animated animate__slideInLeft",children:Object(I.jsx)(B.a.Column,{children:Object(I.jsx)(C.a,{as:"h2",content:"Filters",icon:"filter",size:"medium"})})}),Object(I.jsxs)(o.a,{className:"animate__animated animate__slideInLeft",children:[Object(I.jsx)(j.a,{style:{margin:"10px"},compact:!0,children:Object(I.jsx)(h.a,{placeholder:"By Category",value:y,options:q,onChange:function(e,t){return w(t.value)},clearable:!0,item:!0})}),Object(I.jsx)(j.a,{style:{margin:"10px"},compact:!0,children:Object(I.jsx)(h.a,{placeholder:"By Gender",options:Y,onChange:function(e,t){return A(t.value)},clearable:!0,item:!0})}),Object(I.jsx)(j.a,{style:{margin:"10px"},compact:!0,children:Object(I.jsx)(h.a,{placeholder:"By Price",options:V,onChange:function(e,t){return E(t.value)},clearable:!0,item:!0})})]})]}),Object(I.jsx)(B.a.Column,{width:13,children:n.length?Object(I.jsx)(J.a.Group,{itemsPerRow:3,children:H.map((function(e){return Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(J.a,{as:"a",href:"/browse/".concat(e.id),className:"animate__animated animate__pulse",children:[Object(I.jsx)(d.a,{src:void 0!==e.image_set?e.image_set[0].image:null}),Object(I.jsxs)(J.a.Content,{children:[Object(I.jsx)(J.a.Header,{children:e.name}),Object(I.jsxs)(J.a.Description,{children:["GBP \xa3",e.price,".00"]})]})]},e.name)})}))}):Object(I.jsx)(I.Fragment,{children:x?Object(I.jsx)(D.a,{children:Object(I.jsxs)(k.a,{negative:!0,icon:!0,children:[Object(I.jsx)(b.a,{name:"frown outline"}),Object(I.jsxs)(k.a.Content,{children:[Object(I.jsx)(k.a.Header,{children:"Sorry something went wrong!"}),"Please try again later"]})]})}):Object(I.jsx)(D.a,{children:Object(I.jsxs)(k.a,{icon:!0,color:"blue",children:[Object(I.jsx)(b.a,{name:"circle notched",loading:!0}),Object(I.jsxs)(k.a.Content,{children:[Object(I.jsx)(k.a.Header,{children:"Just one second"}),"\ud83d\ude0e We are fetching that content for you."]})]})})})})]})})})},X=n(209),Z=n(205),$=n(214),ee=function(e){var t=e.category,n=Object(a.useState)([]),c=Object(g.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(!1),l=Object(g.a)(i,2),j=l[0],h=l[1];Object(a.useEffect)((function(){var e=function(){var e=Object(O.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("/api/products/");case 3:t=e.sent,n=t.data,s(n),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),h(!0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var u=function(){return r.filter((function(e){return e.category===t}))};return Object(I.jsx)(o.a,{className:"animate__animated animate__slideInUp",children:u().length?Object(I.jsxs)(o.a,{children:[Object(I.jsx)(C.a,{as:"h2",content:"\ud83d\udc40 You may also like..."}),Object(I.jsx)(B.a,{style:{marginBottom:"10px"},children:Object(I.jsx)(B.a.Row,{columns:4,children:u().map((function(e,t){return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(B.a.Column,{style:{marginBottom:"15px"},children:Object(I.jsxs)(J.a,{as:"a",href:"/browse/".concat(e.id),children:[Object(I.jsx)(d.a,{src:void 0!==e.image_set?e.image_set[0].image:null}),Object(I.jsxs)(J.a.Content,{children:[Object(I.jsx)(J.a.Header,{children:e.name}),Object(I.jsxs)(J.a.Description,{children:["GBP \xa3",e.price,".00"]})]})]},t)})})}))})})]}):Object(I.jsx)(I.Fragment,{children:j?Object(I.jsx)(D.a,{children:Object(I.jsxs)(k.a,{icon:!0,color:"red",children:[Object(I.jsx)(b.a,{name:"exclamation circle"}),Object(I.jsxs)(k.a.Content,{children:[Object(I.jsx)(k.a.Header,{children:"Error:"}),"\u26d4\ufe0f Oops! Looks like you've grabbed the last gem! \ud83d\udc8e  Please refresh the page."]})]})}):Object(I.jsx)(D.a,{children:Object(I.jsxs)(k.a,{icon:!0,color:"blue",children:[Object(I.jsx)(b.a,{name:"circle notched",loading:!0}),Object(I.jsxs)(k.a.Content,{children:[Object(I.jsx)(k.a.Header,{children:"Just one second"}),"\ud83d\ude0e We are fetching that content for you \ud83d\udc57 \ud83e\ude73 \ud83d\udc5a."]})]})})})})},te=function(e){var t=e.userIsOwner,n=e.getUsername,c=u(),r=Object(a.useState)(!1),s=Object(g.a)(r,2),i=(s[0],s[1]),j=Object(l.g)().id,o=Object(a.useState)({product:j,comment:"",rating:"",owner_id:t(n[0])}),d=Object(g.a)(o,2),b=d[0],h=d[1],x=function(e){var t=Object(p.a)(Object(p.a)({},b),{},Object(m.a)({},e.target.name,e.target.value));h(t)},f=function(){var e=Object(O.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,T.a.post("/api/reviews/",b,{headers:{Authorization:"Bearer ".concat(c)}});case 4:window.location.reload(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),i(!0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(I.jsxs)(w.a,{reply:!0,onSubmit:f,children:[Object(I.jsxs)(w.a.Field,{onChange:x,children:[Object(I.jsx)(C.a,{as:"h4",children:"Add your review"}),Object(I.jsx)("input",{type:"number",min:1,max:5,value:b.rating,name:"rating",placeholder:"Rating out of 5"})]}),Object(I.jsx)(w.a.TextArea,{value:b.comment,onChange:x,name:"comment"}),Object(I.jsx)(S.a,{content:"Add a Comment",type:"submit",icon:"comment alternate outline",labelPosition:"left",color:"teal"})]})},ne=function(e){var t=e.productID,n=Object(a.useState)([]),c=Object(g.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(!1),j=Object(g.a)(i,2),o=j[0],d=j[1],h=Object(l.g)().id;Object(a.useEffect)((function(){var e=function(){var e=Object(O.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("/api/sellers/");case 3:t=e.sent,n=t.data,s(n),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),d(!0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[h]);var u=r.map((function(e){if(e.products[h]===t)return e.name}));return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(C.a,{as:"h4",children:"Sold by:"}),r?Object(I.jsx)(N.a,{divided:!0,horizontal:!0,relaxed:!0,children:u.map((function(e){return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(N.a.Item,{children:e},e)})}))}):o&&Object(I.jsx)(D.a,{children:Object(I.jsxs)(k.a,{negative:!0,icon:!0,children:[Object(I.jsx)(b.a,{name:"frown outline"}),Object(I.jsxs)(k.a.Content,{children:[Object(I.jsx)(k.a.Header,{children:"Sorry something went wrong!"}),"Please try again later"]})]})})]})},ae=function(){var e=Object(a.useState)([]),t=Object(g.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)([]),s=Object(g.a)(r,2),i=s[0],j=s[1],h=Object(a.useState)(!1),m=Object(g.a)(h,2),f=m[0],y=m[1],w=Object(a.useState)([]),_=Object(g.a)(w,2),z=_[0],A=_[1],F=Object(a.useState)([]),N=Object(g.a)(F,2),R=N[0],E=N[1],H=Object(a.useState)(!1),P=Object(g.a)(H,2),G=P[0],J=P[1],L=Object(l.g)().id,W=u(),M=z.map((function(e){return e.owner.id})),U=function(e){var t=x();return!!t&&e===t.sub},K=Object(a.useState)({product:L,customer:U(M[0])}),q=Object(g.a)(K,2),Y=q[0],V=q[1];Object(a.useEffect)((function(){var e=function(){var e=Object(O.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("/api/products/".concat(L,"/"));case 3:t=e.sent,a=t.data,window.scrollTo(0,0),c(a),j(n.category),A(a.reviews),E(a.id),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0),y(!0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();e()}),[L,n.category]);var Q=function(){var e=Object(O.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,n=Object(p.a)({},Y),V(n),e.next=6,T.a.post("/api/orders/",Y,{headers:{Authorization:"Bearer ".concat(W)}});case 6:J(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),y(!0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),ae=[{key:"details-and-care",title:{content:"Details & Care",icon:"heart"},content:{content:Object(I.jsx)("p",{className:"accordion-text",children:"All clothes are made from 100% recyclable material. Wash at no higher than 30 degrees and do not tumbledry."})}},{key:"delivery-collections-and-returns",title:{content:"Delivery, Collections & Returns",icon:"box"},content:{content:Object(I.jsxs)("div",{className:"accordion-text",children:[Object(I.jsx)("p",{children:"Free Standard Delivery - order recieved within 3-5 days"}),Object(I.jsx)("p",{children:"Orders can be collected for free from your local TKG Fashion store"}),Object(I.jsx)("p",{children:"Items can be fully refunded if they are returned by post (free return label included in packaging) or to a local TKG Fashion store within 28 days of the order being delivered or collected"})]})}},{key:"reviews",title:{content:"Reviews",icon:"comments outline"},content:{content:Object(I.jsx)(X.a.Group,{size:"large",children:function(){var e=x();return!!e&&Math.round(Date.now()/1e3)<e.exp}()?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(X.a,{children:z.map((function(e){return Object(I.jsxs)(X.a.Content,{children:[Object(I.jsxs)(X.a.Author,{children:[Object(I.jsx)(b.a,{name:"user circle"}),"Author: ",e.owner.username]}),Object(I.jsxs)(X.a.Metadata,{children:[Object(I.jsxs)("div",{children:[Object(I.jsx)(b.a,{name:"calendar alternate"}),"Posted on: ",e.posted_on]}),Object(I.jsx)(Z.a,{}),Object(I.jsxs)("div",{children:[Object(I.jsx)(b.a,{name:"star"}),"Rating: ",e.rating,"/5"]})]}),Object(I.jsx)(X.a.Text,{children:e.comment}),Object(I.jsx)(Z.a,{})]},e.id)}))}),Object(I.jsx)(D.a,{children:Object(I.jsx)(te,{userIsOwner:U,getUsername:M})})]}):Object(I.jsx)(X.a,{children:z.map((function(e){return Object(I.jsxs)(X.a.Content,{children:[Object(I.jsxs)(X.a.Author,{children:[Object(I.jsx)(b.a,{name:"user circle"}),"Author: ",e.owner.username]}),Object(I.jsxs)(X.a.Metadata,{children:[Object(I.jsxs)("div",{children:[Object(I.jsx)(b.a,{name:"calendar alternate"}),"Posted on: ",e.posted_on]}),Object(I.jsx)(Z.a,{}),Object(I.jsxs)("div",{children:[Object(I.jsx)(b.a,{name:"star"}),"Rating: ",e.rating,"/5"]})]}),Object(I.jsx)(X.a.Text,{children:e.comment}),Object(I.jsx)(Z.a,{})]},e.id)}))})})}}];return Object(I.jsx)(o.a,{style:{marginBottom:"15px"},children:n?Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)(o.a,{children:[Object(I.jsx)(B.a,{divided:"vertically",children:Object(I.jsxs)(B.a.Row,{columns:2,children:[Object(I.jsx)(B.a.Column,{children:Object(I.jsx)(d.a,{className:"animate__animated animate__slideInLeft",src:void 0!==n.image_set?n.image_set[0].image:null})}),Object(I.jsx)(B.a.Column,{children:Object(I.jsx)(o.a,{className:"animate__animated animate__slideInRight",children:Object(I.jsxs)("section",{className:"product-info-wrapper",children:[Object(I.jsx)(C.a,{as:"h1",textAlign:"center",style:{padding:"20px"},children:n.name}),Object(I.jsx)(ne,{id:R}),Object(I.jsx)(Z.a,{}),Object(I.jsxs)(C.a,{as:"h2",style:{padding:"2px"},children:["\xa3 ",n.price,".00"]}),Object(I.jsx)(o.a,{children:Object(I.jsx)(S.a,{circular:!0,style:{backgroundColor:"".concat(n.colour),padding:"15px"}})}),Object(I.jsxs)(C.a,{as:"h2",children:["Size: ",n.size]}),Object(I.jsx)("br",{}),G?Object(I.jsx)(S.a,{disabled:!0,children:"Added to Cart"}):Object(I.jsxs)(S.a,{animated:!0,size:"huge",color:"teal",onClick:Q,children:[Object(I.jsx)(S.a.Content,{visible:!0,children:"Add to Bag"}),Object(I.jsx)(S.a.Content,{hidden:!0,children:Object(I.jsx)(b.a,{name:"cart"})})]}),Object(I.jsx)(Z.a,{}),Object(I.jsx)($.a,{defaultActiveIndex:0,panels:ae,style:{fontSize:"20px"}})]})})})]})}),Object(I.jsx)(Z.a,{}),Object(I.jsx)(ee,{category:i})]})}):f&&Object(I.jsxs)(k.a,{negative:!0,icon:!0,children:[Object(I.jsx)(b.a,{name:"frown outline"}),Object(I.jsxs)(k.a.Content,{children:[Object(I.jsx)(k.a.Header,{children:"Sorry something went wrong!"}),"Please try again later"]})]})})},ce=n(210),re=n(117),se=function(){var e=Object(a.useState)([]),t=Object(g.a)(e,2),n=t[0],c=t[1],r=x();Object(a.useEffect)((function(){var e=function(){var e=Object(O.a)(v.a.mark((function e(){var t,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.a.get("api/orders/");case 3:t=e.sent,n=t.data,c(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var s=n.filter((function(e){if(e.customer===r.sub)return e.product.price})).map((function(e){return e.product.price}));return Object(I.jsx)(B.a,{columns:2,divided:!0,children:Object(I.jsxs)(B.a.Row,{children:[Object(I.jsx)(B.a.Column,{children:Object(I.jsxs)(D.a,{style:{marginLeft:"10px",marginBottom:"10px"},className:"animate__animated animate__slideInLeft",children:[Object(I.jsx)(C.a,{as:"h1",children:"My bag"}),Object(I.jsx)(Z.a,{}),Object(I.jsx)(ce.a.Group,{divided:!0,children:n.map((function(e){if(e.customer===r.sub)return console.log(e.product.name),Object(I.jsxs)(ce.a,{children:[Object(I.jsx)(ce.a.Image,{src:e.product.image_set[0].image}),Object(I.jsxs)(ce.a.Content,{children:[Object(I.jsx)(C.a,{as:"h3",children:e.product.name}),Object(I.jsx)("br",{}),Object(I.jsx)("br",{}),Object(I.jsxs)(C.a,{color:"grey",as:"h3",children:["\xa3",e.product.price]}),Object(I.jsx)("br",{}),Object(I.jsx)("br",{}),Object(I.jsxs)(ce.a.Extra,{children:[Object(I.jsx)(re.a,{style:{backgroundColor:"".concat(e.product.colour),color:"white"},children:e.product.colour}),Object(I.jsx)(re.a,{icon:"hashtag",children:"Quantity: 1"}),Object(I.jsxs)(re.a,{icon:"globe",children:["Size: ",e.product.size]})]})]})]},e.product.name)}))})]})}),Object(I.jsx)(B.a.Column,{children:Object(I.jsxs)(D.a,{style:{marginRight:"10px"},compact:!0,className:"animate__animated animate__slideInRight",children:[Object(I.jsx)(C.a,{as:"h1",children:"Total"}),Object(I.jsx)(Z.a,{}),Object(I.jsxs)(B.a,{columns:2,children:[Object(I.jsxs)(B.a.Row,{children:[Object(I.jsx)(B.a.Column,{children:Object(I.jsx)(C.a,{as:"h4",children:"Sub-total"})}),Object(I.jsx)(B.a.Column,{className:"animate__animated animate__tada animate__delay-2s",children:Object(I.jsxs)(C.a,{as:"h4",children:["\xa3 ",s.reduce((function(e,t){return e+t}),0)]})})]}),Object(I.jsxs)(B.a.Row,{children:[Object(I.jsx)(B.a.Column,{children:Object(I.jsx)(C.a,{as:"h4",children:"Delivery"})}),Object(I.jsx)(B.a.Column,{children:Object(I.jsx)(C.a,{as:"h4",children:"Free Standard Delivery (3-5 days)"})})]})]}),Object(I.jsx)(Z.a,{}),Object(I.jsx)(S.a,{fluid:!0,color:"teal",children:"CHECKOUT"}),Object(I.jsx)(C.a,{as:"h5",children:"We accept:"}),Object(I.jsx)(d.a,{centered:!0,src:"https://res.cloudinary.com/dwvbpmbul/image/upload/v1639073366/Screenshot_2021-12-09_at_17.36.24_apmuan.png"})]})})]})})},ie=function(){return Object(I.jsxs)(i.a,{children:[Object(I.jsx)(F,{}),Object(I.jsxs)(l.c,{children:[Object(I.jsx)(l.a,{exact:!0,path:"/",element:Object(I.jsx)(M,{})}),Object(I.jsx)(l.a,{exact:!0,path:"/profile",element:Object(I.jsx)(K,{})}),Object(I.jsx)(l.a,{exact:!0,path:"/browse/:id",element:Object(I.jsx)(ae,{})}),Object(I.jsx)(l.a,{exact:!0,path:"/browse",element:Object(I.jsx)(Q,{})}),Object(I.jsx)(l.a,{path:"/orders",element:Object(I.jsx)(se,{})})]}),Object(I.jsx)(R,{})]})};n(193);s.a.render(Object(I.jsx)(ie,{}),document.getElementById("root"))}},[[194,1,2]]]);
//# sourceMappingURL=main.d005f686.chunk.js.map