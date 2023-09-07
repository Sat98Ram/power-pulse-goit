import{u as t,j as s,m as l,N as u}from"./index-53f86240.js";import{u as d}from"./formik.esm-15881896.js";import{c as m,a as r}from"./index.esm-5c620dda.js";import{s as a}from"./symbol-defs-a3dbf2d5.js";import{S as h}from"./SignBtn-4b8907ef.js";import{C as _}from"./Container-35e74745.js";const g="_signInBtn_1cauu_9",p="_singin_1cauu_61",x="_signin__input_1cauu_67",j="_errorMessage_1cauu_125",f="_errorIcon_1cauu_145",v="_successMessage_1cauu_155",N="_successIcon_1cauu_175",n={signInBtn:g,singin:p,signin__input:x,errorMessage:j,errorIcon:f,successMessage:v,successIcon:N},w=m({email:r().email("Invalid email address").required("Please enter your email").matches(/^[\w.-]+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,"Enter valid email"),password:r().matches(/^(?=.*[a-zA-Z]{6})(?=.*\d)[a-zA-Z\d]{7}$/,"Should contain 6 symbols and at least 1 number").required("Please enter your password")}),I=()=>{const i=t(),e=d({initialValues:{email:"",password:""},validationSchema:w,onSubmit:o=>{i(l(o))}});return s.jsxs("form",{className:n.signin,onSubmit:e.handleSubmit,children:[s.jsx("input",{type:"email",name:"email",placeholder:"E-mail",autoComplete:"username",className:n.signin__input,onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.email}),e.touched.email?e.errors.email?s.jsxs("div",{className:n.errorMessage,children:[s.jsx("svg",{className:n.errorIcon,children:s.jsx("use",{href:a+"#checkbox-circle-fill-icon",width:"16",height:"16"})}),e.errors.email]}):s.jsxs("div",{className:n.successMessage,children:[s.jsx("svg",{className:n.successIcon,children:s.jsx("use",{href:a+"#checkbox-circle-fill-icon",width:"16",height:"16"})}),"Success email"]}):null,s.jsx("input",{type:"password",name:"password",placeholder:"Password",autoComplete:"new-password",className:n.signin__input,onChange:e.handleChange,onBlur:e.handleBlur,value:e.values.password}),e.touched.password?e.errors.password?s.jsxs("div",{className:n.errorMessage,children:[s.jsx("svg",{className:n.errorIcon,children:s.jsx("use",{href:a+"#checkbox-circle-fill-icon",width:"16",height:"16"})}),e.errors.password]}):s.jsxs("div",{className:n.successMessage,children:[s.jsx("svg",{className:n.successIcon,children:s.jsx("use",{href:a+"#checkbox-circle-fill-icon",width:"16",height:"16"})}),"Success password"]}):null,s.jsx(h,{text:"Sign In",type:"submit",className:n.signInBtn})]})},b="_backGround_1nari_1",S="_screen_1nari_23",k="_screen__content_1nari_45",M="_enterText_1nari_91",B="_noaccount_1nari_119",c={backGround:b,screen:S,screen__content:k,enterText:M,noaccount:B},P=()=>s.jsx("section",{className:c.backGround,children:s.jsx(_,{children:s.jsx("div",{className:c.screen,children:s.jsxs("div",{className:c.screen__content,children:[s.jsx("h2",{children:"Sign in"}),s.jsx("p",{className:c.enterText,children:"Please enter your credentials to login to the platform:"}),s.jsx(I,{}),s.jsxs("p",{className:c.noaccount,children:["Don't have an account?",s.jsx(u,{to:"/signup",children:" Sign Up"})]})]})})})});export{P as SignIn,P as default};
