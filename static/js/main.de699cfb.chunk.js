(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(3),r=a.n(c),o=(a(9),a(1));function s(e){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"/navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),n.a.createElement("li",{className:"nav-item"})),n.a.createElement("form",{className:"d-flex"},n.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),n.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Search")),n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input mx-3",onClick:e.togglemode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label ",htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode"))))))}s.defaultProps={title:"Here is a title",about:"Here is about"};var m=function(e){var t=Object(l.useState)(""),a=Object(o.a)(t,2),c=a[0],r=a[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},n.a.createElement("h1",{className:"my-3"},"Forms"),n.a.createElement("h1",null,e.head),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{className:"form-control ",value:c,onChange:function(e){r(e.target.value)},style:{backgroundColor:"dark"===e.mode?"rgb(65, 65, 105)":"white",color:"dark"===e.mode?"white":"black"},id:"mybox",rows:"8"})),n.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var t=c.toUpperCase();r(t),e.showAlert("Converted to Uppercase","success")}},"Convert to Uppercase"),n.a.createElement("button",{className:"mx-2",onClick:function(){r(""),e.showAlert("All text has been cleared","success")}},"Clear"),n.a.createElement("button",{className:"mx-2",onClick:function(){var t=c.length;r("The Length of previous text is "+t),e.showAlert("Length function has been called","success")}},"Length"),n.a.createElement("button",{className:"mx-2",onClick:function(){var t=c.replace("kinza","Kinza_Arshad");r(t),e.showAlert("All text has been replaced","success")}},"Replace")),n.a.createElement("div",{className:"container my-4",style:{color:"dark"===e.mode?"white":"black"}},n.a.createElement("h2",null,"Your Text Summary :"),n.a.createElement("p",null,c.split(" ").length," words and ",c.length," chracters"),n.a.createElement("p",null,.008*c.split(" ").length," Minutes to read"),n.a.createElement("h2",null,"Preview"),n.a.createElement("p",null,c)))},i=function(e){return e.alert&&n.a.createElement("div",null,n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,e.alert.type)," : ",e.alert.msg))};var u=function(){var e=Object(l.useState)("light"),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(l.useState)(null),u=Object(o.a)(r,2),d=u[0],b=u[1],h=function(e,t){b({msg:e,type:t}),setTimeout(function(){b(null)},1500)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(s,{title:"TextUtilBlog",about:"About",mode:a,togglemode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="rgb(22, 22, 51)",h("Dark mode has been enabled","success"),document.title="TextUtils-Dark mode"):(c("light"),document.body.style.backgroundColor="white",h("Light mode has been enabled","success"),document.title="TextUtils-Light mode")}}),n.a.createElement(i,{alert:d}),n.a.createElement(m,{showAlert:h,head:"Enter the text to Analyze below",mode:a}))},d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,11)).then(function(t){var a=t.getCLS,l=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),l(e),n(e),c(e),r(e)})};r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u,null)),document.getElementById("root")),d()},4:function(e,t,a){e.exports=a(10)},9:function(e,t,a){}},[[4,1,2]]]);
//# sourceMappingURL=main.de699cfb.chunk.js.map