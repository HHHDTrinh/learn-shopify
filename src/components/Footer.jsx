const Footer = () => {
  return (
    <>
      <div id='shopify-section-footer' className='shopify-section'>
        <footer
          className='jg-footer bg-footer-background text-footer-text'
          data-section-id='footer'
          data-section-type='footer'
        >
          <section className='py-theme bg-secondary-background text-secondary-text border-t-grid border-grid-color'>
            <div className='section-x-padding justify-center lg:flex lg:items-center lg:justify-between'>
              <div className=' text-base '>
                <h2 className='font-heading text-sm' htmlFor='Email'>
                  BE THE FIRST TO KNOW
                </h2>
              </div>
              <div className='mt-theme-half lg:mt-0'>
                <form
                  method='post'
                  action='#'
                  id='contact_form'
                  acceptCharset='UTF-8'
                  className='contact-form'
                >
                  <input
                    type='hidden'
                    name='form_type'
                    defaultValue='customer'
                  />
                  <input type='hidden' name='utf8' defaultValue='✓' />
                  <input
                    type='hidden'
                    name='contact[tags]'
                    defaultValue='newsletter'
                  />
                  <div className='items-end lg:ml-4 lg:flex'>
                    <label className='visually-hidden' htmlFor='Email-footer'>
                      Email address
                    </label>
                    <input
                      type='email'
                      className='font-body border-b-text block w-full border-current bg-transparent pb-1 placeholder-current'
                      name='contact[email]'
                      id='Email-footer'
                      defaultValue=''
                      placeholder='Email address'
                      autoCorrect='off'
                      autoCapitalize='off'
                    />
                    <button
                      className='font-body hover:text-secondary-accent border-b-text border-secondary-text hover:border-secondary-accent mt-2 inline-flex items-center justify-center pb-1 align-top  lg:ml-2 lg:mt-0'
                      type='submit'
                      name='commit'
                      id='Subscribe'
                    >
                      <span className=' whitespace-nowrap'>Subscribe</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
          <div className='border-t-grid border-grid-color'>
            <div className='footer_mobile_grid bg-border grid lg:grid-cols-10 '>
              <div className='section-x-padding py-theme bg-footer-background text-footer-text lg:col-span-2'>
                <div className='h1'>
                  <a href='/' className='footer-logo-image break-words'>
                    <img
                      src='//getjoggy.com/cdn/shop/files/Joggy_Wordmark_RGB_White-01_170px_250x.png?v=1648096080'
                      srcSet='//getjoggy.com/cdn/shop/files/Joggy_Wordmark_RGB_White-01_170px_250x.png?v=1648096080 1x, //getjoggy.com/cdn/shop/files/Joggy_Wordmark_RGB_White-01_170px_250x@2x.png?v=1648096080 2x, //getjoggy.com/cdn/shop/files/Joggy_Wordmark_RGB_White-01_170px_250x@3x.png?v=1648096080 3x'
                      alt='Joggy'
                    />
                  </a>
                </div>
              </div>
              <div className='lg:hidden'>
                <span>&nbsp;</span>
              </div>

              <div className='section-x-padding py-theme bg-footer-background text-footer-text lg:col-span-2 '>
                <div className='inline-block text-left'>
                  <h2 className='font-heading mb-4 text-base'>Shop</h2>

                  <ul className='list-none space-y-1'>
                    <li>
                      <a href='#' className='hover:text-footer-accent'>
                        Beverage
                      </a>
                    </li>

                    <li>
                      <a href='#' className='hover:text-footer-accent'>
                        Drops
                      </a>
                    </li>

                    <li>
                      <a href='#' className='hover:text-footer-accent'>
                        Gummies
                      </a>
                    </li>

                    <li>
                      <a href='#' className='hover:text-footer-accent'>
                        Topical
                      </a>
                    </li>

                    <li>
                      <a href='#' className='hover:text-footer-accent'>
                        Kits
                      </a>
                    </li>

                    <li>
                      <a href='#' className='hover:text-footer-accent'>
                        Merch
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='section-x-padding py-theme bg-footer-background text-footer-text lg:col-span-2 '>
                <div className='inline-block text-left'>
                  <h2 className='font-heading mb-4 text-base'>About</h2>

                  <ul className='list-none space-y-1'>
                    <li>
                      <a href='#' className='hover:text-footer-accent'>
                        About Us
                      </a>
                    </li>

                    <li>
                      <a href='#' className='hover:text-footer-accent'>
                        Sustainability
                      </a>
                    </li>

                    <li>
                      <a href='#' className='hover:text-footer-accent'>
                        Testing &amp; Transparency
                      </a>
                    </li>

                    <li>
                      <a href='#' className='hover:text-footer-accent'>
                        Ingredients
                      </a>
                    </li>

                    <li>
                      <a href='#' className='hover:text-footer-accent'>
                        Contact
                      </a>
                    </li>

                    <li>
                      <a href='#' className='hover:text-footer-accent'>
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='section-x-padding py-theme bg-footer-background text-footer-text lg:col-span-2 '>
                <div className='inline-block text-left'>
                  <h2 className='font-heading mb-4 text-base'>More</h2>

                  <ul className='list-none space-y-1'>
                    <li>
                      <a href='#' className='hover:text-footer-accent'>
                        Give $10, Get $10
                      </a>
                    </li>

                    <li>
                      <a href='#' className='hover:text-footer-accent'>
                        Affiliate
                      </a>
                    </li>

                    <li>
                      <a href='#' className='hover:text-footer-accent'>
                        Spotify
                      </a>
                    </li>

                    <li>
                      <a href='#' className='hover:text-footer-accent'>
                        Careers
                      </a>
                    </li>

                    <li>
                      <a href='#' className='hover:text-footer-accent'>
                        Terms &amp; Conditions
                      </a>
                    </li>

                    <li>
                      <a href='#' className='hover:text-footer-accent'>
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div
                style={{
                  position: 'relative',
                }}
                className='mobile_footer_logos section-x-padding py-theme bg-footer-background text-footer-text lg:col-span-2 '
              >
                <div className='inline-block text-left'>
                  <h2 className='font-heading mb-4 text-base'>
                    FOLLOW US @GETJOGGY
                  </h2>

                  <ul className='-ml-2'>
                    <li className='mb-2 ml-2 inline-block'>
                      <a
                        className='hover:text-footer-accent fill-current'
                        href='https://twitter.com/getjoggy'
                        target='_blank'
                      >
                        <span
                          className='inline-block h-5 w-5'
                          aria-hidden='true'
                        >
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            role='presentation'
                            className='icon icon-twitter fill-current'
                            viewBox='0 0 20 20'
                          >
                            <path d='M19.551 4.208q-.815 1.202-1.956 2.038 0 .082.02.255t.02.255q0 1.589-.469 3.179t-1.426 3.036-2.272 2.567-3.158 1.793-3.963.672q-3.301 0-6.031-1.773.571.041.937.041 2.751 0 4.911-1.671-1.284-.02-2.292-.784T2.456 11.85q.346.082.754.082.55 0 1.039-.163-1.365-.285-2.262-1.365T1.09 7.918v-.041q.774.408 1.773.448-.795-.53-1.263-1.396t-.469-1.864q0-1.019.509-1.997 1.487 1.854 3.596 2.924T9.81 7.184q-.143-.509-.143-.897 0-1.63 1.161-2.781t2.832-1.151q.815 0 1.569.326t1.284.917q1.345-.265 2.506-.958-.428 1.386-1.732 2.18 1.243-.163 2.262-.611z'></path>
                          </svg>
                        </span>
                        <span className='visually-hidden'>Twitter</span>
                      </a>
                    </li>

                    <li className='mb-2 ml-2 inline-block'>
                      <a
                        className='hover:text-footer-accent fill-current'
                        href='https://www.instagram.com/getjoggy'
                        target='_blank'
                      >
                        <span
                          className='inline-block h-5 w-5'
                          aria-hidden='true'
                        >
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            role='presentation'
                            className='icon icon-instagram fill-current'
                            viewBox='0 0 512 512'
                          >
                            <path d='M256 49.5c67.3 0 75.2.3 101.8 1.5 24.6 1.1 37.9 5.2 46.8 8.7 11.8 4.6 20.2 10 29 18.8s14.3 17.2 18.8 29c3.4 8.9 7.6 22.2 8.7 46.8 1.2 26.6 1.5 34.5 1.5 101.8s-.3 75.2-1.5 101.8c-1.1 24.6-5.2 37.9-8.7 46.8-4.6 11.8-10 20.2-18.8 29s-17.2 14.3-29 18.8c-8.9 3.4-22.2 7.6-46.8 8.7-26.6 1.2-34.5 1.5-101.8 1.5s-75.2-.3-101.8-1.5c-24.6-1.1-37.9-5.2-46.8-8.7-11.8-4.6-20.2-10-29-18.8s-14.3-17.2-18.8-29c-3.4-8.9-7.6-22.2-8.7-46.8-1.2-26.6-1.5-34.5-1.5-101.8s.3-75.2 1.5-101.8c1.1-24.6 5.2-37.9 8.7-46.8 4.6-11.8 10-20.2 18.8-29s17.2-14.3 29-18.8c8.9-3.4 22.2-7.6 46.8-8.7 26.6-1.3 34.5-1.5 101.8-1.5m0-45.4c-68.4 0-77 .3-103.9 1.5C125.3 6.8 107 11.1 91 17.3c-16.6 6.4-30.6 15.1-44.6 29.1-14 14-22.6 28.1-29.1 44.6-6.2 16-10.5 34.3-11.7 61.2C4.4 179 4.1 187.6 4.1 256s.3 77 1.5 103.9c1.2 26.8 5.5 45.1 11.7 61.2 6.4 16.6 15.1 30.6 29.1 44.6 14 14 28.1 22.6 44.6 29.1 16 6.2 34.3 10.5 61.2 11.7 26.9 1.2 35.4 1.5 103.9 1.5s77-.3 103.9-1.5c26.8-1.2 45.1-5.5 61.2-11.7 16.6-6.4 30.6-15.1 44.6-29.1 14-14 22.6-28.1 29.1-44.6 6.2-16 10.5-34.3 11.7-61.2 1.2-26.9 1.5-35.4 1.5-103.9s-.3-77-1.5-103.9c-1.2-26.8-5.5-45.1-11.7-61.2-6.4-16.6-15.1-30.6-29.1-44.6-14-14-28.1-22.6-44.6-29.1-16-6.2-34.3-10.5-61.2-11.7-27-1.1-35.6-1.4-104-1.4z'></path>
                            <path d='M256 126.6c-71.4 0-129.4 57.9-129.4 129.4s58 129.4 129.4 129.4 129.4-58 129.4-129.4-58-129.4-129.4-129.4zm0 213.4c-46.4 0-84-37.6-84-84s37.6-84 84-84 84 37.6 84 84-37.6 84-84 84z'></path>
                            <circle cx='390.5' cy='121.5' r='30.2'></circle>
                          </svg>
                        </span>
                        <span className='visually-hidden'>Instagram</span>
                      </a>
                    </li>

                    <li className='mb-2 ml-2 inline-block'>
                      <a
                        className='hover:text-footer-accent fill-current'
                        href='https://www.tiktok.com/@getjoggy'
                        target='_blank'
                      >
                        <span
                          className='inline-block h-5 w-5'
                          aria-hidden='true'
                        >
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            role='presentation'
                            className='icon icon-tiktok fill-current'
                            viewBox='0 0 48 48'
                          >
                            <path d='M45.733 20.815v-8.178c-3.83 0-6.752-1.022-8.639-3.009a12.814 12.814 0 01-3.066-8.12v-.59L26.296.73v33.217a7.2 7.2 0 11-4.665-8.078V17.95a15.32 15.32 0 00-2.448-.201A14.916 14.916 0 1034.1 32.665a15.204 15.204 0 00-.116-1.828V17.662a20.849 20.849 0 0011.75 3.153z'></path>
                          </svg>
                        </span>
                        <span className='visually-hidden'>TikTok</span>
                      </a>
                    </li>

                    <li className='mb-2 ml-2 inline-block'>
                      <a
                        className='hover:text-footer-accent fill-current'
                        href='mailto:hello@getjoggy.com'
                        target='_blank'
                      >
                        <span
                          className='inline-block h-5 w-5'
                          aria-hidden='true'
                        >
                          <svg
                            aria-hidden='true'
                            focusable='false'
                            role='presentation'
                            className='icon icon-email fill-current'
                            viewBox='0 0 24 24'
                          >
                            <path
                              fillRule='evenodd'
                              d='M21.6 2.4H2.4A2.397 2.397 0 00.012 4.8L0 19.2c0 1.32 1.08 2.4 2.4 2.4h19.2c1.32 0 2.4-1.08 2.4-2.4V4.8c0-1.32-1.08-2.4-2.4-2.4zm0 16.8H2.4v-12l9.6 6 9.6-6v12zM12 10.8l-9.6-6h19.2l-9.6 6z'
                            ></path>
                          </svg>
                        </span>
                        <span className='visually-hidden'>Email</span>
                      </a>
                    </li>
                  </ul>

                  <div id='footer-sante' valign='bottom'>
                    <img
                      src='https://cdn.shopify.com/s/files/1/0589/5225/3608/files/joggy-footer-sante-plasticneg-1.svg?v=1649293723'
                      style={{
                        paddingTop: '10px',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='border-t-grid border-grid-color'>
            <div className='section-x-padding py-theme lg:flex lg:flex-wrap lg:items-center lg:justify-between'>
              <div
                style={{
                  display: 'inline-block',
                  width: '20vw',
                }}
                className='mb-4 space-y-2 text-sm lg:mb-0 lg:flex-1'
              >
                <p>
                  © 2023,{' '}
                  <a href='/' title=''>
                    Joggy
                  </a>
                  . <br />
                </p>
              </div>
              <div id='footer-fda'>
                <p
                  style={{
                    fontSize: '.8rem',
                    border: '1px solid #fff',
                    padding: '8px',
                  }}
                >
                  *These statements have not been evaluated by the Food and Drug
                  Administration. This product is not intended to diagnose,
                  treat, cure, or prevent any disease.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
