"use strict";(self.webpackChunkesperanza=self.webpackChunkesperanza||[]).push([[611],{611:(p,g,c)=>{c.r(g),c.d(g,{EventsModule:()=>h});var d=c(808),a=c(140),n=c(223);function s(t,i){if(1&t&&(n.TgZ(0,"div",30),n._UZ(1,"img",31),n.TgZ(2,"div",32),n._uU(3),n.qZA(),n.TgZ(4,"div",33),n._uU(5),n.qZA(),n.TgZ(6,"div",34),n._uU(7),n.qZA(),n.TgZ(8,"div",35)(9,"div",36),n._uU(10),n.qZA(),n.TgZ(11,"div",37),n._uU(12),n.qZA(),n.TgZ(13,"div",38),n._uU(14),n.qZA()()()),2&t){const e=i.$implicit,o=n.oxw();n.xp6(1),n.s9C("src",e.img,n.LSH),n.xp6(2),n.Oqu(e.date.getDate()-o.today.getDate()<0?"Finished":e.date.getDate()-o.today.getDate()+" Days Left"),n.xp6(2),n.Oqu(e.title),n.xp6(2),n.Oqu(e.loc),n.xp6(3),n.Oqu(e.date.getDate()),n.xp6(2),n.Oqu(e.date.getMonth().toString().padStart(2,"0")),n.xp6(2),n.Oqu(e.date.getUTCFullYear())}}const l=[{path:"plus-event",component:(()=>{class t{constructor(){this.eventDate=new Date(2022,2,23),this.today=new Date,this.calcTimeLeft()}calcTimeLeft(){const e=new Date,o=new Date(this.eventDate-e);if(o.getTime()<=0)return this.daysLeft=0,this.hoursLeft=0,this.minutesLeft=0,void(this.secondsLeft=0);this.daysLeft=o.getDate(),this.hoursLeft=o.getHours(),this.minutesLeft=o.getMinutes(),this.secondsLeft=o.getSeconds()}ngOnInit(){this.workshops=[{title:"Front-End Web Development",date:new Date(2022,3,22),loc:"Central Library",img:"../../../assets/hdpv.jpg"},{title:"Matlab Programming Language",date:new Date(2022,3,23),loc:"Central Library",img:"../../../assets/hdpv.jpg"},{title:"Mobile and App Development talk",date:new Date(2022,3,24),loc:"Lecture Hall",img:"../../../assets/hdpv.jpg"}],this.intervalId=setInterval(()=>{this.calcTimeLeft()},1e3)}ngOnDestroy(){clearInterval(this.intervalId)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-plus-event"]],decls:70,vars:5,consts:[[1,"h-container"],[1,"lg"],["src","../../../assets/club_logo.png","alt",""],[1,"abt"],["href","/events/plus-event#about"],[1,"p-welcome"],[1,"w-container"],[1,"w-title"],[1,"w-ename"],[1,"univ"],[1,"u-container"],[1,"u-logo"],[1,"u-bs"],[1,"u-univ"],[1,"p-schedule"],[1,"s-title"],[1,"s-schedule"],["class","d1",4,"ngFor","ngForOf"],["id","about",1,"about"],[1,"a-container"],[1,"a-title"],[1,"a-about"],[1,"a-us"],[1,"a-about-us"],[2,"margin-left","3%"],["id","plus",1,"about"],[1,"count-down"],[1,"cd-container"],[1,"cd-ctn"],[1,"num"],[1,"d1"],[1,"d-img",3,"src"],[1,"d-time"],[1,"d-title"],[1,"d-loc"],[1,"d-date"],[1,"d-day"],[1,"d-month"],[1,"d-year"]],template:function(e,o){1&e&&(n.TgZ(0,"header")(1,"div",0)(2,"div",1),n._UZ(3,"img",2),n.qZA(),n.TgZ(4,"div",3)(5,"a",4),n._uU(6,"ABOUT US"),n.qZA()()()(),n.TgZ(7,"div",5)(8,"div",6),n._UZ(9,"div",7),n.TgZ(10,"div",8),n._uU(11,"PLUS EVENT"),n.qZA()()(),n.TgZ(12,"div",9)(13,"div",10),n._UZ(14,"div",11),n.TgZ(15,"div",12),n._uU(16,">"),n.qZA(),n._UZ(17,"div",13),n.qZA()(),n.TgZ(18,"div",14)(19,"div",15),n._uU(20," Event Schedule "),n.qZA(),n.TgZ(21,"div",16),n.YNc(22,s,15,7,"div",17),n.qZA()(),n.TgZ(23,"div",18)(24,"div",19)(25,"div",20)(26,"div",21),n._uU(27,"ABOUT"),n.qZA(),n.TgZ(28,"div",22),n._uU(29,"US"),n.qZA()(),n.TgZ(30,"div",23)(31,"div"),n._uU(32,"Esperanza Club: A club founded in 2019 that is active at the of Jijel University. The club is interested in making the university student conversant with the greatest amount of knowledge at the scientific, cultural and technical levels. Accordingly, its objectives are: "),n._UZ(33,"br")(34,"br"),n.TgZ(35,"ul",24)(36,"li"),n._uU(37,"Connecting the student to scientific and technical developments"),n.qZA(),n.TgZ(38,"li"),n._uU(39,"Participate in various events that help the student develop learning and leadership skills and allow for effective communication"),n.qZA(),n.TgZ(40,"li"),n._uU(41,"Develop individual skills by organizing training courses and workshops"),n.qZA()()()()()(),n.TgZ(42,"div",25)(43,"div",19)(44,"div",20)(45,"div",21),n._uU(46,"ABOUT"),n.qZA(),n.TgZ(47,"div",22),n._uU(48,"+PLUS"),n.qZA()(),n.TgZ(49,"div",23)(50,"div"),n._uU(51,' "+plus" is an opportunity to develop knowledge in the areas presented through workshops and lectures, encourage teamwork and exchange knowledge and experiences, as well as take a new experience through the competition available through the use of acquired skills and the acquisition of new ideas. '),n.qZA()()()(),n.TgZ(52,"div",26)(53,"div",27)(54,"div",28),n._uU(55),n.TgZ(56,"div",29),n._uU(57,"DAYS"),n.qZA()(),n.TgZ(58,"div",28),n._uU(59),n.TgZ(60,"div",29),n._uU(61,"HOURS"),n.qZA()(),n.TgZ(62,"div",28),n._uU(63),n.TgZ(64,"div",29),n._uU(65,"MINUTES"),n.qZA()(),n.TgZ(66,"div",28),n._uU(67),n.TgZ(68,"div",29),n._uU(69,"SECONDS"),n.qZA()()()()),2&e&&(n.xp6(22),n.Q6J("ngForOf",o.workshops),n.xp6(33),n.hij(" ",o.daysLeft," "),n.xp6(4),n.hij(" ",o.hoursLeft," "),n.xp6(4),n.hij(" ",o.minutesLeft," "),n.xp6(4),n.hij(" ",o.secondsLeft," "))},directives:[d.sg],styles:["*[_ngcontent-%COMP%]{font-family:Franklin Gothic Medium,Arial Narrow,Arial,sans-serif}header[_ngcontent-%COMP%]{width:100%;height:3.5rem;background-color:#f06358}header[_ngcontent-%COMP%]   .h-container[_ngcontent-%COMP%]{height:100%;display:flex;justify-content:space-between;place-items:center;margin-inline:2rem;color:#fff;font-weight:700}header[_ngcontent-%COMP%]   .h-container[_ngcontent-%COMP%]   .lg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:2.5rem;height:2.5rem;filter:invert(1)}header[_ngcontent-%COMP%]   .h-container[_ngcontent-%COMP%]   .abt[_ngcontent-%COMP%]{cursor:pointer}header[_ngcontent-%COMP%]   .h-container[_ngcontent-%COMP%]   .abt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.p-schedule[_ngcontent-%COMP%]{width:100%;height:45rem;background-color:#8ad8d0;display:flex;flex-direction:column}.p-schedule[_ngcontent-%COMP%]   .s-title[_ngcontent-%COMP%]{flex:5%;color:#fff;font-weight:700;font-size:large;padding-left:3rem;padding-top:3rem}.p-schedule[_ngcontent-%COMP%]   .s-schedule[_ngcontent-%COMP%]{flex:95%;display:flex;margin-bottom:3%;justify-content:space-evenly;align-items:flex-end}.p-schedule[_ngcontent-%COMP%]   .s-schedule[_ngcontent-%COMP%]   .d1[_ngcontent-%COMP%], .p-schedule[_ngcontent-%COMP%]   .s-schedule[_ngcontent-%COMP%]   .d2[_ngcontent-%COMP%], .p-schedule[_ngcontent-%COMP%]   .s-schedule[_ngcontent-%COMP%]   .d3[_ngcontent-%COMP%]{background-color:#fff;border-radius:20px;width:19%;height:90%;display:flex;flex-direction:column}.p-schedule[_ngcontent-%COMP%]   .s-schedule[_ngcontent-%COMP%]   .d1[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .p-schedule[_ngcontent-%COMP%]   .s-schedule[_ngcontent-%COMP%]   .d2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .p-schedule[_ngcontent-%COMP%]   .s-schedule[_ngcontent-%COMP%]   .d3[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:grid;place-items:center}.p-schedule[_ngcontent-%COMP%]   .s-schedule[_ngcontent-%COMP%]   .d-img[_ngcontent-%COMP%]{flex:40%;width:100%;height:100%;background-size:contain;border-radius:20px 20px 0 0}.p-schedule[_ngcontent-%COMP%]   .s-schedule[_ngcontent-%COMP%]   .d-time[_ngcontent-%COMP%]{flex:10%;font-weight:700;color:#f06358}.p-schedule[_ngcontent-%COMP%]   .s-schedule[_ngcontent-%COMP%]   .d-title[_ngcontent-%COMP%]{flex:10%;font-weight:700}.p-schedule[_ngcontent-%COMP%]   .s-schedule[_ngcontent-%COMP%]   .d-loc[_ngcontent-%COMP%]{flex:20%;font-weight:600;color:#4b4b4b}.p-schedule[_ngcontent-%COMP%]   .s-schedule[_ngcontent-%COMP%]   .d-date[_ngcontent-%COMP%]{flex:20%;background-color:#f06358;border-radius:0 0 20px 20px;display:flex!important;justify-content:space-around;align-items:center;color:#fff;font-weight:bolder;font-size:xx-large}.p-welcome[_ngcontent-%COMP%]{width:100%;height:calc(100vh - 3.5rem);background-image:linear-gradient(0deg,#ffac7cb6,#ffac7cb6),url(hdpv.b92566a9b86b42e7.jpg);background-size:contain}.p-welcome[_ngcontent-%COMP%]   .w-container[_ngcontent-%COMP%]{width:100%;height:70%;padding-block:5%;display:flex;flex-direction:column}.p-welcome[_ngcontent-%COMP%]   .w-container[_ngcontent-%COMP%]   .w-title[_ngcontent-%COMP%]{width:100%;flex:70%;height:-moz-fit-content;height:fit-content;display:flex;justify-content:center;background-image:url(pluslogo.82d8e9a1f0ffebf4.svg);background-size:contain;background-repeat:no-repeat;background-position:center center;opacity:50%;filter:invert(1)}.p-welcome[_ngcontent-%COMP%]   .w-container[_ngcontent-%COMP%]   .w-title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;filter:invert(1);opacity:50%}.p-welcome[_ngcontent-%COMP%]   .w-container[_ngcontent-%COMP%]   .w-ename[_ngcontent-%COMP%]{flex:30%;display:grid;place-items:center;font-size:300%;color:#1db2b8;font-weight:700;word-spacing:1rem;letter-spacing:1.5rem}.count-down[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content;background-color:#ecdbce}.count-down[_ngcontent-%COMP%]   .cd-container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:space-around;align-items:center;color:#fff}.count-down[_ngcontent-%COMP%]   .cd-container[_ngcontent-%COMP%]   .cd-ctn[_ngcontent-%COMP%]{height:100%;width:10rem;display:grid;place-items:center;font-weight:bolder;font-size:4rem;display:flex;flex-direction:column}.count-down[_ngcontent-%COMP%]   .cd-container[_ngcontent-%COMP%]   .cd-ctn[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%]{font-size:1rem}#about[_ngcontent-%COMP%]{background-color:#c5e6d1}#plus[_ngcontent-%COMP%]{background-color:#0a57a1}.about[_ngcontent-%COMP%]{width:100%;height:calc(50vh - 3.5rem);display:grid;place-items:center}.about[_ngcontent-%COMP%]   .a-container[_ngcontent-%COMP%]{display:flex;color:#fff;height:100%;align-items:center;margin-inline:6rem}.about[_ngcontent-%COMP%]   .a-container[_ngcontent-%COMP%]   .a-title[_ngcontent-%COMP%]{font-weight:bolder;font-size:500%;display:flex;text-align:end;flex-direction:column}.about[_ngcontent-%COMP%]   .a-container[_ngcontent-%COMP%]   .a-about-us[_ngcontent-%COMP%]{margin:1.2rem;width:100%;line-height:2rem;display:flex;justify-content:center;font-weight:700}@media only screen and (max-width: 750px){.about[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content}.about[_ngcontent-%COMP%]   .a-container[_ngcontent-%COMP%]{flex-direction:column;margin-top:20%;margin-inline:0rem}.about[_ngcontent-%COMP%]   .a-container[_ngcontent-%COMP%]   .a-title[_ngcontent-%COMP%]{flex-direction:row;font-size:2rem;width:100%;display:flex;justify-content:center;gap:5%}.about[_ngcontent-%COMP%]   .a-container[_ngcontent-%COMP%]   .a-about-us[_ngcontent-%COMP%]{line-height:1.3rem;text-align:start}.about[_ngcontent-%COMP%]   .a-container[_ngcontent-%COMP%]   .a-about-us[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:1.4rem;line-height:1.5rem}.about[_ngcontent-%COMP%]   .a-container[_ngcontent-%COMP%]   .a-about-us[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0%}.p-welcome[_ngcontent-%COMP%]   .w-container[_ngcontent-%COMP%]   .w-ename[_ngcontent-%COMP%]{text-align:center}.p-schedule[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content}.p-schedule[_ngcontent-%COMP%]   .s-schedule[_ngcontent-%COMP%]{flex-direction:column;row-gap:1rem;margin:10%}.p-schedule[_ngcontent-%COMP%]   .s-schedule[_ngcontent-%COMP%]   .d1[_ngcontent-%COMP%], .p-schedule[_ngcontent-%COMP%]   .s-schedule[_ngcontent-%COMP%]   .d2[_ngcontent-%COMP%], .p-schedule[_ngcontent-%COMP%]   .s-schedule[_ngcontent-%COMP%]   .d3[_ngcontent-%COMP%]{width:auto;height:30rem}}.univ[_ngcontent-%COMP%]{width:100%;height:calc(20vh - 3.5rem);background-color:#ecdbce;color:#fff;font-size:400%;font-weight:bolder}.univ[_ngcontent-%COMP%]   .u-container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:space-around;align-items:center}.univ[_ngcontent-%COMP%]   .u-container[_ngcontent-%COMP%]   .u-univ[_ngcontent-%COMP%], .univ[_ngcontent-%COMP%]   .u-container[_ngcontent-%COMP%]   .u-logo[_ngcontent-%COMP%]{width:4rem;height:4rem;background-size:contain;background-repeat:no-repeat}.univ[_ngcontent-%COMP%]   .u-container[_ngcontent-%COMP%]   .u-univ[_ngcontent-%COMP%]{background-image:url(Logo_Univ_Jijel.e147443c954641c2.png)}.univ[_ngcontent-%COMP%]   .u-container[_ngcontent-%COMP%]   .u-logo[_ngcontent-%COMP%]{background-image:url(pluslogo.82d8e9a1f0ffebf4.svg)}"]}),t})()}];let r=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[a.Bz.forChild(l)],a.Bz]}),t})(),u=(()=>{class t{constructor(e){this.activatedRoute=e}ngOnInit(){}ngAfterViewInit(){console.log(this.activatedRoute.snapshot.params)}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(a.gz))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-events"]],decls:0,vars:0,template:function(e,o){},styles:[""]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t,bootstrap:[u]}),t.\u0275inj=n.cJS({providers:[],imports:[[r,d.ez]]}),t})()}}]);