export const generatePlain = ({ fullName, jobTitle, company, email, phone, address }) => `
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
     opacity: 0.6;
   }
   .other-info {
     padding: 16px 0
   }
   .common-property {
     color: #4f7eb9;
     font-weight: 600;
     padding: 4px 0;
     padding-right: 4px;
   }
   .data-value {
     display:flex;
     align-items: center;
   }
  </style>

  <body>
    <div class="full-name">${fullName}</div>
    <div class="title-and-company"><div>${jobTitle},</div> <div>${company}</div></div>

    <div class="other-info">
       <div class="data-value">
        <div class="common-property">Phone</div>
        <div>${phone}</div>
       </div>
       <div class="data-value">
        <div class="common-property">Email</div>
        <div>${email}</div>
       </div>
      <div class="data-value">
        <div class="common-property">Address</div>
        <div>${address}</div>
      </div>
    </div>
  </body>
</html
`;
