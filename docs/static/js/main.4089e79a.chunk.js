(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{47:function(e,a,r){"use strict";r.r(a);var t=r(1),c=r(21),s=r.n(c),n=r(10),i=r(7),o=r(2),l=Object(t.createContext)(),h=r(4),j=r(13),u=r(0),d=["isAuthenticated","component"],b=function(e){var a=e.isAuthenticated,r=e.component,t=Object(j.a)(e,d);return console.log(t.location.pathname),localStorage.setItem("lastPath",t.location.pathname),Object(u.jsx)(o.b,Object(h.a)(Object(h.a)({},t),{},{component:function(e){return a?Object(u.jsx)(r,Object(h.a)({},e)):Object(u.jsx)(o.a,{to:"/login"})}}))},m=["isAuthenticated","component"],p=function(e){var a=e.isAuthenticated,r=e.component,t=Object(j.a)(e,m);return Object(u.jsx)(o.b,Object(h.a)(Object(h.a)({},t),{},{component:function(e){return a?Object(u.jsx)(o.a,{to:"/"}):Object(u.jsx)(r,Object(h.a)({},e))}}))},O="[auth] login",v="[auth] logout",x=function(e){var a=e.history,r=Object(t.useContext)(l).dispatch;return Object(u.jsxs)("div",{className:"container mt-5",children:[Object(u.jsx)("h3",{children:"Login"}),Object(u.jsx)("hr",{}),Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=localStorage.getItem("lastPath")||"/";r({type:O,payload:{name:"laura"}}),a.replace(e)},children:"Login"})]})},f=function(){var e=Object(t.useContext)(l),a=e.user.name,r=e.dispatch,c=Object(o.g)();return Object(u.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(u.jsx)(i.b,{className:"navbar-brand",to:"/",children:"Asociaciones"}),Object(u.jsx)("div",{className:"navbar-collapse",children:Object(u.jsxs)("div",{className:"navbar-nav",children:[Object(u.jsx)(i.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(u.jsx)(i.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(u.jsx)(i.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]})}),Object(u.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(u.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(u.jsx)("span",{className:"nav-item nav-link text-info",children:a}),Object(u.jsx)("button",{className:"btn - btn-danger",onClick:function(){c.replace("/login"),r({type:v})},children:"Logout"})]})})]})},g=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],C=function(e){var a=e.id,r=e.superhero,t=e.alter_ego,c=e.first_appearance,s=e.characters;return Object(u.jsx)("div",{className:"card ms-3",style:{maxWidth:540},children:Object(u.jsxs)("div",{className:"row no-gutters",children:[Object(u.jsx)("div",{className:"col-md-4",children:Object(u.jsx)("img",{src:"./assets/heroes/heroes/".concat(a,".jpg"),className:"card-img",alt:r})}),Object(u.jsx)("div",{className:"col-md-8",children:Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h5",{className:"card-title",children:r}),Object(u.jsx)("p",{className:"card-text",children:t}),t!==s&&Object(u.jsx)("p",{className:"card-text",children:s}),Object(u.jsx)("p",{className:"card-text",children:Object(u.jsx)("small",{className:"text-muted",children:c})}),Object(u.jsx)(i.b,{to:"./hero/".concat(a),children:"M\xe1s..."})]})})]})})},_=function(e){var a=e.publisher,r=Object(t.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error("Publisher ".concat(e," no es correcto"));return g.filter((function(a){return a.publisher===e}))}(a)}),[a]);return Object(u.jsx)("div",{className:"card-columns animate__animated animate__fadeIn",children:r.map((function(e){return Object(u.jsx)(C,Object(h.a)({},e),e.id)}))})},N=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Marvel"}),Object(u.jsx)("hr",{}),Object(u.jsx)(_,{publisher:"Marvel Comics"})]})},y=function(e){var a=e.history,r=Object(o.i)().heroeId;console.log(r);var c=Object(t.useMemo)((function(){return e=r,g.find((function(a){return a.id===e}));var e}),[r]);if(!c)return Object(u.jsx)(o.a,{to:"/"});var s=c.superhero,n=c.publisher,i=c.alter_ego,l=c.first_appearance,h=c.characters;return Object(u.jsxs)("div",{className:"row mt-5",children:[Object(u.jsx)("div",{className:"col-4",children:Object(u.jsx)("img",{src:"../assets/heroes/heroes/".concat(r,".jpg"),alt:s,className:"img-thumbnail animate__animated animate__fadeInLeft"})}),Object(u.jsxs)("div",{className:"col-8",children:[Object(u.jsx)("h3",{children:s}),Object(u.jsxs)("ul",{className:"list-group-flush",children:[Object(u.jsxs)("li",{className:"list-group-item",children:[Object(u.jsx)("b",{children:"Alter ego: "}),i]}),Object(u.jsxs)("li",{className:"list-group-item",children:[Object(u.jsx)("b",{children:"Publisher: "}),n]}),Object(u.jsxs)("li",{className:"list-group-item",children:[Object(u.jsx)("b",{children:"Firts appearance: "}),l]})]}),Object(u.jsx)("h5",{children:Object(u.jsx)("b",{children:"Characters:"})}),Object(u.jsx)("p",{children:h}),Object(u.jsx)("button",{className:"btn btn-info",onClick:function(){a.length<=2?a.push("/"):a.goBack()},children:"Return"})]})]})},M=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"DC Screen"}),Object(u.jsx)("hr",{}),Object(u.jsx)(_,{publisher:"DC Comics"})]})},S=r(23),k=r.n(S),D=r(12),w=function(e){var a=e.history,r=Object(o.h)(),c=k.a.parse(r.search).q,s=void 0===c?"":c,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(t.useState)(e),r=Object(n.a)(a,2),c=r[0],s=r[1];return[c,function(e){var a=e.target;s(Object(h.a)(Object(h.a)({},c),{},Object(D.a)({},a.name,a.value)))},function(){s(e)}]}({searchText:s}),l=Object(n.a)(i,2),j=l[0],d=l[1],b=j.searchText,m=Object(t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),g.filter((function(a){return a.superhero.toLocaleLowerCase().includes(e)})))}(s)}),[s]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Searh Screen"}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-5",children:[Object(u.jsx)("h4",{children:"Search Form"}),Object(u.jsx)("hr",{}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(b))},children:[Object(u.jsx)("input",{type:"text",placeholder:"Find your hero",className:"form-control",name:"searchText",value:b,autoComplete:"off",onChange:d}),Object(u.jsx)("button",{type:"submit",className:"btn m-1 btn-block btn-outline-primary",children:"Search"})]})]}),Object(u.jsxs)("div",{className:"col-7",children:[Object(u.jsx)("h4",{children:"Results"}),Object(u.jsx)("hr",{}),""===s&&Object(u.jsx)("div",{className:"alert alert-info",children:"Search a hero"}),""!==s&&0===m.length&&Object(u.jsxs)("div",{className:"alert alert-danger",children:["There is no a hero with ",s]}),m.map((function(e){return Object(u.jsx)(C,Object(h.a)({},e),e.id)}))]})]})]})},A=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(f,{}),Object(u.jsx)("div",{className:"container mt-2",children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{excat:!0,path:"/marvel",component:N}),Object(u.jsx)(o.b,{excat:!0,path:"/hero/:heroeId",component:y}),Object(u.jsx)(o.b,{excat:!0,path:"/dc",component:M}),Object(u.jsx)(o.b,{excat:!0,path:"/search",component:w}),Object(u.jsx)(o.a,{to:"marvel"})]})})]})},B=function(){var e=Object(t.useContext)(l).user;return Object(u.jsx)(i.a,{children:Object(u.jsx)("div",{children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(p,{exact:!0,path:"/login",component:x,isAuthenticated:e.logged}),Object(u.jsx)(b,{path:"/",component:A,isAuthenticated:e.logged})]})})})},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case O:return Object(h.a)(Object(h.a)({},a.payload),{},{logged:!0});case v:return{logged:!1};default:return e}},T=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},F=function(){var e=Object(t.useReducer)(J,{},T),a=Object(n.a)(e,2),r=a[0],c=a[1];return Object(t.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r))}),[r]),Object(u.jsx)(l.Provider,{value:{user:r,dispatch:c},children:Object(u.jsx)(B,{})})};s.a.render(Object(u.jsx)(F,{}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.4089e79a.chunk.js.map