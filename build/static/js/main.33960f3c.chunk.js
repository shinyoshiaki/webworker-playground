(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=function(){return new Worker(n.p+"7020abcef22b56b5719e.worker.js")}},12:function(e,t,n){e.exports=n(21)},20:function(e,t,n){e.exports=n.p+"static/media/input.26e6f143.txt"},21:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(8),c=n.n(a),i=n(1),s=n(2),u=n(4),l=n(3),p=n(5),f=n(9),h=n.n(f),v=n(6),w=n.n(v),d=n(10),k=n(11),b=n.n(k),m=n(20);console.log({csv:m});var j=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).worker=new b.a,n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(d.a)(w.a.mark(function e(){var t,n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(m);case 2:return t=e.sent,e.next=5,t.text();case 5:n=e.sent,console.log({input:n});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.createElement("div",null,"a")}}]),t}(r.Component),O=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).worker=new h.a,n.state={counter:0},n.worker.postMessage(0),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.worker.addEventListener("message",function(t){console.log({event:t}),e.setState({counter:t.data})})}},{key:"render",value:function(){return o.a.createElement("div",null,"worker",this.state.counter,o.a.createElement(j,{input:[]}))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=function(){return new Worker(n.p+"3ca9e08b506537a0992a.worker.js")}}},[[12,2,1]]]);
//# sourceMappingURL=main.33960f3c.chunk.js.map