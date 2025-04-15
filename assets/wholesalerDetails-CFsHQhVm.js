import{J as p,L as g,I as b,N as A,K as y,j as e,C as w,T as t}from"./index-BnVcYjFk.js";import{C as I}from"./CustomTable-BSUJSD1d.js";/**
 * @license @tabler/icons-react v3.31.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var k=p("outline","arrow-narrow-right","IconArrowNarrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M15 16l4 -4",key:"svg-1"}],["path",{d:"M15 8l4 4",key:"svg-2"}]]);const T=[{key:"InvoiceNumber",label:"INVOICE_NUMBER"},{key:"CreatedDate",label:"CREATED_DATE"},{key:"WholeSalerName",label:"WHOLE_SLAER_NAME"},{key:"TotalAmount",label:"TOTAL_BILL"},{key:"PaymentAmount",label:"PAID_AMOUNT"},{key:"ProfitMargin",label:"YOUR_PROFIT"}];function O(){var x;const{id:m}=g(),c=b(),[d]=A(),h=(x=d.get("phoneNumber"))==null?void 0:x.trim(),u=d.get("wholesalerName")??"N/A",{data:l,isLoading:f}=y({pageNumber:1,pageSize:10,itemId:"",wholesalerId:m??""}),s=(l==null?void 0:l.Data)||[],N=async a=>{c(`/invoice/details/${a.ItemId}`)},o=s.reduce((a,r)=>a+(r.TotalAmount||0),0),n=s.reduce((a,r)=>a+(r.PaymentAmount||0),0),i=s.reduce((a,r)=>a+(r.ProfitMargin||0),0),v=()=>{const a=`sms:+${h}?body=${encodeURIComponent("You have due amount of: "+(o-n)+" tk, please pay it as soon as possible.")}`;console.log(a),window.location.href=a},j=()=>{c("/invoice/add/new?isUpdate=false")};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"w-full",children:[e.jsx(w,{onClick:()=>j(),className:"fixed bottom-4 right-4 ml-4 my-3 cursor-pointer",text:"ADD_INVOICE",variant:"primary"}),e.jsxs("div",{className:" mx-auto p-6 bg-white shadow-lg rounded-xl mt-10",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-800 border-b pb-3",children:"Wholesaler Details"}),e.jsxs("div",{className:"mt-4 space-y-2",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"H6",content:"WHOLESALER_NAME"}),e.jsx(t,{className:"text-bold !text-green ",variant:"Body1",content:": "+u})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"H6",content:"TOTAL_BILL"}),e.jsx(t,{className:"text-bold text-green",variant:"Body1",content:": "+o+" tk"})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"H6",content:"TOTAL_PAID_AMOUNT"}),e.jsx(t,{className:"text-bold text-green",variant:"Body1",content:": "+n+" tk"})]}),e.jsxs("div",{className:"flex flex-row",children:[e.jsx(t,{variant:"H6",content:"TOTAL_DUE_AMOUNT"}),":",o<=n?e.jsx(t,{className:"!text-green text-bold",variant:"Body1",content:o-n+" tk"}):e.jsx(t,{className:"!text-red text-bold",variant:"Body1",content:" "+(o-n)+" tk"}),o>n&&e.jsxs("div",{className:"pl-3 cursor-pointer flex flex-row",onClick:v,children:[e.jsx(t,{content:"SEND_A_MESSAGE"}),e.jsx("div",{className:"pl-2 pt-[3px]",children:e.jsx(k,{size:20})})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"H6",content:"YOUR_PROFIT"}),":",i>=0?e.jsx(t,{className:"!text-green text-bold",variant:"Body1",content:i+" tk"}):e.jsx(t,{className:"!text-red text-bold",variant:"Body1",content:" "+i+" tk"})]}),s&&(s==null?void 0:s.length)>0&&e.jsx("div",{className:"p-10 w-full",children:e.jsx(I,{isRowClickable:!0,handleRowClick:N,columns:T,data:s||[],rowsPerPage:10})})]})]})]})})}export{O as default};
