(this["webpackJsonpbooksys-client"]=this["webpackJsonpbooksys-client"]||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/something-wrong.19763570.svg"},45:function(e,t,a){e.exports=a.p+"static/media/background.9adfa93a.png"},46:function(e,t,a){e.exports=a.p+"static/media/logo.e29d4d3a.svg"},50:function(e,t,a){e.exports=a.p+"static/media/email.90faf953.svg"},53:function(e,t,a){e.exports=a.p+"static/media/companyCardBackground.b2695cc6.png"},56:function(e,t,a){e.exports=a(99)},72:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},89:function(e,t){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(22),c=a.n(o),i=a(13),s=a(16),l=a(23),u=a.n(l),m=a(41),d=a.n(m),f=a(42),v=a(35),p=a(8),b=a(43),g=a(34),h=a(44),_=a.n(h),E=function(e){return function(t,a,n){return e((function(e,a){var n,r=performance.now(),o=t(e,a),c=performance.now(),i=(n=c-r,Math.round(100*n)/100);return console.log("reducer process time:",i),o}),a,n)}},y=a(6),k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,n=arguments.length>1?arguments[1]:void 0;return e(a)[n.type]?e(a)[n.type](a,n):a}},O=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(a){return a({type:e,value:t})}}},w=k((function(e){return{SETTINGS_TOGGLE_DARK_MODE:function(){return Object(y.a)(Object(y.a)({},e),{},{darkMode:!e.darkMode})}}}),{darkMode:"browser"}),N=k((function(){return{SET_COMPANY_DATA:function(e,t){return Object(y.a)(Object(y.a)({},e),t.value)},SET_COMPANY_STATUS:function(e,t){return Object(y.a)(Object(y.a)({},e),{},{status:t.value})}}}),{event:{name:"",eventStartTime:"",eventEndTime:"",address:"",availableTimes:[]},acceptedDomains:[],shouldRefresh:!0}),j=k((function(){return{SET_BOOKING_STATUS:function(e,t){return Object(y.a)(Object(y.a)({},e),{},{status:t.value})},SET_BOOKING_DATA:function(e,t){return Object(y.a)(Object(y.a)({},e),t.value)}}}),{name:"",corporateEmail:"",seats:0,office:"",time:"",status:"loading",id:""}),T=Object(p.c)({settings:w,company:N,booking:j,i18nState:l.i18nState}),C={key:"settings",storage:_.a},S=Object(g.a)(C,T);var A=a(4),x=(a(72),a(73),a(3)),I=a(45),B=a.n(I),D=a(46),M=a.n(D),P=a(15),L=a.n(P),F=a(17),H=a(7),V=a(5),K=a(55),U=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,Y="https://29b0050b-7001-4162-994f-acfec6195274.mock.pstmn.io",G=a(14),R=a.n(G),q=a(47),z=a.n(q),J=function(e){var t=e.onChange,a=e.isValid,n=e.valueForced,r=void 0===n?"NO":n,o=e.isTouched,c=void 0!==o&&o;return function(e){return t({value:"NO"!==r?r:e.target.value,isValid:a,isTouched:c})}},W=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{value:t,isValid:e,isTouched:!1}},Z=function(e){return{EMAIL:{test:function(e){return U.test(String(e).toLowerCase())},message:function(){return e("Your email looks incorrect")}}}},$=function(e){return(e||[]).reduce((function(e,t){var a=t.time;if(R()().unix()>a)return e;var n=R.a.unix(a).format("h A");return e.push({value:a,text:n}),e}),[])},Q=function(e,t){return{test:function(a){return Z(e).EMAIL.test(a)&&t.some((function(e){return a.split("@")[1]===e}))},message:function(t){return Z(e).EMAIL.test(t)?e("This email is not acceptable, please make sure to use your corporate email"):Z(e).EMAIL.message(t)}}},X=function(e){var t=e.preferredTime,a=e.availableTimesAndSeats,n=e.translate;return t.value?function(e,t){return e.reduce((function(e,a){var n=a.time,r=a.seats;return e[n]=r.map((function(e){return{value:e,text:t(["One seat","{num} seats"],{num:e})}})),e}),{})}(a,n)[t.value]:[]},ee=(a(76),a(49)),te=a(25),ae=a(48),ne=a.n(ae),re=function(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches},oe=function(){return ne()({tablet:!0})},ce=function(e){var t=e.displayErrors,a=e.isValid,n=e.validation,o=e.value;return n?t&&!a&&r.a.createElement("aside",{role:"alert",className:"animate__animated animate__fadeIn input__warning"},r.a.createElement("i",{className:"input__warning--icon"},r.a.createElement(ee.a,{size:"16px"})),r.a.createElement("p",{className:"input__warning--text"},n.message(o))):null},ie=function(e){var t=e.title,a=e.type,o=e.id,c=e.placeholder,i=e.value,s=e.displayErrors,l=e.onChange,u=e.isValid,m=e.validation,d=e.list,f=e.disabled,v=e.showClearButton,p=e.onClear,b=Object(n.useRef)(),g=m?m.test(i):!!u,h=function(){return l({value:i,isValid:g,isTouched:""!==i})},_=function(){J({onChange:l,isValid:g,valueForced:""})(),p&&p()},E=function(){oe()&&b.current.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})},y={text:function(){return r.a.createElement("input",{id:o,onFocus:E,ref:b,disabled:f,onChange:J({onChange:l,isValid:g,isTouched:oe()}),onKeyUp:h,value:i,className:"input__element--text",placeholder:c})},select:function(){return r.a.createElement(r.a.Fragment,null,!f&&""!==i&&v&&r.a.createElement("div",{className:"input__element--clear",onClick:_},r.a.createElement(te.b,null)),r.a.createElement("select",{id:o,onFocus:E,ref:b,disabled:f,onChange:J({onChange:l,isValid:g}),className:"input__element--select"},!!c&&r.a.createElement("option",{selected:""===i,disabled:!0},c),d&&d.map((function(e){var t=e.value,a=e.text;return r.a.createElement("option",{selected:i===t,key:t,value:t},a)}))))}};return r.a.createElement("div",{className:"input"},!!t&&r.a.createElement("label",{className:"input__title",htmlFor:o},t),y[a]&&y[a](),r.a.createElement(ce,{displayErrors:s,isValid:g,validation:m,value:i}))};ie.defaultProps={type:"input",isValid:!0,displayErrors:!0,list:[]};var se=ie,le=(a(77),function(e){var t=e.children,a=e.isDisabled,n=e.onClick,o=e.type;return r.a.createElement("button",{className:"button button--".concat(o),onClick:function(){return a?null:n()},disabled:a},t)});le.defaultProps={type:"primary"};var ue=le,me="loading",de="expired",fe="form",ve="success",pe="".concat(Y,"/booking/request"),be=(a(78),function(e){var t=e.image,a=e.imageAlt,n=e.title,o=e.description,c=e.footerMessage,i=e.callToActionText,s=e.callToActionType,l=e.onClickCallToAction;return r.a.createElement("div",{className:"warning animate__animated animate__fadeIn"},r.a.createElement("div",{className:"warning__content"},t&&r.a.createElement("div",{className:"warning__image"},r.a.createElement("img",{alt:a,src:t})),n&&r.a.createElement("div",{className:"warning__title"},n),o&&r.a.createElement("div",{className:"warning__description"},o),c&&r.a.createElement("div",{className:"warning__footer-message"},c)),i&&r.a.createElement("div",{className:"warning__footer"},r.a.createElement(ue,{type:s,className:"warning__footer--button",onClick:l},i)))}),ge=a(26),he=a.n(ge),_e=a(50),Ee=a.n(_e),ye=(a(79),["value"]),ke=function(e){var t=e.children;return r.a.createElement("section",{className:"create-page animate__animated animate__fadeIn"},t)},Oe=function(e){var t,a=e.translate,o=e.availableTimesAndSeats,c=e.acceptedDomains,i=e.onSubmit,s=e.isSubmitting,l=e.eventEndTime,u=e.showSuccessState,m=e.showInvalidBookingMessage,d=e.resetFormAction,f=function(e){var t=e.eventEndTime,a=e.showSuccessState;return t<R()().unix()?de:a?ve:fe}({showSuccessState:u,eventEndTime:l}),v=Object(n.useState)(W()),p=Object(H.a)(v,2),b=p[0],g=p[1],h=Object(n.useState)(W()),_=Object(H.a)(h,2),E=_[0],k=_[1],O=Object(n.useState)(W()),w=Object(H.a)(O,2),N=w[0],j=w[1],T=Object(n.useState)(W()),C=Object(H.a)(T,2),S=C[0],A=C[1],x={name:b,corporateEmail:E,seats:N,preferredTime:S},I=Object.keys(x).reduce((function(e,t){return e[t]=x[t].value,e}),{}),B=s||!function(e){return Object.values(e).every((function(e){var t=e.value,a=e.isValid;return!!t&&a}))}(x),D=function(){j(W()),A(W()),d()},M=function(e){var t=e.value,a=Object(K.a)(e,ye);return k(Object(y.a)({value:t.trim()},a))},P=(t={},Object(V.a)(t,ve,(function(){return r.a.createElement(be,{image:Ee.a,imageAlt:a("Email illustration"),title:a("Check your email"),description:a("You are almost there to reserve your room for this event! Please make sure to finish your reservation as soon as possible to avoid losing your booking."),footerMessage:a("If you can't found the email, check your spam folder."),callToActionType:"secondary",callToActionText:a("New booking"),onClickCallToAction:D})})),Object(V.a)(t,me,(function(){return r.a.createElement("div",null,a("Loading..."))})),Object(V.a)(t,de,(function(){return r.a.createElement(be,{image:he.a,imageAlt:a("Something wrong happened"),title:a("This event has ended")})})),Object(V.a)(t,fe,(function(){return r.a.createElement("div",{className:"animate__animated animate__fadeIn"},r.a.createElement("div",{className:"create-page__title"},a("Fill in the details below to make your office reservation")),r.a.createElement("div",{className:"create-page__content"},r.a.createElement(se,{id:"name",type:"text",value:b.value,onChange:g,title:a("Name")}),r.a.createElement(se,{id:"corporateEmail",type:"text",value:E.value,onChange:M,title:a("Corporate email"),displayErrors:E.isTouched,validation:Q(a,c),translate:a}),r.a.createElement(se,{id:"preferredTime",title:a("Book your preferences for this event"),type:"select",list:$(o),value:S.value,onChange:A,placeholder:a("Preferred time")}),r.a.createElement(se,{id:"seats",type:"select",disabled:""===S.value,list:X({preferredTime:S,availableTimesAndSeats:o,translate:a}),value:N.value,onChange:j,placeholder:a("Number of seats"),displayErrors:m,validation:{test:function(){return!m},message:function(){return a("Your booking preferences has changed")}}})),r.a.createElement("div",{className:"create-page__footer"},r.a.createElement(ue,{onClick:function(){return!B&&i(I)},isDisabled:B},a(s?"Please wait ...":"Continue"))))})),t);return r.a.createElement(ke,null,P[f]())},we=a(21),Ne=a.n(we),je=function(){var e=Object(F.a)(L.a.mark((function e(t){var a,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.data,n=t.companyHash,e.abrupt("return",fetch(pe,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:Ne.a.stringify(Object(y.a)(Object(y.a)({},a),{},{companyHash:n}))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Te=O("SET_COMPANY_DATA"),Ce=O("SET_COMPANY_STATUS"),Se="failed",Ae="loaded",xe="loading",Ie="expired",Be="outdated",De=a(100),Me=function(e,t){var a=e.company,o=e.setCompanyStatus,c=t.t,i=Object(x.f)().companyHash,s=Object(n.useState)(!1),l=Object(H.a)(s,2),u=l[0],m=l[1],d=Object(n.useState)(!1),f=Object(H.a)(d,2),v=f[0],p=f[1],b=Object(n.useState)(!1),g=Object(H.a)(b,2),h=g[0],_=g[1],E=function(){var e=Object(F.a)(L.a.mark((function e(t){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,je({data:t,companyHash:i});case 3:if(a=e.sent,a.status!==De.a.NOT_FOUND){e.next=11;break}return o(Be),_(!0),m(!1),setTimeout((function(){return _(!0)}),3e3),e.abrupt("return");case 11:p(!0);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(Oe,{translate:c,acceptedDomains:a.acceptedDomains,eventStartTime:a.event.eventStartTime,eventEndTime:a.event.eventEndTime,availableTimesAndSeats:a.event.availableTimesAndSeats,onSubmit:E,isSubmitting:u,showInvalidBookingMessage:h,showSuccessState:v,resetFormAction:function(){o(Be),p(!1),m(!1)}})};Me.contextTypes={t:A.func};var Pe,Le=Object(i.connect)((function(e){return{company:e.company}}),(function(e){return Object(p.b)({setCompanyStatus:Ce},e)}))(Object(x.g)(Me)),Fe="loading",He="notFound",Ve="unavailable",Ke="cancelled",Ue="confirmed",Ye=(Pe={},Object(V.a)(Pe,De.a.NOT_FOUND,He),Object(V.a)(Pe,De.a.LOCKED,Ke),Object(V.a)(Pe,De.a.OK,Ue),Object(V.a)(Pe,De.a.PRECONDITION_FAILED,Ve),Pe),Ge="".concat(Y,"/booking/confirm"),Re="".concat(Y,"/booking/cancel"),qe=function(){var e=Object(F.a)(L.a.mark((function e(t){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.bookingId,e.abrupt("return",fetch(Ge,{method:"PATCH",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:Ne.a.stringify({bookingId:a})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ze=function(){var e=Object(F.a)(L.a.mark((function e(t){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.bookingId,e.abrupt("return",fetch(Re,{method:"PATCH",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:Ne.a.stringify({bookingId:a})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Je=O("SET_BOOKING_STATUS"),We=O("SET_BOOKING_DATA"),Ze=(a(92),function(e){var t=e.status,a=function(e){var t;return t={},Object(V.a)(t,Ue,e("Congratulations! Your reservation has been successfully confirmed. Here is a brief summary of your booking details:")),Object(V.a)(t,Ke,e("You cancelled your booking. Here is a brief summary of your cancelled booking details:")),t}(e.translate)[t]||!1;return a?r.a.createElement("div",{className:"booking-status__message"},a):null}),$e=function(e){var t=e.status,a=e.translate;return r.a.createElement("div",{className:"booking-status__status--".concat(t)},function(e){var t;return t={},Object(V.a)(t,Ue,e("Confirmed")),Object(V.a)(t,Ke,e("Cancelled")),t}(a)[t])},Qe=function(e){var t=e.time,a=e.translate;return r.a.createElement("div",{className:"booking-status__row"},r.a.createElement("div",{className:"booking-status__row--title"},a("Time")),r.a.createElement("div",{className:"booking-status__row--value"},R.a.unix(t).format("h A")))},Xe=function(e){var t=e.office,a=e.translate;return r.a.createElement("div",{className:"booking-status__row"},r.a.createElement("div",{className:"booking-status__row--title"},a("Office")),r.a.createElement("div",{className:"booking-status__row--value"},t))},et=function(e){var t=e.seats,a=e.translate;return r.a.createElement("div",{className:"booking-status__row"},r.a.createElement("div",{className:"booking-status__row--title"},a("Seats")),r.a.createElement("div",{className:"booking-status__row--value"},t))},tt=function(e){var t=e.onCancel,a=e.translate,n=e.processing;return r.a.createElement("div",{className:"booking-status__row"},r.a.createElement(ue,{onClick:t,type:"secondary",isDisabled:n},a(n?"Please wait ...":"Cancel")))},at=function(e){var t=e.translate,a=e.data,n=e.onNewBooking,o=e.onCancel,c=e.processing,i=a.status===Ke;return r.a.createElement("section",{className:"booking-status animate__animated animate__fadeIn"},r.a.createElement("div",{className:"booking-status__title"},t("Hey {name},",{name:a.name})),r.a.createElement(Ze,{status:a.status,translate:t}),r.a.createElement("div",{className:"booking-status__status"},r.a.createElement($e,{status:a.status,translate:t}),r.a.createElement("div",{className:"booking-status__status--code"},t("Reservation code: {code}",{code:a.id}))),!i&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Qe,{time:a.time,translate:t}),r.a.createElement(et,{seats:a.seats,translate:t}),r.a.createElement(Xe,{office:a.office,translate:t})),r.a.createElement("div",{className:"booking-status__row"},r.a.createElement(ue,{isDisabled:c,onClick:n,type:"secondary"},t("New booking"))),!i&&r.a.createElement(tt,{processing:c,translate:t,onCancel:o}))},nt=(a(93),function(e){var t=e.time,a=e.seat,n=e.onBook,o=e.translate;return r.a.createElement("div",{className:"office-card animate__animated animate__fadeIn"},r.a.createElement("div",{className:"office-card__content"},r.a.createElement("div",{className:"office-card__time"},R.a.unix(t).format("h A")),r.a.createElement("div",{className:"office-card__seats"},r.a.createElement("div",{className:"office-card__seats--icon"},r.a.createElement(te.a,null)),r.a.createElement("div",{className:"office-card__seats--text"},a))),r.a.createElement("div",{className:"office-card__footer"},r.a.createElement(ue,{onClick:function(){return n({seat:a,time:t})}},o("Book"))))}),rt=a(54),ot=(a(94),function(e){var t=e.current,a=e.total,n=e.onPageChange;return r.a.createElement(rt.a,{current:t,total:a,onPageChange:n})}),ct=(a(95),function(e){var t=e.translate,a=e.event,o=e.onBook,c=a.availableTimesAndSeats,i=Object(n.useState)(W()),s=Object(H.a)(i,2),l=s[0],u=s[1],m=Object(n.useState)(W()),d=Object(H.a)(m,2),f=d[0],v=d[1],p=Object(n.useState)(1),b=Object(H.a)(p,2),g=b[0],h=b[1],_=function(){return h(1)},E=function(e){return e.reduce((function(e,t){var a=t.time;return t.seats.forEach((function(t,n){e.push({id:z()({seat:t,time:a,index:n}),seat:t,time:a})})),e}),[])}(function(e){var t=e.seats,a=e.preferredTime;return e.availableTimesAndSeats.reduce((function(e,n){if(""!=a.value&&a.value!=n.time)return e;var r=n.seats.filter((function(e){return""==a.value||(""==t.value||t.value==e)}));return e.push({time:n.time,seats:r}),e}),[])}({seats:l,preferredTime:f,availableTimesAndSeats:c})),y=E.length,k=y/6,O=y>6;return r.a.createElement("section",{className:"booking-change animate__animated animate__fadeIn"},r.a.createElement("div",{className:"booking-change__title"},t("Unfortunately the time that you selected isn't available anymore. Please select a new option below")),r.a.createElement("div",{className:"booking-change__options"},r.a.createElement("div",{className:"booking-change__column booking-change__column--left"},r.a.createElement(se,{type:"select",id:"booking-change-time",value:f.value,onChange:function(e){v(e),u(W()),_()},showClearButton:!0,onClear:function(){u(W()),_()},list:$(c),placeholder:t("Select a time")})),r.a.createElement("div",{className:"booking-change__column booking-change__column--right"},r.a.createElement(se,{type:"select",disabled:""===f.value,value:l.value,onChange:function(e){u(e),_()},showClearButton:!0,id:"booking-change-seats",list:X({preferredTime:f,availableTimesAndSeats:c,translate:t}),placeholder:t("Number of seats")}))),r.a.createElement("div",{className:"booking-change__subtitle"},t("Available offices")),r.a.createElement("div",{className:"booking-change__content"},function(e){var t=e.items,a=e.itemsPerPage,n=e.page;return t.slice((n-1)*a,n*a)}({items:E,page:g,itemsPerPage:6}).map((function(e){var a=e.id,n=e.seat,c=e.time;return r.a.createElement(nt,{key:a,seat:n,time:c,translate:t,onBook:o})}))),O&&r.a.createElement("div",{className:"booking-change__paginator"},r.a.createElement(ot,{current:g,total:k,onPageChange:h})))}),it=function(e,t){var a,o=e.booking,c=e.setBookingStatus,i=e.setBookingData,s=e.history,l=e.company,u=t.t,m=Object(x.f)(),d=m.bookingId,f=m.companyHash,v=Object(n.useState)(!1),p=Object(H.a)(v,2),b=p[0],g=p[1],h=function(){qe(d).then((function(e){return c(Ye[e.status]),g(!1),e.json()})).then((function(e){e&&e.booking&&i(e.booking)}))};Object(n.useEffect)((function(){h()}),[d]);var _=r.a.createElement(at,{translate:u,data:o,processing:b,onCancel:function(){window.confirm(u("Are you sure that you want to cancel your booking"))&&(g(!0),ze({bookingId:d}).then((function(){h()})))},onNewBooking:function(){return s.push("/".concat(f))}});return(a={},Object(V.a)(a,Ke,(function(){return _})),Object(V.a)(a,Ue,(function(){return _})),Object(V.a)(a,Ve,(function(){return r.a.createElement(ct,{translate:u,event:l.event,onBook:console.log})})),Object(V.a)(a,Fe,(function(){return u("Please wait ...")})),Object(V.a)(a,He,(function(){return r.a.createElement(be,{image:he.a,imageAlt:u("Something wrong happened"),title:u("Unable to find your booking")})})),a)[o.status]()};it.contextTypes={t:A.func,history:A.shape({push:A.func.isRequired})};var st=Object(i.connect)((function(e){return{booking:e.booking,company:e.company}}),(function(e){return Object(p.b)({setBookingStatus:Je,setBookingData:We},e)}))(Object(x.g)(it)),lt=function(){return r.a.createElement(x.c,null,r.a.createElement(x.a,{path:"/:companyHash",exact:!0},r.a.createElement(Le,null)),r.a.createElement(x.a,{path:"/:companyHash/booking/:bookingId"},r.a.createElement(st,null)),r.a.createElement(x.a,{path:"*",exact:!0},"Sorry this page doesn't exists"))},ut=a(52),mt=document.body,dt=function(e){var t=Object(i.useSelector)((function(e){return e.settings})).darkMode;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.darkMode,a=void 0===t?"browser":t,n="browser"===a?re():a;mt.classList.remove("dark-mode"),mt.classList.remove("light-mode"),mt.classList.add("".concat(n?"dark":"light","-mode"))}({darkMode:void 0===t?"browser":t}),mt.classList.add(oe()?"mobile-tablet":"desktop"),function(){var e=function(e){return e.toLowerCase().split(" ").join("-")},t=Object(ut.a)(),a=t.name,n=t.version,r=t.os;mt.classList.add(e(a)),mt.classList.add(e("".concat(a,"-").concat(n))),mt.classList.add(e(r))}(),e.children},ft=function(e){return fetch(function(e){return"".concat(Y,"/company/").concat(e)}(e))},vt=(a(97),a(53)),pt=a.n(vt),bt=function(e){var t,a=e.translate,n=e.event,o=e.children;return r.a.createElement("div",{className:"companyCard"},r.a.createElement("div",{className:"companyCard__header",style:{backgroundImage:"url(".concat(pt.a,")")}},r.a.createElement("div",{className:"companyCard__header--row"},r.a.createElement("div",{className:"companyCard__header--title"},n.name),r.a.createElement("div",{className:"companyCard__header--date"},R.a.unix(n.eventStartTime).format("Do MMM | ddd"))),r.a.createElement("div",{className:"companyCard__header--row"},r.a.createElement("div",{className:"companyCard__header--address"},n.address),r.a.createElement("div",{className:"companyCard__header--directions"},r.a.createElement("a",{target:"_blank",href:(t=n.address,"".concat("https://www.google.com/maps/search/").concat(t))},a("Get directions"))))),r.a.createElement("div",{className:"companyCard__content"},o))},gt=function(e){var t=e.state,a=e.children,n=e.translate,o=e.data,c=function(){return r.a.createElement(bt,{translate:n,event:o.event},a)};return{loading:function(){return r.a.createElement(r.a.Fragment,null,n("Please wait..."))},loaded:c,failed:function(){return r.a.createElement(r.a.Fragment,null,n("Invalid page"))},expired:c}[t]()},ht=function(e,t){var a=e.children,o=e.company,c=e.setCompanyData,i=t.t,s=Object(n.useState)(xe),l=Object(H.a)(s,2),u=l[0],m=l[1],d=Object(x.f)().companyHash,f=function(){var e;o.status!==Be&&m(xe);var t=(e={},Object(V.a)(e,De.a.NOT_FOUND,Se),Object(V.a)(e,De.a.LOCKED,Ie),Object(V.a)(e,De.a.OK,Ae),e),a=t[u];ft(d).then((function(e){var n=t[e.status]||Se;return n!==a&&m(n),e.json()})).then(c)};return r.a.useEffect((function(){f()}),[d]),o.status===Be&&f(),r.a.createElement(gt,{state:u,translate:i,data:o},a)};ht.contextTypes={t:A.func,history:A.shape({push:A.func.isRequired})};var _t=Object(i.connect)((function(e){return{company:e.company}}),(function(e){return Object(p.b)({setCompanyData:Te},e)}))(Object(x.g)(ht)),Et=function(e,t){var a=t.t;return r.a.createElement(dt,null,r.a.createElement("div",{className:"app",style:{backgroundImage:"url(".concat(B.a,")")}},r.a.createElement("div",{className:"app__logo"},r.a.createElement("img",{src:M.a,alt:a("Booksys logo")})),r.a.createElement(x.a,{path:"/:companyHash"},r.a.createElement(_t,null,r.a.createElement(lt,null)))))};Et.contextTypes={t:A.func};var yt=Et;a(98),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var kt=function(e){var t=[!1,b.a].filter(Boolean),a=[p.a.apply(void 0,Object(v.a)(t)),E,!1].filter(Boolean),n=p.d.apply(void 0,Object(v.a)(a)),r=Object(p.e)(S,e,n);return{store:r,persistor:Object(g.b)(r)}}(),Ot=kt.store,wt=kt.persistor;c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.Provider,{store:Ot},r.a.createElement(f.a,{loading:null,persistor:wt},r.a.createElement(u.a,{translations:{en:{"Hello world":"Testing translations II - The revenge"},options:{plural_rule:"n != 1",plural_number:"2"}},initialLang:d()(),fallbackLang:"en"},r.a.createElement(s.a,null,r.a.createElement(yt,null)))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.9b5daff3.chunk.js.map