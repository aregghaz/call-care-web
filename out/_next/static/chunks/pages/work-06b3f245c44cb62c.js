(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[337],{8953:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/work",function(){return t(3100)}])},6867:function(e,r,t){"use strict";var n=t(5893),s=t(7294),i=t(8892),a=t.n(i);let l=e=>{let{required:r=!1,type:t,inputMode:i="text",placeholder:l="",name:o="",changeHandler:u=()=>{},error:c="",className:m}=e,[p,_]=(0,s.useState)(""),d=e=>{_(e.target.value)};return(0,n.jsxs)("div",{className:"".concat(a().inputWrapper," ").concat(m," ").concat(c&&a().inputError),children:[(0,n.jsx)("input",{className:a().input,type:t,inputMode:i,value:p,onChange:e=>{d(e),u(e.target.value,o)},placeholder:"".concat(l).concat(r?"*":"")}),c&&(0,n.jsx)("span",{className:a().errorMessage,children:c})]})};r.Z=l},5066:function(e,r,t){"use strict";var n=t(5893),s=t(7294),i=t(5625),a=t.n(i);let l=e=>{let{placeholder:r,label:t,name:i="",changeHandler:l=(e,r)=>{},error:o="",htmlFor:u="",autoResize:c=!0,className:m,required:p=!1}=e,[_,d]=(0,s.useState)(""),x=e=>{e.target.style.height="50px",e.target.style.height=e.target.scrollHeight+"px"},h=e=>{d(e.target.value)};return(0,n.jsxs)("div",{className:"".concat(a().formComment," ").concat(m," ").concat(o&&a().inputError),children:[(0,n.jsxs)("label",{htmlFor:u,children:[t,p?"*":""]}),(0,n.jsx)("textarea",{value:_,name:i,id:u,onChange:e=>{l(e.target.value,i),h(e),c&&x(e)}}),o&&(0,n.jsx)("span",{className:a().errorMessage,children:o})]})};r.Z=l},3100:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return h}});var n=t(5893),s=t(7294),i=t(5536),a=t.n(i),l=t(1649),o=t(3267),u=t(6867),c=t(7038),m=t.n(c);let p=e=>{let{error:r="",maxFileSize:t=1/0,allowedFileExt:i=[],changeHandler:a,name:l,label:o}=e,[u,c]=(0,s.useState)(""),[p,_]=(0,s.useState)(r);return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"".concat(m().main," ").concat(r&&m().inputError),children:[(0,n.jsxs)("label",{className:m().label,htmlFor:"file",children:[o,(0,n.jsxs)("sub",{children:[t/1024,"mb"]})]}),(0,n.jsxs)("div",{className:"".concat(m().fileWrapper," ").concat(r&&m().inputError),children:[(0,n.jsx)("input",{type:"file",id:"file",className:m().file,onChange:e=>{c(""),a&&a(null,l),e.target.files&&e.target.files.length>0?(console.log(e.target.files[0]),e.target.files[0].size<=1024*t?i.includes(e.target.files[0].type.split("/")[1])?(c(e.target.files[0].name),a&&a(e.target.files[0],l),_("")):_("File extension must be ".concat(i.join(" "))):_("File size extends ".concat(t/1024,"mb"))):_("Please include a file")}}),u&&(0,n.jsx)("span",{children:u})]}),p&&(0,n.jsx)("span",{className:m().errorMessage,children:p})]})})};var _=t(5066),d=t(7611);let x=e=>{let{}=e,r=(0,l.v9)(o.UB),t=["position","firstName","lastName","email","phone","resumeFile","resumeText"],[i,c]=(0,s.useState)({position:"",firstName:"",lastName:"",email:"",phone:"",resumeFile:"",resumeText:""}),[m,x]=(0,s.useState)({}),h=(e,r)=>{"resumeText"===r?x({...m,[r]:"",resumeFile:""}):"resumeFile"===r?x({...m,[r]:"",resumeText:""}):x({...m,[r]:""}),c({...i,[r]:e})},f=(0,s.useCallback)(()=>{alert("all okay!"),console.log(i)},[i]),g=e=>{e.preventDefault();let r=(0,d.Z)(i,t);Object.keys(r).length>0&&r.resumeFile&&void 0===r.resumeText||Object.keys(r).length>0&&r.resumeText&&void 0===r.resumeFile?f():Object.keys(r).length>0?(void 0===r.resumeFile&&r.resumeText?delete r.resumeText:void 0===r.resumeText&&r.resumeFile&&delete r.resumeFile,x(r)):f()};return(0,n.jsxs)("div",{className:a().work,children:[(0,n.jsxs)("div",{className:a().workInfo,children:[(0,n.jsx)("h1",{children:"Work With Us"}),(0,n.jsxs)("div",{className:a().workMenu,children:[(0,n.jsx)("h2",{children:"Available Positions"}),(0,n.jsx)("ul",{children:r.map((e,r)=>(0,n.jsx)("li",{children:e},r))})]})]}),(0,n.jsx)("div",{className:a().workForm,children:(0,n.jsxs)("form",{action:"#",onSubmit:g,children:[(0,n.jsxs)("div",{className:a().inputInfos,children:[(0,n.jsx)(u.Z,{error:m.position,required:!0,changeHandler:h,type:"text",inputMode:"text",name:"position",className:a().inputPosition,placeholder:"Position Applying For"}),(0,n.jsx)(u.Z,{error:m.firstName,required:!0,changeHandler:h,type:"text",inputMode:"text",name:"firstName",placeholder:"First Name",className:a().inputsWork}),(0,n.jsx)(u.Z,{error:m.lastName,required:!0,changeHandler:h,type:"text",inputMode:"text",name:"lastName",placeholder:"Last Name",className:a().inputsWork}),(0,n.jsx)(u.Z,{error:m.email,required:!0,changeHandler:h,type:"email",inputMode:"email",name:"email",placeholder:"Email",className:a().inputsWork}),(0,n.jsx)(u.Z,{error:m.phone,required:!0,changeHandler:h,type:"tel",inputMode:"tel",name:"phone",placeholder:"Phone",className:a().inputsWork})]}),(0,n.jsxs)("div",{className:a().inputComment,children:[(0,n.jsx)(p,{label:"Upload Your Resume",maxFileSize:25600,allowedFileExt:["pdf"],name:"resumeFile",changeHandler:h,error:m.resumeFile}),(0,n.jsx)(_.Z,{required:!0,error:m.resumeText,label:"Or Copy and Paste Your Resume Bellow",className:a().commentTextarea,name:"resumeText",changeHandler:h,autoResize:!1})]}),(0,n.jsx)("div",{className:a().buttonWrapper,children:(0,n.jsx)("button",{className:a().workSubmit,children:"Submit"})})]})})]})};var h=x},7611:function(e,r,t){"use strict";function n(e,r){let t={};for(let n in e)r.includes(n)&&!e[n]&&(t[n]="Field Required");return console.log("Field Required"),t}t.d(r,{Z:function(){return n}})},7038:function(e){e.exports={file:"file-input_file__czrtH",fileWrapper:"file-input_fileWrapper__yYPhh",main:"file-input_main__CCU4x",errorMessage:"file-input_errorMessage__L_wbc",label:"file-input_label__2_XuP",inputError:"file-input_inputError__1zhly"}},8892:function(e){e.exports={inputError:"input_inputError__f3mw5",errorMessage:"input_errorMessage__MEu_K",inputWrapper:"input_inputWrapper__Hc7oy",input:"input_input__uGeT_"}},5625:function(e){e.exports={formComment:"textarea_formComment__Q8jXk",inputError:"textarea_inputError__vIM_t",errorMessage:"textarea_errorMessage__FNo52"}},5536:function(e){e.exports={work:"work_work__eebNj",workInfo:"work_workInfo__yewi9",workMenu:"work_workMenu__Rvla1",workForm:"work_workForm__cU5Ks",inputInfos:"work_inputInfos__Jeh49",inputsWork:"work_inputsWork__9S0F2",inputPosition:"work_inputPosition__IyzZa",inputComment:"work_inputComment__YKKr_",buttonWrapper:"work_buttonWrapper__hp_ZE",workSubmit:"work_workSubmit__ev7d4",commentTextarea:"work_commentTextarea__rkxRz"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8953)}),_N_E=e.O()}]);