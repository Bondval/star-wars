(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{XoyV:function(t,e,n){"use strict";n.r(e),n.d(e,"DashboardModule",(function(){return Lt}));var i=n("ofXK"),o=n("fXoL"),s=n("qc5V");let r=(()=>{class t{constructor(t){this.apiService=t}getPlanets(t){return this.apiService.get(t||"planets?page=1")}getPlanet(t){return this.apiService.get("planets/"+t)}getResident(t){return this.apiService.get(t)}}return t.\u0275fac=function(e){return new(e||t)(o.Sb(s.a))},t.\u0275prov=o.Fb({token:t,factory:t.\u0275fac}),t})();var a=n("tyNb"),c=n("eIep"),l=n("lJxs"),p=n("5+tZ"),u=n("Kqap"),b=n("BFxc"),d=n("xbPD"),g=n("mCNh");function h(t,e,n){return 0===n?[e]:(t.push(e),t)}var f=n("Cfvw"),m=n("FKr1"),_=n("nLfN");const v=["*",[["mat-toolbar-row"]]],x=["*","mat-toolbar-row"];class O{constructor(t){this._elementRef=t}}const w=Object(m.d)(O);let I=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=o.Eb({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]}),t})(),y=(()=>{class t extends w{constructor(t,e,n){super(t),this._platform=e,this._document=n}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(o.l),o.Jb(_.a),o.Jb(i.d))},t.\u0275cmp=o.Db({type:t,selectors:[["mat-toolbar"]],contentQueries:function(t,e,n){var i;1&t&&o.Cb(n,I,!0),2&t&&o.dc(i=o.Wb())&&(e._toolbarRows=i)},hostAttrs:[1,"mat-toolbar"],hostVars:4,hostBindings:function(t,e){2&t&&o.Bb("mat-toolbar-multiple-rows",e._toolbarRows.length>0)("mat-toolbar-single-row",0===e._toolbarRows.length)},inputs:{color:"color"},exportAs:["matToolbar"],features:[o.wb],ngContentSelectors:x,decls:2,vars:0,template:function(t,e){1&t&&(o.bc(v),o.ac(0),o.ac(1,1))},styles:[".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n"],encapsulation:2,changeDetection:0}),t})(),S=(()=>{class t{}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(e){return new(e||t)},imports:[[m.a],m.a]}),t})();var C=n("8LU1"),P=n("LRne"),N=n("z6cu"),k=n("HDdC"),j=n("DH7j"),M=n("XoHu");function E(t,e){return new k.a(n=>{const i=t.length;if(0===i)return void n.complete();const o=new Array(i);let s=0,r=0;for(let a=0;a<i;a++){const c=Object(f.a)(t[a]);let l=!1;n.add(c.subscribe({next:t=>{l||(l=!0,r++),o[a]=t},error:t=>n.error(t),complete:()=>{s++,s!==i&&l||(r===i&&n.next(e?e.reduce((t,e,n)=>(t[e]=o[n],t),{}):o),n.complete())}}))}})}var F=n("quSY"),A=n("vkgz"),R=n("JIr8"),z=n("nYR2"),D=n("w1tV"),L=n("IzEk"),T=n("tk/3"),U=n("jhN1");const B=["*"];function W(t){return Error(`Unable to find icon with the name "${t}"`)}function $(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function H(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}class V{constructor(t,e,n){this.url=t,this.svgText=e,this.options=n}}let J=(()=>{class t{constructor(t,e,n,i){this._httpClient=t,this._sanitizer=e,this._errorHandler=i,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._defaultFontSetClass="material-icons",this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,i){return this._addSvgIconConfig(t,e,new V(n,null,i))}addSvgIconLiteralInNamespace(t,e,n,i){const s=this._sanitizer.sanitize(o.I.HTML,n);if(!s)throw H(n);return this._addSvgIconConfig(t,e,new V("",s,i))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new V(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){const i=this._sanitizer.sanitize(o.I.HTML,e);if(!i)throw H(e);return this._addSvgIconSetConfig(t,new V("",i,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){const e=this._sanitizer.sanitize(o.I.RESOURCE_URL,t);if(!e)throw $(t);const n=this._cachedIconsByUrl.get(e);return n?Object(P.a)(X(n)):this._loadSvgIconFromConfig(new V(t,null)).pipe(Object(A.a)(t=>this._cachedIconsByUrl.set(e,t)),Object(l.a)(t=>X(t)))}getNamedSvgIcon(t,e=""){const n=q(e,t),i=this._svgIconConfigs.get(n);if(i)return this._getSvgFromConfig(i);const o=this._iconSetConfigs.get(e);return o?this._getSvgFromIconSetConfigs(t,o):Object(N.a)(W(n))}ngOnDestroy(){this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?Object(P.a)(X(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(Object(l.a)(t=>X(t)))}_getSvgFromIconSetConfigs(t,e){const n=this._extractIconWithNameFromAnySet(t,e);return n?Object(P.a)(n):function(...t){if(1===t.length){const e=t[0];if(Object(j.a)(e))return E(e,null);if(Object(M.a)(e)&&Object.getPrototypeOf(e)===Object.prototype){const t=Object.keys(e);return E(t.map(t=>e[t]),t)}}if("function"==typeof t[t.length-1]){const e=t.pop();return E(t=1===t.length&&Object(j.a)(t[0])?t[0]:t,null).pipe(Object(l.a)(t=>e(...t)))}return E(t,null)}(e.filter(t=>!t.svgText).map(t=>this._loadSvgIconSetFromConfig(t).pipe(Object(R.a)(e=>{const n=this._sanitizer.sanitize(o.I.RESOURCE_URL,t.url);return this._errorHandler.handleError(new Error(`Loading icon set URL: ${n} failed: ${e.message}`)),Object(P.a)(null)})))).pipe(Object(l.a)(()=>{const n=this._extractIconWithNameFromAnySet(t,e);if(!n)throw W(t);return n}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){const i=e[n];if(i.svgText&&i.svgText.indexOf(t)>-1){const e=this._svgElementFromConfig(i),n=this._extractSvgIconFromSet(e,t,i.options);if(n)return n}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(Object(A.a)(e=>t.svgText=e),Object(l.a)(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?Object(P.a)(null):this._fetchIcon(t).pipe(Object(A.a)(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){const i=t.querySelector(`[id="${e}"]`);if(!i)return null;const o=i.cloneNode(!0);if(o.removeAttribute("id"),"svg"===o.nodeName.toLowerCase())return this._setSvgAttributes(o,n);if("symbol"===o.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(o),n);const s=this._svgElementFromString("<svg></svg>");return s.appendChild(o),this._setSvgAttributes(s,n)}_svgElementFromString(t){const e=this._document.createElement("DIV");e.innerHTML=t;const n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){const e=this._svgElementFromString("<svg></svg>"),n=t.attributes;for(let i=0;i<n.length;i++){const{name:t,value:o}=n[i];"id"!==t&&e.setAttribute(t,o)}for(let i=0;i<t.childNodes.length;i++)t.childNodes[i].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[i].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){var e;const{url:n,options:i}=t,s=null!==(e=null==i?void 0:i.withCredentials)&&void 0!==e&&e;if(!this._httpClient)throw Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.");if(null==n)throw Error(`Cannot fetch icon from URL "${n}".`);const r=this._sanitizer.sanitize(o.I.RESOURCE_URL,n);if(!r)throw $(n);const a=this._inProgressUrlFetches.get(r);if(a)return a;const c=this._httpClient.get(r,{responseType:"text",withCredentials:s}).pipe(Object(z.a)(()=>this._inProgressUrlFetches.delete(r)),Object(D.a)());return this._inProgressUrlFetches.set(r,c),c}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(q(t,e),n),this}_addSvgIconSetConfig(t,e){const n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){const e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}}return t.\u0275fac=function(e){return new(e||t)(o.Sb(T.a,8),o.Sb(U.b),o.Sb(i.d,8),o.Sb(o.m))},t.\u0275prov=Object(o.Fb)({factory:function(){return new t(Object(o.Sb)(T.a,8),Object(o.Sb)(U.b),Object(o.Sb)(i.d,8),Object(o.Sb)(o.m))},token:t,providedIn:"root"}),t})();function X(t){return t.cloneNode(!0)}function q(t,e){return t+":"+e}class K{constructor(t){this._elementRef=t}}const G=Object(m.d)(K),Y=new o.q("mat-icon-location",{providedIn:"root",factory:function(){const t=Object(o.U)(i.d),e=t?t.location:null;return{getPathname:()=>e?e.pathname+e.search:""}}}),Q=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Z=Q.map(t=>`[${t}]`).join(", "),tt=/^url\(['"]?#(.*?)['"]?\)$/;let et=(()=>{class t extends G{constructor(t,e,n,i,o){super(t),this._iconRegistry=e,this._location=i,this._errorHandler=o,this._inline=!1,this._currentIconFetch=F.a.EMPTY,n||t.nativeElement.setAttribute("aria-hidden","true")}get inline(){return this._inline}set inline(t){this._inline=Object(C.b)(t)}get fontSet(){return this._fontSet}set fontSet(t){this._fontSet=this._cleanupFontValue(t)}get fontIcon(){return this._fontIcon}set fontIcon(t){this._fontIcon=this._cleanupFontValue(t)}_splitIconName(t){if(!t)return["",""];const e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnChanges(t){const e=t.svgIcon;if(this._svgNamespace=null,this._svgName=null,e)if(this._currentIconFetch.unsubscribe(),this.svgIcon){const[t,e]=this._splitIconName(this.svgIcon);t&&(this._svgNamespace=t),e&&(this._svgName=e),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(e,t).pipe(Object(L.a)(1)).subscribe(t=>this._setSvgElement(t),n=>{this._errorHandler.handleError(new Error(`Error retrieving icon ${t}:${e}! ${n.message}`))})}else e.previousValue&&this._clearSvgElement();this._usingFontIcon()&&this._updateFontIconClasses()}ngOnInit(){this._usingFontIcon()&&this._updateFontIconClasses()}ngAfterViewChecked(){const t=this._elementsWithExternalReferences;if(t&&t.size){const t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();const e=t.querySelectorAll("style");for(let i=0;i<e.length;i++)e[i].textContent+=" ";const n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){const t=this._elementRef.nativeElement;let e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){const n=t.childNodes[e];1===n.nodeType&&"svg"!==n.nodeName.toLowerCase()||t.removeChild(n)}}_updateFontIconClasses(){if(!this._usingFontIcon())return;const t=this._elementRef.nativeElement,e=this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet):this._iconRegistry.getDefaultFontSetClass();e!=this._previousFontSetClass&&(this._previousFontSetClass&&t.classList.remove(this._previousFontSetClass),e&&t.classList.add(e),this._previousFontSetClass=e),this.fontIcon!=this._previousFontIconClass&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return"string"==typeof t?t.trim().split(" ")[0]:t}_prependPathToReferences(t){const e=this._elementsWithExternalReferences;e&&e.forEach((e,n)=>{e.forEach(e=>{n.setAttribute(e.name,`url('${t}#${e.value}')`)})})}_cacheChildrenWithExternalReferences(t){const e=t.querySelectorAll(Z),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let i=0;i<e.length;i++)Q.forEach(t=>{const o=e[i],s=o.getAttribute(t),r=s?s.match(tt):null;if(r){let e=n.get(o);e||(e=[],n.set(o,e)),e.push({name:t,value:r[1]})}})}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(o.l),o.Jb(J),o.Tb("aria-hidden"),o.Jb(Y),o.Jb(o.m))},t.\u0275cmp=o.Db({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:7,hostBindings:function(t,e){2&t&&(o.Ab("data-mat-icon-type",e._usingFontIcon()?"font":"svg")("data-mat-icon-name",e._svgName||e.fontIcon)("data-mat-icon-namespace",e._svgNamespace||e.fontSet),o.Bb("mat-icon-inline",e.inline)("mat-icon-no-color","primary"!==e.color&&"accent"!==e.color&&"warn"!==e.color))},inputs:{color:"color",inline:"inline",fontSet:"fontSet",fontIcon:"fontIcon",svgIcon:"svgIcon"},exportAs:["matIcon"],features:[o.wb,o.xb],ngContentSelectors:B,decls:1,vars:0,template:function(t,e){1&t&&(o.bc(),o.ac(0))},styles:[".mat-icon{background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}\n"],encapsulation:2,changeDetection:0}),t})(),nt=(()=>{class t{}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(e){return new(e||t)},imports:[[m.a],m.a]}),t})();function it(t,e){if(1&t){const t=o.Pb();o.Ob(0,"div",5),o.Vb("click",(function(){return o.fc(t),o.Xb().toPreviousPage()}))("keyup.enter",(function(){return o.fc(t),o.Xb().toPreviousPage()})),o.Ob(1,"mat-icon"),o.oc(2,"arrow_back"),o.Nb(),o.Nb()}}function ot(t,e){if(1&t&&(o.Ob(0,"div"),o.Ob(1,"p",6),o.oc(2),o.Nb(),o.Nb()),2&t){const t=o.Xb();o.zb(2),o.rc("Page ",t.nextPage," of ",t.maxPageNumber,"")}}let st=(()=>{class t{constructor(t){this.location=t,this.isBackButton=!1}toPreviousPage(){this.location.back()}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(i.g))},t.\u0275cmp=o.Db({type:t,selectors:[["app-header"]],inputs:{isBackButton:"isBackButton",maxPageNumber:"maxPageNumber",nextPage:"nextPage"},decls:6,vars:2,consts:[["color","primary",1,"header"],[1,"name-box"],["class","name-box__back","tabindex","0",3,"click","keyup.enter",4,"ngIf"],[1,"name-box__name"],[4,"ngIf"],["tabindex","0",1,"name-box__back",3,"click","keyup.enter"],[1,"header__page-info"]],template:function(t,e){1&t&&(o.Ob(0,"mat-toolbar",0),o.Ob(1,"div",1),o.mc(2,it,3,0,"div",2),o.Ob(3,"span",3),o.oc(4,"Star wars"),o.Nb(),o.Nb(),o.mc(5,ot,3,2,"div",4),o.Nb()),2&t&&(o.zb(2),o.cc("ngIf",e.isBackButton),o.zb(3),o.cc("ngIf",e.nextPage&&e.maxPageNumber))},directives:[y,i.j,et],styles:[".header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;position:fixed;z-index:100}.header__page-info[_ngcontent-%COMP%]{margin-bottom:0}.name-box[_ngcontent-%COMP%], .name-box__back[_ngcontent-%COMP%]{display:flex;align-items:center}.name-box__back[_ngcontent-%COMP%]{cursor:pointer;height:100%;width:40px}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{background:transparent}"]}),t})(),rt=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Db({type:t,selectors:[["app-loader"]],decls:3,vars:0,consts:[[1,"planet__wrap"],[1,"planet"],[1,"planet__background"]],template:function(t,e){1&t&&(o.Ob(0,"div",0),o.Ob(1,"div",1),o.Kb(2,"div",2),o.Nb(),o.Nb())},styles:[".planet[_ngcontent-%COMP%]{position:relative;margin:0 auto;cursor:pointer;overflow:hidden;box-shadow:0 0 60px -20px rgba(255,189,3,.72),-14px -15px 40px -10px rgba(255,238,191,.23)}.planet[_ngcontent-%COMP%], .planet__background[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:50%}.planet__background[_ngcontent-%COMP%]{background:url(/assets/img/mars.jpg) repeat-x;position:absolute;animation:rotatePlanet .4s linear infinite}.planet__wrap[_ngcontent-%COMP%]{width:100%}@keyframes rotatePlanet{0%{transform:rotate(0)}to{transform:rotate(-1turn)}}"]}),t})();function at(t,e){if(1&t&&(o.Ob(0,"div",11),o.Ob(1,"div",12),o.Ob(2,"p"),o.oc(3,"name:"),o.Nb(),o.Ob(4,"span"),o.oc(5),o.Nb(),o.Nb(),o.Ob(6,"div",12),o.Ob(7,"p"),o.oc(8,"height:"),o.Nb(),o.Ob(9,"span"),o.oc(10),o.Nb(),o.Nb(),o.Ob(11,"div",12),o.Ob(12,"p"),o.oc(13,"mass:"),o.Nb(),o.Ob(14,"span"),o.oc(15),o.Nb(),o.Nb(),o.Ob(16,"div",12),o.Ob(17,"p"),o.oc(18,"gender:"),o.Nb(),o.Ob(19,"span"),o.oc(20),o.Nb(),o.Nb(),o.Nb()),2&t){const t=o.Xb().$implicit;o.zb(5),o.pc(t.name),o.zb(5),o.pc(t.height),o.zb(5),o.pc(t.mass),o.zb(5),o.pc(t.gender)}}function ct(t,e){if(1&t&&(o.Ob(0,"div",8),o.Ob(1,"div",9),o.Vb("click",(function(){const t=e.$implicit;return t.isOpenDetails=!t.isOpenDetails}))("keyup.enter",(function(){const t=e.$implicit;return t.isOpenDetails=!t.isOpenDetails})),o.oc(2),o.Nb(),o.mc(3,at,21,4,"div",10),o.Nb()),2&t){const t=e.$implicit;o.zb(2),o.qc(" ",t.name," "),o.zb(1),o.cc("ngIf",t.isOpenDetails)}}function lt(t,e){1&t&&(o.Ob(0,"div",8),o.Ob(1,"div",13),o.oc(2,"This planet doesn't have residents"),o.Nb(),o.Nb())}function pt(t,e){if(1&t&&(o.Mb(0),o.Ob(1,"div",4),o.Ob(2,"div",5),o.Ob(3,"p"),o.oc(4,"name:"),o.Nb(),o.Ob(5,"span"),o.oc(6),o.Nb(),o.Nb(),o.Ob(7,"div",5),o.Ob(8,"p"),o.oc(9,"rotation period:"),o.Nb(),o.Ob(10,"span"),o.oc(11),o.Nb(),o.Nb(),o.Ob(12,"div",5),o.Ob(13,"p"),o.oc(14,"diameter:"),o.Nb(),o.Ob(15,"span"),o.oc(16),o.Nb(),o.Nb(),o.Ob(17,"div",5),o.Ob(18,"p"),o.oc(19,"climate:"),o.Nb(),o.Ob(20,"span"),o.oc(21),o.Nb(),o.Nb(),o.Ob(22,"div",5),o.Ob(23,"p"),o.oc(24,"gravity:"),o.Nb(),o.Ob(25,"span"),o.oc(26),o.Nb(),o.Nb(),o.Ob(27,"div",5),o.Ob(28,"p"),o.oc(29,"terrain:"),o.Nb(),o.Ob(30,"span"),o.oc(31),o.Nb(),o.Nb(),o.Ob(32,"div",5),o.Ob(33,"p"),o.oc(34,"population:"),o.Nb(),o.Ob(35,"span"),o.oc(36),o.Nb(),o.Nb(),o.Nb(),o.mc(37,ct,4,2,"div",6),o.mc(38,lt,3,0,"div",7),o.Lb()),2&t){const t=e.ngIf;o.zb(6),o.pc(t.planet.name),o.zb(5),o.pc(t.planet.rotation_period),o.zb(5),o.pc(t.planet.diameter),o.zb(5),o.pc(t.planet.climate),o.zb(5),o.pc(t.planet.gravity),o.zb(5),o.pc(t.planet.terrain),o.zb(5),o.pc(t.planet.population),o.zb(1),o.cc("ngForOf",t.residents),o.zb(1),o.cc("ngIf",!t.residents.length)}}function ut(t,e){1&t&&o.Kb(0,"app-loader")}let bt=(()=>{class t{constructor(t,e){this.activatedRoute=t,this.starWarsApiService=e}ngOnInit(){var t;this.planetId=null===(t=this.activatedRoute.snapshot.params)||void 0===t?void 0:t.planetId,this.planetData$=this.starWarsApiService.getPlanet(this.planetId).pipe(Object(c.a)(t=>this.getResidents(t.residents).pipe(Object(l.a)(e=>({planet:t,residents:e})))))}getResidents(t){return Object(f.a)(t).pipe(Object(p.a)(t=>this.starWarsApiService.getResident(t)),function(t,e){return arguments.length>=2?function(n){return Object(g.a)(Object(u.a)(t,e),Object(b.a)(1),Object(d.a)(e))(n)}:function(e){return Object(g.a)(Object(u.a)((e,n,i)=>t(e,n,i+1)),Object(b.a)(1))(e)}}(h,[]))}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(a.a),o.Jb(r))},t.\u0275cmp=o.Db({type:t,selectors:[["app-planet"]],decls:6,vars:5,consts:[[3,"isBackButton"],[1,"planet"],[4,"ngIf","ngIfElse"],["loading",""],[1,"planet-details"],[1,"planet-details__item"],["class","resident",4,"ngFor","ngForOf"],["class","resident",4,"ngIf"],[1,"resident"],["tabindex","0",1,"resident__main",3,"click","keyup.enter"],["class","resident__details",4,"ngIf"],[1,"resident__details"],[1,"resident__details__item"],[1,"resident__main","resident__main_empty"]],template:function(t,e){if(1&t&&(o.Kb(0,"app-header",0),o.Ob(1,"div",1),o.mc(2,pt,39,9,"ng-container",2),o.Yb(3,"async"),o.mc(4,ut,1,0,"ng-template",null,3,o.nc),o.Nb()),2&t){const t=o.ec(5);o.cc("isBackButton",!0),o.zb(2),o.cc("ngIf",o.Zb(3,3,e.planetData$))("ngIfElse",t)}},directives:[st,i.j,i.i,rt],pipes:[i.b],styles:[".resident[_ngcontent-%COMP%]{width:300px;display:flex;align-items:center;flex-direction:column;margin:20px auto 0}.resident__main[_ngcontent-%COMP%]{z-index:5;cursor:pointer;padding:12px;width:100%;text-align:center;color:#fff;border:1px solid #fff;transition:all .3s ease-in-out}.resident__main[_ngcontent-%COMP%]:hover{opacity:.7}.resident__main_empty[_ngcontent-%COMP%]{cursor:auto}.resident__main_empty[_ngcontent-%COMP%]:hover{opacity:1}.resident__details[_ngcontent-%COMP%]{padding:12px 12px 0;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;border:1px solid #fff;border-top:none}.resident__details__item[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:flex-start}.resident__details__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding-left:10px}.planet[_ngcontent-%COMP%]{padding:90px 0 40px;color:#fff;background:url(/assets/img/space.jpg) repeat #fff;min-height:calc(100vh - 130px)}.planet-details[_ngcontent-%COMP%]{margin:0 auto;width:300px;padding:10px 20px}.planet-details__item[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]}),t})();var dt=n("jtHE"),gt=n("D0XW"),ht=n("Y7HM");function ft(t=0,e=gt.a){return(!Object(ht.a)(t)||t<0)&&(t=0),e&&"function"==typeof e.schedule||(e=gt.a),new k.a(n=>(n.add(e.schedule(mt,t,{subscriber:n,counter:0,period:t})),n))}function mt(t){const{subscriber:e,counter:n,period:i}=t;e.next(n),this.schedule({subscriber:e,counter:n+1,period:i},i)}var _t=n("pLZG"),vt=n("1G5W"),xt=n("dNgK"),Ot=n("2Vo4");let wt=(()=>{class t{constructor(t){this.starWarsApiService=t,this.ngUnsubscribe=new dt.a(1),this.planets=new Ot.a("init"),this.currentPage=1,this.isLoading=!0,this.planets.pipe(Object(c.a)(t=>this.getPlanets("next"===t&&this.nextPage?this.nextPage:"")),Object(vt.a)(this.ngUnsubscribe)).subscribe(()=>this.isLoading=!1)}getPlanets(t){return this.starWarsApiService.getPlanets(t).pipe(Object(l.a)(t=>(this.maxPageNumber=t.count/10,this.currentPage=t.next?+new URL(t.next).searchParams.get("page")-1:this.currentPage&&1!==this.currentPage?this.currentPage+1:1,this.nextPage=t.next?t.next:"",this.planetsData=Array.isArray(this.planetsData)?[...this.planetsData,...t.results]:t.results,t.results)))}loadNextPage(){this.isLoading=!0,this.planets.next("next")}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}}return t.\u0275fac=function(e){return new(e||t)(o.Sb(r))},t.\u0275prov=o.Fb({token:t,factory:t.\u0275fac}),t})();const It=["clouds"],yt=["background"];let St=(()=>{class t{constructor(){}ngOnInit(){}ngAfterViewInit(){const t=this.planet.orbital_period&&"unknown"!==this.planet.orbital_period&&"0"!==this.planet.orbital_period?+this.planet.orbital_period/2e3:.8;ft(50).pipe(Object(A.a)(e=>{this.cloudsAnimation(e,t),this.backgroundAnimation(e,t)})).subscribe()}cloudsAnimation(t,e){this.clouds.nativeElement.style.backgroundPositionX=t*e*1.2+"px"}backgroundAnimation(t,e){this.background.nativeElement.style.backgroundPositionX=t*e*.9+"px"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Db({type:t,selectors:[["app-sphere"]],viewQuery:function(t,e){var n;1&t&&(o.sc(It,!0),o.sc(yt,!0)),2&t&&(o.dc(n=o.Wb())&&(e.clouds=n.first),o.dc(n=o.Wb())&&(e.background=n.first))},inputs:{planet:"planet"},decls:18,vars:3,consts:[["tabindex","0",1,"planet"],[1,"planet__info"],[1,"planet__info_name"],[1,"planet__info_climate"],[1,"planet__info_population"],[1,"planet__wrap"],[1,"planet__background"],["background",""],[1,"planet__clouds"],["clouds",""],[1,"planet__mask"]],template:function(t,e){1&t&&(o.Ob(0,"div",0),o.Ob(1,"div",1),o.Ob(2,"p",2),o.oc(3),o.Nb(),o.Ob(4,"div",3),o.Ob(5,"mat-icon"),o.oc(6,"ac_unit"),o.Nb(),o.oc(7),o.Nb(),o.Ob(8,"div",4),o.Ob(9,"mat-icon"),o.oc(10,"face"),o.Nb(),o.oc(11),o.Nb(),o.Nb(),o.Ob(12,"div",5),o.Kb(13,"div",6,7),o.Kb(15,"div",8,9),o.Nb(),o.Kb(17,"div",10),o.Nb()),2&t&&(o.zb(3),o.pc(e.planet.name),o.zb(4),o.qc(" ",e.planet.climate,""),o.zb(4),o.qc(" ",e.planet.population,""))},directives:[et],styles:["[_nghost-%COMP%]{margin:25px 50px}.planet[_ngcontent-%COMP%], [_nghost-%COMP%]{width:250px;position:relative;height:250px}.planet[_ngcontent-%COMP%]{cursor:pointer;border-radius:50%;overflow:hidden;box-shadow:0 0 60px -20px rgba(255,189,3,.72),-14px -15px 40px -10px rgba(255,238,191,.23)}.planet__background[_ngcontent-%COMP%]{background:url(/assets/img/mars.jpg) repeat-x;width:250px;height:250px;position:absolute;border-radius:50%}.planet__info[_ngcontent-%COMP%]{z-index:99;display:flex;flex-direction:column;justify-content:center;align-items:center;color:#fff;width:100%;height:100%;position:absolute}.planet__info_name[_ngcontent-%COMP%]{font-size:24px}.planet__info_climate[_ngcontent-%COMP%], .planet__info_population[_ngcontent-%COMP%]{display:flex;align-items:center}.planet__info_population[_ngcontent-%COMP%]{margin-top:3px}.planet__mask[_ngcontent-%COMP%]{width:100%;height:100%;position:absolute;box-shadow:inset -10px -10px 40px #251303,inset 10px 10px 30px -10px rgba(255,204,159,.6);border-radius:50%}.planet__clouds[_ngcontent-%COMP%]{background:url(/src/assets/img/clouds.png) repeat-x;opacity:.4}.planet__clouds[_ngcontent-%COMP%], .planet__wrap[_ngcontent-%COMP%]{width:250px;height:250px;position:absolute;border-radius:50%}@keyframes translateBackground{0%{background-position-x:0}to{background-position-x:-600px}}@keyframes rotatePlanet{0%{transform:rotate(0)}to{transform:rotate(-1turn)}}"],changeDetection:0}),t})();const Ct=["background"],Pt=["planets"];function Nt(t,e){if(1&t){const t=o.Pb();o.Ob(0,"app-sphere",7,8),o.Vb("keyup.enter",(function(){o.fc(t);const n=e.$implicit;return o.Xb().onDetailInfo(n.url)}))("click",(function(){o.fc(t);const n=e.$implicit;return o.Xb().onDetailInfo(n.url)})),o.Nb()}2&t&&o.cc("planet",e.$implicit)}function kt(t,e){if(1&t){const t=o.Pb();o.Ob(0,"button",11),o.Vb("keyup.enter",(function(){return o.fc(t),o.Xb(2).loadMore()}))("click",(function(){return o.fc(t),o.Xb(2).loadMore()})),o.oc(1,"Load more"),o.Nb()}}function jt(t,e){1&t&&(o.Ob(0,"p",12),o.oc(1,"These are all planets in the galaxy"),o.Nb())}function Mt(t,e){if(1&t&&(o.Mb(0),o.mc(1,kt,2,0,"button",9),o.mc(2,jt,2,0,"ng-template",null,10,o.nc),o.Lb()),2&t){const t=o.ec(3),e=o.Xb();o.zb(1),o.cc("ngIf",e.dashboardService.nextPage)("ngIfElse",t)}}function Et(t,e){1&t&&o.Kb(0,"app-loader")}let Ft=(()=>{class t{constructor(t,e,n,i){this.router=t,this.snackBar=e,this.dashboardService=n,this.viewportScroller=i,this.ngUnsubscribe=new dt.a(1),this.router.events.pipe(Object(_t.a)(t=>t instanceof a.e),Object(vt.a)(this.ngUnsubscribe)).subscribe(t=>{t.position?(console.log(t),this.scrollPosition=t.position):this.scrollPosition=[0,0]})}ngAfterViewInit(){setTimeout(()=>this.viewportScroller.scrollToPosition(this.scrollPosition),0),ft(50).pipe(Object(A.a)(t=>{this.backgroundAnimation(t)}),Object(vt.a)(this.ngUnsubscribe)).subscribe()}ngOnInit(){}onDetailInfo(t){return e=this,void 0,i=function*(){if(t){const e=t.match("/planets/(.*)/")[1];yield this.router.navigate(["planet/"+e])}else this.snackBar.open("Something went wrong. Planet wasn't found","Error",{duration:2e3})},new((n=void 0)||(n=Promise))((function(t,o){function s(t){try{a(i.next(t))}catch(e){o(e)}}function r(t){try{a(i.throw(t))}catch(e){o(e)}}function a(e){var i;e.done?t(e.value):(i=e.value,i instanceof n?i:new n((function(t){t(i)}))).then(s,r)}a((i=i.apply(e,[])).next())}));var e,n,i}loadMore(){this.dashboardService.loadNextPage()}backgroundAnimation(t){this.background.nativeElement.style.backgroundPositionY=t/2+"px",this.background.nativeElement.style.backgroundPositionX=-t/4+"px"}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}}return t.\u0275fac=function(e){return new(e||t)(o.Jb(a.b),o.Jb(xt.a),o.Jb(wt),o.Jb(i.m))},t.\u0275cmp=o.Db({type:t,selectors:[["app-dashboard"]],viewQuery:function(t,e){var n;1&t&&(o.sc(Ct,!0),o.sc(Pt,!0)),2&t&&(o.dc(n=o.Wb())&&(e.background=n.first),o.dc(n=o.Wb())&&(e.planets=n))},decls:8,vars:5,consts:[[3,"maxPageNumber","nextPage"],[1,"dashboard"],["background",""],[1,"planets"],[3,"planet","keyup.enter","click",4,"ngFor","ngForOf"],[4,"ngIf","ngIfElse"],["loading",""],[3,"planet","keyup.enter","click"],["planets",""],["class","load-more",3,"keyup.enter","click",4,"ngIf","ngIfElse"],["noPages",""],[1,"load-more",3,"keyup.enter","click"],[1,"no-more-planet"]],template:function(t,e){if(1&t&&(o.Kb(0,"app-header",0),o.Ob(1,"div",1,2),o.Ob(3,"a",3),o.mc(4,Nt,2,1,"app-sphere",4),o.Nb(),o.mc(5,Mt,4,2,"ng-container",5),o.mc(6,Et,1,0,"ng-template",null,6,o.nc),o.Nb()),2&t){const t=o.ec(7);o.cc("maxPageNumber",e.dashboardService.maxPageNumber)("nextPage",e.dashboardService.currentPage),o.zb(4),o.cc("ngForOf",e.dashboardService.planetsData),o.zb(1),o.cc("ngIf",!e.dashboardService.isLoading)("ngIfElse",t)}},directives:[st,i.i,i.j,St,rt],styles:[".dashboard[_ngcontent-%COMP%]{background:url(/assets/img/space.jpg) repeat #fff;min-height:calc(100vh - 90px);padding:60px 0 30px}.planets[_ngcontent-%COMP%]{display:flex;margin:0 auto;width:700px;justify-content:flex-start;flex-wrap:wrap}.load-more[_ngcontent-%COMP%]{cursor:pointer;margin:0 auto;display:block;padding:12px 40px;font-size:16px;color:#fff;background:transparent;border:2px solid #fff;border-radius:5px;transition:all .1s ease}.load-more[_ngcontent-%COMP%]:focus, .load-more[_ngcontent-%COMP%]:hover{color:#00041b;background:#fff}.no-more-planet[_ngcontent-%COMP%]{text-align:center;font-size:18px;color:#fff}@media screen and (max-width:968px){.planets[_ngcontent-%COMP%]{width:350px}}"]}),t})(),At=(()=>{class t{}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(e){return new(e||t)},imports:[[i.c,S,nt]]}),t})(),Rt=(()=>{class t{}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(e){return new(e||t)},imports:[[i.c,nt]]}),t})();var zt=n("bTqV");let Dt=(()=>{class t{}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(e){return new(e||t)},imports:[[i.c]]}),t})(),Lt=(()=>{class t{}return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(e){return new(e||t)},providers:[r,wt],imports:[[i.c,At,Rt,zt.b,xt.b,Dt,a.c.forChild([{path:"",component:Ft},{path:"planet/:planetId",component:bt}])]]}),t})()}}]);