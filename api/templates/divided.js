export const generateDivided = ({ fullName, jobTitle, company, email, phone, address }) => `
<!DOCTYPE html>
<html>
  <head><title>Wise stamp</title></head>

  <style>
   .full-name {
     color: #506f95;
     font-weight: 600;
     font-size: 24px;
   }
   .title-and-company {
     padding: 4px 0;
     font-weight: 600;
     font-size: 18px;
   }
   .other-info {
     padding: 16px 0
   }
   .divider {
     height: 2px;
     width: 50%;
     background-color :#98aac0;
   }
   .other-info-block {
     padding: 16px 0
   }
   .common-property {
     color: #4f7eb9;
     font-weight: 600;
     padding-right: 4px;
   }
   .phone-and-email{
     display: flex;
   }
   .email-block {
     padding: 0 16px;
   }
   .adress-block {
    padding: 8px 0;
   }
   .data-value {
     display:flex
   }
  </style>

  <body>
    <div class="full-name">${fullName}</div>
    <div class="title-and-company">${jobTitle}, ${company}</div>

    <div class="other-info">
     <div class="divider"></div>
     <div class="other-info-block">
      <div class="phone-and-email">
       <div class="data-value">
        <div class="common-property">Phone</div>
        <div>${phone}</div>
       </div>
       <div class="data-value email-block">
        <div class="common-property">Email</div>
        <div>${email}</div>
       </div>
      </div>
      <div class="data-value adress-block">
        <div class="common-property">Address</div>
        <div>${address}</div>
      </div>
     </div>
     <div class="divider"></div>
    </div>
  </body>
</html
`;
