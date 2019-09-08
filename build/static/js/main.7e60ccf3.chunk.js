(window["webpackJsonpmodule05-react"]=window["webpackJsonpmodule05-react"]||[]).push([[0],{45:function(n,e,t){n.exports=t(72)},72:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(29),i=t.n(o),c=t(37),l=t(8),u=t(14),s=t.n(u),p=t(40),d=t(30),f=t(31),m=t(32),b=t(41),g=t(33),x=t(42),h=t(12),v=t(34),y=t.n(v).a.create({baseURL:"https://api.github.com"}),w=t(6),E=t(7);function j(){var n=Object(w.a)(["\n  list-style: none;\n  margin-top: 30px;\n\n  li {\n    padding: 15px 0;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n\n    /* verifica se tem um proximo elemento e aplica nele o estilo */\n    & + li {\n      border-top: 1px solid #eee;\n    }\n\n    a {\n      color: #7159c1;\n      text-decoration: none;\n    }\n  }\n"]);return j=function(){return n},n}function O(){var n=Object(w.a)(["\n      svg {\n        animation: "," 2s linear infinite;\n      }\n    "]);return O=function(){return n},n}function k(){var n=Object(w.a)(["\n  background: #7159c1;\n  border: 0;\n  padding: 0 15px;\n  margin-left: 10px;\n  border-radius: 4px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.6;\n  }\n\n  ","\n"]);return k=function(){return n},n}function S(){var n=Object(w.a)(["\n  from {\n    transform: rotate(0deg)\n  }\n\n  to {\n    transform: rotate(360deg)\n  }\n"]);return S=function(){return n},n}function R(){var n=Object(w.a)(["\n  margin-top: 30px;\n  display: flex;\n  flex-direction: row;\n\n  input {\n    flex: 1;\n    border: 1px solid #eee;\n    padding: 10px 15px;\n    border-radius: 4px;\n    font-size: 16px;\n  }\n"]);return R=function(){return n},n}function z(){var n=Object(w.a)(["\n  max-width: 700px;\n  background: #fff;\n  border-radius: 4px;\n  box-shadow: 0 0 24px rgba(0, 0, 0, 0.1);\n  padding: 30px;\n  margin: 80px auto;\n\n  h1 {\n    font-size: 20px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n\n    svg {\n      margin-right: 10px;\n    }\n  }\n"]);return z=function(){return n},n}var F=E.c.div(z()),I=E.c.form(R()),C=Object(E.d)(S()),D=E.c.button.attrs((function(n){return{type:"submit",disabled:n.loading}}))(k(),(function(n){return n.loading&&Object(E.b)(O(),C)})),J=E.c.ul(j()),A=function(n){function e(){var n,t;Object(f.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(b.a)(this,(n=Object(g.a)(e)).call.apply(n,[this].concat(r)))).state={newRepo:"",repositories:[],loading:!1},t.handleInputChange=function(n){t.setState({newRepo:n.target.value})},t.handleSubmit=function(){var n=Object(d.a)(s.a.mark((function n(e){var a,r,o,i,c;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),a=t.state,r=a.newRepo,o=a.repositories,t.setState({loading:!0}),n.next=5,y.get("/repos/".concat(r));case 5:i=n.sent,c={name:i.data.full_name},t.setState({repositories:[].concat(Object(p.a)(o),[c]),newRepo:"",loading:!1});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),t}return Object(x.a)(e,n),Object(m.a)(e,[{key:"componentDidMount",value:function(){var n=localStorage.getItem("repositories");n&&this.setState({repositories:JSON.parse(n)})}},{key:"componentDidUpdate",value:function(n,e){var t=this.state.repositories;e.repositories!==t&&localStorage.setItem("repositories",JSON.stringify(t))}},{key:"render",value:function(){var n=this.state,e=n.newRepo,t=n.loading,a=n.repositories;return r.a.createElement(F,null,r.a.createElement("h1",null,r.a.createElement(h.a,null),"Reposit\xf3rios"),r.a.createElement(I,{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",placeholder:"Adicionar Repositorio",onChange:this.handleInputChange,value:e}),r.a.createElement(D,{loading:t},t?r.a.createElement(h.c,{color:"#FFF",size:14}):r.a.createElement(h.b,{color:"#FFF",size:14}))),r.a.createElement(J,null,a.map((function(n){return r.a.createElement("li",{key:n.name},r.a.createElement("span",null,n.name),r.a.createElement("a",{href:""},"Detalhes"))}))))}}]),e}(a.Component);function N(){return r.a.createElement("h1",null,"Repository")}function U(){return r.a.createElement(c.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:A}),r.a.createElement(l.a,{exact:!0,path:"/repository",component:N})))}function B(){var n=Object(w.a)(["\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  /* faz ocupar 100% de altura da pagina */\n  html,body,#root {\n    min-height: 100%;\n  }\n\n  body {\n    background: #7159c1;\n    /* definicao da font */\n    -webkit-font-smoothing: antialiased !important;\n  }\n\n  body, input, button {\n    color: #222;\n    font-size: 14px;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);return B=function(){return n},n}var H=Object(E.a)(B());var L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(U,null),r.a.createElement(H,null))};i.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.7e60ccf3.chunk.js.map