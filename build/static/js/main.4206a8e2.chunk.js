(this.webpackJsonpstardust=this.webpackJsonpstardust||[]).push([[0],{200:function(e,t,a){},204:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(26),c=a.n(o),i=a(4),s=(a(200),a(18)),l=a(5),u=a(13);function m(e){var t=e.screenHeight/16,a=t/3,n=.05*e.gridWidth+(.9*e.gridWidth-t)/100*e.starData.x+e.gridWidth*e.starData.column,o=.05*e.gridHeight+(.9*e.gridHeight-t)/100*e.starData.y+e.gridHeight*e.starData.row;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"star",onMouseOver:function(){e.showTooltip.show||e.setShowTooltip({show:!0,diameter:t,starData:e.starData,positionLeft:n,positionTop:o})},onMouseLeave:function(){e.showTooltip.show&&e.setShowTooltip({show:!1,diameter:0,starData:{},positionLeft:0,positionTop:0})},style:{backgroundColor:"white",boxShadow:"inset 0 0 ".concat(a/2,"px #fff, /* inner white */ inset ").concat(-a/2,"px 0 ").concat(2*a,"px ").concat(e.starData.type.highlight,", /* inner right cyan short */ inset ").concat(a/2,"px 0 ").concat(16*a,"px ").concat(e.starData.type.shadow,", /* inner left magenta broad */ inset ").concat(-a/2,"px 0 ").concat(4*a,"px ").concat(e.starData.type.highlight,", /* inner right cyan broad */ 0 0 ").concat(a/2,"px #fff, /* outer white */ ").concat(-a/8,"px 0 ").concat(a,"px ").concat(e.starData.type.shadow,", /* outer left magenta */ ").concat(a/8,"px 0 ").concat(a,"px ").concat(e.starData.type.highlight," /* outer right cyan */"),width:t,height:t,position:"absolute",top:"".concat(o,"px"),left:"".concat(n,"px"),cursor:"pointer"}},r.a.createElement("div",{className:"starOverlay"})))}function h(){var e=Object(n.useRef)(null),t=Object(n.useState)(0),a=Object(u.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)(0),l=Object(u.a)(s,2),h=l[0],p=l[1],d=Object(n.useState)(0),f=Object(u.a)(d,2),g=f[0],b=f[1],w=Object(n.useState)(0),E=Object(u.a)(w,2),y=E[0],v=E[1],x=Object(n.useState)([]),O=Object(u.a)(x,2),S=O[0],j=O[1],D=8,T=4,C=Object(n.useState)({show:!1,starData:{},diameter:0,positionLeft:0,positionTop:0}),M=Object(u.a)(C,2),L=M[0],k=M[1];return Object(n.useEffect)((function(){function t(){if(e.current){var t=e.current.clientWidth,a=e.current.clientWidth/5*3;p(t),c(a),v(a/T),b(t/D)}}return t(),window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[D,T]),Object(n.useEffect)((function(){function e(e,t){return Math.floor(Math.random()*(t-e))+e}var t=[{category:"blue",highlight:"#0ff",shadow:"#f0f"},{category:"green",highlight:"#85ff8d",shadow:"#0fb"},{category:"red",highlight:"#ff7a7a",shadow:"#ffbb80"},{category:"white",highlight:"#ccfffd",shadow:"#0fe"},{category:"yellow",highlight:"#cdd47b",shadow:"#fa0"}],a=["Aldebaran","Alpha Hydri","Altair","Beta Pictoris","Canis Minoris","Canum Venaticorum","Comae Berenices","Chi Herculis","Cygni","Delta Equulei","Denebola","Epsilon Serpentis","Eta Scorpii","Fomalhaut","Gamma Tucanae","Iota Virginis","Kappe Doradus","Lambda Arae","Leonis Minoris","Mu Cassiopeiae","Nu Octantis","Omicron Aquilae","Ophiuchi","Pi Mensae","Pollux","Procyon","Psi Capricorni","Rho Puppis","Sigma Ursae","Sirius","Tau Cygni","Theta Sculptoris","Upsilon Aquarii","Ursae Majoris","Vega","Xi Pegasi","Zeta Leporis"];!function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}}(a);for(var n=[],r=0,o=0;o<T;o++)for(var c=0;c<D;c++){var i=t[e(0,t.length)],s={row:o,column:c,x:e(0,100),y:e(0,100),type:i,name:a[r]};n.push(s),r++}j(n)}),[T,D]),r.a.createElement(r.a.Fragment,null,r.a.createElement(i.Row,null,r.a.createElement(i.Col,{s:9,offset:["s2"],id:"centercolumn"},r.a.createElement(i.Frame,{className:"mainscreen",noBackground:!0,animate:!0},r.a.createElement(i.Puffs,null,r.a.createElement("div",{ref:e,style:{width:"100%",height:"".concat(o,"px")}},S.map((function(e){return r.a.createElement(m,{starData:e,key:"star_row".concat(e.row,"_column").concat(e.column),screenHeight:o,gridWidth:g,gridHeight:y,showTooltip:L,setShowTooltip:k})})),!0===L.show&&r.a.createElement(i.Frame,{animate:!0,corners:1,level:0,style:{position:"absolute",left:L.starData.column+1<=D/2&&"".concat(L.positionLeft+1.5*L.diameter,"px"),right:L.starData.column+1>D/2&&"".concat(h-L.positionLeft+.5*L.diameter,"px"),top:L.starData.row+1<=T/2&&"".concat(L.positionTop,"px"),bottom:L.starData.row+1>T/2&&"".concat(o-L.positionTop-.5*L.diameter,"px"),zIndex:100}},r.a.createElement(i.Words,{animate:!0,style:{whiteSpace:"nowrap",margin:"0.5em"}},L.starData.name))))))))}var p=function(e){var t=e.children,a=Object(n.useState)(!1),o=Object(u.a)(a,2),c=o[0],s=o[1];return r.a.createElement(i.Frame,{corners:1,animate:!0,layer:c?"control":"primary",onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)}},t)};function d(){return r.a.createElement(i.Row,null,r.a.createElement(i.Col,{s:12,m:8,l:6,offset:["m2","l3"],className:"centerContent"},r.a.createElement("h1",null,r.a.createElement(i.Words,{animate:!0},"Stardust")),r.a.createElement("div",null,r.a.createElement(s.b,{to:"/game"},r.a.createElement(i.Button,{Frame:p,animate:!0,className:"button"},"Neues Spiel starten")),r.a.createElement(s.b,{to:"/load"},r.a.createElement(i.Button,{Frame:p,animate:!0,className:"button"},"Spiel laden")),r.a.createElement(s.b,{to:"/credits"},r.a.createElement(i.Button,{Frame:p,animate:!0,className:"button"},"Credits")))))}var f=a(67),g=a.n(f),b=a(68),w={players:{background:{sound:{src:[a.n(b).a],loop:!0},settings:{loop:!0}}}},E=Object(i.withSounds)()((function(e){return Object(n.useEffect)((function(){e.sounds.background.play()}),[e.sounds.background]),r.a.createElement(r.a.Fragment,null)}));function y(){return r.a.createElement(i.ThemeProvider,{theme:Object(i.createTheme)()},r.a.createElement(i.SoundsProvider,{sounds:Object(i.createSounds)(w)},r.a.createElement(E,null),r.a.createElement(i.Arwes,{background:g.a},r.a.createElement(s.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/game"},r.a.createElement(h,null)),r.a.createElement(l.a,{path:"/"},r.a.createElement(d,null)))))))}c.a.render(r.a.createElement(y,null),document.querySelector("#root"))},67:function(e,t,a){e.exports=a.p+"static/media/background-large.d7fea702.jpg"},68:function(e,t,a){e.exports=a.p+"static/media/background_music_solace.33304210.mp3"},69:function(e,t,a){e.exports=a(204)}},[[69,1,2]]]);
//# sourceMappingURL=main.4206a8e2.chunk.js.map