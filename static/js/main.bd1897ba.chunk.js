(this.webpackJsonppupster=this.webpackJsonppupster||[]).push([[0],{37:function(e,t,n){},43:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),s=n(24),i=n.n(s),l=(n(37),n(9)),o=n(2);var h=function(){var e=Object(o.e)();return Object(a.jsxs)("ul",{className:"nav nav-tabs",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(l.b,{to:"/",className:"/"===e.pathname?"nav-link active":"nav-link",children:"About"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(l.b,{to:"/discover",className:"/blog"===e.pathname?"nav-link active":"nav-link",children:"Discover"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(l.b,{to:"/search",className:"/contact"===e.pathname?"nav-link active":"nav-link",children:"Search"})})]})};n(43);function j(){return Object(a.jsx)("div",{children:"Hello"})}function u(){return Object(a.jsx)("div",{children:"its Discover"})}var b=n(26),d=n(27),m=n(28),v=n(31),p=n(30),O=n(29),x=n.n(O),f=function(e){return x.a.get("https://dog.ceo/api/breed/"+e+"/images/random/5")},g=function(e){Object(v.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={result:[],search:""},e.handleInputChange=function(t){var n=t.target.value,a=t.target.name;e.setState(Object(b.a)({},a,n))},e.handleFormSubmit=function(t){t.preventDefault(),f(e.state.search).then((function(t){return e.setState({result:t.data.message})})).catch((function(e){return console.log(e)}))},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("form",{children:Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"search",children:"Search By Breed:"}),Object(a.jsx)("input",{onChange:this.handleInputChange,value:this.state.value,name:"search",type:"text",className:"form-control",placeholder:"Type a dog breed to begin",id:"search"}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{onClick:this.handleFormSubmit,className:"btn btn-primary",children:"Search"})]})}),this.state.result.map((function(e){return Object(a.jsx)("img",{alt:"Dog",src:e,className:"img-responsive"})}))]})}}]),n}(c.Component);var N=function(){return Object(a.jsx)(l.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)(h,{}),Object(a.jsx)(o.a,{exact:!0,path:"/",component:j}),Object(a.jsx)(o.a,{exact:!0,path:"/discover",component:u}),Object(a.jsx)(o.a,{exact:!0,path:"/search",component:g})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,62)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),k()}},[[61,1,2]]]);
//# sourceMappingURL=main.bd1897ba.chunk.js.map