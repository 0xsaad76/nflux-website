import React from 'react';

const TermsAndConditions = () => {
  return (
    <div style={{ 
      backgroundColor: '#000', 
      color: '#f5f5f5', 
      minHeight: '100vh', 
      padding: '3rem', 
      fontFamily: 'Segoe UI, sans-serif' 
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 className='text-white font-bold text-[1.6rem] border-b border-gray-700' style={{  marginBottom: '1rem' }}>Terms & Conditions</h1>

        <section style={{ marginBottom: '2rem' }}>
          <p>
            By accessing <a href="mailto:info@nfluzmedia.com" style={{ color: '#00bcd4' }}>info@nfluzmedia.com</a>, you agree that you are of the permissible age to access and use the services and products mentioned on this site.
          </p>
          <p>
            You also agree not to copy, publish, reprint, or misuse any of the information or content mentioned on our site.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 className='text-gray-200 font-bold text-[1.1rem]' >Changes to Services & Pricing</h2>
          <p>
            We reserve the right to revise the prices of our products and services without prior notice. Similarly, any particular service or product, partially or wholly, can be discontinued at any given point in time, without any prior information.
          </p>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 className='text-gray-200 font-bold text-[1.1rem]'>Third-Party Links</h2>
          <p>
            Our site might feature third-party links to facilitate access to relevant information, content, products, and services. However, we are not liable for the quality of content, information, products, or services featured on such sites. You will use such external links and sites solely at your own responsibility.
          </p>
          <p>
            For all external links mentioned on our site, we hold zero responsibility for any updates or modifications made by third parties to their site, information, products, or services.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;