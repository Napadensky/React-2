(this.webpackJsonpmyfirstapp=this.webpackJsonpmyfirstapp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e){e.exports=JSON.parse('{"a":[{"title":"Task 1 ","responsible":"Mark ","description":"lorem impsum ","priority":"low "},{"title":"Task 2 ","responsible":"Steve ","description":"lorem impsum ","priority":"medium "},{"title":"Task 3 ","responsible":"Bill ","description":"lorem impsum ","priority":"high "}]}')},,,function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(7),l=a.n(r),i=(a(17),a(11)),s=a(2),c=a(3),m=a(1),d=a(5),p=a(4),u=a(8),h=a.n(u),b=(a(18),a(9)),v=a(10),f=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={title:"",responsible:"",description:"",priority:"low"},e.handleInput=e.handleInput.bind(Object(m.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(m.a)(e)),e}return Object(c.a)(a,[{key:"handleInput",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(v.a)({},n,a))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.onAddTodo(this.state),console.log("Enviando datos")}},{key:"render",value:function(){return o.a.createElement("div",{className:"card container"},o.a.createElement("form",{className:"card-body",onSubmit:this.handleSubmit},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",name:"title",onChange:this.handleInput,className:"form-control",placeholder:"Title"})),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",name:"responsible",className:"form-control",placeholder:"Responsable",onChange:this.handleInput})),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"text",name:"description",className:"form-control",placeholder:"Descripcion",onChange:this.handleInput})),o.a.createElement("div",{className:"form-group"},o.a.createElement("select",{name:"priority",className:"form-control",onChange:this.handleInput},o.a.createElement("option",{value:"low"},"low"),o.a.createElement("option",{value:"medium"},"medium"),o.a.createElement("option",{value:"higth"},"higth"))),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",{type:"submit",name:"description",className:"form-control btn btn-primary",placeholder:"Descripcion"}))))}}]),a}(n.Component),E=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).state={todos:b.a},e.handleAddTodo=e.handleAddTodo.bind(Object(m.a)(e)),e}return Object(c.a)(a,[{key:"handleAddTodo",value:function(e){this.setState({todos:[].concat(Object(i.a)(this.state.todos),[e])})}},{key:"removeTodo",value:function(e){window.confirm("Usted esta seguro de eliminar el ")&&this.setState({todos:this.state.todos.filter((function(t,a){return a!==e}))})}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t,a){return o.a.createElement("div",{className:"col-md-4 mb-4",key:a},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header"},o.a.createElement("h3",null,t.title),o.a.createElement("span",{className:"badge badge-pill badge-danger ml-2"},t.priority)),o.a.createElement("div",{className:"card-body"},o.a.createElement("p",null,t.description),o.a.createElement("p",null,o.a.createElement("mark",null,t.responsible))),o.a.createElement("div",{className:"card-footer"},o.a.createElement("button",{className:" btn btn-danger",onClick:e.removeTodo.bind(e,a)},"Borrar"))))}));return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"row mt-4 mb-4"},o.a.createElement(f,{onAddTodo:this.handleAddTodo})),o.a.createElement("nav",{className:"container navbar navbar-dark bg-dark"},o.a.createElement("a",{href:"http://localhost:3000",className:"text-white"},"Task",o.a.createElement("span",{className:"badge badge-pill badge-light ml-2"},this.state.todos.length))),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row mt-4"},t)),o.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo "}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.7f816f20.chunk.js.map