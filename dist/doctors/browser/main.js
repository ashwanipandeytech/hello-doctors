import{f as re,g as S,h as I,m as ae,n as R,p as le,u as me}from"./chunk-7DVCCDYN.js";import{b as ee,c as te,j as u,k as h,m as f,q as ie,r as ne,t as oe}from"./chunk-O4QL4XWH.js";import"./chunk-GJUP7XY4.js";import{c as Z,d as A,e as X,f as M,h as q,i as K,k as Q,l as F}from"./chunk-3LVZCU3R.js";import{$a as z,$b as J,Eb as n,Lb as T,Ra as x,S as L,Ua as b,V as j,Va as D,W as k,X as s,_a as y,aa as v,da as p,db as N,ea as c,ib as W,ja as B,k as P,ka as U,lc as C,nb as t,ob as e,pa as H,pb as m,qb as G,rb as $,uc as Y,xa as V,ya as g}from"./chunk-NSSSZMJV.js";var xe=[{path:"account",loadChildren:()=>import("./chunk-OARLTENZ.js").then(o=>o.AccountModule)},{path:"",pathMatch:"full",loadChildren:()=>import("./chunk-TRHEZAY2.js").then(o=>o.HomeModule)},{path:"home",loadChildren:()=>import("./chunk-TRHEZAY2.js").then(o=>o.HomeModule)},{path:"doctor",loadChildren:()=>import("./chunk-PJBGWVHM.js").then(o=>o.DoctorsModule)},{path:"patient",loadChildren:()=>import("./chunk-GJCA3UC5.js").then(o=>o.PatientModule)},{path:"blogs",loadChildren:()=>import("./chunk-OPZQOINY.js").then(o=>o.BlogModule)},{path:"contact-us",loadChildren:()=>import("./chunk-2BC4RUZU.js").then(o=>o.ContactUsModule)},{path:"about-us",loadChildren:()=>import("./chunk-5X7DN3AF.js").then(o=>o.AboutUsModule)},{path:"**",pathMatch:"full",redirectTo:"404"},{path:"404",loadChildren:()=>import("./chunk-GAVPYX32.js").then(o=>o.PagenotfoundModule)}],de=(()=>{let i=class i{};i.\u0275fac=function(l){return new(l||i)},i.\u0275mod=c({type:i}),i.\u0275inj=s({imports:[F.forRoot(xe),F]});let o=i;return o})();function ye(o,i){o&1&&(G(0),t(1,"li",27)(2,"a",28),n(3,"Login / Signup"),e()(),t(4,"li",29)(5,"a",30),m(6,"i",31),n(7,"Register"),e()(),t(8,"li",29)(9,"a",32),m(10,"i",33),n(11,"Login"),e()(),$())}var se=()=>["/"],ce=(()=>{let i=class i{constructor(a,l){this.commonservice=a,this.platformId=l,this.userLoggedIn=!0,this.destroyed$=new P(1),z(()=>{let d=localStorage.getItem("user");if(console.info(d),d!=null)try{this.user=JSON.parse(d),this.user&&this.user!=null&&this.user!=""?this.userLoggedIn=!0:this.userLoggedIn=!1}catch{this.userLoggedIn=!1}else this.userLoggedIn=!1}),this.commonservice.$userLoggedIn.pipe(L(this.destroyed$)).subscribe(d=>{this.user=d,this.userLoggedIn=!0})}ngOnInit(){}};i.\u0275fac=function(l){return new(l||i)(D(te),D(V))},i.\u0275cmp=p({type:i,selectors:[["app-header"]],decls:40,vars:5,consts:[[1,"header","header-custom","header-fixed","header-one"],[1,"container"],[1,"navbar","navbar-expand-lg","header-nav"],[1,"navbar-header"],["id","mobile_btn","href","javascript:void(0);"],[1,"bar-icon"],[1,"navbar-brand","logo",3,"routerLink"],["src","../../../assets/img/logo.png","alt","Logo",1,"img-fluid"],[1,"main-menu-wrapper"],[1,"menu-header"],[1,"menu-logo",3,"routerLink"],["id","menu_close","href","javascript:void(0);",1,"menu-close"],[1,"fas","fa-times"],[1,"main-nav"],[1,"has-submenu","megamenu","active"],["href","javascript:void(0);"],["href","#"],["href","blog-grid.html"],["href","contact-us.html"],[1,"searchbar"],[1,"feather-search"],[1,"togglesearch"],["action","https://doccure.dreamstechnologies.com/html/template/search.html"],[1,"input-group"],["type","text",1,"form-control"],["type","submit",1,"btn"],[4,"ngIf"],[1,"login-link"],["href","account/login"],[1,"register-btn"],["href","account/register",1,"btn","reg-btn"],[1,"feather-user"],["href","account/login",1,"btn","btn-primary","log-btn"],[1,"feather-lock"]],template:function(l,d){l&1&&(t(0,"header",0)(1,"div",1)(2,"nav",2)(3,"div",3)(4,"a",4)(5,"span",5),m(6,"span")(7,"span")(8,"span"),e()(),t(9,"a",6),m(10,"img",7),e()(),t(11,"div",8)(12,"div",9)(13,"a",10),m(14,"img",7),e(),t(15,"a",11),m(16,"i",12),e()(),t(17,"ul",13)(18,"li",14)(19,"a",15),n(20,"Home"),e()(),t(21,"li")(22,"a",16),n(23,"About Us"),e()(),t(24,"li")(25,"a",17),n(26,"Blog"),e()(),t(27,"li")(28,"a",18),n(29,"Contact Us"),e()(),t(30,"li",19)(31,"a",15),m(32,"i",20),e(),t(33,"div",21)(34,"form",22)(35,"div",23),m(36,"input",24),t(37,"button",25),n(38,"Search"),e()()()()(),W(39,ye,12,0,"ng-container",26),e()()()()()),l&2&&(b(9),N("routerLink",T(3,se)),b(4),N("routerLink",T(4,se)),b(26),N("ngIf",!d.userLoggedIn))},dependencies:[Y,Q,f,u,h]});let o=i;return o})();var ue=(()=>{let i=class i{};i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=p({type:i,selectors:[["app-footer"]],decls:105,vars:0,consts:[[1,"footer","footer-one"],[1,"footer-top"],[1,"container"],[1,"row"],[1,"col-lg-3","col-md-4"],[1,"footer-widget","footer-about"],[1,"footer-logo"],["href","index.html"],["src","assets/img/logo.png","alt","logo"],[1,"footer-about-content"],[1,"col-lg-6"],[1,"footer-widget","footer-menu"],[1,"footer-title"],["href","search.html"],["href","login.html"],["href","register.html"],["href","appointments.html"],["href","chat.html"],[1,"col-lg-6","col-md-4"],[1,"footer-widget","footer-contact"],[1,"footer-contact-info"],[1,"footer-address"],[1,"feather-map-pin"],[1,"feather-phone-call"],[1,"footer-address","mb-0"],[1,"feather-mail"],["href","https://doccure.dreamstechnologies.com/cdn-cgi/l/email-protection","data-cfemail","177378747462657257726f767a677b723974787a",1,"__cf_email__"],[1,"col-lg-3","col-md-7"],[1,"footer-widget"],[1,"subscribe-form"],["action","#"],["type","email","placeholder","Enter Email",1,"form-control"],["type","submit",1,"btn"],[1,"social-icon"],["href","javascript:void(0);"],[1,"fab","fa-facebook"],[1,"fab","fa-instagram"],[1,"fab","fa-twitter"],[1,"fab","fa-linkedin-in"],[1,"footer-bottom"],[1,"copyright"],[1,"col-md-6","col-lg-6"],[1,"copyright-text"],[1,"mb-0"],["href","","target","_blank"],[1,"copyright-menu"],[1,"policy-menu"],["href","privacy-policy.html"],["href","terms-condition.html"],[1,"mouse-cursor","cursor-outer"],[1,"mouse-cursor","cursor-inner"]],template:function(l,d){l&1&&(t(0,"footer",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"a",7),m(8,"img",8),e()(),t(9,"div",9)(10,"p"),n(11,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."),e()()()(),t(12,"div",10)(13,"div",3)(14,"div",4)(15,"div",11)(16,"h2",12),n(17,"For Patients"),e(),t(18,"ul")(19,"li")(20,"a",13),n(21,"Search for Doctors"),e()(),t(22,"li")(23,"a",14),n(24,"Login"),e()(),t(25,"li")(26,"a",15),n(27,"Register"),e()()()()(),t(28,"div",4)(29,"div",11)(30,"h2",12),n(31,"For Doctors"),e(),t(32,"ul")(33,"li")(34,"a",16),n(35,"Appointments"),e()(),t(36,"li")(37,"a",17),n(38,"Chat"),e()(),t(39,"li")(40,"a",14),n(41,"Login"),e()()()()(),t(42,"div",18)(43,"div",19)(44,"h2",12),n(45,"Contact Us"),e(),t(46,"div",20)(47,"div",21)(48,"p"),m(49,"i",22),n(50," 3556 Beech Street, USA"),e()(),t(51,"div",21)(52,"p"),m(53,"i",23),n(54," +1 315 369 5943"),e()(),t(55,"div",24)(56,"p"),m(57,"i",25),t(58,"a",26),n(59,"[email\xA0protected]"),e()()()()()()()(),t(60,"div",27)(61,"div",28)(62,"h2",12),n(63,"Join Our Newsletter"),e(),t(64,"div",29)(65,"form",30),m(66,"input",31),t(67,"button",32),n(68,"Submit"),e()()(),t(69,"div",33)(70,"ul")(71,"li")(72,"a",34),m(73,"i",35),e()(),t(74,"li")(75,"a",34),m(76,"i",36),e()(),t(77,"li")(78,"a",34),m(79,"i",37),e()(),t(80,"li")(81,"a",34),m(82,"i",38),e()()()()()()()()(),t(83,"div",39)(84,"div",2)(85,"div",40)(86,"div",3)(87,"div",41)(88,"div",42)(89,"p",43),n(90," Copyright \xA9 2023 "),t(91,"a",44),n(92,"HELLO DOCTORS"),e(),n(93," All Rights Reserved"),e()()(),t(94,"div",41)(95,"div",45)(96,"ul",46)(97,"li")(98,"a",47),n(99,"Privacy Policy"),e()(),t(100,"li")(101,"a",48),n(102,"Terms and Conditions"),e()()()()()()()()()(),m(103,"div",49)(104,"div",50))},dependencies:[f,u,h]});let o=i;return o})();var he=(()=>{let i=class i{constructor(){this.title="doctors"}};i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=p({type:i,selectors:[["app-root"]],decls:279,vars:0,consts:[[1,"main-wrapper"],[1,"progress-wrap","active-progress"],["width","100%","height","100%","viewBox","-1 -1 102 102",1,"progress-circle","svg-content"],["d","M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98",2,"transition","stroke-dashoffset 10ms linear 0s","stroke-dasharray","307.919px, 307.919px","stroke-dashoffset","228.265px"],["id","add_medical_records_modal","data-select2-id","add_medical_records_modal","aria-hidden","true",1,"modal","fade","custom-modal","custom-medicalrecord-modal",2,"display","none"],["role","document",1,"modal-dialog","modal-dialog-centered","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],["id","medical_records_form","enctype","multipart/form-data"],[1,"modal-body"],[1,"row"],[1,"col-12","col-md-6"],[1,"mb-3"],[1,"mb-2"],["type","text","name","description","placeholder","Enter Title Name",1,"form-control"],["type","text","name","description","placeholder","Enter Patient Name",1,"form-control"],[1,"col-12"],["type","text","name","hospital","placeholder","Enter name here..",1,"form-control"],[1,"upload-medical-records"],["type","file","name","user_file","id","user_files_mr",1,"form-control"],[1,"upload-content","dropzone"],[1,"upload-icon","mb-2"],["src","assets/img/upload-icon.png","alt","upload-icon"],[1,"text-danger"],["type","text","data-role","tagsinput","value","Fever, Fatigue","name","services","id","services",1,"input-tags","form-control"],["type","date","name","tratment_date","id","tratment_date",1,"form-control"],[1,"text-center","mt-4"],[1,"submit-section","text-center"],["type","submit","id","medical_btn",1,"btn","btn-primary","submit-btn"],["id","appt_details",1,"modal","fade","custom-modal"],[1,"modal-dialog","modal-dialog-centered"],[1,"info-details"],[1,"details-header"],[1,"col-md-6"],[1,"title"],[1,"text"],[1,"text-end"],["type","button","id","topup_status",1,"btn","bg-success-light","btn-sm"],["id","add_time_slot",1,"modal","fade","custom-modal"],[1,"hours-info"],[1,"row","hours-cont"],[1,"col-12","col-md-10"],[1,"form-select","form-control"],[1,"add-more","mb-3"],["href","javascript:void(0);",1,"add-hours"],[1,"fa","fa-plus-circle"],["type","submit",1,"btn","btn-primary","submit-btn"],["id","edit_time_slot",1,"modal","fade","custom-modal"],["selected",""],[1,"col-12","col-md-2"],[1,"d-md-block","d-sm-none","d-none"],["href","#",1,"btn","btn-danger","trash"],[1,"far","fa-trash-alt"]],template:function(l,d){l&1&&(t(0,"div",0),m(1,"app-header")(2,"router-outlet")(3,"app-footer"),e(),t(4,"div",1),B(),t(5,"svg",2),m(6,"path",3),e()(),U(),t(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"h5",8),n(12,"Add Medical Records"),e(),m(13,"button",9),e(),t(14,"form",10)(15,"div",11)(16,"div",12)(17,"div",13)(18,"div",14)(19,"label",15),n(20,"Title Name"),e(),m(21,"input",16),e()(),t(22,"div",13)(23,"div",14)(24,"label",15),n(25,"Patient"),e(),m(26,"input",17),e()()(),t(27,"div",12)(28,"div",18)(29,"div",14)(30,"label",15),n(31,"Hospital Name"),e(),m(32,"input",19),e()()(),t(33,"div",12)(34,"div",18)(35,"div",14)(36,"label",15),n(37,"Upload"),e(),t(38,"div",20),m(39,"input",21),t(40,"div",22)(41,"div")(42,"div",23),m(43,"img",24),e(),t(44,"h5"),n(45,"Drag & Drop"),e(),t(46,"h6"),n(47,"or "),t(48,"span",25),n(49,"Browse"),e()()()()()()()(),t(50,"div",12)(51,"div",18)(52,"div",14)(53,"label",15),n(54,"Symptoms"),e(),m(55,"input",26),e()()(),t(56,"div",12)(57,"div",13)(58,"div",14)(59,"label",15),n(60,"Date"),e(),t(61,"div",14),m(62,"input",27),e()()()(),t(63,"div",28)(64,"div",29)(65,"button",30),n(66,"Submit"),e()()()()()()()(),t(67,"div",31)(68,"div",32)(69,"div",6)(70,"div",7)(71,"h5",8),n(72,"Appointment Details"),e(),m(73,"button",9),e(),t(74,"div",11)(75,"ul",33)(76,"li")(77,"div",34)(78,"div",12)(79,"div",35)(80,"span",36),n(81,"#APT0001"),e(),t(82,"span",37),n(83,"21 Oct 2023 10:00 AM"),e()(),t(84,"div",35)(85,"div",38)(86,"button",39),n(87,"Completed"),e()()()()()(),t(88,"li")(89,"span",36),n(90,"Status:"),e(),t(91,"span",37),n(92,"Completed"),e()(),t(93,"li")(94,"span",36),n(95,"Confirm Date:"),e(),t(96,"span",37),n(97,"29 Jun 2023"),e()(),t(98,"li")(99,"span",36),n(100,"Paid Amount"),e(),t(101,"span",37),n(102,"$450"),e()()()()()()(),t(103,"div",40)(104,"div",32)(105,"div",6)(106,"div",7)(107,"h5",8),n(108,"Add Time Slots"),e(),m(109,"button",9),e(),t(110,"div",11)(111,"form")(112,"div",41)(113,"div",42)(114,"div",43)(115,"div",12)(116,"div",13)(117,"div",14)(118,"label",15),n(119,"Start Time"),e(),t(120,"select",44)(121,"option"),n(122,"-"),e(),t(123,"option"),n(124,"12.00 am"),e(),t(125,"option"),n(126,"12.30 am"),e(),t(127,"option"),n(128,"1.00 am"),e(),t(129,"option"),n(130,"1.30 am"),e()()()(),t(131,"div",13)(132,"div",14)(133,"label",15),n(134,"End Time"),e(),t(135,"select",44)(136,"option"),n(137,"-"),e(),t(138,"option"),n(139,"12.00 am"),e(),t(140,"option"),n(141,"12.30 am"),e(),t(142,"option"),n(143,"1.00 am"),e(),t(144,"option"),n(145,"1.30 am"),e()()()()()()()(),t(146,"div",45)(147,"a",46),m(148,"i",47),n(149," Add More"),e()(),t(150,"div",29)(151,"button",48),n(152,"Save"),e()()()()()()(),t(153,"div",49)(154,"div",32)(155,"div",6)(156,"div",7)(157,"h5",8),n(158,"Edit Time Slots"),e(),m(159,"button",9),e(),t(160,"div",11)(161,"form")(162,"div",41)(163,"div",42)(164,"div",43)(165,"div",12)(166,"div",13)(167,"div",14)(168,"label",15),n(169,"Start Time"),e(),t(170,"select",44)(171,"option"),n(172,"-"),e(),t(173,"option",50),n(174,"12.00 am"),e(),t(175,"option"),n(176,"12.30 am"),e(),t(177,"option"),n(178,"1.00 am"),e(),t(179,"option"),n(180,"1.30 am"),e()()()(),t(181,"div",13)(182,"div",14)(183,"label",15),n(184,"End Time"),e(),t(185,"select",44)(186,"option"),n(187,"-"),e(),t(188,"option"),n(189,"12.00 am"),e(),t(190,"option",50),n(191,"12.30 am"),e(),t(192,"option"),n(193,"1.00 am"),e(),t(194,"option"),n(195,"1.30 am"),e()()()()()()(),t(196,"div",42)(197,"div",43)(198,"div",12)(199,"div",13)(200,"div",14)(201,"label",15),n(202,"Start Time"),e(),t(203,"select",44)(204,"option"),n(205,"-"),e(),t(206,"option"),n(207,"12.00 am"),e(),t(208,"option",50),n(209,"12.30 am"),e(),t(210,"option"),n(211,"1.00 am"),e(),t(212,"option"),n(213,"1.30 am"),e()()()(),t(214,"div",13)(215,"div",14)(216,"label",15),n(217,"End Time"),e(),t(218,"select",44)(219,"option"),n(220,"-"),e(),t(221,"option"),n(222,"12.00 am"),e(),t(223,"option"),n(224,"12.30 am"),e(),t(225,"option",50),n(226,"1.00 am"),e(),t(227,"option"),n(228,"1.30 am"),e()()()()()(),t(229,"div",51)(230,"label",52),n(231,"\xA0"),e(),t(232,"a",53),m(233,"i",54),e()()(),t(234,"div",42)(235,"div",43)(236,"div",12)(237,"div",13)(238,"div",14)(239,"label",15),n(240,"Start Time"),e(),t(241,"select",44)(242,"option"),n(243,"-"),e(),t(244,"option"),n(245,"12.00 am"),e(),t(246,"option"),n(247,"12.30 am"),e(),t(248,"option",50),n(249,"1.00 am"),e(),t(250,"option"),n(251,"1.30 am"),e()()()(),t(252,"div",13)(253,"div",14)(254,"label",15),n(255,"End Time"),e(),t(256,"select",44)(257,"option"),n(258,"-"),e(),t(259,"option"),n(260,"12.00 am"),e(),t(261,"option"),n(262,"12.30 am"),e(),t(263,"option"),n(264,"1.00 am"),e(),t(265,"option",50),n(266,"1.30 am"),e()()()()()(),t(267,"div",51)(268,"label",52),n(269,"\xA0"),e(),t(270,"a",53),m(271,"i",54),e()()()(),t(272,"div",45)(273,"a",46),m(274,"i",47),n(275," Add More"),e()(),t(276,"div",29)(277,"button",48),n(278,"Save"),e()()()()()()())},dependencies:[K,f,ie,ne,u,h,ce,ue]});let o=i;return o})();var Ae=(()=>{let i=class i extends R{constructor(a,l,d,w){super(a,l,d)}ngOnDestroy(){this.flush()}};i.\u0275fac=function(l){return new(l||i)(v(C),v(S),v(I),v(J))},i.\u0275prov=k({token:i,factory:i.\u0275fac});let o=i;return o})();function Me(){return new ae}function Ie(o,i,r){return new me(o,i,r)}var ve=[{provide:I,useFactory:Me},{provide:R,useClass:Ae},{provide:x,useFactory:Ie,deps:[A,R,y]}],fe=[{provide:S,useFactory:()=>new le},{provide:g,useValue:"BrowserAnimations"},...ve],Re=[{provide:S,useClass:re},{provide:g,useValue:"NoopAnimations"},...ve],ge=(()=>{let i=class i{static withConfig(a){return{ngModule:i,providers:a.disableAnimations?Re:fe}}};i.\u0275fac=function(l){return new(l||i)},i.\u0275mod=c({type:i}),i.\u0275inj=s({providers:fe,imports:[M]});let o=i;return o})();var we="@",O=class{constructor(i,r,a,l,d){this.doc=i,this.delegate=r,this.zone=a,this.animationType=l,this.moduleImpl=d,this._rendererFactoryPromise=null}loadImpl(){return(this.moduleImpl??import("./chunk-QL2PYFF4.js")).catch(r=>{throw new j(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:a})=>{let l=r(this.animationType,this.doc),d=new a(this.delegate,l,this.zone);return this.delegate=d,d})}createRenderer(i,r){let a=this.delegate.createRenderer(i,r);if(a.\u0275type===0)return a;typeof a.throwOnSyntheticProps=="boolean"&&(a.throwOnSyntheticProps=!1);let l=new _(a);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(d=>{let w=d.createRenderer(i,r);l.use(w)}).catch(d=>{l.use(a)}),l}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}},_=class{constructor(i){this.delegate=i,this.replay=[],this.\u0275type=1}use(i){if(this.delegate=i,this.replay!==null){for(let r of this.replay)r(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,r){return this.delegate.createElement(i,r)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,r){this.delegate.appendChild(i,r)}insertBefore(i,r,a,l){this.delegate.insertBefore(i,r,a,l)}removeChild(i,r,a){this.delegate.removeChild(i,r,a)}selectRootElement(i,r){return this.delegate.selectRootElement(i,r)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,r,a,l){this.delegate.setAttribute(i,r,a,l)}removeAttribute(i,r,a){this.delegate.removeAttribute(i,r,a)}addClass(i,r){this.delegate.addClass(i,r)}removeClass(i,r){this.delegate.removeClass(i,r)}setStyle(i,r,a,l){this.delegate.setStyle(i,r,a,l)}removeStyle(i,r,a){this.delegate.removeStyle(i,r,a)}setProperty(i,r,a){this.shouldReplay(r)&&this.replay.push(l=>l.setProperty(i,r,a)),this.delegate.setProperty(i,r,a)}setValue(i,r){this.delegate.setValue(i,r)}listen(i,r,a){return this.shouldReplay(r)&&this.replay.push(l=>l.listen(i,r,a)),this.delegate.listen(i,r,a)}shouldReplay(i){return this.replay!==null&&i.startsWith(we)}};function Se(o="animations"){return H([{provide:x,useFactory:(i,r,a)=>new O(i,r,a,o),deps:[C,A,y]},{provide:g,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Ee=(()=>{let i=class i{};i.\u0275fac=function(l){return new(l||i)},i.\u0275mod=c({type:i,bootstrap:[he]}),i.\u0275inj=s({providers:[q(),Se()],imports:[M,Z,de,oe,ge,ee.forRoot({timeOut:1e4,positionClass:"toast-bottom-right",preventDuplicates:!0})]});let o=i;return o})();X().bootstrapModule(Ee).catch(o=>console.error(o));
