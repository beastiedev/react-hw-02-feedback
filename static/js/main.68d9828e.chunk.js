(this["webpackJsonpreact-hw-02-feedback"]=this["webpackJsonpreact-hw-02-feedback"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(2),r=a.n(c),l=(a(12),a(3)),i=a(4),s=a(6),u=a(5),d=(a(13),function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,r=e.positivePercentage;return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Good: ",t),o.a.createElement("p",null,"Neutral: ",a),o.a.createElement("p",null,"Bad: ",n),o.a.createElement("p",null,"Total: ",c),o.a.createElement("p",null,"Positive feedback: ",r.toFixed(),"%"))}),m=function(e){var t=e.options,a=e.onLeaveFeedback;return o.a.createElement(o.a.Fragment,null,t.map((function(e){return o.a.createElement("input",{key:e.name,className:"feedback-action",type:"button",value:e.title,onClick:function(){return a(e.name)}})})))},b=function(e){return o.a.createElement("div",{className:"section"},o.a.createElement("h1",null,e.title),e.children)},f=function(e){var t=e.message;return o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,t))},p=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={good:0,neutral:0,bad:0,total:0,positivePercentage:0},e.feedbackOptions=[{name:"good",title:"Good"},{name:"neutral",title:"Neutral"},{name:"bad",title:"Bad"}],e.onFeedbackAction=function(t){var a;switch(t){case"neutral":a={neutral:e.state.neutral+1};break;case"bad":a={bad:e.state.bad+1};break;default:a={good:e.state.good+1}}e.setState(a,(function(){e.countTotalFeedback()}))},e.countTotalFeedback=function(){e.setState({total:e.state.good+e.state.neutral+e.state.bad},e.countPositiveFeedbackPercentage)},e.countPositiveFeedbackPercentage=function(){e.setState({positivePercentage:e.state.good/e.state.total*100})},e}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(b,{title:"PLease leave feedback"},o.a.createElement(m,{options:this.feedbackOptions,onLeaveFeedback:this.onFeedbackAction})),o.a.createElement(b,{title:"Statistics"},this.state.total?o.a.createElement(d,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.state.total,positivePercentage:this.state.positivePercentage}):o.a.createElement(f,{message:"No feedback given"})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.68d9828e.chunk.js.map