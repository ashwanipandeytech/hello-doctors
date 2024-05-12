import './polyfills.server.mjs';
import{a as J,d as W}from"./chunk-XFDQRFUY.mjs";import{b as Z,c as q,j as u,k as h,m as f,q as K,r as Q,t as ee}from"./chunk-FNZ44W3H.mjs";import{d as V,h as G,i as $,k as z,l as X,o as Y,p as y}from"./chunk-37ZXOBOB.mjs";import{Db as i,Kb as b,P as A,Pa as P,S as I,Ta as g,U as s,Ua as x,Za as _,_a as O,aa as p,ba as c,cb as S,ga as T,h as w,ha as R,hb as k,ma as F,mb as t,mc as B,nb as e,ob as m,pb as j,qb as H,ua as L,va as D,xc as U}from"./chunk-ZHHFWGG7.mjs";var me=[{path:"account",loadChildren:()=>import("./chunk-OJNXJXUE.mjs").then(o=>o.AccountModule)},{path:"",pathMatch:"full",loadChildren:()=>import("./chunk-5JQYNSTB.mjs").then(o=>o.HomeModule)},{path:"home",loadChildren:()=>import("./chunk-5JQYNSTB.mjs").then(o=>o.HomeModule)},{path:"doctor",loadChildren:()=>import("./chunk-MADBYMEF.mjs").then(o=>o.DoctorsModule)},{path:"patient",loadChildren:()=>import("./chunk-GWOQYGG2.mjs").then(o=>o.PatientModule)},{path:"blogs",loadChildren:()=>import("./chunk-4JRRIGD2.mjs").then(o=>o.BlogModule)},{path:"contact-us",loadChildren:()=>import("./chunk-DNVI7ZGR.mjs").then(o=>o.ContactUsModule)},{path:"about-us",loadChildren:()=>import("./chunk-QNC27XLX.mjs").then(o=>o.AboutUsModule)},{path:"**",pathMatch:"full",redirectTo:"404"},{path:"404",loadChildren:()=>import("./chunk-IWW2KHF3.mjs").then(o=>o.PagenotfoundModule)}],te=(()=>{let n=class n{};n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=c({type:n}),n.\u0275inj=s({imports:[y.forRoot(me),y]});let o=n;return o})();function se(o,n){o&1&&(j(0),t(1,"li",27)(2,"a",28),i(3,"Login / Signup"),e()(),t(4,"li",29)(5,"a",30),m(6,"i",31),i(7,"Register"),e()(),t(8,"li",29)(9,"a",32),m(10,"i",33),i(11,"Login"),e()(),H())}var ie=()=>["/"],oe=(()=>{let n=class n{constructor(l,a){this.commonservice=l,this.platformId=a,this.userLoggedIn=!0,this.destroyed$=new w(1),O(()=>{let d=localStorage.getItem("user");if(console.info(d),d!=null)try{this.user=JSON.parse(d),this.user&&this.user!=null&&this.user!=""?this.userLoggedIn=!0:this.userLoggedIn=!1}catch{this.userLoggedIn=!1}else this.userLoggedIn=!1}),this.commonservice.$userLoggedIn.pipe(A(this.destroyed$)).subscribe(d=>{this.user=d,this.userLoggedIn=!0})}ngOnInit(){}};n.\u0275fac=function(a){return new(a||n)(x(q),x(L))},n.\u0275cmp=p({type:n,selectors:[["app-header"]],decls:40,vars:5,consts:[[1,"header","header-custom","header-fixed","header-one"],[1,"container"],[1,"navbar","navbar-expand-lg","header-nav"],[1,"navbar-header"],["id","mobile_btn","href","javascript:void(0);"],[1,"bar-icon"],[1,"navbar-brand","logo",3,"routerLink"],["src","../../../assets/img/logo.png","alt","Logo",1,"img-fluid"],[1,"main-menu-wrapper"],[1,"menu-header"],[1,"menu-logo",3,"routerLink"],["id","menu_close","href","javascript:void(0);",1,"menu-close"],[1,"fas","fa-times"],[1,"main-nav"],[1,"has-submenu","megamenu","active"],["href","javascript:void(0);"],["href","#"],["href","blog-grid.html"],["href","contact-us.html"],[1,"searchbar"],[1,"feather-search"],[1,"togglesearch"],["action","https://doccure.dreamstechnologies.com/html/template/search.html"],[1,"input-group"],["type","text",1,"form-control"],["type","submit",1,"btn"],[4,"ngIf"],[1,"login-link"],["href","account/login"],[1,"register-btn"],["href","account/register",1,"btn","reg-btn"],[1,"feather-user"],["href","account/login",1,"btn","btn-primary","log-btn"],[1,"feather-lock"]],template:function(a,d){a&1&&(t(0,"header",0)(1,"div",1)(2,"nav",2)(3,"div",3)(4,"a",4)(5,"span",5),m(6,"span")(7,"span")(8,"span"),e()(),t(9,"a",6),m(10,"img",7),e()(),t(11,"div",8)(12,"div",9)(13,"a",10),m(14,"img",7),e(),t(15,"a",11),m(16,"i",12),e()(),t(17,"ul",13)(18,"li",14)(19,"a",15),i(20,"Home"),e()(),t(21,"li")(22,"a",16),i(23,"About Us"),e()(),t(24,"li")(25,"a",17),i(26,"Blog"),e()(),t(27,"li")(28,"a",18),i(29,"Contact Us"),e()(),t(30,"li",19)(31,"a",15),m(32,"i",20),e(),t(33,"div",21)(34,"form",22)(35,"div",23),m(36,"input",24),t(37,"button",25),i(38,"Search"),e()()()()(),k(39,se,12,0,"ng-container",26),e()()()()()),a&2&&(g(9),S("routerLink",b(3,ie)),g(4),S("routerLink",b(4,ie)),g(26),S("ngIf",!d.userLoggedIn))},dependencies:[U,Y,f,u,h]});let o=n;return o})();var re=(()=>{let n=class n{};n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=p({type:n,selectors:[["app-footer"]],decls:105,vars:0,consts:[[1,"footer","footer-one"],[1,"footer-top"],[1,"container"],[1,"row"],[1,"col-lg-3","col-md-4"],[1,"footer-widget","footer-about"],[1,"footer-logo"],["href","index.html"],["src","assets/img/logo.png","alt","logo"],[1,"footer-about-content"],[1,"col-lg-6"],[1,"footer-widget","footer-menu"],[1,"footer-title"],["href","search.html"],["href","login.html"],["href","register.html"],["href","appointments.html"],["href","chat.html"],[1,"col-lg-6","col-md-4"],[1,"footer-widget","footer-contact"],[1,"footer-contact-info"],[1,"footer-address"],[1,"feather-map-pin"],[1,"feather-phone-call"],[1,"footer-address","mb-0"],[1,"feather-mail"],["href","https://doccure.dreamstechnologies.com/cdn-cgi/l/email-protection","data-cfemail","177378747462657257726f767a677b723974787a",1,"__cf_email__"],[1,"col-lg-3","col-md-7"],[1,"footer-widget"],[1,"subscribe-form"],["action","#"],["type","email","placeholder","Enter Email",1,"form-control"],["type","submit",1,"btn"],[1,"social-icon"],["href","javascript:void(0);"],[1,"fab","fa-facebook"],[1,"fab","fa-instagram"],[1,"fab","fa-twitter"],[1,"fab","fa-linkedin-in"],[1,"footer-bottom"],[1,"copyright"],[1,"col-md-6","col-lg-6"],[1,"copyright-text"],[1,"mb-0"],["href","","target","_blank"],[1,"copyright-menu"],[1,"policy-menu"],["href","privacy-policy.html"],["href","terms-condition.html"],[1,"mouse-cursor","cursor-outer"],[1,"mouse-cursor","cursor-inner"]],template:function(a,d){a&1&&(t(0,"footer",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"a",7),m(8,"img",8),e()(),t(9,"div",9)(10,"p"),i(11,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."),e()()()(),t(12,"div",10)(13,"div",3)(14,"div",4)(15,"div",11)(16,"h2",12),i(17,"For Patients"),e(),t(18,"ul")(19,"li")(20,"a",13),i(21,"Search for Doctors"),e()(),t(22,"li")(23,"a",14),i(24,"Login"),e()(),t(25,"li")(26,"a",15),i(27,"Register"),e()()()()(),t(28,"div",4)(29,"div",11)(30,"h2",12),i(31,"For Doctors"),e(),t(32,"ul")(33,"li")(34,"a",16),i(35,"Appointments"),e()(),t(36,"li")(37,"a",17),i(38,"Chat"),e()(),t(39,"li")(40,"a",14),i(41,"Login"),e()()()()(),t(42,"div",18)(43,"div",19)(44,"h2",12),i(45,"Contact Us"),e(),t(46,"div",20)(47,"div",21)(48,"p"),m(49,"i",22),i(50," 3556 Beech Street, USA"),e()(),t(51,"div",21)(52,"p"),m(53,"i",23),i(54," +1 315 369 5943"),e()(),t(55,"div",24)(56,"p"),m(57,"i",25),t(58,"a",26),i(59,"[email\xA0protected]"),e()()()()()()()(),t(60,"div",27)(61,"div",28)(62,"h2",12),i(63,"Join Our Newsletter"),e(),t(64,"div",29)(65,"form",30),m(66,"input",31),t(67,"button",32),i(68,"Submit"),e()()(),t(69,"div",33)(70,"ul")(71,"li")(72,"a",34),m(73,"i",35),e()(),t(74,"li")(75,"a",34),m(76,"i",36),e()(),t(77,"li")(78,"a",34),m(79,"i",37),e()(),t(80,"li")(81,"a",34),m(82,"i",38),e()()()()()()()()(),t(83,"div",39)(84,"div",2)(85,"div",40)(86,"div",3)(87,"div",41)(88,"div",42)(89,"p",43),i(90," Copyright \xA9 2023 "),t(91,"a",44),i(92,"HELLO DOCTORS"),e(),i(93," All Rights Reserved"),e()()(),t(94,"div",41)(95,"div",45)(96,"ul",46)(97,"li")(98,"a",47),i(99,"Privacy Policy"),e()(),t(100,"li")(101,"a",48),i(102,"Terms and Conditions"),e()()()()()()()()()(),m(103,"div",49)(104,"div",50))},dependencies:[f,u,h]});let o=n;return o})();var E=(()=>{let n=class n{constructor(){this.title="doctors"}};n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=p({type:n,selectors:[["app-root"]],decls:279,vars:0,consts:[[1,"main-wrapper"],[1,"progress-wrap","active-progress"],["width","100%","height","100%","viewBox","-1 -1 102 102",1,"progress-circle","svg-content"],["d","M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98",2,"transition","stroke-dashoffset 10ms linear 0s","stroke-dasharray","307.919px, 307.919px","stroke-dashoffset","228.265px"],["id","add_medical_records_modal","data-select2-id","add_medical_records_modal","aria-hidden","true",1,"modal","fade","custom-modal","custom-medicalrecord-modal",2,"display","none"],["role","document",1,"modal-dialog","modal-dialog-centered","modal-lg"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],["id","medical_records_form","enctype","multipart/form-data"],[1,"modal-body"],[1,"row"],[1,"col-12","col-md-6"],[1,"mb-3"],[1,"mb-2"],["type","text","name","description","placeholder","Enter Title Name",1,"form-control"],["type","text","name","description","placeholder","Enter Patient Name",1,"form-control"],[1,"col-12"],["type","text","name","hospital","placeholder","Enter name here..",1,"form-control"],[1,"upload-medical-records"],["type","file","name","user_file","id","user_files_mr",1,"form-control"],[1,"upload-content","dropzone"],[1,"upload-icon","mb-2"],["src","assets/img/upload-icon.png","alt","upload-icon"],[1,"text-danger"],["type","text","data-role","tagsinput","value","Fever, Fatigue","name","services","id","services",1,"input-tags","form-control"],["type","date","name","tratment_date","id","tratment_date",1,"form-control"],[1,"text-center","mt-4"],[1,"submit-section","text-center"],["type","submit","id","medical_btn",1,"btn","btn-primary","submit-btn"],["id","appt_details",1,"modal","fade","custom-modal"],[1,"modal-dialog","modal-dialog-centered"],[1,"info-details"],[1,"details-header"],[1,"col-md-6"],[1,"title"],[1,"text"],[1,"text-end"],["type","button","id","topup_status",1,"btn","bg-success-light","btn-sm"],["id","add_time_slot",1,"modal","fade","custom-modal"],[1,"hours-info"],[1,"row","hours-cont"],[1,"col-12","col-md-10"],[1,"form-select","form-control"],[1,"add-more","mb-3"],["href","javascript:void(0);",1,"add-hours"],[1,"fa","fa-plus-circle"],["type","submit",1,"btn","btn-primary","submit-btn"],["id","edit_time_slot",1,"modal","fade","custom-modal"],["selected",""],[1,"col-12","col-md-2"],[1,"d-md-block","d-sm-none","d-none"],["href","#",1,"btn","btn-danger","trash"],[1,"far","fa-trash-alt"]],template:function(a,d){a&1&&(t(0,"div",0),m(1,"app-header")(2,"router-outlet")(3,"app-footer"),e(),t(4,"div",1),T(),t(5,"svg",2),m(6,"path",3),e()(),R(),t(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"h5",8),i(12,"Add Medical Records"),e(),m(13,"button",9),e(),t(14,"form",10)(15,"div",11)(16,"div",12)(17,"div",13)(18,"div",14)(19,"label",15),i(20,"Title Name"),e(),m(21,"input",16),e()(),t(22,"div",13)(23,"div",14)(24,"label",15),i(25,"Patient"),e(),m(26,"input",17),e()()(),t(27,"div",12)(28,"div",18)(29,"div",14)(30,"label",15),i(31,"Hospital Name"),e(),m(32,"input",19),e()()(),t(33,"div",12)(34,"div",18)(35,"div",14)(36,"label",15),i(37,"Upload"),e(),t(38,"div",20),m(39,"input",21),t(40,"div",22)(41,"div")(42,"div",23),m(43,"img",24),e(),t(44,"h5"),i(45,"Drag & Drop"),e(),t(46,"h6"),i(47,"or "),t(48,"span",25),i(49,"Browse"),e()()()()()()()(),t(50,"div",12)(51,"div",18)(52,"div",14)(53,"label",15),i(54,"Symptoms"),e(),m(55,"input",26),e()()(),t(56,"div",12)(57,"div",13)(58,"div",14)(59,"label",15),i(60,"Date"),e(),t(61,"div",14),m(62,"input",27),e()()()(),t(63,"div",28)(64,"div",29)(65,"button",30),i(66,"Submit"),e()()()()()()()(),t(67,"div",31)(68,"div",32)(69,"div",6)(70,"div",7)(71,"h5",8),i(72,"Appointment Details"),e(),m(73,"button",9),e(),t(74,"div",11)(75,"ul",33)(76,"li")(77,"div",34)(78,"div",12)(79,"div",35)(80,"span",36),i(81,"#APT0001"),e(),t(82,"span",37),i(83,"21 Oct 2023 10:00 AM"),e()(),t(84,"div",35)(85,"div",38)(86,"button",39),i(87,"Completed"),e()()()()()(),t(88,"li")(89,"span",36),i(90,"Status:"),e(),t(91,"span",37),i(92,"Completed"),e()(),t(93,"li")(94,"span",36),i(95,"Confirm Date:"),e(),t(96,"span",37),i(97,"29 Jun 2023"),e()(),t(98,"li")(99,"span",36),i(100,"Paid Amount"),e(),t(101,"span",37),i(102,"$450"),e()()()()()()(),t(103,"div",40)(104,"div",32)(105,"div",6)(106,"div",7)(107,"h5",8),i(108,"Add Time Slots"),e(),m(109,"button",9),e(),t(110,"div",11)(111,"form")(112,"div",41)(113,"div",42)(114,"div",43)(115,"div",12)(116,"div",13)(117,"div",14)(118,"label",15),i(119,"Start Time"),e(),t(120,"select",44)(121,"option"),i(122,"-"),e(),t(123,"option"),i(124,"12.00 am"),e(),t(125,"option"),i(126,"12.30 am"),e(),t(127,"option"),i(128,"1.00 am"),e(),t(129,"option"),i(130,"1.30 am"),e()()()(),t(131,"div",13)(132,"div",14)(133,"label",15),i(134,"End Time"),e(),t(135,"select",44)(136,"option"),i(137,"-"),e(),t(138,"option"),i(139,"12.00 am"),e(),t(140,"option"),i(141,"12.30 am"),e(),t(142,"option"),i(143,"1.00 am"),e(),t(144,"option"),i(145,"1.30 am"),e()()()()()()()(),t(146,"div",45)(147,"a",46),m(148,"i",47),i(149," Add More"),e()(),t(150,"div",29)(151,"button",48),i(152,"Save"),e()()()()()()(),t(153,"div",49)(154,"div",32)(155,"div",6)(156,"div",7)(157,"h5",8),i(158,"Edit Time Slots"),e(),m(159,"button",9),e(),t(160,"div",11)(161,"form")(162,"div",41)(163,"div",42)(164,"div",43)(165,"div",12)(166,"div",13)(167,"div",14)(168,"label",15),i(169,"Start Time"),e(),t(170,"select",44)(171,"option"),i(172,"-"),e(),t(173,"option",50),i(174,"12.00 am"),e(),t(175,"option"),i(176,"12.30 am"),e(),t(177,"option"),i(178,"1.00 am"),e(),t(179,"option"),i(180,"1.30 am"),e()()()(),t(181,"div",13)(182,"div",14)(183,"label",15),i(184,"End Time"),e(),t(185,"select",44)(186,"option"),i(187,"-"),e(),t(188,"option"),i(189,"12.00 am"),e(),t(190,"option",50),i(191,"12.30 am"),e(),t(192,"option"),i(193,"1.00 am"),e(),t(194,"option"),i(195,"1.30 am"),e()()()()()()(),t(196,"div",42)(197,"div",43)(198,"div",12)(199,"div",13)(200,"div",14)(201,"label",15),i(202,"Start Time"),e(),t(203,"select",44)(204,"option"),i(205,"-"),e(),t(206,"option"),i(207,"12.00 am"),e(),t(208,"option",50),i(209,"12.30 am"),e(),t(210,"option"),i(211,"1.00 am"),e(),t(212,"option"),i(213,"1.30 am"),e()()()(),t(214,"div",13)(215,"div",14)(216,"label",15),i(217,"End Time"),e(),t(218,"select",44)(219,"option"),i(220,"-"),e(),t(221,"option"),i(222,"12.00 am"),e(),t(223,"option"),i(224,"12.30 am"),e(),t(225,"option",50),i(226,"1.00 am"),e(),t(227,"option"),i(228,"1.30 am"),e()()()()()(),t(229,"div",51)(230,"label",52),i(231,"\xA0"),e(),t(232,"a",53),m(233,"i",54),e()()(),t(234,"div",42)(235,"div",43)(236,"div",12)(237,"div",13)(238,"div",14)(239,"label",15),i(240,"Start Time"),e(),t(241,"select",44)(242,"option"),i(243,"-"),e(),t(244,"option"),i(245,"12.00 am"),e(),t(246,"option"),i(247,"12.30 am"),e(),t(248,"option",50),i(249,"1.00 am"),e(),t(250,"option"),i(251,"1.30 am"),e()()()(),t(252,"div",13)(253,"div",14)(254,"label",15),i(255,"End Time"),e(),t(256,"select",44)(257,"option"),i(258,"-"),e(),t(259,"option"),i(260,"12.00 am"),e(),t(261,"option"),i(262,"12.30 am"),e(),t(263,"option"),i(264,"1.00 am"),e(),t(265,"option",50),i(266,"1.30 am"),e()()()()()(),t(267,"div",51)(268,"label",52),i(269,"\xA0"),e(),t(270,"a",53),m(271,"i",54),e()()()(),t(272,"div",45)(273,"a",46),m(274,"i",47),i(275," Add More"),e()(),t(276,"div",29)(277,"button",48),i(278,"Save"),e()()()()()()())},dependencies:[X,f,K,Q,u,h,oe,re]});let o=n;return o})();var ue="@",C=class{constructor(n,r,l,a,d){this.doc=n,this.delegate=r,this.zone=l,this.animationType=a,this.moduleImpl=d,this._rendererFactoryPromise=null}loadImpl(){return(this.moduleImpl??import("./chunk-5HJ22YOI.mjs")).catch(r=>{throw new I(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:l})=>{let a=r(this.animationType,this.doc),d=new l(this.delegate,a,this.zone);return this.delegate=d,d})}createRenderer(n,r){let l=this.delegate.createRenderer(n,r);if(l.\u0275type===0)return l;typeof l.throwOnSyntheticProps=="boolean"&&(l.throwOnSyntheticProps=!1);let a=new M(l);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(d=>{let N=d.createRenderer(n,r);a.use(N)}).catch(d=>{a.use(l)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}},M=class{constructor(n){this.delegate=n,this.replay=[],this.\u0275type=1}use(n){if(this.delegate=n,this.replay!==null){for(let r of this.replay)r(n);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(n,r){return this.delegate.createElement(n,r)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}get destroyNode(){return this.delegate.destroyNode}appendChild(n,r){this.delegate.appendChild(n,r)}insertBefore(n,r,l,a){this.delegate.insertBefore(n,r,l,a)}removeChild(n,r,l){this.delegate.removeChild(n,r,l)}selectRootElement(n,r){return this.delegate.selectRootElement(n,r)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,r,l,a){this.delegate.setAttribute(n,r,l,a)}removeAttribute(n,r,l){this.delegate.removeAttribute(n,r,l)}addClass(n,r){this.delegate.addClass(n,r)}removeClass(n,r){this.delegate.removeClass(n,r)}setStyle(n,r,l,a){this.delegate.setStyle(n,r,l,a)}removeStyle(n,r,l){this.delegate.removeStyle(n,r,l)}setProperty(n,r,l){this.shouldReplay(r)&&this.replay.push(a=>a.setProperty(n,r,l)),this.delegate.setProperty(n,r,l)}setValue(n,r){this.delegate.setValue(n,r)}listen(n,r,l){return this.shouldReplay(r)&&this.replay.push(a=>a.listen(n,r,l)),this.delegate.listen(n,r,l)}shouldReplay(n){return this.replay!==null&&n.startsWith(ue)}};function le(o="animations"){return F([{provide:P,useFactory:(n,r,l)=>new C(n,r,l,o),deps:[B,G,_]},{provide:D,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ae=(()=>{let n=class n{};n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=c({type:n,bootstrap:[E]}),n.\u0275inj=s({providers:[z(),le()],imports:[$,V,te,ee,J,Z.forRoot({timeOut:1e4,positionClass:"toast-bottom-right",preventDuplicates:!0})]});let o=n;return o})();var he=(()=>{let n=class n{};n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=c({type:n,bootstrap:[E]}),n.\u0275inj=s({imports:[ae,W]});let o=n;return o})();export{he as a};