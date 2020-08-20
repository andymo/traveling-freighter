(this["webpackJsonptraveling-freighter"]=this["webpackJsonptraveling-freighter"]||[]).push([[0],{11:function(e,a,t){e.exports=t(20)},16:function(e,a,t){},19:function(e,a,t){},20:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(3),l=t.n(o),c=(t(16),t(2)),u=t(1),i=t(5),s=t(6),h=t(10),k=t(9),m=function(e){var a=e.label,t=e.isSelected,n=e.onCheckboxChange;return r.a.createElement("div",{className:"form-check"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",name:a,checked:t,onChange:n,className:"form-check-input"}),a))},b=t(7),p=t.n(b),d=(t(18),t(19),t(8)),g=function(e){Object(h.a)(t,e);var a=Object(k.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).selectAllCheckboxes=function(e){Object.keys(n.state.checkboxes).forEach((function(a){n.setState((function(t){return{checkboxes:Object(u.a)(Object(u.a)({},t.checkboxes),{},Object(c.a)({},a,e))}}))}))},n.selectAll=function(){return n.selectAllCheckboxes(!0)},n.deselectAll=function(){return n.selectAllCheckboxes(!1)},n.handleCheckboxChange=function(e){var a=e.target.name;n.setState((function(e){return{checkboxes:Object(u.a)(Object(u.a)({},e.checkboxes),{},Object(c.a)({},a,!e.checkboxes[a]))}}))},n.handleFormSubmit=function(e){e.preventDefault(),Object.keys(n.state.checkboxes).filter((function(e){return n.state.checkboxes[e]})).forEach((function(e){console.log(e,"is selected.")})),console.log(n.state.start,"is the start"),n.setState((function(e){return{solution:n.computeSolution()}}))},n.createCheckbox=function(e){return r.a.createElement(m,{label:e,isSelected:n.state.checkboxes[e],onCheckboxChange:n.handleCheckboxChange,key:e})},n.createCheckboxes=function(){return n.locations.map(n.createCheckbox)},n.updateStart=function(e){n.setState((function(a){return{start:e.value}}))},n.computeSolution=function(){var e=[];return Object.keys(n.state.checkboxes).filter((function(e){return n.state.checkboxes[e]})).foreach((function(a){return e.push(a)})),e},n.locations=Object.keys(d).sort(),n.state={checkboxes:n.locations.reduce((function(e,a){return Object(u.a)(Object(u.a)({},e),{},Object(c.a)({},a,!1))}),{}),start:n.locations[0],solution:[]},n}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Traveling Freighter"),r.a.createElement("h2",null,"Select your starting location"),r.a.createElement(p.a,{options:this.locations,value:this.state.start,onChange:this.updateStart,placeholder:"Select a start location"}),r.a.createElement("h2",null,"Select the locations of boxes you have to deliver"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},this.createCheckboxes(),r.a.createElement("div",{className:"form-group mt-2"},r.a.createElement("button",{type:"button",className:"btn btn-outline-primary mr-2",onClick:this.selectAll},"Select All"),r.a.createElement("button",{type:"button",className:"btn btn-outline-primary mr-2",onClick:this.deselectAll},"Deselect All"),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Compute your path!"))),r.a.createElement("h2",null,"Your Pathf"),r.a.createElement("table",null,this.state.solution.map((function(e){return r.a.createElement("tr",null,e)}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e){e.exports=JSON.parse('{"pator":{"jita":12,"renyn":10,"alikara":14,"piekura":16,"onnamon":20,"amarr":17,"tash":18,"alente":14,"nakugard":3,"bereye":13,"auvergne":10,"kador":19,"maspah":10,"uhkl":28},"jita":{"pator":11,"nakugard":10,"renyn":11,"tash":10,"alikara":2,"piekura":4,"auvergne":12,"kador":11,"maspah":16,"uhkl":35,"onnamon":7,"amarr":9,"alente":14,"bereye":13},"amarr":{"tash":2,"alente":15,"renyn":12,"alikara":10,"piekura":11,"onnamon":14,"pator":17,"nakugard":19,"maspah":20,"jita":9,"bereye":14,"auvergne":16,"kador":3,"uhkl":28},"tash":{"amarr":2,"renyn":13,"alikara":11,"piekura":12,"onnamon":15,"pator":18,"nakugard":20,"maspah":22,"jita":10,"alente":16,"bereye":15,"auvergne":17,"kador":5,"uhkl":30},"alikara":{"jita":2,"renyn":12,"tash":11,"kador":12,"amarr":10,"uhkl":37,"pator":14,"nakugard":16,"piekura":3,"maspah":18,"alente":15,"bereye":14,"auvergne":16,"onnamon":6},"renyn":{"jita":11,"tash":13,"amarr":12,"kador":14,"nakugard":14,"alikara":12,"pator":10,"alente":4,"piekura":15,"bereye":3,"auvergne":4,"onnamon":16,"maspah":20,"uhkl":38},"alente":{"amarr":15,"renyn":4,"alikara":15,"piekura":16,"onnamon":19,"pator":14,"nakugard":13,"maspah":24,"tash":16,"jita":14,"kador":17,"bereye":6,"auvergne":6,"uhkl":42},"nakugard":{"jita":10,"renyn":14,"alikara":16,"piekura":18,"onnamon":22,"pator":3,"amarr":19,"tash":20,"alente":13,"bereye":12,"auvergne":9,"kador":21,"maspah":13,"uhkl":31},"piekura":{"jita":4,"renyn":13,"alikara":3,"tash":12,"pator":16,"amarr":11,"nakugard":18,"auvergne":17,"bereye":15,"alente":16,"kador":13,"uhkl":39,"maspah":20,"onnamon":7},"bereye":{"renyn":3,"alikara":14,"piekura":15,"onnamon":28,"pator":13,"nakugard":12,"maspah":23,"amarr":14,"tash":15,"jita":13,"kador":16,"alente":6,"auvergne":7,"uhkl":41},"auvergne":{"jita":12,"renyn":4,"alikara":16,"piekura":17,"onnamon":20,"pator":10,"nakugard":9,"maspah":20,"amarr":16,"tash":17,"kador":18,"alente":6,"bereye":7,"uhkl":38},"kador":{"jita":11,"renyn":14,"alikara":12,"piekura":13,"onnamon":16,"pator":19,"nakugard":21,"maspah":23,"amarr":3,"tash":5,"alente":17,"bereye":16,"auvergne":18,"uhkl":30},"maspah":{"jita":16,"alikara":18,"piekura":20,"onnamon":24,"pator":10,"nakugard":13,"renyn":20,"amarr":20,"tash":22,"alente":24,"bereye":23,"auvergne":20,"kador":23,"uhkl":30},"onnamon":{"tash":15,"amarr":14,"kador":16,"uhkl":42,"maspah":24,"auvergne":20,"bereye":18,"piekura":7,"nakugard":22,"alente":19,"renyn":16,"alikara":6,"jita":7,"pator":20},"uhkl":{"jita":35,"alikara":37,"piekura":39,"onnamon":42,"pator":28,"nakugard":31,"maspah":30,"renyn":38,"amarr":28,"tash":30,"kador":30,"alente":42,"bereye":41,"auvergne":38}}')}},[[11,1,2]]]);
//# sourceMappingURL=main.4a489492.chunk.js.map