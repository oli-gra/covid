(this["webpackJsonpcamden-covid"]=this["webpackJsonpcamden-covid"]||[]).push([[0],{153:function(e,t,a){e.exports=a(282)},158:function(e,t,a){},159:function(e,t,a){},282:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(137),c=a.n(r),s=(a(158),a(93)),i=a(150),l=(a(159),a(291)),d=a(293),u=a(292),m=a(288),h=a(295),p=a(139),v=a.n(p);var f=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){v.a.get('https://api.coronavirus.data.gov.uk/v1/data?filters=areaType=ltla&areaName=Bournemouth, Christchurch and Poole&structure={"date":"date","newCases":"newCasesBySpecimenDate", "rate":"cumCasesBySpecimenDateRate"}').then((function(e){var t=e.data.data.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{date:new Date(e.date).toLocaleDateString()})}));r(t)})).catch((function(e){return console.error(e)}))}),[]),o.a.createElement("div",{className:"App"},console.log(a),o.a.createElement(l.a,{theme:d.a.greyscale},o.a.createElement(u.a,{x:25,y:20,text:"Covid in Bournemouth, Christchurch and Poole"}),o.a.createElement(u.a,{x:25,y:35,text:"Daily new cases"}),o.a.createElement(m.a,{data:a.slice(-90),sortOrder:"descending",interpolation:"basis",scale:{x:"time",y:"linear"},standalone:!1,x:"date",y:"newCases",style:{data:{stroke:"#CD212A",strokeWidth:1}}}),o.a.createElement(h.a,{fixLabelOverlap:!0}),o.a.createElement(h.a,{dependentAxis:!0})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[153,1,2]]]);
//# sourceMappingURL=main.200f797a.chunk.js.map