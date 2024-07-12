import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';


const QRCodeGenerator = ({ value }) => {
  return (
    <div>
      <QRCodeCanvas size={72} bgColor='transparent' fgColor='white' value={value} />
    </div>
  );
};

export default QRCodeGenerator;
