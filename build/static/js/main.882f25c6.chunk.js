(this.webpackJsonpreactdd=this.webpackJsonpreactdd||[]).push([[0],{109:function(e,t,n){},110:function(e,t,n){},119:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(33),r=n.n(a),i=(n(109),n(70)),j=n(47),d=n(9),o=n(156),l=n(160),b=n(157),h=(n(110),n(158)),O=n(2);function x(){return Object(O.jsx)(h.a,{inverted:!0,children:Object(O.jsxs)(o.a,{children:[Object(O.jsx)(j.b,{to:"/",children:Object(O.jsx)(h.a.Item,{name:"Fantasy Generator Home"})}),Object(O.jsx)(j.b,{to:"/monster",children:Object(O.jsx)(h.a.Item,{name:"Monster Generator"})}),Object(O.jsx)(j.b,{to:"/classes",children:Object(O.jsx)(h.a.Item,{name:"Classes"})})]})})}n(119);function u(){return Object(O.jsx)("div",{children:Object(O.jsx)("p",{children:"WELCOME TO THE D&D API APPLICATION"})})}var p=n(161),f=n(159);function g(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:" Monster "}),Object(O.jsx)("button",{children:" GET MONSTER "}),Object(O.jsx)(p.a,{columns:3,children:Object(O.jsx)(p.a.Column,{children:Object(O.jsx)(f.a,{children:Object(O.jsxs)(f.a.Content,{children:[Object(O.jsx)(f.a.Header,{children:e.data.name}),Object(O.jsxs)(f.a.Description,{children:[Object(O.jsx)("strong",{children:"ALIGNMENT"}),Object(O.jsx)("p",{children:e.data.alignment}),Object(O.jsx)("strong",{children:"TYPE"}),Object(O.jsx)("p",{children:e.data.type}),Object(O.jsx)("strong",{children:"SIZE"}),Object(O.jsx)("p",{children:e.data.size}),Object(O.jsx)("strong",{children:"SPECIAL ABILITIES"}),e.data.special_abilities?e.data.special_abilities.map((function(e,t){return e.name,Object(O.jsxs)("p",{children:[" ",e.desc]})})):Object(O.jsx)("p",{children:"None"})]})]})})})})]})}var m=n(52),S=n.n(m);function E(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{children:" Classes "}),Object(O.jsx)("button",{children:" GET CLASS"}),Object(O.jsx)(p.a,{columns:3,children:Object(O.jsx)(p.a.Column,{children:Object(O.jsx)(f.a,{children:Object(O.jsxs)(f.a.Content,{children:[Object(O.jsx)(f.a.Header,{children:e.data.name}),Object(O.jsxs)(f.a.Description,{children:[Object(O.jsx)("strong",{children:"HIT DIE"}),Object(O.jsx)("p",{children:e.data.hit_die}),Object(O.jsx)("strong",{children:"Weapon Proficiencies"}),e.data.proficiencies.map((function(e,t){return Object(O.jsxs)("p",{children:[" ",e.index," "]})})),Object(O.jsx)("strong",{children:"SpellCasting Proficiencies"}),e.data.spellcasting?e.data.spellcasting.info.map((function(e){return e.desc,Object(O.jsx)("p",{children:e.name})})):Object(O.jsx)("p",{children:"No spellcasting ability"}),Object(O.jsx)("strong",{children:"Subclasses"}),e.data.subclasses.map((function(e){return Object(O.jsxs)("p",{children:[" ",e.name," "]})}))]})]})})})})]})}var I=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(!0),r=Object(i.a)(a,2),h=r[0],p=r[1],f=Object(c.useState)([]),m=Object(i.a)(f,2),I=m[0],T=m[1],w=Object(c.useRef)(!1);return Object(c.useEffect)((function(){return w=!0,S.a.get("https://www.dnd5eapi.co/api/monsters/").then((function(e){s(e.data.results),console.log("MONSTER.RESULTS",e.data.results);var t=Math.floor(330*Math.random()),n=e.data.results["".concat(t)].index;S.a.get("https://www.dnd5eapi.co/api/monsters/".concat(n)).then((function(e){return console.log("AXIOS 2: ",e.data),w&&s(e.data),null}))})).catch((function(e){return console.log("There was an error. Fix your code!"+e)})),function(){w=!1}}),[]),Object(c.useEffect)((function(){return w=!0,S.a.get("https://www.dnd5eapi.co/api/classes/").then((function(e){T(e.data.results),console.log("CLASSES.RESULTS",e.data.results);var t=Math.floor(12*Math.random()),n=e.data.results["".concat(t)].index;console.log("CLASSES.INDEX",e.data.results["".concat(t)].index),S.a.get("https://www.dnd5eapi.co/api/classes/".concat(n)).then((function(e){console.log("AXIOS 2classes: ",e.data),w&&T(e.data),p(!1)}))})).catch((function(e){return console.log("There was an error. Fix your code!"+e)})),function(){w=!1}}),[]),Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(j.a,{children:[Object(O.jsx)(x,{}),Object(O.jsx)(o.a,{children:h?Object(O.jsx)(l.a,{active:!0,inverted:!0,children:Object(O.jsx)(b.a,{inverted:!0,children:" LOADING..."})}):Object(O.jsxs)(d.c,{children:[Object(O.jsx)(d.a,{exact:!0,path:"/",children:Object(O.jsx)(u,{})}),Object(O.jsx)(d.a,{exact:!0,path:"/monster",children:Object(O.jsx)(g,{data:n})}),Object(O.jsx)(d.a,{exact:!0,path:"/classes",children:Object(O.jsx)(E,{data:I})})]})})]})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,162)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};n(141);r.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(I,{})}),document.getElementById("root")),T()}},[[142,1,2]]]);
//# sourceMappingURL=main.882f25c6.chunk.js.map