(this["webpackJsonpbooksys-client"]=this["webpackJsonpbooksys-client"]||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/something-wrong.19763570.svg"},45:function(e,t,a){e.exports=a.p+"static/media/background.9adfa93a.png"},46:function(e,t,a){e.exports=a.p+"static/media/logo.e29d4d3a.svg"},49:function(e,t,a){e.exports=a.p+"static/media/email.90faf953.svg"},53:function(e,t,a){e.exports=a.p+"static/media/companyCardBackground.b2695cc6.png"},55:function(e,t,a){e.exports=a(98)},71:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},88:function(e,t){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(22),c=a.n(o),i=a(13),s=a(16),l=a(23),u=a.n(l),m=a(41),d=a.n(m),f=a(42),v=a(35),p=a(7),b=a(43),g=a(34),_=a(44),h=a.n(_),E=function(e){return function(t,a,n){return e((function(e,a){var n,r=performance.now(),o=t(e,a),c=performance.now(),i=(n=c-r,Math.round(100*n)/100);return console.log("reducer process time:",i),o}),a,n)}},y=a(8),k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t,n=arguments.length>1?arguments[1]:void 0;return e(a)[n.type]?e(a)[n.type](a,n):a}},O=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(a){return a({type:e,value:t})}}},w=k((function(e){return{SETTINGS_TOGGLE_DARK_MODE:function(){return Object(y.a)(Object(y.a)({},e),{},{darkMode:!e.darkMode})}}}),{darkMode:"browser"}),N=k((function(){return{SET_COMPANY_DATA:function(e,t){return Object(y.a)(Object(y.a)({},e),t.value)},SET_COMPANY_STATUS:function(e,t){return Object(y.a)(Object(y.a)({},e),{},{status:t.value})}}}),{event:{name:"",eventStartTime:"",eventEndTime:"",address:"",availableTimes:[]},acceptedDomains:[],shouldRefresh:!0}),j=k((function(){return{SET_BOOKING_STATUS:function(e,t){return Object(y.a)(Object(y.a)({},e),{},{status:t.value})},SET_BOOKING_DATA:function(e,t){return Object(y.a)(Object(y.a)({},e),t.value)}}}),{name:"",corporateEmail:"",seats:0,office:"",time:"",status:"loading",id:""}),T=Object(p.c)({settings:w,company:N,booking:j,i18nState:l.i18nState}),S={key:"settings",storage:h.a},C=Object(g.a)(S,T);var A=a(4),x=(a(71),a(72),a(3)),I=a(45),B=a.n(I),D=a(46),M=a.n(D),P=a(15),L=a.n(P),H=a(17),F=a(6),K=a(5),U=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,Y="https://29b0050b-7001-4162-994f-acfec6195274.mock.pstmn.io",G=a(14),V=a.n(G),R=a(47),q=a.n(R),z=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"NO";return function(n){return e({value:"NO"!==a?a:n.target.value,isValid:t,isTouched:!1})}},J=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{value:t,isValid:e,isTouched:!1}},W=function(e){return{EMAIL:{test:function(e){return U.test(String(e).toLowerCase())},message:function(){return e("Your email looks incorrect")}}}},Z=function(e){return(e||[]).reduce((function(e,t){var a=t.time;if(V()().unix()>a)return e;var n=V.a.unix(a).format("h A");return e.push({value:a,text:n}),e}),[])},$=function(e,t){return{test:function(a){return W(e).EMAIL.test(a)&&t.some((function(e){return a.split("@")[1]===e}))},message:function(t){return W(e).EMAIL.test(t)?e("This email is not acceptable, please make sure to use your corporate email"):W(e).EMAIL.message(t)}}},Q=function(e){var t=e.preferredTime,a=e.availableTimesAndSeats,n=e.translate;return t.value?function(e,t){return e.reduce((function(e,a){var n=a.time,r=a.seats;return e[n]=r.map((function(e){return{value:e,text:t(["One seat","{num} seats"],{num:e})}})),e}),{})}(a,n)[t.value]:[]},X=(a(75),a(48)),ee=a(25),te=function(e){var t=e.displayErrors,a=e.isValid,n=e.validation,o=e.value;return n?t&&!a&&r.a.createElement("aside",{role:"alert",className:"animate__animated animate__fadeIn input__warning"},r.a.createElement("i",{className:"input__warning--icon"},r.a.createElement(X.a,{size:"16px"})),r.a.createElement("p",{className:"input__warning--text"},n.message(o))):null},ae=function(e){var t=e.title,a=e.type,n=e.id,o=e.placeholder,c=e.value,i=e.displayErrors,s=e.onChange,l=e.isValid,u=e.validation,m=e.list,d=e.disabled,f=e.showClearButton,v=e.onClear,p=u?u.test(c):!!l,b=function(){return s({value:c,isValid:p,isTouched:""!==c})},g=function(){z(s,p,"")(),v&&v()},_={text:function(){return r.a.createElement("input",{id:n,disabled:d,onChange:z(s,p),onBlur:b,value:c,className:"input__element--text",placeholder:o})},select:function(){return r.a.createElement(r.a.Fragment,null,!d&&""!==c&&f&&r.a.createElement("div",{className:"input__element--clear",onClick:g},r.a.createElement(ee.b,null)),r.a.createElement("select",{id:n,disabled:d,onChange:z(s,p),className:"input__element--select"},!!o&&r.a.createElement("option",{selected:""===c,disabled:!0},o),m&&m.map((function(e){var t=e.value,a=e.text;return r.a.createElement("option",{selected:c===t,key:t,value:t},a)}))))}};return r.a.createElement("div",{className:"input"},!!t&&r.a.createElement("label",{className:"input__title",htmlFor:n},t),_[a]&&_[a](),r.a.createElement(te,{displayErrors:i,isValid:p,validation:u,value:c}))};ae.defaultProps={type:"input",isValid:!0,displayErrors:!0,list:[]};var ne=ae,re=(a(76),function(e){var t=e.children,a=e.isDisabled,n=e.onClick,o=e.type;return r.a.createElement("button",{className:"button button--".concat(o),onClick:function(){return a?null:n()},disabled:a},t)});re.defaultProps={type:"primary"};var oe=re,ce="loading",ie="expired",se="form",le="success",ue="".concat(Y,"/booking/request"),me=(a(77),function(e){var t=e.image,a=e.imageAlt,n=e.title,o=e.description,c=e.footerMessage,i=e.callToActionText,s=e.callToActionType,l=e.onClickCallToAction;return r.a.createElement("div",{className:"warning animate__animated animate__fadeIn"},r.a.createElement("div",{className:"warning__content"},t&&r.a.createElement("div",{className:"warning__image"},r.a.createElement("img",{alt:a,src:t})),n&&r.a.createElement("div",{className:"warning__title"},n),o&&r.a.createElement("div",{className:"warning__description"},o),c&&r.a.createElement("div",{className:"warning__footer-message"},c)),i&&r.a.createElement("div",{className:"warning__footer"},r.a.createElement(oe,{type:s,className:"warning__footer--button",onClick:l},i)))}),de=a(26),fe=a.n(de),ve=a(49),pe=a.n(ve),be=(a(78),function(e){var t=e.children;return r.a.createElement("section",{className:"create-page animate__animated animate__fadeIn"},t)}),ge=function(e){var t,a=e.translate,o=e.availableTimesAndSeats,c=e.acceptedDomains,i=e.onSubmit,s=e.isSubmitting,l=e.eventEndTime,u=e.showSuccessState,m=e.showInvalidBookingMessage,d=e.resetFormAction,f=function(e){var t=e.eventEndTime,a=e.showSuccessState;return t<V()().unix()?ie:a?le:se}({showSuccessState:u,eventEndTime:l}),v=Object(n.useState)(J()),p=Object(F.a)(v,2),b=p[0],g=p[1],_=Object(n.useState)(J()),h=Object(F.a)(_,2),E=h[0],y=h[1],k=Object(n.useState)(J()),O=Object(F.a)(k,2),w=O[0],N=O[1],j=Object(n.useState)(J()),T=Object(F.a)(j,2),S=T[0],C=T[1],A={name:b,corporateEmail:E,seats:w,preferredTime:S},x=Object.keys(A).reduce((function(e,t){return e[t]=A[t].value,e}),{}),I=s||!function(e){return Object.values(e).every((function(e){var t=e.value,a=e.isValid;return!!t&&a}))}(A),B=function(){N(J()),C(J()),d()},D=(t={},Object(K.a)(t,le,(function(){return r.a.createElement(me,{image:pe.a,imageAlt:a("Email illustration"),title:a("Check your email"),description:a("You are almost there to reserve your room for this event! Please make sure to finish your reservation as soon as possible to avoid losing your booking."),footerMessage:a("If you can't found the email, check your spam folder."),callToActionType:"secondary",callToActionText:a("New booking"),onClickCallToAction:B})})),Object(K.a)(t,ce,(function(){return r.a.createElement("div",null,a("Loading..."))})),Object(K.a)(t,ie,(function(){return r.a.createElement(me,{image:fe.a,imageAlt:a("Something wrong happened"),title:a("This event has ended")})})),Object(K.a)(t,se,(function(){return r.a.createElement("div",{className:"animate__animated animate__fadeIn"},r.a.createElement("div",{className:"create-page__title"},a("Fill in the details below to make your office reservation")),r.a.createElement("div",{className:"create-page__content"},r.a.createElement(ne,{id:"name",type:"text",value:b.value,onChange:g,title:a("Name")}),r.a.createElement(ne,{id:"corporateEmail",type:"text",value:E.value,onChange:y,title:a("Corporate email"),displayErrors:E.isTouched,validation:$(a,c),translate:a}),r.a.createElement(ne,{id:"preferredTime",title:a("Book your preferences for this event"),type:"select",list:Z(o),value:S.value,onChange:C,placeholder:a("Preferred time")}),r.a.createElement(ne,{id:"seats",type:"select",disabled:""===S.value,list:Q({preferredTime:S,availableTimesAndSeats:o,translate:a}),value:w.value,onChange:N,placeholder:a("Number of seats"),displayErrors:m,validation:{test:function(){return!m},message:function(){return a("Your booking preferences has changed")}}})),r.a.createElement("div",{className:"create-page__footer"},r.a.createElement(oe,{onClick:function(){return!I&&i(x)},isDisabled:I},a(s?"Please wait ...":"Continue"))))})),t);return r.a.createElement(be,null,D[f]())},_e=a(21),he=a.n(_e),Ee=function(){var e=Object(H.a)(L.a.mark((function e(t){var a,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.data,n=t.companyHash,e.abrupt("return",fetch(ue,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:he.a.stringify(Object(y.a)(Object(y.a)({},a),{},{companyHash:n}))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ye=O("SET_COMPANY_DATA"),ke=O("SET_COMPANY_STATUS"),Oe="failed",we="loaded",Ne="loading",je="expired",Te="outdated",Se=a(99),Ce=function(e,t){var a=e.company,o=e.setCompanyStatus,c=t.t,i=Object(x.f)().companyHash,s=Object(n.useState)(!1),l=Object(F.a)(s,2),u=l[0],m=l[1],d=Object(n.useState)(!1),f=Object(F.a)(d,2),v=f[0],p=f[1],b=Object(n.useState)(!1),g=Object(F.a)(b,2),_=g[0],h=g[1],E=function(){var e=Object(H.a)(L.a.mark((function e(t){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,Ee({data:t,companyHash:i});case 3:if(a=e.sent,a.status!==Se.a.NOT_FOUND){e.next=11;break}return o(Te),h(!0),m(!1),setTimeout((function(){return h(!0)}),3e3),e.abrupt("return");case 11:p(!0);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(ge,{translate:c,acceptedDomains:a.acceptedDomains,eventStartTime:a.event.eventStartTime,eventEndTime:a.event.eventEndTime,availableTimesAndSeats:a.event.availableTimesAndSeats,onSubmit:E,isSubmitting:u,showInvalidBookingMessage:_,showSuccessState:v,resetFormAction:function(){o(Te),p(!1),m(!1)}})};Ce.contextTypes={t:A.func};var Ae,xe=Object(i.connect)((function(e){return{company:e.company}}),(function(e){return Object(p.b)({setCompanyStatus:ke},e)}))(Object(x.g)(Ce)),Ie="loading",Be="notFound",De="unavailable",Me="cancelled",Pe="confirmed",Le=(Ae={},Object(K.a)(Ae,Se.a.NOT_FOUND,Be),Object(K.a)(Ae,Se.a.LOCKED,Me),Object(K.a)(Ae,Se.a.OK,Pe),Object(K.a)(Ae,Se.a.PRECONDITION_FAILED,De),Ae),He="".concat(Y,"/booking/confirm"),Fe="".concat(Y,"/booking/cancel"),Ke=function(){var e=Object(H.a)(L.a.mark((function e(t){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.bookingId,e.abrupt("return",fetch(He,{method:"PATCH",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:he.a.stringify({bookingId:a})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ue=function(){var e=Object(H.a)(L.a.mark((function e(t){var a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.bookingId,e.abrupt("return",fetch(Fe,{method:"PATCH",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:he.a.stringify({bookingId:a})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ye=O("SET_BOOKING_STATUS"),Ge=O("SET_BOOKING_DATA"),Ve=(a(91),function(e){var t=e.status,a=function(e){var t;return t={},Object(K.a)(t,Pe,e("Congratulations! Your reservation has been successfully confirmed. Here is a brief summary of your booking details:")),Object(K.a)(t,Me,e("You cancelled your booking. Here is a brief summary of your cancelled booking details:")),t}(e.translate)[t]||!1;return a?r.a.createElement("div",{className:"booking-status__message"},a):null}),Re=function(e){var t=e.status,a=e.translate;return r.a.createElement("div",{className:"booking-status__status--".concat(t)},function(e){var t;return t={},Object(K.a)(t,Pe,e("Confirmed")),Object(K.a)(t,Me,e("Cancelled")),t}(a)[t])},qe=function(e){var t=e.time,a=e.translate;return r.a.createElement("div",{className:"booking-status__row"},r.a.createElement("div",{className:"booking-status__row--title"},a("Time")),r.a.createElement("div",{className:"booking-status__row--value"},V.a.unix(t).format("h A")))},ze=function(e){var t=e.office,a=e.translate;return r.a.createElement("div",{className:"booking-status__row"},r.a.createElement("div",{className:"booking-status__row--title"},a("Office")),r.a.createElement("div",{className:"booking-status__row--value"},t))},Je=function(e){var t=e.seats,a=e.translate;return r.a.createElement("div",{className:"booking-status__row"},r.a.createElement("div",{className:"booking-status__row--title"},a("Seats")),r.a.createElement("div",{className:"booking-status__row--value"},t))},We=function(e){var t=e.onCancel,a=e.translate,n=e.processing;return r.a.createElement("div",{className:"booking-status__row"},r.a.createElement(oe,{onClick:t,type:"secondary",isDisabled:n},a(n?"Please wait ...":"Cancel")))},Ze=function(e){var t=e.translate,a=e.data,n=e.onNewBooking,o=e.onCancel,c=e.processing,i=a.status===Me;return r.a.createElement("section",{className:"booking-status animate__animated animate__fadeIn"},r.a.createElement("div",{className:"booking-status__title"},t("Hey {name},",{name:a.name})),r.a.createElement(Ve,{status:a.status,translate:t}),r.a.createElement("div",{className:"booking-status__status"},r.a.createElement(Re,{status:a.status,translate:t}),r.a.createElement("div",{className:"booking-status__status--code"},t("Reservation code: {code}",{code:a.id}))),!i&&r.a.createElement(r.a.Fragment,null,r.a.createElement(qe,{time:a.time,translate:t}),r.a.createElement(Je,{seats:a.seats,translate:t}),r.a.createElement(ze,{office:a.office,translate:t})),r.a.createElement("div",{className:"booking-status__row"},r.a.createElement(oe,{isDisabled:c,onClick:n,type:"secondary"},t("New booking"))),!i&&r.a.createElement(We,{processing:c,translate:t,onCancel:o}))},$e=(a(92),function(e){var t=e.time,a=e.seat,n=e.onBook,o=e.translate;return r.a.createElement("div",{className:"office-card animate__animated animate__fadeIn"},r.a.createElement("div",{className:"office-card__content"},r.a.createElement("div",{className:"office-card__time"},V.a.unix(t).format("h A")),r.a.createElement("div",{className:"office-card__seats"},r.a.createElement("div",{className:"office-card__seats--icon"},r.a.createElement(ee.a,null)),r.a.createElement("div",{className:"office-card__seats--text"},a))),r.a.createElement("div",{className:"office-card__footer"},r.a.createElement(oe,{onClick:function(){return n({seat:a,time:t})}},o("Book"))))}),Qe=a(54),Xe=(a(93),function(e){var t=e.current,a=e.total,n=e.onPageChange;return r.a.createElement(Qe.a,{current:t,total:a,onPageChange:n})}),et=(a(94),function(e){var t=e.translate,a=e.event,o=e.onBook,c=a.availableTimesAndSeats,i=Object(n.useState)(J()),s=Object(F.a)(i,2),l=s[0],u=s[1],m=Object(n.useState)(J()),d=Object(F.a)(m,2),f=d[0],v=d[1],p=Object(n.useState)(1),b=Object(F.a)(p,2),g=b[0],_=b[1],h=function(){return _(1)},E=function(e){return e.reduce((function(e,t){var a=t.time;return t.seats.forEach((function(t,n){e.push({id:q()({seat:t,time:a,index:n}),seat:t,time:a})})),e}),[])}(function(e){var t=e.seats,a=e.preferredTime;return e.availableTimesAndSeats.reduce((function(e,n){if(""!=a.value&&a.value!=n.time)return e;var r=n.seats.filter((function(e){return""==a.value||(""==t.value||t.value==e)}));return e.push({time:n.time,seats:r}),e}),[])}({seats:l,preferredTime:f,availableTimesAndSeats:c})),y=E.length,k=y/6,O=y>6;return r.a.createElement("section",{className:"booking-change animate__animated animate__fadeIn"},r.a.createElement("div",{className:"booking-change__title"},t("Unfortunately the time that you selected isn't available anymore. Please select a new option below")),r.a.createElement("div",{className:"booking-change__options"},r.a.createElement("div",{className:"booking-change__column booking-change__column--left"},r.a.createElement(ne,{type:"select",id:"booking-change-time",value:f.value,onChange:function(e){v(e),u(J()),h()},showClearButton:!0,onClear:function(){u(J()),h()},list:Z(c),placeholder:t("Select a time")})),r.a.createElement("div",{className:"booking-change__column booking-change__column--right"},r.a.createElement(ne,{type:"select",disabled:""===f.value,value:l.value,onChange:function(e){u(e),h()},showClearButton:!0,id:"booking-change-seats",list:Q({preferredTime:f,availableTimesAndSeats:c,translate:t}),placeholder:t("Number of seats")}))),r.a.createElement("div",{className:"booking-change__subtitle"},t("Available offices")),r.a.createElement("div",{className:"booking-change__content"},function(e){var t=e.items,a=e.itemsPerPage,n=e.page;return t.slice((n-1)*a,n*a)}({items:E,page:g,itemsPerPage:6}).map((function(e){var a=e.id,n=e.seat,c=e.time;return r.a.createElement($e,{key:a,seat:n,time:c,translate:t,onBook:o})}))),O&&r.a.createElement("div",{className:"booking-change__paginator"},r.a.createElement(Xe,{current:g,total:k,onPageChange:_})))}),tt=function(e,t){var a,o=e.booking,c=e.setBookingStatus,i=e.setBookingData,s=e.history,l=e.company,u=t.t,m=Object(x.f)(),d=m.bookingId,f=m.companyHash,v=Object(n.useState)(!1),p=Object(F.a)(v,2),b=p[0],g=p[1],_=function(){Ke(d).then((function(e){return c(Le[e.status]),g(!1),e.json()})).then((function(e){e&&e.booking&&i(e.booking)}))};Object(n.useEffect)((function(){_()}),[d]);var h=r.a.createElement(Ze,{translate:u,data:o,processing:b,onCancel:function(){window.confirm(u("Are you sure that you want to cancel your booking"))&&(g(!0),Ue({bookingId:d}).then((function(){_()})))},onNewBooking:function(){return s.push("/".concat(f))}});return(a={},Object(K.a)(a,Me,(function(){return h})),Object(K.a)(a,Pe,(function(){return h})),Object(K.a)(a,De,(function(){return r.a.createElement(et,{translate:u,event:l.event,onBook:console.log})})),Object(K.a)(a,Ie,(function(){return u("Please wait ...")})),Object(K.a)(a,Be,(function(){return r.a.createElement(me,{image:fe.a,imageAlt:u("Something wrong happened"),title:u("Unable to find your booking")})})),a)[o.status]()};tt.contextTypes={t:A.func,history:A.shape({push:A.func.isRequired})};var at=Object(i.connect)((function(e){return{booking:e.booking,company:e.company}}),(function(e){return Object(p.b)({setBookingStatus:Ye,setBookingData:Ge},e)}))(Object(x.g)(tt)),nt=function(){return r.a.createElement(x.c,null,r.a.createElement(x.a,{path:"/:companyHash",exact:!0},r.a.createElement(xe,null)),r.a.createElement(x.a,{path:"/:companyHash/booking/:bookingId"},r.a.createElement(at,null)),r.a.createElement(x.a,{path:"*",exact:!0},"Sorry this page doesn't exists"))},rt=a(51),ot=a.n(rt),ct=function(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches},it=a(52),st=document.body,lt=function(){st.classList.add(ot()({tablet:!0})?"mobile-tablet":"desktop")},ut=function(e){var t=Object(i.useSelector)((function(e){return e.settings})).darkMode;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.darkMode,a=void 0===t?"browser":t,n="browser"===a?ct():a;st.classList.remove("dark-mode"),st.classList.remove("light-mode"),st.classList.add("".concat(n?"dark":"light","-mode"))}({darkMode:void 0===t?"browser":t}),lt(),function(){var e=function(e){return e.toLowerCase().split(" ").join("-")},t=Object(it.a)(),a=t.name,n=t.version,r=t.os;st.classList.add(e(a)),st.classList.add(e("".concat(a,"-").concat(n))),st.classList.add(e(r))}(),e.children},mt=function(e){return fetch(function(e){return"".concat(Y,"/company/").concat(e)}(e))},dt=(a(96),a(53)),ft=a.n(dt),vt=function(e){var t,a=e.translate,n=e.event,o=e.children;return r.a.createElement("div",{className:"companyCard"},r.a.createElement("div",{className:"companyCard__header",style:{backgroundImage:"url(".concat(ft.a,")")}},r.a.createElement("div",{className:"companyCard__header--row"},r.a.createElement("div",{className:"companyCard__header--title"},n.name),r.a.createElement("div",{className:"companyCard__header--date"},V.a.unix(n.eventStartTime).format("Do MMM | ddd"))),r.a.createElement("div",{className:"companyCard__header--row"},r.a.createElement("div",{className:"companyCard__header--address"},n.address),r.a.createElement("div",{className:"companyCard__header--directions"},r.a.createElement("a",{target:"_blank",href:(t=n.address,"".concat("https://www.google.com/maps/search/").concat(t))},a("Get directions"))))),r.a.createElement("div",{className:"companyCard__content"},o))},pt=function(e){var t=e.state,a=e.children,n=e.translate,o=e.data,c=function(){return r.a.createElement(vt,{translate:n,event:o.event},a)};return{loading:function(){return r.a.createElement(r.a.Fragment,null,n("Please wait..."))},loaded:c,failed:function(){return r.a.createElement(r.a.Fragment,null,n("Invalid page"))},expired:c}[t]()},bt=function(e,t){var a=e.children,o=e.company,c=e.setCompanyData,i=t.t,s=Object(n.useState)(Ne),l=Object(F.a)(s,2),u=l[0],m=l[1],d=Object(x.f)().companyHash,f=function(){var e;o.status!==Te&&m(Ne);var t=(e={},Object(K.a)(e,Se.a.NOT_FOUND,Oe),Object(K.a)(e,Se.a.LOCKED,je),Object(K.a)(e,Se.a.OK,we),e),a=t[u];mt(d).then((function(e){var n=t[e.status]||Oe;return n!==a&&m(n),e.json()})).then(c)};return r.a.useEffect((function(){f()}),[d]),o.status===Te&&f(),r.a.createElement(pt,{state:u,translate:i,data:o},a)};bt.contextTypes={t:A.func,history:A.shape({push:A.func.isRequired})};var gt=Object(i.connect)((function(e){return{company:e.company}}),(function(e){return Object(p.b)({setCompanyData:ye},e)}))(Object(x.g)(bt)),_t=function(e,t){var a=t.t;return r.a.createElement(ut,null,r.a.createElement("div",{className:"app",style:{backgroundImage:"url(".concat(B.a,")")}},r.a.createElement("div",{className:"app__logo"},r.a.createElement("img",{src:M.a,alt:a("Booksys logo")})),r.a.createElement(x.a,{path:"/:companyHash"},r.a.createElement(gt,null,r.a.createElement(nt,null)))))};_t.contextTypes={t:A.func};var ht=_t;a(97),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Et=function(e){var t=[!1,b.a].filter(Boolean),a=[p.a.apply(void 0,Object(v.a)(t)),E,!1].filter(Boolean),n=p.d.apply(void 0,Object(v.a)(a)),r=Object(p.e)(C,e,n);return{store:r,persistor:Object(g.b)(r)}}(),yt=Et.store,kt=Et.persistor;c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.Provider,{store:yt},r.a.createElement(f.a,{loading:null,persistor:kt},r.a.createElement(u.a,{translations:{en:{"Hello world":"Testing translations II - The revenge"},options:{plural_rule:"n != 1",plural_number:"2"}},initialLang:d()(),fallbackLang:"en"},r.a.createElement(s.a,null,r.a.createElement(ht,null)))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.08b8464b.chunk.js.map