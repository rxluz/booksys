(this["webpackJsonpbooksys-client"]=this["webpackJsonpbooksys-client"]||[]).push([[0],{100:function(e,a,t){},101:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),o=t(23),i=t.n(o),s=t(14),c=t(17),l=t(24),u=t.n(l),m=t(16),d=t.n(m),f=t(43),v=t(37),p=t(8),b=t(44),g=t(36),h=t(45),E=t.n(h),_=function(e){return function(a,t,n){return e((function(e,t){var n,r=performance.now(),o=a(e,t),i=performance.now(),s=(n=i-r,Math.round(100*n)/100);return console.log("reducer process time:",s),o}),t,n)}},y=t(7),k=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,n=arguments.length>1?arguments[1]:void 0;return e(t)[n.type]?e(t)[n.type](t,n):t}},O=function(e){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(t){return t({type:e,value:a})}}},N=k((function(e){return{SETTINGS_TOGGLE_DARK_MODE:function(){return Object(y.a)(Object(y.a)({},e),{},{darkMode:!e.darkMode})}}}),{darkMode:"browser"}),T=k((function(){return{SET_COMPANY_DATA:function(e,a){return Object(y.a)(Object(y.a)({},e),a.value)},SET_COMPANY_STATUS:function(e,a){return Object(y.a)(Object(y.a)({},e),{},{status:a.value})}}}),{event:{name:"",eventStartTime:"",eventEndTime:"",address:"",availableTimes:[]},acceptedDomains:[],shouldRefresh:!0}),w=k((function(){return{SET_BOOKING_STATUS:function(e,a){return Object(y.a)(Object(y.a)({},e),{},{status:a.value})},SET_BOOKING_DATA:function(e,a){return Object(y.a)(Object(y.a)({},e),a.value)}}}),{name:"",corporateEmail:"",seats:0,office:"",time:"",status:"loading",id:""}),j=Object(p.c)({settings:N,company:T,booking:w,i18nState:l.i18nState}),C={key:"settings",storage:E.a},S=Object(g.a)(C,j);var A=t(2),x=(t(74),t(75),t(4)),P=t(46),I=t.n(P),B=t(47),D=t.n(B),M=t(15),L=t.n(M),H=t(18),V=t(6),F=t(5),Y=t(57),U=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,K="https://29b0050b-7001-4162-994f-acfec6195274.mock.pstmn.io",G=t(9),R=t.n(G),q=t(48),z=t.n(q);R.a.locale(d()());var J=function(e){var a=e.onChange,t=e.isValid,n=e.valueForced,r=void 0===n?"NO":n,o=e.isTouched,i=void 0!==o&&o;return function(e){return a({value:"NO"!==r?r:e.target.value,isValid:t,isTouched:i})}},W=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{value:a,isValid:e,isTouched:!1}},Z=function(e){return{EMAIL:{test:function(e){return U.test(String(e).toLowerCase())},message:function(){return e("Your email looks incorrect")}}}},$=function(e){return(e||[]).reduce((function(e,a){var t=a.time;if(R()().unix()>t)return e;var n=R.a.unix(t).format("h A");return e.push({value:t,text:n}),e}),[])},Q=function(e,a){return{test:function(t){return Z(e).EMAIL.test(t)&&a.some((function(e){return t.split("@")[1]===e}))},message:function(a){return Z(e).EMAIL.test(a)?e("This email is not acceptable, please make sure to use your corporate email"):Z(e).EMAIL.message(a)}}},X=function(e){var a=e.preferredTime,t=e.availableTimesAndSeats,n=e.translate;return a.value?function(e,a){return e.reduce((function(e,t){var n=t.time,r=t.seats;return e[n]=r.map((function(e){return{value:e,text:a(["One seat","{num} seats"],{num:e})}})),e}),{})}(t,n)[a.value]:[]},ee=(t(78),t(50)),ae=t(26),te=t(49),ne=t.n(te),re=function(){return ne()({tablet:!0})},oe=function(e){var a=e.displayErrors,t=e.isValid,n=e.validation,o=e.value;return n?a&&!t&&r.a.createElement("aside",{role:"alert",className:"animate__animated animate__fadeIn input__warning"},r.a.createElement("i",{className:"input__warning--icon",role:"presentation","aria-hidden":"true"},r.a.createElement(ee.a,{size:"16px"})),r.a.createElement("p",{className:"input__warning--text"},n.message(o))):null},ie=function(e){var a=e.title,t=e.type,o=e.id,i=e.placeholder,s=e.value,c=e.displayErrors,l=e.onChange,u=e.isValid,m=e.validation,d=e.list,f=e.disabled,v=e.showClearButton,p=e.onClear,b=e.translate,g=Object(n.useRef)(),h=m?m.test(s):!!u,E=function(){return l({value:s,isValid:h,isTouched:""!==s})},_=function(){J({onChange:l,isValid:h,valueForced:""})(),p&&p()},y=function(){re()&&g.current.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})},k=function(){re()&&E()},O={text:function(){return r.a.createElement("input",{id:o,onFocus:y,ref:g,disabled:f,onChange:J({onChange:l,isValid:h,isTouched:re()}),onKeyUp:k,onBlur:E,value:s,className:"input__element--text",placeholder:i})},select:function(){return r.a.createElement(r.a.Fragment,null,!f&&""!==s&&v&&r.a.createElement("div",{className:"input__element--clear",role:"button","aria-label":b("Clear field value"),onClick:_},r.a.createElement(ae.b,null)),r.a.createElement("select",{id:o,onFocus:y,ref:g,disabled:f,defaultValue:s,onChange:J({onChange:l,isValid:h}),className:"input__element--select"},!!i&&r.a.createElement("option",{value:"",disabled:!0},i),d&&d.map((function(e){var a=e.value,t=e.text;return r.a.createElement("option",{key:a,value:a},t)}))))}};return r.a.createElement("div",{className:"input"},!!a&&r.a.createElement("label",{className:"input__title",htmlFor:o},a),O[t]&&O[t](),r.a.createElement(oe,{displayErrors:c,isValid:h,validation:m,value:s}))};ie.defaultProps={type:"input",isValid:!0,displayErrors:!0,list:[]};var se=ie,ce=(t(79),function(e){var a=e.children,t=e.isDisabled,n=e.onClick,o=e.styleType;return r.a.createElement("button",{className:"button button--".concat(o),onClick:function(){return t?null:n()},disabled:t},a)});ce.defaultProps={styleType:"primary"};var le=ce,ue="loading",me="expired",de="form",fe="success",ve="".concat(K,"/booking/request"),pe=(t(80),function(e){var a=e.image,t=e.imageAlt,n=e.title,o=e.description,i=e.footerMessage,s=e.callToActionText,c=e.callToActionType,l=e.onClickCallToAction;return r.a.createElement("div",{className:"warning animate__animated animate__fadeIn",role:"alert"},r.a.createElement("div",{className:"warning__content"},a&&r.a.createElement("div",{className:"warning__image",role:"presentation"},r.a.createElement("img",{alt:t,src:a})),n&&r.a.createElement("div",{className:"warning__title"},n),o&&r.a.createElement("div",{className:"warning__description"},o),i&&r.a.createElement("div",{className:"warning__footer-message"},i)),s&&r.a.createElement("div",{className:"warning__footer"},r.a.createElement(le,{styleType:c,className:"warning__footer--button",onClick:l},s)))}),be=t(27),ge=t.n(be),he=t(51),Ee=t.n(he),_e=t(28),ye=t.n(_e),ke=(t(81),["value"]),Oe=function(e){var a=e.children;return r.a.createElement("section",{className:"create-page animate__animated animate__fadeIn"},a)},Ne=function(e){var a,t=e.translate,o=e.availableTimesAndSeats,i=e.acceptedDomains,s=e.onSubmit,c=e.isSubmitting,l=e.eventEndTime,u=e.showSuccessState,m=e.showInvalidBookingMessage,d=e.resetFormAction,f=function(e){var a=e.eventEndTime,t=e.showSuccessState;return a<R()().unix()?me:t?fe:de}({showSuccessState:u,eventEndTime:l}),v=Object(n.useState)(W()),p=Object(V.a)(v,2),b=p[0],g=p[1],h=Object(n.useState)(W()),E=Object(V.a)(h,2),_=E[0],k=E[1],O=Object(n.useState)(W()),N=Object(V.a)(O,2),T=N[0],w=N[1],j=Object(n.useState)(W()),C=Object(V.a)(j,2),S=C[0],A=C[1],x={name:b,corporateEmail:_,seats:T,preferredTime:S},P=Object.keys(x).reduce((function(e,a){return e[a]=x[a].value,e}),{}),I=c||!function(e){return Object.values(e).every((function(e){var a=e.value,t=e.isValid;return!!a&&t}))}(x),B=function(){w(W()),A(W()),d()},D=function(e){var a=e.value,t=Object(Y.a)(e,ke);return k(Object(y.a)({value:a.trim()},t))},M=(a={},Object(F.a)(a,fe,(function(){return r.a.createElement(pe,{image:Ee.a,imageAlt:t("Email illustration"),title:t("Check your email"),description:t("You are almost there to reserve your room for this event! Please make sure to finish your reservation as soon as possible to avoid losing your booking."),footerMessage:t("If you can't found the email, check your spam folder."),callToActionType:"secondary",callToActionText:t("New booking"),onClickCallToAction:B})})),Object(F.a)(a,ue,(function(){return r.a.createElement("div",{role:"presentation"},r.a.createElement(ye.a,null))})),Object(F.a)(a,me,(function(){return r.a.createElement(pe,{image:ge.a,imageAlt:t("Something wrong happened"),title:t("This event has ended")})})),Object(F.a)(a,de,(function(){return r.a.createElement("div",{className:"animate__animated animate__fadeIn"},r.a.createElement("div",{className:"create-page__title"},t("Fill in the details below to make your office reservation")),r.a.createElement("form",{"aria-label":t("Office reservation"),onSubmit:function(e){e.preventDefault()}},r.a.createElement("div",{className:"create-page__content"},r.a.createElement(se,{translate:t,id:"name",type:"text",value:b.value,onChange:g,title:t("Name")}),r.a.createElement(se,Object(F.a)({translate:t,id:"corporateEmail",type:"text",value:_.value,onChange:D,title:t("Corporate email"),displayErrors:_.isTouched,validation:Q(t,i)},"translate",t)),r.a.createElement(se,{translate:t,id:"preferredTime",title:t("Book your preferences for this event"),type:"select",list:$(o),value:S.value,onChange:A,placeholder:t("Preferred time")}),r.a.createElement(se,{translate:t,id:"seats",type:"select",disabled:""===S.value,list:X({preferredTime:S,availableTimesAndSeats:o,translate:t}),value:T.value,onChange:w,placeholder:t("Number of seats"),displayErrors:m,validation:{test:function(){return!m},message:function(){return t("Your booking preferences has changed")}}})),r.a.createElement("div",{className:"create-page__footer"},r.a.createElement(le,{onClick:function(){return!I&&s(P)},isDisabled:I},t(c?"Please wait ...":"Continue")))))})),a);return r.a.createElement(Oe,null,M[f]())};Ne.defaultProps={translate:function(e){return e}};var Te=Ne,we=t(22),je=t.n(we),Ce=function(){var e=Object(H.a)(L.a.mark((function e(a){var t,n;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.data,n=a.companyHash,e.abrupt("return",fetch(ve,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:je.a.stringify(Object(y.a)(Object(y.a)({},t),{},{companyHash:n}))}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),Se=O("SET_COMPANY_DATA"),Ae=O("SET_COMPANY_STATUS"),xe="failed",Pe="loaded",Ie="loading",Be="expired",De="outdated",Me=t(102),Le=function(e,a){var t=e.company,o=e.setCompanyStatus,i=a.t,s=Object(x.f)().companyHash,c=Object(n.useState)(!1),l=Object(V.a)(c,2),u=l[0],m=l[1],d=Object(n.useState)(!1),f=Object(V.a)(d,2),v=f[0],p=f[1],b=Object(n.useState)(!1),g=Object(V.a)(b,2),h=g[0],E=g[1],_=function(){var e=Object(H.a)(L.a.mark((function e(a){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,Ce({data:a,companyHash:s});case 3:if(t=e.sent,t.status!==Me.a.NOT_FOUND){e.next=11;break}return o(De),E(!0),m(!1),setTimeout((function(){return E(!0)}),3e3),e.abrupt("return");case 11:p(!0);case 12:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement(Te,{translate:i,acceptedDomains:t.acceptedDomains,eventStartTime:t.event.eventStartTime,eventEndTime:t.event.eventEndTime,availableTimesAndSeats:t.event.availableTimesAndSeats,onSubmit:_,isSubmitting:u,showInvalidBookingMessage:h,showSuccessState:v,resetFormAction:function(){o(De),p(!1),m(!1)}})};Le.contextTypes={t:A.func};var He,Ve=Object(s.connect)((function(e){return{company:e.company}}),(function(e){return Object(p.b)({setCompanyStatus:Ae},e)}))(Object(x.g)(Le)),Fe="loading",Ye="notFound",Ue="unavailable",Ke="cancelled",Ge="confirmed",Re=(He={},Object(F.a)(He,Me.a.NOT_FOUND,Ye),Object(F.a)(He,Me.a.LOCKED,Ke),Object(F.a)(He,Me.a.OK,Ge),Object(F.a)(He,Me.a.PRECONDITION_FAILED,Ue),He),qe="".concat(K,"/booking/confirm"),ze="".concat(K,"/booking/cancel"),Je=function(){var e=Object(H.a)(L.a.mark((function e(a){var t,n,r;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.bookingId,n=a.seat,r=a.time,e.abrupt("return",fetch(qe,{method:"PATCH",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:je.a.stringify((o={bookingId:t,seat:n,time:r},Object.fromEntries(Object.entries(o).filter((function(e){var a=Object(V.a)(e,2),t=(a[0],a[1]);return Boolean(t)})))))}));case 2:case"end":return e.stop()}var o}),e)})));return function(a){return e.apply(this,arguments)}}(),We=function(){var e=Object(H.a)(L.a.mark((function e(a){var t;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.bookingId,e.abrupt("return",fetch(ze,{method:"PATCH",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:je.a.stringify({bookingId:t})}));case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),Ze=O("SET_BOOKING_STATUS"),$e=O("SET_BOOKING_DATA"),Qe=(t(94),function(e){var a=e.status,t=function(e){var a;return a={},Object(F.a)(a,Ge,e("Congratulations! Your reservation has been successfully confirmed. Here is a brief summary of your booking details:")),Object(F.a)(a,Ke,e("You cancelled your booking. Here is a brief summary of your cancelled booking details:")),a}(e.translate)[a]||!1;return t?r.a.createElement("div",{className:"booking-status__message"},t):null}),Xe=function(e){var a=e.status,t=e.translate;return r.a.createElement("div",{role:"status",className:"booking-status__status--".concat(a)},function(e){var a;return a={},Object(F.a)(a,Ge,e("Confirmed")),Object(F.a)(a,Ke,e("Cancelled")),a}(t)[a])},ea=function(e){var a=e.time,t=e.translate;return r.a.createElement("div",{className:"booking-status__row"},r.a.createElement("div",{className:"booking-status__row--title"},t("Time")),r.a.createElement("div",{className:"booking-status__row--value"},R.a.unix(a).format("h A")))},aa=function(e){var a=e.office,t=e.translate;return r.a.createElement("div",{className:"booking-status__row"},r.a.createElement("div",{className:"booking-status__row--title"},t("Office")),r.a.createElement("div",{className:"booking-status__row--value"},a))},ta=function(e){var a=e.seats,t=e.translate;return r.a.createElement("div",{className:"booking-status__row"},r.a.createElement("div",{className:"booking-status__row--title"},t("Seats")),r.a.createElement("div",{className:"booking-status__row--value"},a))},na=function(e){var a=e.onCancel,t=e.translate,n=e.processing;return r.a.createElement("div",{className:"booking-status__row"},r.a.createElement(le,{onClick:a,styleType:"secondary",isDisabled:n},t(n?"Please wait ...":"Cancel")))},ra=function(e){var a=e.translate,t=e.data,n=e.onNewBooking,o=e.onCancel,i=e.processing,s=t.status===Ke;return r.a.createElement("section",{className:"booking-status animate__animated animate__fadeIn"},r.a.createElement("div",{className:"booking-status__title",role:"heading","aria-level":"2"},a("Hey {name},",{name:t.name})),r.a.createElement(Qe,{status:t.status,translate:a}),r.a.createElement("div",{className:"booking-status__status"},r.a.createElement(Xe,{status:t.status,translate:a}),r.a.createElement("div",{className:"booking-status__status--code"},a("Reservation code: {code}",{code:t.id}))),!s&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ea,{time:t.time,translate:a}),r.a.createElement(ta,{seats:t.seats,translate:a}),r.a.createElement(aa,{office:t.office,translate:a})),r.a.createElement("div",{className:"booking-status__row"},r.a.createElement(le,{isDisabled:i,onClick:n,styleType:"secondary"},a("New booking"))),!s&&r.a.createElement(na,{processing:i,translate:a,onCancel:o}))};ra.defaultProps={translate:function(e){return e}};var oa=ra;t(95);R.a.locale(d()());var ia=function(e){var a=e.time,t=e.seat,n=e.onBook,o=e.translate,i=R.a.unix(a).format("h A");return r.a.createElement("div",{className:"office-card animate__animated animate__fadeIn",role:"listitem"},r.a.createElement("div",{className:"office-card__content"},r.a.createElement("div",{className:"office-card__time","aria-label":o("Time: {time}",{time:i})},i),r.a.createElement("div",{className:"office-card__seats"},r.a.createElement("div",{className:"office-card__seats--icon",role:"presentation","aria-hidden":"true"},r.a.createElement(ae.a,null)),r.a.createElement("div",{className:"office-card__seats--text","aria-label":o("Seats available: {seat}",{seat:t})},t))),r.a.createElement("div",{className:"office-card__footer"},r.a.createElement(le,{onClick:function(){return n({seat:t,time:a})}},o("Book"))))};ia.defaultProps={translate:function(e){return e}};var sa=ia,ca=t(56),la=(t(96),function(e){var a=e.current,t=e.total,n=e.onPageChange,o=e.label,i=e.translate;return r.a.createElement("nav",{role:"slider","aria-label":o,"aria-valuenow":a,"aria-valuemin":"1","aria-valuemax":t,"aria-valuetext":i("Page {num}",{num:a})},r.a.createElement(ca.a,{current:a,total:t,onPageChange:n}))});la.defaultProps={translate:function(e){return e}};var ua=la,ma=(t(97),function(e){var a=e.translate,t=e.event,o=e.onBook,i=t.availableTimesAndSeats,s=Object(n.useState)(W()),c=Object(V.a)(s,2),l=c[0],u=c[1],m=Object(n.useState)(W()),d=Object(V.a)(m,2),f=d[0],v=d[1],p=Object(n.useState)(1),b=Object(V.a)(p,2),g=b[0],h=b[1],E=function(){return h(1)},_=function(e){return e.reduce((function(e,a){var t=a.time;return a.seats.forEach((function(a,n){e.push({id:z()({seat:a,time:t,index:n}),seat:a,time:t})})),e}),[])}(function(e){var a=e.seats,t=e.preferredTime;return e.availableTimesAndSeats.reduce((function(e,n){if(""!=t.value&&t.value!=n.time)return e;var r=n.seats.filter((function(e){return""==t.value||(""==a.value||a.value==e)}));return e.push({time:n.time,seats:r}),e}),[])}({seats:l,preferredTime:f,availableTimesAndSeats:i})),y=_.length,k=y/6,O=y>6;return r.a.createElement("section",{className:"booking-change animate__animated animate__fadeIn"},r.a.createElement("div",{className:"booking-change__title",role:"alert"},a("Unfortunately the time that you selected isn't available anymore. Please select a new option below")),r.a.createElement("div",{className:"booking-change__options",role:"search","aria-label":a("Time/Seats filters")},r.a.createElement("div",{className:"booking-change__column booking-change__column--left"},r.a.createElement(se,{type:"select",translate:a,id:"booking-change-time",value:f.value,onChange:function(e){v(e),u(W()),E()},showClearButton:!0,onClear:function(){u(W()),E()},list:$(i),placeholder:a("Select a time")})),r.a.createElement("div",{className:"booking-change__column booking-change__column--right"},r.a.createElement(se,{type:"select",translate:a,disabled:""===f.value,value:l.value,onChange:function(e){u(e),E()},showClearButton:!0,id:"booking-change-seats",list:X({preferredTime:f,availableTimesAndSeats:i,translate:a}),placeholder:a("Number of seats")}))),r.a.createElement("div",{className:"booking-change__subtitle",role:"heading","aria-level":"2"},a("Available offices")),r.a.createElement("div",{className:"booking-change__content",role:"list"},function(e){var a=e.items,t=e.itemsPerPage,n=e.page;return a.slice((n-1)*t,n*t)}({items:_,page:g,itemsPerPage:6}).map((function(e){var t=e.id,n=e.seat,i=e.time;return r.a.createElement(sa,{key:t,seat:n,time:i,translate:a,onBook:o})}))),O&&r.a.createElement("div",{className:"booking-change__paginator"},r.a.createElement(ua,{current:g,translate:a,label:a("Navigate into available offices list"),total:k,onPageChange:h})))});ma.defaultProps={translate:function(e){return e}};var da=ma,fa=function(e){var a=e.translate;return r.a.createElement("div",{role:"status","aria-live":"polite"},r.a.createElement("img",{alt:a("Please wait ..."),src:ye.a}))},va=function(e,a){var t,o=e.booking,i=e.setBookingStatus,s=e.setBookingData,c=e.history,l=e.company,u=a.t,m=Object(x.f)(),d=m.bookingId,f=m.companyHash,v=Object(n.useState)(!1),p=Object(V.a)(v,2),b=p[0],g=p[1],h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.seat,t=void 0===a?null:a,n=e.time,r=void 0===n?null:n;Je({seat:t,time:r,bookingId:d}).then((function(e){return i(Re[e.status]),g(!1),e.json()})).then((function(e){e&&e.booking&&s(e.booking)}))};Object(n.useEffect)((function(){h()}),[d]);var E=r.a.createElement(oa,{translate:u,data:o,processing:b,onCancel:function(){window.confirm(u("Are you sure that you want to cancel your booking"))&&(g(!0),We({bookingId:d}).then((function(){h()})))},onNewBooking:function(){return c.push("/".concat(f))}});return(t={},Object(F.a)(t,Ke,(function(){return E})),Object(F.a)(t,Ge,(function(){return E})),Object(F.a)(t,Ue,(function(){return r.a.createElement(da,{translate:u,event:l.event,onBook:h})})),Object(F.a)(t,Fe,(function(){return r.a.createElement(fa,{translate:u})})),Object(F.a)(t,Ye,(function(){return r.a.createElement(pe,{image:ge.a,imageAlt:u("Something wrong happened"),title:u("Unable to find your booking")})})),t)[o.status]()};va.contextTypes={t:A.func};var pa=Object(s.connect)((function(e){return{booking:e.booking,company:e.company}}),(function(e){return Object(p.b)({setBookingStatus:Ze,setBookingData:$e},e)}))(Object(x.g)(va)),ba=t(53),ga=t.n(ba),ha=function(e,a){var t=a.t;return r.a.createElement("div",{className:"not-found"},r.a.createElement("img",{src:ga.a,alt:t("Image with a alien spaceship abducting somebody")}),r.a.createElement("br",null),r.a.createElement("br",null),t("Page not found",{},"404 main text")," ",r.a.createElement("br",null))};ha.defaultProps={translate:function(e){return e}},ha.contextTypes={t:A.func};var Ea=ha,_a=function(){return r.a.createElement(x.c,null,r.a.createElement(x.a,{path:"/:companyHash",exact:!0},r.a.createElement(Ve,null)),r.a.createElement(x.a,{path:"/:companyHash/booking/:bookingId"},r.a.createElement(pa,null)),r.a.createElement(x.a,{path:"*",exact:!0},r.a.createElement(Ea,null)))},ya=t(54),ka=document.body,Oa=function(){ka.classList.remove("dark-mode"),ka.classList.remove("light-mode"),ka.classList.add("".concat(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light","-mode"))},Na=function(e){Object(s.useSelector)((function(e){return e.settings})).darkMode;return Oa(),ka.classList.add(re()?"mobile-tablet":"desktop"),function(){var e=function(e){return e.toLowerCase().split(" ").join("-")},a=Object(ya.a)(),t=a.name,n=a.version,r=a.os;ka.classList.add(e(t)),ka.classList.add(e("".concat(t,"-").concat(n))),ka.classList.add(e(r))}(),e.children},Ta=function(e){return fetch(function(e){return"".concat(K,"/company/").concat(e)}(e))},wa=(t(99),t(55)),ja=t.n(wa);R.a.locale(d()());var Ca=function(e){var a,t=e.translate,n=e.event,o=e.children,i=R.a.unix(n.eventStartTime).format("Do MMMM, dddd"),s=R.a.unix(n.eventStartTime).format("Do MMM | ddd");return r.a.createElement("div",{className:"companyCard"},r.a.createElement("div",{className:"companyCard__header",style:{backgroundImage:"url(".concat(ja.a,")")}},r.a.createElement("div",{className:"companyCard__header--row"},r.a.createElement("div",{className:"companyCard__header--title",title:t("Event name")},n.name),r.a.createElement("div",{className:"companyCard__header--date","aria-label":i},s)),r.a.createElement("div",{className:"companyCard__header--row"},r.a.createElement("address",{className:"companyCard__header--address"},n.address),r.a.createElement("div",{className:"companyCard__header--directions"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:(a=n.address,"".concat("https://www.google.com/maps/search/").concat(a))},t("Get directions"))))),r.a.createElement("div",{className:"companyCard__content"},o))};Ca.defaultProps={children:A.oneOfType([A.arrayOf(A.node),A.node]).isRequired,translate:function(e){return e},event:A.shape({name:A.string,address:A.string,eventStartTime:A.number})};var Sa=Ca,Aa=function(e){var a=e.state,t=e.children,n=e.translate,o=e.data,i=function(){return r.a.createElement(Sa,{translate:n,event:o.event},t)};return{loading:function(){return r.a.createElement(fa,{translate:n})},loaded:i,failed:function(){return r.a.createElement(Ea,{translate:n})},expired:i}[a]()};Aa.defaultProps={translate:function(e){return e}};var xa=Aa,Pa=function(e,a){var t=e.children,o=e.company,i=e.setCompanyData,s=a.t,c=Object(n.useState)(Ie),l=Object(V.a)(c,2),u=l[0],m=l[1],d=Object(x.f)().companyHash,f=function(){var e;o.status!==De&&m(Ie);var a=(e={},Object(F.a)(e,Me.a.NOT_FOUND,xe),Object(F.a)(e,Me.a.LOCKED,Be),Object(F.a)(e,Me.a.OK,Pe),e),t=a[u];Ta(d).then((function(e){var n=a[e.status]||xe;return n!==t&&m(n),e.json()})).then(i)};return r.a.useEffect((function(){f()}),[d]),o.status===De&&f(),r.a.createElement(xa,{state:u,translate:s,data:o},t)};Pa.contextTypes={t:A.func,history:A.shape({push:A.func.isRequired})};var Ia=Object(s.connect)((function(e){return{company:e.company}}),(function(e){return Object(p.b)({setCompanyData:Se},e)}))(Object(x.g)(Pa)),Ba=function(e,a){var t=a.t;return r.a.createElement(Na,null,r.a.createElement("div",{className:"app",style:{backgroundImage:"url(".concat(I.a,")")}},r.a.createElement("div",{className:"app__logo"},r.a.createElement("img",{src:D.a,alt:t("Booksys logo")})),r.a.createElement(x.c,null,r.a.createElement(x.a,{path:"/:companyHash"},r.a.createElement(Ia,null,r.a.createElement(_a,null))),r.a.createElement(x.a,null,r.a.createElement(Ea,{translate:t})))))};Ba.defaultProps={translate:function(e){return e}},Ba.contextTypes={t:A.func};var Da=Ba;t(100),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ma=function(e){var a=[!1,b.a].filter(Boolean),t=[p.a.apply(void 0,Object(v.a)(a)),_,!1].filter(Boolean),n=p.d.apply(void 0,Object(v.a)(t)),r=Object(p.e)(S,e,n);return{store:r,persistor:Object(g.b)(r)}}(),La=Ma.store,Ha=Ma.persistor;i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.Provider,{store:La},r.a.createElement(f.a,{loading:null,persistor:Ha},r.a.createElement(u.a,{translations:{en:{},options:{plural_rule:"n > 1",plural_number:"2"},pt:{"Event name":"Nome do evento","Get directions":"Ver dire\xe7\xf5es","Clear field value":"Limpar campo","Please wait ...":"Por favor aguarde \u2026","Time: {time}":"Hor\xe1rio: {time}","Seats available: {seat}":"Assentos dispon\xedveis: {seat}",Book:"Agendar","Page {num}":"P\xe1gina {num}","Your email looks incorrect":"Seu email est\xe1 incorreto","This email is not acceptable, please make sure to use your corporate email":"Esse email n\u0101o \xe9 aceit\xe1vel, por favor use o seu email corporativo","Congratulations! Your reservation has been successfully confirmed. Here is a brief summary of your booking details:":"Parab\xe9ns! Sua reserva foi efetuada com sucesso. Veja abaixo um resumo do seu agendamento:","You cancelled your booking. Here is a brief summary of your cancelled booking details:":"Voc\xea cancelou seu agendamento. Abaixo esta um resumo do agendamento cancelado:",Confirmed:"Confirmado",Cancelled:"Cancelado","Are you sure that you want to cancel your booking":"Voc\xea tem certeza que deseja cancelar esse agendamento?","Something wrong happened":"Algo inesperado aconteceu","Unable to find your booking":"N\u0101o conseguimos encontrar seu agendamento","Unfortunately the time that you selected isn't available anymore. Please select a new option below":"Infelizmente esse hor\xe1rio n\xe3o esta mais dispon\xedvel. Por favor selecione uma nova op\xe7\xe3o abaixo","Time/Seats filters":"Filtros de hor\xe1rio / assentos","Select a time":"Selecione um hor\xe1rio ","Number of seats":"Numero de assentos","Available offices":"Salas dispon\xedveis","Navigate into available offices list":"Navegue na lista de salas dispon\xedveis ","Email illustration":"Ilustra\xe7\xe3o de email","Check your email":"Verifique o seu email","You are almost there to reserve your room for this event! Please make sure to finish your reservation as soon as possible to avoid losing your booking.":"Voc\xea esta quase la para reservar a sua sala nesse evento! Por favor se assegure de finalizar a sua reserva o quanto antes para evitar perder o seu agendamento.","If you can't found the email, check your spam folder.":"Se voc\xea n\u0101o encontrar o email, por favor verifique a sua caixa de spam.","New booking":"Novo agendamento","This event has ended":"Esse evento est\xe1 encerrado","Fill in the details below to make your office reservation":"Preencha seus detalhes abaixo para fazer a sua reserva de sala","Office reservation":"Reserva de sala",Name:"Nome","Corporate email":"E-mail corporativo","Book your preferences for this event":"Defina as suas preferencias para esse evento","Preferred time":"Hor\xe1rio preferido","Your booking preferences has changed":"Suas preferencias de agendamento foram alteradas",Continue:"Continuar",Time:"Hor\xe1rio",Office:"Sala",Seats:"Assentos",Cancel:"Cancelar","Hey {name},":"Oi {name},","Reservation code: {code}":"C\xf3digo de reserva: {code}","Booksys logo":"Logo da Booksys","Image with a alien spaceship abducting somebody":"Imagem com uma nave espacial abduzindo algu\xe9m","Page not found":"Pagina n\u0101o encontrada"}},initialLang:d()(),fallbackLang:"en"},r.a.createElement(c.a,null,r.a.createElement(Da,null)))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},27:function(e,a,t){e.exports=t.p+"static/media/something-wrong.19763570.svg"},28:function(e,a,t){e.exports=t.p+"static/media/loading.26ad38f4.svg"},46:function(e,a,t){e.exports=t.p+"static/media/background.9adfa93a.png"},47:function(e,a,t){e.exports=t.p+"static/media/logo.e29d4d3a.svg"},51:function(e,a,t){e.exports=t.p+"static/media/email.ffaebffe.svg"},53:function(e,a,t){e.exports=t.p+"static/media/NotFound.df523510.svg"},55:function(e,a,t){e.exports=t.p+"static/media/companyCardBackground.b2695cc6.png"},58:function(e,a,t){e.exports=t(101)},74:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){},91:function(e,a){},94:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){},97:function(e,a,t){},99:function(e,a,t){}},[[58,1,2]]]);
//# sourceMappingURL=main.26cbabda.chunk.js.map