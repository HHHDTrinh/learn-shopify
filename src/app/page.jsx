'use client';
import { useEffect, useState } from 'react';
import { Accordion, AccordionItem } from '@szhsin/react-accordion';
import Link from 'next/link';
import { storefrontClient } from '@/helpers/shopify';
import { productsQuery } from '@/configs/graphql/query';
import { ModelContainer } from '@/components';
import { accordions } from '@/configs/data/home';

const Home = () => {
  const [products, setProducts] = useState([]);

  const handleModelPositions = (key) => {
    switch (key) {
      case 0:
        return [0, 0.5, 0];
      case 1:
        return [0, -1, 0];
      case 2:
        return [0, -1.5, 0];
      case 3:
        return [0, 1.4, -3];
      case 4:
        return [0, -3.5, 15];
      case 5:
        return [0, -0.5, -1];
      default:
        break;
    }
  };

  const handleModelScale = (key) => {
    switch (key) {
      case 0:
        return 1.25;
      case 1:
        return 20;
      case 2:
        return 85;
      default:
        return 1;
    }
  };

  const handleFormattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  useEffect(() => {
    const handleGetProducts = async () => {
      // const data = await storefrontClient.query({
      //   data: productsQuery,
      // });
      const data = {
        data: {
          products: {
            edges: [
              {
                node: {
                  id: 'gid://shopify/Product/8614494142758',
                  handle: 'orange-energy-drink',
                  description: 'Healthy energy drink made from fresh orange',
                  title: 'Orange Energy Drink',
                  totalInventory: 10,
                  availableForSale: true,
                  variants: {
                    edges: [
                      {
                        node: {
                          id: 'gid://shopify/ProductVariant/46508734316838',
                          title: 'Default Title',
                          quantityAvailable: 10,
                          priceV2: {
                            amount: '1.0',
                            currencyCode: 'USD',
                          },
                        },
                      },
                    ],
                  },
                  priceRange: {
                    maxVariantPrice: {
                      amount: '1.0',
                      currencyCode: 'USD',
                    },
                    minVariantPrice: {
                      amount: '1.0',
                      currencyCode: 'USD',
                    },
                  },
                  media: {
                    edges: [
                      {
                        node: {
                          alt: '',
                          mediaContentType: 'MODEL_3D',
                          sources: [
                            {
                              format: 'glb',
                              mimeType: 'model/gltf-binary',
                              url: 'https://model3d.shopifycdn.com/models/o/047ed83f942a5203/soda_can_2_.glb',
                            },
                            {
                              format: 'usdz',
                              mimeType: 'model/vnd.usdz+zip',
                              url: 'https://model3d.shopifycdn.com/models/o/9addb3765de0612b/soda_can_2_.usdz',
                            },
                          ],
                        },
                      },
                      {
                        node: {
                          alt: '',
                          mediaContentType: 'IMAGE',
                          id: 'gid://shopify/MediaImage/35293992354086',
                          image: {
                            altText: null,
                            url: 'https://cdn.shopify.com/s/files/1/0816/6627/7670/files/soda_can_orange.png?v=1694096440',
                          },
                        },
                      },
                    ],
                  },
                },
              },
              {
                node: {
                  id: 'gid://shopify/Product/8607411700006',
                  handle: 'wild-energy-drink',
                  description: 'Wild Fruit + Energy Drink = Healthy',
                  title: 'Wild Energy Drink',
                  totalInventory: 5,
                  availableForSale: true,
                  variants: {
                    edges: [
                      {
                        node: {
                          id: 'gid://shopify/ProductVariant/46473521725734',
                          title: 'Default Title',
                          quantityAvailable: 5,
                          priceV2: {
                            amount: '1.5',
                            currencyCode: 'USD',
                          },
                        },
                      },
                    ],
                  },
                  priceRange: {
                    maxVariantPrice: {
                      amount: '1.5',
                      currencyCode: 'USD',
                    },
                    minVariantPrice: {
                      amount: '1.5',
                      currencyCode: 'USD',
                    },
                  },
                  media: {
                    edges: [
                      {
                        node: {
                          alt: '',
                          mediaContentType: 'MODEL_3D',
                          sources: [
                            {
                              format: 'glb',
                              mimeType: 'model/gltf-binary',
                              url: 'https://model3d.shopifycdn.com/models/o/66fd784f68b900a8/soda_can_1_.glb',
                            },
                            {
                              format: 'usdz',
                              mimeType: 'model/vnd.usdz+zip',
                              url: 'https://model3d.shopifycdn.com/models/o/8c4a9451dfb818b4/soda_can_1_.usdz',
                            },
                          ],
                        },
                      },
                      {
                        node: {
                          alt: '',
                          mediaContentType: 'IMAGE',
                          id: 'gid://shopify/MediaImage/35239312097574',
                          image: {
                            altText: null,
                            url: 'https://cdn.shopify.com/s/files/1/0816/6627/7670/files/soda_can_purple.png?v=1693747317',
                          },
                        },
                      },
                    ],
                  },
                },
              },
              {
                node: {
                  id: 'gid://shopify/Product/8607406948646',
                  handle: 'ats-energy-drink',
                  description: 'ATS - Authentic Taste of Soda',
                  title: 'ATS Energy Drink',
                  totalInventory: 9,
                  availableForSale: true,
                  variants: {
                    edges: [
                      {
                        node: {
                          id: 'gid://shopify/ProductVariant/46473500918054',
                          title: 'Default Title',
                          quantityAvailable: 9,
                          priceV2: {
                            amount: '1.25',
                            currencyCode: 'USD',
                          },
                        },
                      },
                    ],
                  },
                  priceRange: {
                    maxVariantPrice: {
                      amount: '1.25',
                      currencyCode: 'USD',
                    },
                    minVariantPrice: {
                      amount: '1.25',
                      currencyCode: 'USD',
                    },
                  },
                  media: {
                    edges: [
                      {
                        node: {
                          alt: '',
                          mediaContentType: 'MODEL_3D',
                          sources: [
                            {
                              format: 'glb',
                              mimeType: 'model/gltf-binary',
                              url: 'https://model3d.shopifycdn.com/models/o/95516078540807f6/soda_can.glb',
                            },
                            {
                              format: 'usdz',
                              mimeType: 'model/vnd.usdz+zip',
                              url: 'https://model3d.shopifycdn.com/models/o/f65b5d2782846630/soda_can.usdz',
                            },
                          ],
                        },
                      },
                      {
                        node: {
                          alt: '',
                          mediaContentType: 'IMAGE',
                          id: 'gid://shopify/MediaImage/35239307477286',
                          image: {
                            altText: null,
                            url: 'https://cdn.shopify.com/s/files/1/0816/6627/7670/files/soda_can_x.png?v=1693747218',
                          },
                        },
                      },
                    ],
                  },
                },
              },
              {
                node: {
                  id: 'gid://shopify/Product/8607401771302',
                  handle: 'origin-energy-drink',
                  description: 'Energy Drink + Original Tatse = Perfect',
                  title: 'Origin Energy Drink',
                  totalInventory: 3,
                  availableForSale: true,
                  variants: {
                    edges: [
                      {
                        node: {
                          id: 'gid://shopify/ProductVariant/46473477849382',
                          title: 'Default Title',
                          quantityAvailable: 3,
                          priceV2: {
                            amount: '1.5',
                            currencyCode: 'USD',
                          },
                        },
                      },
                    ],
                  },
                  priceRange: {
                    maxVariantPrice: {
                      amount: '1.5',
                      currencyCode: 'USD',
                    },
                    minVariantPrice: {
                      amount: '1.5',
                      currencyCode: 'USD',
                    },
                  },
                  media: {
                    edges: [
                      {
                        node: {
                          alt: '',
                          mediaContentType: 'MODEL_3D',
                          sources: [
                            {
                              format: 'glb',
                              mimeType: 'model/gltf-binary',
                              url: 'https://model3d.shopifycdn.com/models/o/96ef8a2be4c4314c/high_poly_soda_can.glb',
                            },
                            {
                              format: 'usdz',
                              mimeType: 'model/vnd.usdz+zip',
                              url: 'https://model3d.shopifycdn.com/models/o/c0982b5662f5bc7a/high_poly_soda_can.usdz',
                            },
                          ],
                        },
                      },
                      {
                        node: {
                          alt: '',
                          mediaContentType: 'IMAGE',
                          id: 'gid://shopify/MediaImage/35239329825062',
                          image: {
                            altText: null,
                            url: 'https://cdn.shopify.com/s/files/1/0816/6627/7670/files/soda_can_original.png?v=1693747632',
                          },
                        },
                      },
                    ],
                  },
                },
              },
              {
                node: {
                  id: 'gid://shopify/Product/8607395643686',
                  handle: 'diet-soda',
                  description: 'Diet + Soda = Best Match',
                  title: 'Diet Soda',
                  totalInventory: 5,
                  availableForSale: true,
                  variants: {
                    edges: [
                      {
                        node: {
                          id: 'gid://shopify/ProductVariant/46473456681254',
                          title: 'Default Title',
                          quantityAvailable: 5,
                          priceV2: {
                            amount: '2.0',
                            currencyCode: 'USD',
                          },
                        },
                      },
                    ],
                  },
                  priceRange: {
                    maxVariantPrice: {
                      amount: '2.0',
                      currencyCode: 'USD',
                    },
                    minVariantPrice: {
                      amount: '2.0',
                      currencyCode: 'USD',
                    },
                  },
                  media: {
                    edges: [
                      {
                        node: {
                          alt: '',
                          mediaContentType: 'MODEL_3D',
                          sources: [
                            {
                              format: 'glb',
                              mimeType: 'model/gltf-binary',
                              url: 'https://model3d.shopifycdn.com/models/o/d6221bba14b1de2d/diet_soda.glb',
                            },
                            {
                              format: 'usdz',
                              mimeType: 'model/vnd.usdz+zip',
                              url: 'https://model3d.shopifycdn.com/models/o/4929f64a55cb620a/diet_soda.usdz',
                            },
                          ],
                        },
                      },
                      {
                        node: {
                          alt: '',
                          mediaContentType: 'IMAGE',
                          id: 'gid://shopify/MediaImage/35239331758374',
                          image: {
                            altText: null,
                            url: 'https://cdn.shopify.com/s/files/1/0816/6627/7670/files/soda_can_diet.png?v=1693747670',
                          },
                        },
                      },
                    ],
                  },
                },
              },
              {
                node: {
                  id: 'gid://shopify/Product/8607371952422',
                  handle: 'bunny-energy-drink',
                  description: 'Bunny Bunny Funny Funny',
                  title: 'Bunny Energy Drink',
                  totalInventory: 7,
                  availableForSale: true,
                  variants: {
                    edges: [
                      {
                        node: {
                          id: 'gid://shopify/ProductVariant/46473368699174',
                          title: 'Default Title',
                          quantityAvailable: 7,
                          priceV2: {
                            amount: '1.25',
                            currencyCode: 'USD',
                          },
                        },
                      },
                    ],
                  },
                  priceRange: {
                    maxVariantPrice: {
                      amount: '1.25',
                      currencyCode: 'USD',
                    },
                    minVariantPrice: {
                      amount: '1.25',
                      currencyCode: 'USD',
                    },
                  },
                  media: {
                    edges: [
                      {
                        node: {
                          alt: '',
                          mediaContentType: 'MODEL_3D',
                          sources: [
                            {
                              format: 'glb',
                              mimeType: 'model/gltf-binary',
                              url: 'https://model3d.shopifycdn.com/models/o/de2b8041d7294ddb/bunny_can.glb',
                            },
                            {
                              format: 'usdz',
                              mimeType: 'model/vnd.usdz+zip',
                              url: 'https://model3d.shopifycdn.com/models/o/6730003213d7b5cc/bunny_can.usdz',
                            },
                          ],
                        },
                      },
                      {
                        node: {
                          alt: '',
                          mediaContentType: 'IMAGE',
                          id: 'gid://shopify/MediaImage/35239308689702',
                          image: {
                            altText: null,
                            url: 'https://cdn.shopify.com/s/files/1/0816/6627/7670/files/soda_can_bunny.png?v=1693747245',
                          },
                        },
                      },
                    ],
                  },
                },
              },
            ],
          },
        },
      };
      // const productss = data.body.data.products.edges
      const productss = data.data.products.edges
        .map(({ node }) => {
          if (node.totalInventory <= 0) {
            return false;
          }
          return {
            id: node.id,
            title: node.title,
            description: node.description,
            modelSrc: node.media.edges[0].node.sources[0].url,
            imageSrc: node.media.edges[1].node.image.url,
            imageAlt: node.title,
            price: node.variants.edges[0].node.priceV2.amount,
            slug: node.handle,
          };
        })
        .filter(Boolean);
      setProducts(productss);
    };
    handleGetProducts();
  }, []);

  return (
    <>
      <div
        id='shopify-section-template--16249492963496__video-with-text-overlay'
        className='has-full-screen-setting'
      >
        <section
          className='video-with-text-overlay no-border-top border-grid-color relative'
          data-section-type='video-with-text-overlay'
          data-section-id='template--16249492963496__video-with-text-overlay'
          data-has-background-video=''
        >
          <div>
            <div className='background-video-wrapper background-video-wrapper--full-screen lg:background-video-wrapper--widescreen relative  h-auto overflow-hidden bg-black p-0 '>
              <div
                className='background-video video-with-text-overlay__background-video absolute left-0 right-0 top-0 h-full w-full'
                data-component-id='background-video-template--16249492963496__video-with-text-overlay'
                data-video-type='mp4'
                data-video-id=''
                data-background-video=''
              >
                <video
                  className='absolute bottom-0 left-0 right-0 top-0 h-full w-full object-cover'
                  autoPlay
                  muted
                  loop
                  playsInline
                  id='player-background-video-template--16249492963496__video-with-text-overlay'
                >
                  <source
                    src='https://cdn.shopify.com/s/files/1/0589/5225/3608/files/Joggy_Landing-Page-Animation_Closer-Crop.mp4?v=1646173958'
                    type='video/mp4'
                  />
                  <img
                    className='responsive-image lazyload absolute bottom-0 left-0 right-0 top-0 block h-full w-full object-cover  transition-opacity duration-200 ease-in-out'
                    data-src='//getjoggy.com/cdn/shop/files/Screen_Shot_2022-01-28_at_12.09_1_{width}x.jpg?v=1646029443'
                    data-aspectratio='1.752284263959391'
                    data-sizes='auto'
                    alt=''
                    tabIndex='-1'
                  />
                  <div className='responsive-image-placeholder absolute bottom-0 left-0 right-0 top-0'></div>
                  <noscript>
                    <img
                      className='absolute bottom-0 left-0 right-0 top-0 h-full   w-full object-cover'
                      src='//getjoggy.com/cdn/shop/files/Screen_Shot_2022-01-28_at_12.09_1_2048x2048.jpg?v=1646029443'
                      alt=''
                    />
                  </noscript>
                  Sorry, your browser doesn't support embedded videos.
                </video>
              </div>
            </div>
            <div className='text-white-text lg:w-2/3'>
              <div className='section-x-padding py-theme absolute bottom-0 left-0 right-0 top-0 z-10'>
                <div className='flex h-full w-full items-end   justify-end text-right'>
                  <div className='text-white-text overflow-hidden lg:w-2/3'></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className='bg-tertiary-background text-tertiary-text border-t-grid border-grid-color overflow-hidden'>
          <div className='py-theme px-2 lg:px-4'>
            <div className='text-2xl-custom flex justify-start text-left text-base'>
              <div className='w-full lg:w-full'>
                <div className='rte font-body break-words'>
                  <p></p>
                  <p>
                    We formulate a dynamic range of plant-based energetics to
                    provide you with steady energy throughout the day, help you
                    maintain focus, find center during stressful moments + bring
                    you a sense of calm before bed.
                  </p>
                  <p>
                    <br />
                    Our products are engineered to support full-spectrum
                    activity and utilize a proprietary water-based, lipid
                    encapsulation delivery system which increases stability,
                    potency of our scientifically studied dosages, and
                    bioavailability. Translation: Because we protect our active
                    ingredients — our products support 4x more absorption
                    compared to conventional oil-based dosages.
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className='bg-secondary-background text-secondary-text border-t-grid border-grid-color overflow-hidden'>
          <div className='py-theme px-2 lg:px-4'>
            <div className='default flex justify-center text-center text-base'>
              <div className='w-full lg:w-full'>
                <div className='rte  font-body break-words'>
                  <p>SHOP BY FEELING</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className='featured-navigation index-navigation bg-secondary-background text-secondary-text  border-t-grid border-grid-color'>
          <div className='section-x-padding py-theme'>
            <nav
              role='navigation'
              className='w-full text-left text-xl lg:text-6xl'
            >
              <ul className='cursor-pointer space-y-1'>
                {products.length > 0 &&
                  products.map((product, idx) => (
                    <li
                      key={idx + product.title}
                      className='group break-words lg:inline-block'
                    >
                      <Link href={`/product/${product.slug}`} passHref>
                        <p className='group-hover:text-[rgb(10,140,3)] group-hover:underline'>
                          {idx + 1}.{' '}
                          {product.title.substring(
                            0,
                            product.title.indexOf(' ')
                          )}
                        </p>
                        <div className='absolute top-0 hidden w-full translate-y-[-15%] group-hover:block'>
                          <ModelContainer
                            modelPath={product.modelSrc}
                            positionArray={handleModelPositions(idx)}
                            scaleNumb={handleModelScale(idx)}
                          />
                        </div>
                      </Link>
                    </li>
                  ))}
              </ul>
            </nav>
          </div>
        </section>
      </div>
      <div>
        <section className='bg-secondary-background text-secondary-text border-t-grid border-grid-color overflow-hidden'>
          <div className='py-theme px-2 lg:px-4'>
            <div className='default flex justify-center text-center text-base'>
              <div className='w-full lg:w-full'>
                <div className='rte  font-body break-words'>
                  <p>FEATURED PRODUCTS</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className='w-full bg-black'>
        <section className='border-t-grid border-grid-color'>
          <div className='bg-black'>
            <ul className='grid grid-cols-2 gap-[1px] bg-white lg:grid-cols-12'>
              {products.length > 0 &&
                products.map((product, idx) => (
                  <li
                    key={product.title}
                    className='bg-secondary-background text-secondary-text col-span-2 cursor-pointer lg:col-span-4'
                  >
                    <div className='group relative h-[500px] w-full overflow-hidden'>
                      <Link href={`/product/${product.slug}`} passHref>
                        <ModelContainer
                          modelPath={product.modelSrc}
                          positionArray={handleModelPositions(idx)}
                          scaleNumb={handleModelScale(idx)}
                        />
                        <figure className='absolute bottom-0 top-0 hidden w-full group-hover:block'>
                          <img
                            src={product.imageSrc}
                            alt={product.imageAlt}
                            className='h-full w-full translate-y-[-54px] object-fill'
                          />
                        </figure>
                        <div className='border-t-grid border-grid-color section-x-padding absolute bottom-0 flex w-full justify-between py-4'>
                          <div className='w-3/5 break-words text-left'>
                            <p
                              aria-hidden='true'
                              className='product-grid-title group-hover:text-[rgb(10,140,3)]'
                            >
                              {product.title}
                            </p>
                          </div>
                          <div className='pl-2 text-right'>
                            <span>
                              {handleFormattedPrice.format(product.price)}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </section>
      </div>
      <div>
        <section className='faqs-section bg-border border-t-grid border-grid-color right half grid grid-flow-row-dense grid-cols-1 overflow-hidden lg:grid-cols-12'>
          <div className='faqs-section__header section-x-padding py-theme relative flex bg-[rgb(243,195,28)] text-black lg:col-span-6 '>
            <div className='w-full break-words text-left'>
              <h2
                className='font-heading text-2xl text-black lg:text-3xl'
                style={{
                  fontWeight: '500 !important',
                }}
              >
                FAQs
              </h2>
            </div>
          </div>
          <div className='h-full w-full bg-[rgb(243,195,28)] p-2 lg:col-start-7 lg:col-end-13 lg:p-[4rem]'>
            <Accordion transition transitionTimeout={200} className='relative'>
              {accordions.map(({ header, desc }, i) => (
                <AccordionItem
                  header={({ state }) => (
                    <div className='flex w-full items-center justify-between py-[15px]'>
                      <h2 className='font-heading text-left text-xl text-black'>
                        {header}
                      </h2>
                      <span className='text-[20px]'>
                        {state.isEnter ? '-' : '+'}
                      </span>
                    </div>
                  )}
                  key={i}
                  className='accordion-title'
                  contentProps={{
                    className: 'transition-height duration-200 ease-out',
                  }}
                  panelProps={{
                    className: 'pb-[30px] rte text-black',
                  }}
                >
                  {desc.map((d) => (
                    <p key={d}>{d}</p>
                  ))}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </div>
      <div>
        <section className='border-t-grid border-grid-color overflow-hidden bg-[rgb(127,186,200)] text-black'>
          <div className='py-theme px-2 lg:px-4'>
            <div className='default flex justify-start text-center text-base'>
              <div className='w-full lg:w-full'>
                <div className='rte  font-body break-words'>
                  <p>GOOD READS</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className='border-t-grid border-grid-color'>
          <div className='col-span-full bg-[rgb(127,186,200)] font-medium text-black'>
            <ul className='cursor-pointer'>
              <li className=' border-t-grid border-grid-color blog-post-list__link relative text-base hover:text-white lg:text-2xl'>
                <div className='flex w-full items-stretch justify-between'>
                  <div className='section-x-padding items-top flex w-full py-2 text-left lg:items-center'>
                    <div className='blog-post-list__item-number'>1.</div>
                    <div>
                      <p className='blog-post-list__item'>
                        Getting Joggy with Chase Allen
                      </p>
                    </div>
                  </div>
                </div>
                <div className='blog-post-list__link-hover js-enabled w-third-screen pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform lg:block'>
                  <div
                    data-image-id=''
                    className='responsive-image-wrapper relative mx-auto my-0 w-full overflow-hidden '
                    style={{
                      height: 0,
                      paddingTop: '128.80952380952382%',
                    }}
                  >
                    <img
                      className='responsive-image lazyautosizes lazyloaded absolute left-0 top-0 block h-auto w-full max-w-full transition-opacity duration-200 ease-in-out'
                      data-widths='[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,3360]'
                      data-aspectratio='0.7763401109057301'
                      data-sizes='auto'
                      tabIndex='-1'
                      alt='Getting Joggy with Chase Allen'
                      data-srcset='//getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_180x.jpg?v=1675994851 180w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_360x.jpg?v=1675994851 360w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_540x.jpg?v=1675994851 540w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_720x.jpg?v=1675994851 720w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_900x.jpg?v=1675994851 900w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_1080x.jpg?v=1675994851 1080w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_1296x.jpg?v=1675994851 1296w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_1512x.jpg?v=1675994851 1512w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_1728x.jpg?v=1675994851 1728w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_1944x.jpg?v=1675994851 1944w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_2160x.jpg?v=1675994851 2160w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_2376x.jpg?v=1675994851 2376w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_2592x.jpg?v=1675994851 2592w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_2808x.jpg?v=1675994851 2808w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_3024x.jpg?v=1675994851 3024w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_3360x.jpg?v=1675994851 3360w'
                      sizes='640px'
                      srcSet='//getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_180x.jpg?v=1675994851 180w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_360x.jpg?v=1675994851 360w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_540x.jpg?v=1675994851 540w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_720x.jpg?v=1675994851 720w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_900x.jpg?v=1675994851 900w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_1080x.jpg?v=1675994851 1080w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_1296x.jpg?v=1675994851 1296w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_1512x.jpg?v=1675994851 1512w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_1728x.jpg?v=1675994851 1728w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_1944x.jpg?v=1675994851 1944w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_2160x.jpg?v=1675994851 2160w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_2376x.jpg?v=1675994851 2376w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_2592x.jpg?v=1675994851 2592w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_2808x.jpg?v=1675994851 2808w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_3024x.jpg?v=1675994851 3024w, //getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_3360x.jpg?v=1675994851 3360w'
                    />
                    <noscript>
                      <div className='absolute left-0 top-0 h-full w-full'>
                        <img
                          className=' '
                          src='//getjoggy.com/cdn/shop/articles/CA_-_Joggy_-_with_football-3_2048x2048.jpg?v=1675994851'
                          alt='Getting Joggy with Chase Allen'
                        />
                      </div>
                    </noscript>
                  </div>
                </div>
              </li>
              <li className=' border-t-grid border-grid-color blog-post-list__link relative text-base hover:text-white lg:text-2xl'>
                <div className='flex w-full items-stretch justify-between'>
                  <div className='section-x-padding items-top flex w-full py-2 text-left lg:items-center'>
                    <div className='blog-post-list__item-number'>2.</div>
                    <div>
                      <p className='blog-post-list__item'>
                        Getting Joggy with Emara Neymour-Jackson
                      </p>
                    </div>
                  </div>
                </div>
                <div className='blog-post-list__link-hover js-enabled w-third-screen pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform lg:block'>
                  <div
                    data-image-id=''
                    className='responsive-image-wrapper relative mx-auto my-0 w-full overflow-hidden '
                    style={{
                      height: 0,
                      paddingTop: '125%',
                    }}
                  >
                    <img
                      className='responsive-image lazyautosizes lazyloaded absolute left-0 top-0 block h-auto w-full max-w-full transition-opacity duration-200 ease-in-out'
                      data-widths='[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3024,3024]'
                      data-aspectratio='0.8'
                      data-sizes='auto'
                      tabIndex='-1'
                      alt='Getting Joggy with Emara Neymour-Jackson'
                      data-srcset='//getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_180x.jpg?v=1674070120 180w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_360x.jpg?v=1674070120 360w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_540x.jpg?v=1674070120 540w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_720x.jpg?v=1674070120 720w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_900x.jpg?v=1674070120 900w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_1080x.jpg?v=1674070120 1080w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_1296x.jpg?v=1674070120 1296w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_1512x.jpg?v=1674070120 1512w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_1728x.jpg?v=1674070120 1728w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_1944x.jpg?v=1674070120 1944w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_2160x.jpg?v=1674070120 2160w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_2376x.jpg?v=1674070120 2376w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_2592x.jpg?v=1674070120 2592w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_2808x.jpg?v=1674070120 2808w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_3024x.jpg?v=1674070120 3024w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_3024x.jpg?v=1674070120 3024w'
                      sizes='640px'
                      srcSet='//getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_180x.jpg?v=1674070120 180w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_360x.jpg?v=1674070120 360w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_540x.jpg?v=1674070120 540w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_720x.jpg?v=1674070120 720w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_900x.jpg?v=1674070120 900w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_1080x.jpg?v=1674070120 1080w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_1296x.jpg?v=1674070120 1296w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_1512x.jpg?v=1674070120 1512w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_1728x.jpg?v=1674070120 1728w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_1944x.jpg?v=1674070120 1944w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_2160x.jpg?v=1674070120 2160w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_2376x.jpg?v=1674070120 2376w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_2592x.jpg?v=1674070120 2592w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_2808x.jpg?v=1674070120 2808w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_3024x.jpg?v=1674070120 3024w, //getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_3024x.jpg?v=1674070120 3024w'
                    />
                    <noscript>
                      <div className='absolute left-0 top-0 h-full w-full'>
                        <img
                          className=' '
                          src='//getjoggy.com/cdn/shop/articles/B03485CB-CB82-40D2-BA14-8475983390BA_2048x2048.jpg?v=1674070120'
                          alt='Getting Joggy with Chase Allen'
                        />
                      </div>
                    </noscript>
                  </div>
                </div>
              </li>
              <li className=' border-t-grid border-grid-color blog-post-list__link relative text-base hover:text-white lg:text-2xl'>
                <div className='flex w-full items-stretch justify-between'>
                  <div className='section-x-padding items-top flex w-full py-2 text-left lg:items-center'>
                    <div className='blog-post-list__item-number'>3.</div>
                    <div>
                      <p className='blog-post-list__item'>
                        What is the Endocannabinoid System, Anyway?
                      </p>
                    </div>
                  </div>
                </div>
                <div className='blog-post-list__link-hover js-enabled w-third-screen pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform lg:block'>
                  <div
                    data-image-id=''
                    className='responsive-image-wrapper relative mx-auto my-0 w-full overflow-hidden '
                    style={{
                      height: 0,
                      paddingTop: '128.80952380952382%',
                    }}
                  >
                    <img
                      className='responsive-image lazyautosizes lazyloaded absolute left-0 top-0 block h-auto w-full max-w-full transition-opacity duration-200 ease-in-out'
                      data-widths='[180,360,410]'
                      data-aspectratio='0.80078125'
                      data-sizes='auto'
                      tabIndex='-1'
                      alt='Behind The Formula: Water-Based vs Oil Based'
                      data-srcset='//getjoggy.com/cdn/shop/articles/joggy-017_180x.jpg?v=1648094041 180w, //getjoggy.com/cdn/shop/articles/joggy-017_360x.jpg?v=1648094041 360w, //getjoggy.com/cdn/shop/articles/joggy-017_410x.jpg?v=1648094041 410w'
                      sizes='640px'
                      srcSet='//getjoggy.com/cdn/shop/articles/joggy-017_180x.jpg?v=1648094041 180w, //getjoggy.com/cdn/shop/articles/joggy-017_360x.jpg?v=1648094041 360w, //getjoggy.com/cdn/shop/articles/joggy-017_410x.jpg?v=1648094041 410w'
                    />
                    <noscript>
                      <div className='absolute left-0 top-0 h-full w-full'>
                        <img
                          className=' '
                          src='//getjoggy.com/cdn/shop/articles/joggy-017_2048x2048.jpg?v=1648577343'
                          alt='Getting Joggy with Chase Allen'
                        />
                      </div>
                    </noscript>
                  </div>
                </div>
              </li>
              <li className=' border-t-grid border-grid-color blog-post-list__link relative text-base hover:text-white lg:text-2xl'>
                <div className='flex w-full items-stretch justify-between'>
                  <div className='section-x-padding items-top flex w-full py-2 text-left lg:items-center'>
                    <div className='blog-post-list__item-number'>4.</div>
                    <div>
                      <p className='blog-post-list__item'>
                        Behind The Formula: Water-Based vs Oil Bas
                      </p>
                    </div>
                  </div>
                </div>
                <div className='blog-post-list__link-hover js-enabled w-third-screen pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform lg:block'>
                  <div
                    data-image-id=''
                    className='responsive-image-wrapper relative mx-auto my-0 w-full overflow-hidden '
                    style={{
                      height: 0,
                      paddingTop: '128.80952380952382%',
                    }}
                  >
                    <img
                      className='responsive-image lazyautosizes lazyloaded absolute left-0 top-0 block h-auto w-full max-w-full transition-opacity duration-200 ease-in-out'
                      data-widths='[180,360,410]'
                      data-aspectratio='0.80078125'
                      data-sizes='auto'
                      tabIndex='-1'
                      alt='Behind The Formula: Water-Based vs Oil Based'
                      data-srcset='//getjoggy.com/cdn/shop/articles/Joggy-blog_behind-the-formula_180x.jpg?v=1648094041 180w, //getjoggy.com/cdn/shop/articles/Joggy-blog_behind-the-formula_360x.jpg?v=1648094041 360w, //getjoggy.com/cdn/shop/articles/Joggy-blog_behind-the-formula_410x.jpg?v=1648094041 410w'
                      sizes='640px'
                      srcSet='//getjoggy.com/cdn/shop/articles/Joggy-blog_behind-the-formula_180x.jpg?v=1648094041 180w, //getjoggy.com/cdn/shop/articles/Joggy-blog_behind-the-formula_360x.jpg?v=1648094041 360w, //getjoggy.com/cdn/shop/articles/Joggy-blog_behind-the-formula_410x.jpg?v=1648094041 410w'
                    />
                    <noscript>
                      <div className='absolute left-0 top-0 h-full w-full'>
                        <img
                          className=' '
                          src='//getjoggy.com/cdn/shop/articles/Joggy-blog_behind-the-formula_2048x2048.jpg?v=1648094041'
                          alt='Getting Joggy with Chase Allen'
                        />
                      </div>
                    </noscript>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className='has-full-screen-setting border-b-[1px] border-solid border-white'>
        <section>
          <div className='bg-tertiary-background border-t-grid border-grid-color relative h-auto overflow-hidden'>
            <div className='  h-full w-full'>
              <div>
                <div className='hidden md:block'>
                  <div
                    data-image-id=''
                    className='responsive-image-wrapper relative mx-auto my-0 w-full overflow-hidden '
                    style={{
                      height: 0,
                      paddingTop: '56.266666666666666%',
                    }}
                  >
                    <img
                      className='responsive-image lazyautosizes ls-is-cached lazyloaded absolute left-0 top-0 block h-auto w-full max-w-full transition-opacity duration-200 ease-in-out'
                      data-widths='[180,360,540,720,900,1080,1296,1512,1728,1944,2160,2376,2592,2808,3000]'
                      data-aspectratio='1.7772511848341233'
                      data-sizes='auto'
                      tabIndex='-1'
                      alt=''
                      data-srcset='//getjoggy.com/cdn/shop/files/Joggy-Product-Banner_180x.jpg?v=1649161839 180w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_360x.jpg?v=1649161839 360w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_540x.jpg?v=1649161839 540w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_720x.jpg?v=1649161839 720w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_900x.jpg?v=1649161839 900w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_1080x.jpg?v=1649161839 1080w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_1296x.jpg?v=1649161839 1296w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_1512x.jpg?v=1649161839 1512w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_1728x.jpg?v=1649161839 1728w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_1944x.jpg?v=1649161839 1944w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_2160x.jpg?v=1649161839 2160w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_2376x.jpg?v=1649161839 2376w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_2592x.jpg?v=1649161839 2592w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_2808x.jpg?v=1649161839 2808w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_3000x.jpg?v=1649161839 3000w'
                      sizes='1920px'
                      srcSet='//getjoggy.com/cdn/shop/files/Joggy-Product-Banner_180x.jpg?v=1649161839 180w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_360x.jpg?v=1649161839 360w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_540x.jpg?v=1649161839 540w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_720x.jpg?v=1649161839 720w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_900x.jpg?v=1649161839 900w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_1080x.jpg?v=1649161839 1080w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_1296x.jpg?v=1649161839 1296w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_1512x.jpg?v=1649161839 1512w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_1728x.jpg?v=1649161839 1728w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_1944x.jpg?v=1649161839 1944w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_2160x.jpg?v=1649161839 2160w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_2376x.jpg?v=1649161839 2376w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_2592x.jpg?v=1649161839 2592w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_2808x.jpg?v=1649161839 2808w, //getjoggy.com/cdn/shop/files/Joggy-Product-Banner_3000x.jpg?v=1649161839 3000w'
                    />
                    <div className='responsive-image-placeholder bg-primary-text absolute bottom-0 left-0 right-0 top-0'></div>
                    <noscript>
                      <div className='absolute left-0 top-0 h-full w-full'>
                        <img
                          className=' '
                          src='//getjoggy.com/cdn/shop/files/Joggy-Product-Banner_2048x2048.jpg?v=1649161839'
                          alt=''
                        />
                      </div>
                    </noscript>
                  </div>
                </div>

                <div className='md:hidden'>
                  <div
                    data-image-id=''
                    className='responsive-image-wrapper relative mx-auto my-0 w-full overflow-hidden '
                    style={{
                      height: 0,
                      paddingTop: '104.35%',
                    }}
                  >
                    <img
                      className='responsive-image lazyload absolute left-0 top-0  block  h-auto w-full max-w-full transition-opacity duration-200 ease-in-out'
                      data-src='//getjoggy.com/cdn/shop/files/joggy_welcome_kit_01_cropped_web_v2_copy_{width}x.jpg?v=1649276068'
                      data-widths='[180,360,540,720,900,1080,1296,1512,1728,1944,2000]'
                      data-aspectratio='0.9583133684714902'
                      data-sizes='auto'
                      tabIndex='-1'
                      alt=''
                    />
                    <div className='responsive-image-placeholder bg-primary-text absolute bottom-0 left-0 right-0 top-0'></div>
                    <noscript>
                      <div className='absolute left-0 top-0 h-full w-full'>
                        <img
                          className=' '
                          src='//getjoggy.com/cdn/shop/files/joggy_welcome_kit_01_cropped_web_v2_copy_2048x2048.jpg?v=1649276068'
                          alt=''
                        />
                      </div>
                    </noscript>
                  </div>
                </div>
              </div>
            </div>

            <div className='section-x-padding py-theme absolute bottom-0 left-0 right-0 top-0 z-10'>
              <div className='flex h-full w-full items-center justify-center text-center '>
                <div className='text-white-text lg:w-2/3'></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
