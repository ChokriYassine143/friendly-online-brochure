
import React from 'react';

const Map = () => {
  return (
    <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31317837.708851542!2d-18.55131872992743!3d32.81848641177864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2stn!4v1745490216285!5m2!1sfr!2stn" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full"
      />
    </div>
  );
};

export default Map;
