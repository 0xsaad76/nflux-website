import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={{ 
      backgroundColor: '#000', 
      color: '#f5f5f5', 
      minHeight: '100vh', 
      padding: '3rem', 
      fontFamily: 'Segoe UI, sans-serif' 
    }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 className='text-white font-bold text-[1.6rem] border-b border-gray-800' style={{ color: 'white', marginBottom: '1rem' }}>Privacy Policy</h1>
        <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
          Nfluzmedia collects some Personal Data from its Users. We respect the privacy of our users and are committed to processing and protecting your Personal Information lawfully.
        </p>

        <section style={{ marginBottom: '2rem' }}>
          <h2 className='text-gray-100 font-bold text-[1.2rem]'>The Use of Collected Data</h2>
          <p>
            The Data concerning the User is collected to allow Nfluzmedia to provide its services, as well as for the following purposes:
          </p>
          <ol className="mt-[1rem] pl-[1.5rem] text-white">
            <li>1. Registration and authentication</li>
            <li>2. Remarketing and Behavioral Targeting</li>
            <li>3. Handling payments</li>
            <li>4. Analytics</li>
            <li>5. User database management</li>
            <li>6. Contacting the User</li>
            <li>7. Managing email addresses and sending messages</li>
            <li>8. Advertising</li>
            <li>9. Infrastructure monitoring</li>
            <li>10. Social features</li>
            <li>11. Hosting and backend as a service</li>
            <li>12. Access to third party services’ accounts</li>
          </ol>
        </section>

        <section style={{ marginBottom: '2rem' }}>
          <h2 className='text-white font-bold text-[1.6rem]' >Detailed Information</h2>
          <h3 className='text-gray-300 font-bold text-[1.1rem]'>Access to Third Party Services’ Accounts</h3>
          <p>
            These services allow Nfluzmedia to access Data from your account on a third party service and perform actions with it. These services are not activated automatically, but require explicit authorization by the User.
          </p>

          <h3 className='text-gray-300 font-bold text-[1.1rem]' >Access to Google Account Services</h3>
          <p>
            When you use Google services, you trust Google with your information. You can manage your privacy at <a href="https://myaccount.google.com" style={{ color: '#00bcd4' }}>Google My Account</a>.
          </p>

          <h3 className='text-gray-300 font-bold text-[1.1rem]'>Advertising</h3>
          <p>
            These services allow User Data to be utilized for advertising communication purposes displayed in the form of banners and other advertisements on Nfluzmedia, possibly based on User interests.
          </p>

          <h4 className='text-gray-300 font-bold text-[1.1rem]'>Google AdSense (Google)</h4>
          <p>
            Google AdSense uses the “Doubleclick” Cookie, which tracks use of Nfluzmedia and User behavior concerning ads, products and services offered.
          </p>
          <p>
            Users may disable all Doubleclick Cookies by visiting <a href="https://www.google.com/settings/ads/onweb/optout?hl=en" style={{ color: '#00bcd4' }}>Google Ad Settings</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;