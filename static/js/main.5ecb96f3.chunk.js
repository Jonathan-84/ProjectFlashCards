(this.webpackJsonpnotecards=this.webpackJsonpnotecards||[]).push([[0],{23:function(e,t,s){},51:function(e,t,s){},52:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),c=s(16),r=s.n(c),o=(s(23),s(0));var i=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"col",children:[Object(o.jsx)("h2",{className:"text-center",children:"FlashCards"}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{className:"d-flex mt-auto justify-content-center",children:[Object(o.jsxs)("p",{children:[" This simple to use site will help early learners practice their letters, numbers, and math. Following each answer attempt by your child, update the answer tracker above.",Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"If they answer correctly, click the [\u2714\ufe0f] and they will be rewarded with a fun gif. "}),Object(o.jsx)("li",{children:"For each incorrect answer, click the [\u2716\ufe0f] and they will slide back on the scale by 1."}),Object(o.jsx)("li",{children:"If they reach 10 points, they will a special gif.  "})]})}),"The goal of this simple site was to give repeatable practice opportunities and make it fun."]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})]})]})},l=s(3),d=s(4),b=s(6),j=s(5),h=function(e){Object(b.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).randomUppercase=function(){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZ",s="",n=0;n<1;n++){var a=Math.floor(Math.random()*t.length);s+=t.substring(a,a+1),e.setState({uppercaseHolder:s})}console.log(s)},e.state={uppercaseHolder:[]},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this.state.uppercaseHolder;return Object(o.jsx)("div",{className:"mb-0",children:Object(o.jsx)("div",{className:"col d-flex justify-content-center mt-3 ",children:Object(o.jsxs)("div",{className:" card text-white bg-info mb-1 d-flex justify-content-center col col-md-4",children:[Object(o.jsx)("div",{className:"card-header text-center",children:"Capital Letters"}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("div",{className:"col  d-flex justify-content-center",children:Object(o.jsx)("p",{children:"Can your child name the letter? "})}),Object(o.jsx)("div",{className:"col  d-flex justify-content-center",children:Object(o.jsx)("button",{title:"Generate Random Number",className:"",onClick:this.randomUppercase,children:"Press Me"})}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"col  d-flex justify-content-center",children:Object(o.jsx)("h2",{className:"text-center",children:e})})]})]})})})}}]),s}(n.Component),m=function(e){Object(b.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).randomLowercase=function(){for(var t="abcdefghiklmnopqrstuvwxyz",s="",n=0;n<1;n++){var a=Math.floor(Math.random()*t.length);s+=t.substring(a,a+1),e.setState({lowercaseHolder:s})}console.log(s)},e.state={lowercaseHolder:[]},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this.state.lowercaseHolder;return Object(o.jsx)("div",{className:"mb-0",children:Object(o.jsx)("div",{className:"col d-flex justify-content-center mt-3 ",children:Object(o.jsxs)("div",{className:" card text-white bg-info mb-1 d-flex justify-content-center col col-md-4",children:[Object(o.jsx)("div",{className:"card-header text-center",children:"Lowercase"}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("div",{className:"col  d-flex justify-content-center",children:Object(o.jsx)("p",{children:"Can your child name the letter? "})}),Object(o.jsx)("div",{className:"col  d-flex justify-content-center",children:Object(o.jsx)("button",{title:"Generate Random Number",onClick:this.randomLowercase,children:"Press Me"})}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"col  d-flex justify-content-center",children:Object(o.jsx)("h2",{className:"text-center",children:e})})]})]})})})}}]),s}(n.Component),u=function(e){Object(b.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).generateRandomNumber=function(){var t=Math.floor(20*Math.random())+1;e.setState({numberHolder:t})},e.state={numberHolder:[]},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this.state.numberHolder;return Object(o.jsx)("div",{className:"mb-0",children:Object(o.jsx)("div",{className:"col d-flex justify-content-center mt-3 ",children:Object(o.jsxs)("div",{className:" card text-white bg-info mb-3 d-flex justify-content-center col col-md-4",children:[Object(o.jsx)("div",{className:"card-header text-center",children:"Numbers"}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("div",{className:"col  d-flex justify-content-center",children:Object(o.jsx)("p",{children:"Can your child name the number? "})}),Object(o.jsx)("div",{className:"col  d-flex justify-content-center",children:Object(o.jsx)("button",{title:"Generate Random Number",onClick:this.generateRandomNumber,children:"Press Me"})}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"col  d-flex justify-content-center",children:Object(o.jsx)("h2",{className:"text-center",children:e})})]})]})})})}}]),s}(n.Component),x=function(e){Object(b.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this)).addNumbers=function(){var e=n.props.first,t=n.props.second;console.log(e,t);var s=e+t;n.setState({result:s}),console.log(s)},n.state={result:[]},n}return Object(d.a)(s,[{key:"render",value:function(){var e=this.state.result;return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{title:"Generate Random Number",onClick:this.addNumbers,children:"Check the Answer"}),Object(o.jsx)("h2",{className:"text-center",children:e})]})}}]),s}(n.Component),O=function(e){Object(b.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).generateNumbers=function(){var t=Math.floor(10*Math.random())+1,s=Math.floor(10*Math.random())+1;e.setState({firstnumber:t,secondnumber:s})},e.state={firstnumber:[0],secondnumber:[0]},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this.state,t=e.firstnumber,s=e.secondnumber;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"mb-0",children:Object(o.jsx)("div",{className:"col d-flex justify-content-center mt-3 ",children:Object(o.jsxs)("div",{className:" card text-white bg-info mb-1 d-flex justify-content-center col col-md-4",children:[Object(o.jsx)("div",{className:"card-header text-center",children:"Basic Addition"}),Object(o.jsxs)("div",{className:"card-body ",children:[Object(o.jsx)("div",{className:"col  d-flex justify-content-center",children:Object(o.jsx)("p",{children:"What is the sum? "})}),Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsx)("button",{title:"Generate Random Number",onClick:this.generateNumbers,children:"Random Numbers"})}),Object(o.jsxs)("h2",{className:"text-center",children:[t," + ",s]}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsx)(x,{first:this.state.firstnumber,second:this.state.secondnumber})})]})]})})})})}}]),s}(n.Component),f=function(e){Object(b.a)(s,e);var t=Object(j.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this)).minusNumbers=function(){var e=n.props.random1,t=n.props.random2;if(console.log(e,t),e>=t){var s=e-t;n.setState({minus:s}),console.log(s)}else{var a=t-e;n.setState({minus:a}),console.log(a)}},n.state={minus:[]},n}return Object(d.a)(s,[{key:"render",value:function(){var e=this.state.minus;return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{title:"Generate Random Number",onClick:this.minusNumbers,children:"Check the Answer"}),Object(o.jsx)("h2",{className:"text-center",children:e})]})}}]),s}(n.Component),v=function(e){Object(b.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).generateNumbers=function(){var t=Math.floor(10*Math.random())+1,s=Math.floor(10*Math.random())+1;e.setState({firstnumber:t,secondnumber:s})},e.state={firstnumber:[0],secondnumber:[0]},e}return Object(d.a)(s,[{key:"render",value:function(){var e,t=this.state,s=t.firstnumber,n=t.secondnumber;return console.log(s,n),e=s>=n?Object(o.jsxs)("h2",{className:"text-center",children:[s," - ",n]}):Object(o.jsxs)("h2",{className:"text-center",children:[n," - ",s]}),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"mb-0",children:Object(o.jsx)("div",{className:"col d-flex justify-content-center mt-3 ",children:Object(o.jsxs)("div",{className:" card text-white bg-info mb-1 d-flex justify-content-center col col-md-4",children:[Object(o.jsx)("div",{className:"card-header text-center",children:"Basic Subtraction"}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("div",{className:"col  d-flex justify-content-center",children:Object(o.jsx)("p",{children:"What is the difference? "})}),Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsx)("button",{title:"Generate Random Number",onClick:this.generateNumbers,children:"Press Me"})}),e,Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsx)(f,{random1:this.state.firstnumber,random2:this.state.secondnumber})})]})]})})})})}}]),s}(n.Component),p=[{word:"I",sentence:"I am Batman!"},{word:"to",sentence:"I want to eat!"},{word:"for",sentence:"I need pencils for school. "},{word:"they",sentence:"They played football."},{word:"or",sentence:"I want to fly."},{word:"can",sentence:"I can run fast."},{word:"here",sentence:"Is Mom here?"},{word:"see",sentence:"I see the dog. "},{word:"play",sentence:"I want to play baseball."},{word:"come",sentence:"Will Iron Man come?"},{word:"the",sentence:"Can I have the ball?"},{word:"is",sentence:"This is fun!"},{word:"are",sentence:"We are hungry."},{word:"be",sentence:"I will be a witch for Halloween."},{word:"one",sentence:"I have one wish."},{word:"said",sentence:"Dad said hi!"},{word:"like",sentence:"I like PJ Masks."},{word:"my",sentence:"Gecko is my favorite."},{word:"this",sentence:"This is Halloween!"},{word:"help",sentence:"I will help mom."},{word:"of",sentence:"I want a box of candy."},{word:"you",sentence:"Will you go with me?"},{word:"as",sentence:"I was dressed as a wolf."},{word:"does",sentence:"Mommy does yoga."},{word:"by",sentence:"I like videos by Miss Linky."},{word:"she",sentence:"She is happy."},{word:"has",sentence:"Dad has video games."},{word:"good",sentence:"We are good listeners."},{word:"little",sentence:"I am mommy's little man."},{word:"and",sentence:"Me and my brother love Halloween. "},{word:"he",sentence:"He said thank you."},{word:"with",sentence:"I like Peanut Butter with Jelly."},{word:"have",sentence:"I have fun toys."},{word:"what",sentence:"What are we having for dinner?"},{word:"do",sentence:"What do you like?"},{word:"look",sentence:"I look great."},{word:"where",sentence:"Where are we going?"},{word:"me",sentence:"Will you play with me?"},{word:"a",sentence:"I want a pony."},{word:"was",sentence:"I was hungry."},{word:"his",sentence:"We played with his toys."},{word:"from",sentence:"I am from Broomall."},{word:"we",sentence:"We played soccer."},{word:"want",sentence:"I want a bike."},{word:"go",sentence:"I will go to bed."},{word:"who",sentence:"Who is that?"},{word:"too",sentence:"I like witches too!"}],g=s(11),w=s.n(g);var N=function(e){var t=Object(n.useRef)();return Object(o.jsx)(w.a,{flipOnHover:!1,flipOnClick:!0,flipDirection:"horizontal",ref:t,children:Object(o.jsxs)("div",{className:" card text-info bg-white border-info",children:[Object(o.jsx)(g.FrontSide,{children:Object(o.jsx)("div",{className:"card-body",children:Object(o.jsx)("div",{className:"card-title text-center font-weight-bold display-4",children:e.word})})}),Object(o.jsx)(g.BackSide,{children:Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsxs)("p",{children:[" ",e.sentence]})})})]})})},y=function(e){Object(b.a)(s,e);var t=Object(j.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"mb-0",children:[Object(o.jsx)("div",{className:"col d-flex justify-content-center mt-3 ",children:Object(o.jsxs)("div",{className:"rounded text-white bg-info text-center sight-title",children:[Object(o.jsx)("h1",{className:"",children:" Sight Words "}),Object(o.jsx)("p",{children:"Click each card to flip them over and see a sample sentence. Before flipping it over, see if your child can recognize the word and provide their own sentence example. "})]})}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{class:"card-columns p-3",children:p.map((function(e){return Object(o.jsx)(N,{word:e.word,sentence:e.sentence})}))})]})})}}]),s}(n.Component);var k=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"footer",children:Object(o.jsxs)("div",{className:"footer-container bg-light pt-3",children:[Object(o.jsx)("ul",{children:Object(o.jsxs)("a",{className:"footer-text text-dark font-weight-bold",href:"https://github.com/Jonathan-84",target:"_blank",rel:"noreferrer",children:["GitHub ",Object(o.jsx)("span",{className:"fa fa-github"})]})}),Object(o.jsx)("ul",{children:Object(o.jsxs)("a",{className:"footer-text text-dark font-weight-bold",href:"https://www.linkedin.com/in/jrob84",target:"_blank",rel:"noreferrer",children:["LinkedIn ",Object(o.jsx)("span",{className:"fa fa-linkedin-square"})]})})]})})]})},C=function(e){Object(b.a)(s,e);var t=Object(j.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).randomKudos=function(){var t=["https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/Blueyfloss.gif","https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/MickeyGood.gif","https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/MickeyGreat.gif","https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/PJMasks.gif","https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/animatedGB.gif","https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/minions.gif","https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/TMNT.gif","https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/kermit.gif","https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/olaf.gif","https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/stevie.gif"],s=t[Math.floor(Math.random()*t.length)];e.setState({gif:s}),console.log(s)},e.randomTryAgain=function(){var t=[""],s=t[Math.floor(Math.random()*t.length)];e.setState({gif:s}),console.log(s)},e.correct=function(){e.state.count<10&&(e.randomKudos(),e.setState({count:e.state.count+1}))},e.resetgif=function(){var t=[""],s=t[Math.floor(Math.random()*t.length)];e.setState({gif:s}),console.log(s)},e.reset=function(){e.resetgif(),e.setState({count:0})},e.wrong=function(){e.state.count>0&&(e.randomTryAgain(),e.setState({count:e.state.count-1}))},e.state={count:0,gif:[]},e}return Object(d.a)(s,[{key:"render",value:function(){var e,t,s=this.state,n=s.count,a=s.gif;return 10===n&&(alert("Congrats you've reached 10 points. Now click reset and do it again!"),e=Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{className:"text-center font-weight-bold Congrats-font",children:"You've Reached 10 Points!!!!"}),Object(o.jsx)("img",{src:"https://raw.githubusercontent.com/Jonathan-84/FlashCards/master/src/Assets/genie.gif",className:"img-fluid",alt:"Genie Congratulations"})]})),n<10&&(e=Object(o.jsx)("img",{src:a,className:"img-fluid",alt:""})),1===n&&(t=Object(o.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"10%"},"aria-valuenow":"10","aria-valuemin":"0","aria-valuemax":"100",children:"01"})),2===n&&(t=Object(o.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"20%"},"aria-valuenow":"20","aria-valuemin":"0","aria-valuemax":"100",children:"02"})),3===n&&(t=Object(o.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"30%"},"aria-valuenow":"30","aria-valuemin":"0","aria-valuemax":"100",children:"03"})),4===n&&(t=Object(o.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"40%"},"aria-valuenow":"40","aria-valuemin":"0","aria-valuemax":"100",children:"04"})),5===n&&(t=Object(o.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"50%"},"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100",children:"05"})),6===n&&(t=Object(o.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"60%"},"aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100",children:"06"})),7===n&&(t=Object(o.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"70%"},"aria-valuenow":"70","aria-valuemin":"0","aria-valuemax":"100",children:"07"})),8===n&&(t=Object(o.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"80%"},"aria-valuenow":"80","aria-valuemin":"0","aria-valuemax":"100",children:"08"})),9===n&&(t=Object(o.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"90%"},"aria-valuenow":"90","aria-valuemin":"0","aria-valuemax":"100",children:"09"})),10===n&&(t=Object(o.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"100%"},"aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100",children:"10"})),Object(o.jsx)("div",{className:"mb-0",children:Object(o.jsx)("div",{className:"col d-flex justify-content-center mt-3 ",children:Object(o.jsxs)("div",{className:" card text-white bg-warning mb-1 d-flex justify-content-center col col-md-4",children:[Object(o.jsxs)("p",{className:"text-center",children:["Correct = (",Object(o.jsx)("i",{className:"bi bi-check-lg"}),") Incorrect = (",Object(o.jsx)("i",{className:"bi bi-x-lg"}),") Reset = (",Object(o.jsx)("i",{className:"bi bi-trash"}),") "]}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"progress",children:t}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:"d-flex justify-content-center",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"col d-flex justify-content-between flex-column flex-md-row",children:[Object(o.jsx)("button",{title:"Add Correct",onClick:this.correct,type:"button",className:"btn btn-secondary btn-lg m-1","data-bs-container":"body","data-bs-toggle":"popover","data-bs-placement":"top","data-bs-content":"Top popover",children:Object(o.jsx)("i",{className:"bi bi-check-lg"})}),Object(o.jsx)("button",{title:"Subtract Incorrect",onClick:this.wrong,type:"button",className:"btn btn-secondary btn-lg m-1","data-bs-container":"body","data-bs-toggle":"popover","data-bs-placement":"top","data-bs-content":"Top popover",children:Object(o.jsx)("i",{className:"bi bi-x-lg"})}),Object(o.jsx)("button",{title:"Reset",onClick:this.reset,type:"button",className:"btn btn-secondary btn-lg m-1","data-bs-container":"body","data-bs-toggle":"popover","data-bs-placement":"top","data-bs-content":"Top popover",children:Object(o.jsx)("i",{className:"bi bi-trash"})})]})})}),Object(o.jsx)("br",{}),e,Object(o.jsx)("br",{})]})})})}}]),s}(n.Component),M=s(9);var I=function(){return Object(o.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(o.jsx)("h2",{children:Object(o.jsx)(M.b,{to:"/Home",className:" font-weight-bold navbar-brand nav-text nav-link",children:" FlashCards"})}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:Object(o.jsxs)("ul",{className:"navbar-nav",children:[Object(o.jsx)("ul",{children:Object(o.jsx)(M.b,{to:"/capital",className:"nav-text",children:"Capital Letter Test"})}),Object(o.jsx)("ul",{children:Object(o.jsx)(M.b,{to:"/lowercase",className:"nav-text",children:"Lower Case Letter Test"})}),Object(o.jsx)("ul",{children:Object(o.jsx)(M.b,{to:"/sightwords",className:"nav-text",children:"Sight Words"})}),Object(o.jsx)("ul",{children:Object(o.jsx)(M.b,{to:"/numbers",className:"nav-text",children:"Number Test"})}),Object(o.jsxs)("ul",{className:"nav-item dropdown",children:[Object(o.jsx)(M.b,{className:"nav-text dropdown-toggle",id:"navbarDropdownMenuLink",to:"/#","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Math"}),Object(o.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink",children:[Object(o.jsx)("ul",{children:Object(o.jsx)(M.b,{to:"/newaddition",className:"nav-text",children:"Beginner Addition"})}),Object(o.jsx)("ul",{children:Object(o.jsx)(M.b,{to:"/newsubtraction",className:"nav-text",children:"Beginner Subtraction"})})]})]})]})})]})},F=s(2);s(51);var S=function(){return Object(o.jsx)(M.a,{basename:"/FlashCards",children:Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(I,{}),Object(o.jsx)(C,{}),Object(o.jsxs)(F.d,{children:[Object(o.jsx)(F.b,{exact:!0,path:"/home",component:i}),Object(o.jsx)(F.b,{exact:!0,path:"/capital",component:h}),Object(o.jsx)(F.b,{exact:!0,path:"/lowercase",component:m}),Object(o.jsx)(F.b,{exact:!0,path:"/numbers",component:u}),Object(o.jsx)(F.b,{exact:!0,path:"/Sightwords",component:y}),Object(o.jsx)(F.b,{exact:!0,path:"/newaddition",component:O}),Object(o.jsx)(F.b,{exact:!0,path:"/newsubtraction",component:v}),Object(o.jsx)(F.b,{render:function(){return Object(o.jsx)(F.a,{to:"/home"})}})]}),Object(o.jsx)(k,{})]})})},A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,53)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),c(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(S,{})}),document.getElementById("root")),A()}},[[52,1,2]]]);
//# sourceMappingURL=main.5ecb96f3.chunk.js.map