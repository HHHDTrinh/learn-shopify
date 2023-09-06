import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='section-x-padding absolute left-0 top-0 z-10 flex w-full items-center justify-between py-2'>
      <Link href='/'>
        <svg
          x='0px'
          y='0px'
          viewBox='0 0 873 304.3'
          style={{
            width: '180px',
            maxWidth: '180px',
          }}
        >
          <path
            className='fill-black text-black'
            d='M687.5,223.9c0.1-1.8,0.2-3.5,0.2-5.3V82.2l34.9,141.6H687.5z M602,160.6c-4.4,0-7.9-3.5-7.9-7.9
    c0-4.4,3.5-7.9,7.9-7.9c4.4,0,7.9,3.5,7.9,7.9c0,0,0,0,0,0c0.1,4.3-3.4,7.9-7.7,7.9C602.1,160.6,602.1,160.6,602,160.6 M517.4,223.9
    c0.1-1.8,0.2-3.5,0.2-5.3v-51c4.1,23,17.5,43.3,36.9,56.3H517.4z M431.9,160.6c-4.4,0-7.9-3.5-7.9-7.9c0-4.4,3.5-7.9,7.9-7.9
    c4.4,0,7.9,3.5,7.9,7.9c0,0,0,0,0,0c0.1,4.3-3.4,7.9-7.7,7.9C432,160.6,432,160.6,431.9,160.6 M262.4,160.6c-4.4,0-7.9-3.5-7.9-7.9
    c0-4.4,3.5-7.9,7.9-7.9c4.4,0,7.9,3.5,7.9,7.9c0,0,0,0,0,0c0.1,4.3-3.4,7.9-7.7,7.9C262.6,160.6,262.5,160.6,262.4,160.6
     M796.2,70.2L779,147l-17.4-76.8H625.4c-7.6-2.3-15.5-3.4-23.4-3.3c-42,0-77.3,30.7-84.4,70.8V70.2h-62.3
    c-7.6-2.3-15.5-3.4-23.4-3.3c-42.7,0-78.4,31.7-84.7,72.7c-6.3-41-42-72.7-84.7-72.7c-37.4,0.1-70.4,24.4-81.8,60V0H95.3v148
    c-0.1,2.7-2.4,4.8-5.2,4.7c-2.6-0.1-4.6-2.2-4.7-4.7v-24H0v24c0,49.4,40.5,90.3,90.3,90.3c42.6,0,78.5-30,87.9-69.6
    c7.6,39.5,42.5,69.6,84.2,69.6c42.7,0,78.4-31.7,84.7-72.7c3.7,23.8,17.2,44.9,37.3,58.2h-38.2c3,44.5,40.2,80.4,85.7,80.4
    c43.4,0,79.5-32.7,85-74.6c5.7,41.8,41.6,74.6,85.1,74.6c42,0,77.3-30.7,84.4-70.8V301h46.2c68.9,0,90.3-27,102.5-76.5L873,70.2
    H796.2z'
          ></path>
        </svg>
      </Link>
      <ul className='flex items-center justify-between gap-[15px] fill-white text-white'>
        <li className='ml-[1rem] flex self-stretch uppercase'>
          <Link href='#'>
            shop <span>+</span>
          </Link>
        </li>
        <li className='ml-[1rem] flex self-stretch uppercase'>
          <Link href='#'>
            about <span>+</span>
          </Link>
        </li>
        <li className='ml-[1rem] flex self-stretch uppercase'>
          <Link href='#'>JOIN JOGGY'S COMMUNITY</Link>
        </li>
        <li className='ml-[1rem] flex self-stretch uppercase'>
          <Link href='#'>
            <span className='my-auto inline-block h-5 w-5 align-top'>
              <svg
                aria-hidden='true'
                focusable='false'
                role='presentation'
                className='icon icon-account fill-current'
                viewBox='0 0 24 24'
              >
                <path
                  fillRule='evenodd'
                  d='M11.968 4A3.938 3.938 0 0115.9 7.933a3.938 3.938 0 01-3.933 3.933 3.938 3.938 0 01-3.934-3.933A3.938 3.938 0 0111.968 4m8.467 10.687c-1.216-1.228-2.796-1.951-4.7-2.174a5.925 5.925 0 002.166-4.58A5.94 5.94 0 0011.968 2a5.941 5.941 0 00-5.934 5.933c0 1.842.844 3.49 2.166 4.58-1.904.223-3.485.946-4.701 2.174-2.51 2.538-2.501 8.235-2.5 8.393l2-.02c0-.03.008-5.042 1.933-6.977 1.09-1.096 2.624-1.652 4.558-1.652H14.444c1.934 0 3.468.556 4.559 1.652 1.925 1.934 1.932 6.958 1.932 6.988l2 .018c.002-.157.012-5.864-2.5-8.402'
                ></path>
              </svg>
            </span>
          </Link>
        </li>
        <li className='ml-[1rem] flex self-stretch uppercase'>
          <button>
            <span className='my-auto inline-block h-5 w-5 align-top'>
              <svg
                aria-hidden='true'
                focusable='false'
                role='presentation'
                className='icon icon-search fill-current'
                viewBox='0 0 24 24'
              >
                <path
                  fillRule='evenodd'
                  d='M10.533 17.438a6.968 6.968 0 01-6.96-6.96 6.968 6.968 0 016.96-6.96 6.968 6.968 0 016.96 6.96 6.968 6.968 0 01-6.96 6.96zm6.949-1.314a8.917 8.917 0 002.01-5.646c0-4.941-4.02-8.96-8.96-8.96-4.94 0-8.96 4.019-8.96 8.96 0 4.94 4.02 8.96 8.96 8.96 2.082 0 3.996-.72 5.52-1.916l4.962 4.96 1.415-1.413-4.947-4.945z'
                ></path>
              </svg>
            </span>
          </button>
        </li>
        <li className='ml-[1rem] flex self-stretch uppercase'>
          <div className='relative my-auto align-top'>
            <span className='inline-block h-5 w-5 fill-current align-top'>
              <svg
                aria-hidden='true'
                focusable='false'
                role='presentation'
                className='fill-current'
                viewBox='0 0 24 24'
              >
                <path
                  fillRule='evenodd'
                  d='M3.458 20.504h17.085V8.072H3.457v12.432zm8.6-17.008c1.622 0 2.98 1.093 3.415 2.576H8.64c.436-1.483 1.794-2.576 3.417-2.576zm5.48 2.576c-.473-2.598-2.748-4.576-5.48-4.576-2.735 0-5.01 1.978-5.482 4.576H1.457v16.432h21.085V6.072h-5.004z'
                ></path>
              </svg>
            </span>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
