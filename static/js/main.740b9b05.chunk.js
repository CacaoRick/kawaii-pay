(window["webpackJsonpkawaii-pay"]=window["webpackJsonpkawaii-pay"]||[]).push([[0],{36:function(e,a,t){e.exports=t(45)},45:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(8),l=t.n(r),o=t(13),s=t(84),c=t(82),u=t(85),m=t(88),p=t(86),g=t(89),h=t(87),d=t(29),v=t(90),b=Object(d.a)((function(e){return{container:{height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},card:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:e.spacing(),marginTop:e.spacing()},input:{margin:e.spacing()},row:{width:"100%",display:"flex",flexDirection:"row",alignItems:"center"},expir:{width:120},slash:{margin:e.spacing()},cvs:{width:60},buttonWrapper:{marginTop:e.spacing(),width:"100%",position:"relative"},checkout:{width:"100%"},buttonProgress:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}})),f=["shocked","happy","excited","blissful","lovestruck"];var w=function(e){var a=b(e),t=i.a.useState(1),n=Object(o.a)(t,2),r=n[0],l=n[1],d=i.a.useState(""),w=Object(o.a)(d,2),E=w[0],x=w[1],k=i.a.useState(""),N=Object(o.a)(k,2),y=N[0],j=N[1],C=i.a.useState(""),P=Object(o.a)(C,2),L=P[0],I=P[1],O=i.a.useState(""),S=Object(o.a)(O,2),W=S[0],Y=S[1],T=i.a.useState(""),D=Object(o.a)(T,2),M=D[0],B=D[1],J=i.a.useState(!1),z=Object(o.a)(J,2),R=z[0],V=z[1],$=i.a.useState(!1),q=Object(o.a)($,2),A=q[0],F=q[1];return i.a.useEffect((function(){var e=(E?1:0)+(19===y.length?1:0)+(2===L.length&&4===W.length&&3===M.length?1:0)+(R?1:0);l(e)}),[y,M,L,W,R,E]),i.a.createElement(c.a,{className:a.container,maxWidth:"sm"},i.a.createElement(s.a,null),i.a.createElement(v.a,{mood:A?"ko":f[r]}),i.a.createElement(u.a,{className:a.card},i.a.createElement(m.a,{className:a.input,fullWidth:!0,variant:"outlined",margin:"dense",InputLabelProps:{shrink:!0},label:"Name",value:E,onChange:function(e){F(!1),x(e.target.value)}}),i.a.createElement(m.a,{className:a.input,fullWidth:!0,variant:"outlined",margin:"dense",inputProps:{maxLength:19},InputLabelProps:{shrink:!0},label:"Card Number",value:y,onChange:function(e){var a=e.target.value.split("-").join("");a.length>0&&(a=a.match(new RegExp(".{1,4}","g")).join("-")),F(!1),j(a)}}),i.a.createElement("div",{className:a.row},i.a.createElement("div",{className:a.row},i.a.createElement(m.a,{className:a.expir,variant:"outlined",margin:"dense",inputProps:{maxLength:2},InputLabelProps:{shrink:!0},label:"Expiry Month",placeholder:"MM",value:L,onChange:function(e){F(!1),I(e.target.value)}}),i.a.createElement(p.a,{className:a.slash},"/"),i.a.createElement(m.a,{className:a.expir,variant:"outlined",margin:"dense",inputProps:{maxLength:4},InputLabelProps:{shrink:!0},label:"Expiry Year",placeholder:"YYYY",value:W,onChange:function(e){F(!1),Y(e.target.value)}})),i.a.createElement(m.a,{className:a.expir,variant:"outlined",margin:"dense",inputProps:{maxLength:3},InputLabelProps:{shrink:!0},label:"CVS",value:M,onChange:function(e){F(!1),B(e.target.value)}})),i.a.createElement("div",{className:a.buttonWrapper},i.a.createElement(g.a,{className:a.checkout,variant:"outlined",color:"primary",disabled:R,onClick:function(){V(!0),setTimeout((function(){3!==r&&F(!0),V(!1)}),2e3)}},"Checkout"),R&&i.a.createElement(h.a,{size:24,className:a.buttonProgress,color:"secondary"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.740b9b05.chunk.js.map