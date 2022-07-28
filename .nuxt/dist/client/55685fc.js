(window.webpackJsonp=window.webpackJsonp||[]).push([[30,4,8,12,13],{326:function(e,t,r){"use strict";r.r(t);var n={name:"FormInput",props:{label:String,placeholder:String,error:String,type:{type:String,default:"text"}},methods:{handleInput:function(e){this.$emit("input",e.target.value)}}},o=r(15),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.label?r("label",{staticClass:"block text-sm font-medium text-gray-700 mb-2"},[r("span",[e._v(e._s(e.label))])]):e._e(),e._v(" "),r("input",{staticClass:"py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-secondary focus:ring-secondary dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400",attrs:{type:e.type,placeholder:e.placeholder},on:{input:e.handleInput}}),e._v(" "),e.error?r("div",[r("p",{staticClass:"mt-2 text-sm text-red-600"},[e._v(e._s(e.error))])]):e._e()])}),[],!1,null,null,null);t.default=component.exports},327:function(e,t,r){"use strict";r.r(t);var n={props:{variant:String,tag:{type:String,default:"button"},href:String},computed:{classes:function(){switch(this.variant){case"danger":return"inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-600 transition ease-in-out duration-150";case"secondary":return"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150";case"warning":return"inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-yellow-400 border border-transparent rounded-md shadow-sm hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500";case"primary":return"inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500";default:return"inline-flex items-center justify-center px-8 py-2 text-sm font-medium text-primary bg-secondary border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"}}}},o=r(15),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.tag,{tag:"component",class:e.classes,attrs:{href:e.href}},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},328:function(e,t,r){"use strict";r.r(t);var n={props:["errors"]},o=r(15),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.errors.length>0?r("div",[r("div",{staticClass:"font-medium text-red-600"},[e._v("Whoops! Something went wrong.")]),e._v(" "),r("ul",{staticClass:"mt-3 list-disc list-inside text-sm text-red-600"},e._l(e.errors,(function(t,n){return r("li",{key:n},[e._v(e._s(t))])})),0)]):e._e()}),[],!1,null,null,null);t.default=component.exports},329:function(e,t,r){"use strict";r.r(t);var n={props:{type:{type:String,default:"text"},value:Boolean,label:String,error:String,required:{default:"required"}}},o=r(15),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.label?r("label",{staticClass:"block text-sm font-medium text-gray-700"},[r("span",[e._v(e._s(e.label))])]):e._e(),e._v(" "),r("span",{staticClass:"relative inline-flex items-center justify-center flex-shrink-0 w-10 h-5 cursor-pointer group focus:outline-none",attrs:{role:"checkbox",tabindex:"0","aria-checked":"false"},on:{click:function(t){return e.$emit("input",!e.value)}}},[r("span",{staticClass:"absolute h-4 mx-auto bg-gray-200 rounded-full w-9 transition-colors ease-in-out duration-200",class:{"bg-info":e.value},attrs:{"aria-hidden":"true"}}),e._v(" "),r("span",{staticClass:"absolute left-0 inline-block w-5 h-5 bg-white border border-gray-200 rounded-full shadow transform group-focus:shadow-outline group-focus:border-blue-300 transition-transform ease-in-out duration-200",class:e.value?"translate-x-5":"translate-x-0",attrs:{"aria-hidden":"true"}})]),e._v(" "),e.error?r("div",[r("p",{staticClass:"mt-2 text-sm text-red-600"},[e._v("\n    "+e._s(e.error)+"\n    ")])]):e._e()])}),[],!1,null,null,null);t.default=component.exports},343:function(e,t,r){e.exports=function(){"use strict";function e(e){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var t in source)e[t]=source[t]}return e}function t(r,n){function o(t,o,l){if("undefined"!=typeof document){"number"==typeof(l=e({},n,l)).expires&&(l.expires=new Date(Date.now()+864e5*l.expires)),l.expires&&(l.expires=l.expires.toUTCString()),t=encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var c="";for(var d in l)l[d]&&(c+="; "+d,!0!==l[d]&&(c+="="+l[d].split(";")[0]));return document.cookie=t+"="+r.write(o,t)+c}}function l(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var t=document.cookie?document.cookie.split("; "):[],n={},i=0;i<t.length;i++){var o=t[i].split("="),l=o.slice(1).join("=");try{var c=decodeURIComponent(o[0]);if(n[c]=r.read(l,c),e===c)break}catch(e){}}return e?n[e]:n}}return Object.create({set:o,get:l,remove:function(t,r){o(t,"",e({},r,{expires:-1}))},withAttributes:function(r){return t(this.converter,e({},this.attributes,r))},withConverter:function(r){return t(e({},this.converter,r),this.attributes)}},{attributes:{value:Object.freeze(n)},converter:{value:Object.freeze(r)}})}return t({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}()},364:function(e,t,r){"use strict";r.r(t);var n=r(327),o=r(326),l=r(329),c=(r(343),{components:{FormButton:n.default,FormInput:o.default,FormToggle:l.default},data:function(){return{form:{name:"",email:"",darkMode:!1,errors:[]}}},methods:{logout:function(){this.$auth.logout()}}}),d=r(15),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"overflow-y-scroll py-12 mx-auto space-y-6"},[r("Portal",{attrs:{to:"header"}},[r("h2",{staticClass:"text-3xl font-bold text-primary"},[e._v("Settings")])]),e._v(" "),r("div",{staticClass:"bg-white p-4 rounded-lg shadow-md"},[r("FormValidationErrors",{staticClass:"mb-4",attrs:{errors:e.form.errors}}),e._v(" "),r("h3",{staticClass:"text-center text-xl font-semibold mb-6"},[e._v("Profile Informations")]),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[r("div",[r("FormInput",{attrs:{label:"Name",placeholder:"Your name..",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("div",{staticClass:"mt-4"},[r("FormInput",{attrs:{label:"Email",placeholder:"Your email..",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),r("div",{staticClass:"flex items-center justify-center mt-4"},[r("FormButton",{staticClass:"ml-4",class:{"opacity-25":e.form.processing},attrs:{disabled:e.form.processing}},[e._v("Save")])],1)])],1),e._v(" "),r("div",{staticClass:"bg-white p-4 rounded-lg shadow-md"},[r("h3",{staticClass:"text-center text-xl font-semibold mb-6"},[e._v("General Settings")]),e._v(" "),r("form",{staticClass:"px-4 space-y-6"},[r("div",{staticClass:"flex items-center justify-between gap-2"},[r("label",{staticClass:"block text-sm font-medium text-gray-700"},[e._v("Dark Mode")]),e._v(" "),r("FormToggle",{model:{value:e.form.darkMode,callback:function(t){e.$set(e.form,"darkMode",t)},expression:"form.darkMode"}})],1),e._v(" "),r("div",{staticClass:"flex items-center justify-between gap-2"},[r("label",{staticClass:"block text-sm font-medium text-gray-700"},[e._v("Notification")]),e._v(" "),r("FormToggle",{model:{value:e.form.darkMode,callback:function(t){e.$set(e.form,"darkMode",t)},expression:"form.darkMode"}})],1)])]),e._v(" "),r("div",{staticClass:"bg-white p-4 rounded-lg shadow-md"},[r("h3",{staticClass:"text-center text-xl font-semibold mb-6"},[e._v("Danger Zone")]),e._v(" "),r("div",{staticClass:"space-y-6"},[r("div",{staticClass:"bg-white shadow-lg rounded-lg"},[r("div",{staticClass:"px-4 py-5 sm:p-6"},[r("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[e._v("Logout From your account")]),e._v(" "),e._m(0),e._v(" "),r("div",{staticClass:"mt-5"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.logout()}}},[r("FormButton",{attrs:{variant:"secondary"}},[e._v("Logout")])],1)])])]),e._v(" "),e._m(1)])])],1)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mt-2 max-w-xl text-sm text-gray-500"},[r("p",[e._v("Once you logout your account, your session will expire")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg-white shadow-lg rounded-lg"},[r("div",{staticClass:"px-4 py-5 sm:p-6"},[r("h3",{staticClass:"text-lg leading-6 font-medium text-gray-900"},[e._v("Delete your account")]),e._v(" "),r("div",{staticClass:"mt-2 max-w-xl text-sm text-gray-500"},[r("p",[e._v("Once you delete your account, you will lose all data associated with it.")])]),e._v(" "),r("div",{staticClass:"mt-5"},[r("button",{staticClass:"inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm",attrs:{type:"button"}},[e._v("Delete account")])])])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{FormValidationErrors:r(328).default,FormInput:r(326).default,FormButton:r(327).default,FormToggle:r(329).default})}}]);