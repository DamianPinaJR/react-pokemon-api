(this.webpackJsonppokemonapi=this.webpackJsonppokemonapi||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),o=n.n(r),a=n(4),u=n.n(a),s=(n(10),n(2)),i=(n(11),n(12),n(13),function(e){var t=Object(r.useState)([]),n=Object(s.a)(t,2),o=n[0],a=n[1],u=e.data;return Object(r.useEffect)((function(){var e=!0;return fetch(u.url).then((function(e){return e.json()})).then((function(t){e&&a(t)})),function(){return e=!1}}),[u.url]),Object(c.jsxs)("div",{className:"box",children:[Object(c.jsx)("div",{className:"image",style:{backgroundImage:"url(\n                    ".concat(o.sprites?o.sprites.front_default:"https://lh3.googleusercontent.com/proxy/P-CXbDSBWU7HjmcPhkuBy7VfeZ2P7_cle4uoYm92si55yyXxdlTP18TKHcNhxGVNpCcc-x__7-5soub2_8YQKpIXWpl8gvIgMYIsatudvUuGsy_bbKEMo_04YWgvIyIuiw","\n                )")}}),Object(c.jsx)("h4",{children:o.name})]})}),j=function(e){var t=e.data;return Object(c.jsx)("section",{className:"container",children:t.map((function(e,t){return Object(c.jsx)(i,{data:e},t)}))})},l=function(){var e=Object(r.useState)([]),t=Object(s.a)(e,2),n=t[0],o=t[1],a=Object(r.useState)(""),u=Object(s.a)(a,2),i=u[0],l=u[1];Object(r.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon/?limit=151").then((function(e){return e.json()})).then((function(e){o(e.results)}))}),[]);var f=n.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return Object(c.jsxs)(r.Fragment,{children:[Object(c.jsx)("div",{className:"nav",children:Object(c.jsxs)("h2",{children:["Filter through gen 1 Pokemon: ",Object(c.jsx)("input",{type:"search",value:i,placeholder:"Enter Text Here...",onChange:function(e){return l(e.target.value)}})]})}),Object(c.jsx)(j,{data:f})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};u.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(l,{})}),document.getElementById("root")),f()}],[[14,1,2]]]);
//# sourceMappingURL=main.02377b46.chunk.js.map