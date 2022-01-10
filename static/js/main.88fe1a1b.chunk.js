(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{15:function(e,t,n){e.exports={Header:"Header_Header__2Cs7p"}},2:function(e,t,n){e.exports={CVForm:"CVForm_CVForm__2WM2K",submit:"CVForm_submit__35jKk",hrv2:"CVForm_hrv2__lnZcB",list:"CVForm_list__116ys",delete:"CVForm_delete__2RUZ3",addToList:"CVForm_addToList__6N_IM",invalid:"CVForm_invalid__3A981"}},21:function(e,t,n){},22:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),i=n(14),s=n.n(i),l=(n(20),n.p,n.p,n.p,n.p,n(21),n(4)),r=n(5),o=n(7),d=n(6),j=(n(22),n(15)),h=n.n(j),m=n(0),u=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props.title;return Object(m.jsx)("header",{className:h.a.Header,children:Object(m.jsx)("h1",{children:e})})}}]),n}(c.Component),b=u,x=n(11),O=n(9),p=n(1),v=n(12),g=n(10),f=n.n(g),C=n(2),k=n.n(C),y=n(8),S=n.n(y),N=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.data,n=e.onClickBtn,c=e.onClickBtnPrint,a=t.contact,i=t.summary,s=t.experience,l=t.education,r=t.skills,o=String.fromCharCode(160),d=function(e){return e.substring(0,e.length-3)},j=function(e){return Object(m.jsx)("div",{className:S.a.dateDiv,children:Object(m.jsxs)("p",{children:[d(e.startDate),"\xa0-\xa0",(t=e.endDate,"PRESENT"===t?"present":d(t))]})});var t},h=function(e){if(e.length>0)return Object(m.jsx)("ul",{children:e.map((function(e){return Object(m.jsx)("li",{children:e.sentence},e.id)}))})};return Object(m.jsxs)("div",{className:S.a.CVOverview,children:[Object(m.jsxs)("div",{className:S.a.buttonDiv,children:[Object(m.jsx)("button",{onClick:n,className:S.a.edit,children:"Edit CV"}),Object(m.jsx)("button",{onClick:c,children:"Print | Save as PDF"})]}),Object(m.jsxs)("div",{className:S.a.container,children:[Object(m.jsxs)("section",{className:S.a.contact,children:[Object(m.jsxs)("h1",{children:[a.firstName,"\xa0",a.lastName,"\xa0",a.suffix&&a.suffix]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Phone"}),"\xa0",a.phoneNumber]}),Object(m.jsxs)("p",{children:[Object(m.jsx)("strong",{children:"Email"}),"\xa0",a.email]})]})]}),1===i.length&&Object(m.jsx)("section",{className:S.a.summary,children:Object(m.jsx)("div",{children:Object(m.jsx)("p",{children:i[0].summary})})}),s.length>0&&Object(m.jsxs)("section",{className:S.a.experience,children:[Object(m.jsx)("h2",{children:"Experience"}),s.map((function(e){return Object(m.jsxs)("div",{className:S.a.sectionChildDiv,children:[j(e),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:Object(m.jsx)("strong",{children:e.jobTitle})}),Object(m.jsx)("p",{children:Object(m.jsx)("i",{children:e.company})}),h(e.accomplishments)]})]},e.id)}))]}),l.length>0&&Object(m.jsxs)("section",{children:[Object(m.jsx)("h2",{children:"Education"}),l.map((function(e){return Object(m.jsxs)("div",{className:S.a.sectionChildDiv,children:[j(e),Object(m.jsxs)("div",{children:[Object(m.jsx)("p",{children:Object(m.jsxs)("strong",{children:[e.academicDegree&&"".concat(e.academicDegree,",").concat(o),e.major&&"".concat(e.major,",").concat(o),e.schoolName]})}),h(e.accomplishments)]})]},e.id)}))]}),r.length>0&&Object(m.jsxs)("section",{children:[Object(m.jsx)("h2",{children:"Skills"}),Object(m.jsx)("ul",{className:S.a.skillsUl,children:r.map((function(e){return Object(m.jsx)("li",{children:e.text},e.id)}))})]})]})]})}}]),n}(c.Component),D=N,E=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(l.a)(this,n),(c=t.call(this,e)).setStateV1=function(e,t,n,a){var i=a;"skills"===e&&(i=Object(p.a)(Object(p.a)({},t.skill),{},{text:a})),c.setState(Object(p.a)(Object(p.a)({},c.state),{},Object(O.a)({},e,Object(p.a)(Object(p.a)({},t),{},Object(O.a)({},n,i)))))},c.setStateV2=function(e,t,n,a,i,s){var l=Object(x.a)(t),r=a,o=s;if(null==o){o=t.findIndex((function(e){return e.id===i.target.parentElement.id}))}"accomplishment"===n&&(r=Object(p.a)(Object(p.a)({},l[o].accomplishment),{},{sentence:a})),l[o]=Object(p.a)(Object(p.a)({},l[o]),{},Object(O.a)({},n,r)),c.setState(Object(p.a)(Object(p.a)({},c.state),{},Object(O.a)({},e,Object(x.a)(l))))},c.getSectionValue=function(e){var t;return"contact"===e?t=c.state.contact:"summary"===e?t=c.state.summary:"experience"===e?t=c.state.experience:"education"===e?t=c.state.education:"skills"===e&&(t=c.state.skills),t},c.checkValidity=function(e){var t=e.validity.valid,n=e.classList.contains(k.a.invalid);t&&n?e.classList.toggle(k.a.invalid):t||n||e.classList.toggle(k.a.invalid)},c.handleChange=function(e){c.checkValidity(e.target);var t=e.target.parentElement.parentElement.id,n=e.target.name,a=e.target.value;"contact"===t||"skills"===t?c.setStateV1(t,c.getSectionValue(t),n,a):["summary","experience","education"].includes(t)&&c.setStateV2(t,c.getSectionValue(t),n,a,e)},c.addMoreSectionValue=function(e){var t,n=e.target.getAttribute("data-section"),a=c.getSectionValue(n);"summary"===n?t=c.createSummary():"experience"===n?t=c.createExperience():"education"===n&&(t=c.createEducation()),c.setState(Object(p.a)(Object(p.a)({},c.state),{},Object(O.a)({},n,[].concat(Object(x.a)(a),[t]))))},c.deleteOneSectionValue=function(e){var t=e.target.getAttribute("data-section"),n=c.getSectionValue(t),a=e.target.getAttribute("data-index");n.splice(a,1),c.setState(Object(p.a)(Object(p.a)({},c.state),{},Object(O.a)({},t,Object(x.a)(n))))},c.handleCheckbox=function(e,t,n,a,i,s){i.target.checked?c.setStateV2(e,t,n,a,i,s):c.setStateV2(e,t,n,"",i,s)},c.addToList=function(e){var t=e.target.getAttribute("data-index"),n=e.target.getAttribute("data-section"),a=c.getSectionValue(n);a[t].accomplishments=a[t].accomplishments.concat(a[t].accomplishment),a[t].accomplishment=Object(p.a)({},c.accomplishment()),c.setState(Object(p.a)(Object(p.a)({},c.state),{},Object(O.a)({},n,Object(x.a)(a))))},c.addToSkills=function(){c.setState(Object(p.a)(Object(p.a)({},c.state),{},{skills:{skillList:c.state.skills.skillList.concat(c.state.skills.skill),skill:c.createSkill().skill}}))},c.setPreviewToFalse=function(){c.setState(Object(p.a)(Object(p.a)({},c.state),{},{preview:!1}))},c.functionWindowPrint=function(){window.print()},c.handleSubmit=function(){var e=document.querySelectorAll("#cvM4kerForm input"),t=0,n=[];e.forEach((function(e){c.checkValidity(e),e.validity.valid||(t+=1,n.push(e))})),0===t?c.setState(Object(p.a)(Object(p.a)({},c.state),{},{data:{contact:c.state.contact,summary:c.state.summary,experience:c.state.experience,education:c.state.education,skills:c.state.skills.skillList},preview:!0})):n[0].focus()},c.createSummary=function(){return{id:f()(),summary:""}},c.accomplishment=function(){return{id:f()(),sentence:""}},c.createExperience=function(){return{id:f()(),jobTitle:"",company:"",accomplishment:c.accomplishment(),accomplishments:[],startDate:"",endDate:""}},c.createEducation=function(){return{id:f()(),academicDegree:"",major:"",schoolName:"",accomplishment:c.accomplishment(),accomplishments:[],startDate:"",endDate:""}},c.createSkill=function(){return{skill:{id:f()(),text:""},skillList:[]}},c.state={data:{},preview:!1,contact:{firstName:"",lastName:"",suffix:"",email:"",phoneNumber:""},summary:[c.createSummary()],experience:[c.createExperience()],education:[c.createEducation()],skills:c.createSkill()},c.setPreviewToFalse=c.setPreviewToFalse.bind(Object(v.a)(c)),c.functionWindowPrint=c.functionWindowPrint.bind(Object(v.a)(c)),c}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.summary,c=t.contact,a=t.experience,i=t.education,s=t.skills,l=t.preview,r=t.data;return Object(m.jsxs)("div",{children:[!1===l&&Object(m.jsxs)("form",{className:k.a.CVForm,id:"cvM4kerForm",noValidate:!0,children:[Object(m.jsxs)("section",{id:"contact",children:[Object(m.jsx)("h2",{children:"Contact Information"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"firstName",children:"First name"}),Object(m.jsx)("input",{type:"text",name:"firstName",id:"firstName",value:c.firstName,onChange:this.handleChange,required:!0}),Object(m.jsx)("label",{htmlFor:"lastName",children:"Last name"}),Object(m.jsx)("input",{type:"text",name:"lastName",id:"lastName",value:c.lastName,onChange:this.handleChange,required:!0}),Object(m.jsx)("label",{htmlFor:"suffix",children:"Suffix"}),Object(m.jsx)("input",{type:"text",name:"suffix",id:"suffix",value:c.suffix,onChange:this.handleChange}),Object(m.jsx)("label",{htmlFor:"email",children:"Email"}),Object(m.jsx)("input",{type:"email",name:"email",id:"email",value:c.email,onChange:this.handleChange,required:!0}),Object(m.jsx)("label",{htmlFor:"phoneNumber",children:"Phone number"}),Object(m.jsx)("input",{type:"tel",name:"phoneNumber",id:"phoneNumber",pattern:"[0-9]{4}-[0-9]{3}-[0-9]{4}",value:c.phoneNumber,onChange:this.handleChange,required:!0}),Object(m.jsx)("small",{children:"Format: 9999-999-9999"})]})]}),Object(m.jsxs)("section",{id:"summary",children:[Object(m.jsx)("h2",{children:"Summary"}),Object(m.jsx)("hr",{}),n.map((function(t,n){return Object(m.jsxs)("div",{id:t.id,children:[Object(m.jsx)("textarea",{form:"cvM4kerForm",name:"summary",value:t.summary,onChange:e.handleChange}),Object(m.jsx)("button",{type:"button",className:k.a.delete,"data-index":n,"data-section":"summary",onClick:function(n){t.summary.length>60?!0===window.confirm("Continue to remove summary?")&&e.deleteOneSectionValue(n):e.deleteOneSectionValue(n)},children:"Remove Summary"})]},t.id)})),0===n.length&&Object(m.jsx)("button",{type:"button","data-section":"summary",onClick:this.addMoreSectionValue,children:"Add Summary"})]}),Object(m.jsxs)("section",{id:"experience",children:[Object(m.jsx)("h2",{children:"Experience"}),Object(m.jsx)("hr",{}),a.map((function(t,n){var c=n+1;return Object(m.jsxs)("div",{id:t.id,children:[a.length>1&&Object(m.jsx)("span",{children:"#".concat(c)}),Object(m.jsx)("label",{htmlFor:"jobTitle".concat(c),children:"Job Title"}),Object(m.jsx)("input",{type:"text",name:"jobTitle",id:"jobTitle".concat(c),value:t.jobTitle,onChange:e.handleChange,required:!0}),Object(m.jsx)("label",{htmlFor:"company".concat(c),children:"Company"}),Object(m.jsx)("input",{type:"text",name:"company",id:"company".concat(c),value:t.company,onChange:e.handleChange,required:!0}),Object(m.jsx)("label",{htmlFor:"expStartDAte".concat(c),children:"Start Date"}),Object(m.jsx)("input",{type:"date",name:"startDate",id:"expStartDAte".concat(c),value:t.startDate,onChange:e.handleChange,required:!0}),Object(m.jsx)("label",{htmlFor:"expEndDAte".concat(c),children:"End Date"}),"PRESENT"!==t.endDate&&Object(m.jsx)("input",{type:"date",name:"endDate",id:"expEndDAte".concat(c),value:t.endDate,onChange:e.handleChange,required:!0}),Object(m.jsxs)("small",{children:[Object(m.jsx)("input",{type:"checkbox",id:"expCheckboxEndDAte".concat(c),checked:"PRESENT"===t.endDate,onChange:function(t){return e.handleCheckbox("experience",e.state.experience,"endDate","PRESENT",t,n)}}),Object(m.jsx)("label",{htmlFor:"expCheckboxEndDAte".concat(c),children:"PRESENT"})]}),Object(m.jsx)("label",{htmlFor:"expAccomplishment".concat(c),children:"Accomplishment"}),Object(m.jsx)("input",{type:"text",name:"accomplishment",id:"expAccomplishment".concat(c),value:t.accomplishment.sentence,onChange:e.handleChange}),Object(m.jsx)("button",{type:"button",className:k.a.addToList,"data-index":n,"data-section":"experience",disabled:!(t.accomplishment.sentence.trim().length>0),onClick:e.addToList,children:"Add To List"}),Object(m.jsxs)("details",{children:[Object(m.jsx)("summary",{children:"List of Accomplishments"}),t.accomplishments.length>0?Object(m.jsx)("div",{className:k.a.list,id:"expList".concat(c),children:Object(m.jsx)("ul",{children:t.accomplishments.map((function(e){return Object(m.jsx)("li",{children:e.sentence},e.id)}))})}):Object(m.jsx)("div",{children:"(empty)"})]}),Object(m.jsx)("button",{type:"button",className:k.a.delete,"data-index":n,"data-section":"experience",onClick:e.deleteOneSectionValue,children:1===a.length?"Remove Experience":"Delete #".concat(c)}),a.length>1&&Object(m.jsx)("hr",{className:k.a.hrv2})]},t.id)})),Object(m.jsx)("button",{type:"button","data-section":"experience",onClick:this.addMoreSectionValue,children:0===a.length?"Add Experience":"Add More"})]}),Object(m.jsxs)("section",{id:"education",children:[Object(m.jsx)("h2",{children:"Education"}),Object(m.jsx)("hr",{}),i.map((function(t,n){var c=n+1;return Object(m.jsxs)("div",{id:t.id,children:[i.length>1&&Object(m.jsx)("span",{children:"#".concat(c)}),Object(m.jsx)("label",{htmlFor:"academicDegree".concat(c),children:"Academic Degree"}),Object(m.jsx)("input",{type:"text",name:"academicDegree",id:"academicDegree".concat(c),value:t.academicDegree,onChange:e.handleChange}),Object(m.jsx)("label",{htmlFor:"major".concat(c),children:"Major"}),Object(m.jsx)("input",{type:"text",name:"major",id:"major".concat(c),value:t.major,onChange:e.handleChange}),Object(m.jsx)("label",{htmlFor:"schoolName".concat(c),children:"School Name"}),Object(m.jsx)("input",{type:"text",name:"schoolName",id:"schoolName".concat(c),value:t.schoolName,onChange:e.handleChange,required:!0}),Object(m.jsx)("label",{htmlFor:"educStartDate".concat(c),children:"Start Date"}),Object(m.jsx)("input",{type:"date",name:"startDate",id:"educStartDate".concat(c),value:t.startDate,onChange:e.handleChange,required:!0}),Object(m.jsx)("label",{htmlFor:"educEndDAte".concat(c),children:"End Date"}),"PRESENT"!==t.endDate&&Object(m.jsx)("input",{type:"date",name:"endDate",id:"educEndDAte".concat(c),value:t.endDate,onChange:e.handleChange,required:!0}),Object(m.jsxs)("small",{children:[Object(m.jsx)("input",{type:"checkbox",id:"educCheckboxEndDAte".concat(c),checked:"PRESENT"===t.endDate,onChange:function(t){return e.handleCheckbox("education",e.state.education,"endDate","PRESENT",t,n)}}),Object(m.jsx)("label",{htmlFor:"educCheckboxEndDAte".concat(c),children:"PRESENT"})]}),Object(m.jsx)("label",{htmlFor:"educAccomplishment".concat(c),children:"Accomplishment"}),Object(m.jsx)("input",{type:"text",name:"accomplishment",id:"educAccomplishment".concat(c),value:t.accomplishment.sentence,onChange:e.handleChange}),Object(m.jsx)("button",{type:"button",className:k.a.addToList,"data-index":n,"data-section":"education",disabled:!(t.accomplishment.sentence.trim().length>0),onClick:e.addToList,children:"Add To List"}),Object(m.jsxs)("details",{children:[Object(m.jsx)("summary",{children:"List of Accomplishments"}),t.accomplishments.length>0?Object(m.jsx)("div",{className:k.a.list,id:"educList".concat(c),children:Object(m.jsx)("ul",{children:t.accomplishments.map((function(e){return Object(m.jsx)("li",{children:e.sentence},e.id)}))})}):Object(m.jsx)("div",{children:"(empty)"})]}),Object(m.jsx)("button",{type:"button",className:k.a.delete,"data-index":n,"data-section":"education",onClick:e.deleteOneSectionValue,children:1===i.length?"Remove Education":"Delete #".concat(c)}),i.length>1&&Object(m.jsx)("hr",{className:k.a.hrv2})]},t.id)})),Object(m.jsx)("button",{type:"button","data-section":"education",onClick:this.addMoreSectionValue,children:0===i.length?"Add Education":"Add More"})]}),Object(m.jsxs)("section",{id:"skills",children:[Object(m.jsx)("h2",{children:"Skills"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{htmlFor:"skill",children:"Skill"}),Object(m.jsx)("input",{type:"text",name:"skill",id:"skill",value:s.skill.text,onChange:this.handleChange}),Object(m.jsx)("button",{type:"button",className:k.a.addToList,disabled:!(s.skill.text.trim().length>0),onClick:this.addToSkills,children:"Add Skill"}),Object(m.jsxs)("details",{children:[Object(m.jsx)("summary",{children:"List of Skills"}),s.skillList.length>0?Object(m.jsx)("div",{className:k.a.list,id:"skillList",children:Object(m.jsx)("ul",{children:s.skillList.map((function(e){return Object(m.jsx)("li",{children:e.text},e.id)}))})}):Object(m.jsx)("div",{children:"(empty)"})]})]})]}),Object(m.jsx)("button",{type:"button",className:k.a.submit,onClick:this.handleSubmit,children:"Create CV"})]}),!0===l&&Object(m.jsx)(D,{data:r,onClickBtn:this.setPreviewToFalse,onClickBtnPrint:this.functionWindowPrint})]})}}]),n}(c.Component),V=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"Main",children:Object(m.jsx)(E,{})})}}]),n}(c.Component),_=V,F={footer:{backgroundColor:"var(--ufoGreen)",padding:"1rem 1.5rem 1.75rem 1.5rem",textAlign:"right"},a:{color:"var(--onyx)"}},A=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.creator,n=e.link;return Object(m.jsx)("footer",{style:F.footer,children:Object(m.jsxs)("p",{children:["Created by:\xa0",Object(m.jsx)("a",{style:F.a,target:"_blank",rel:"noopener noreferrer",href:n,children:t})]})})}}]),n}(c.Component),T=A,w=function(e){Object(o.a)(n,e);var t=Object(d.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(b,{title:"CV M4ker"}),Object(m.jsx)(_,{}),Object(m.jsx)(T,{creator:"L4ck",link:"https://github.com/mrjgamboa"})]})}}]),n}(c.Component),L=w;s.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(L,{})}),document.getElementById("root"))},8:function(e,t,n){e.exports={CVOverview:"CVOverview_CVOverview__1kucg",container:"CVOverview_container__2r-oM",dateDiv:"CVOverview_dateDiv__YgIj4",sectionChildDiv:"CVOverview_sectionChildDiv__1gy8J",skillsUl:"CVOverview_skillsUl__2NO1u",buttonDiv:"CVOverview_buttonDiv__1b5jg"}}},[[25,1,2]]]);
//# sourceMappingURL=main.88fe1a1b.chunk.js.map