'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useQuery, useMutation, useLazyQuery } from '@apollo/client';
import { useState } from 'react';
import {
  productQuery,
  createCheckout,
  createCarts,
  addToCart,
} from '@/configs/graphql/query';
import { ModelContainer } from '@/components';

const ProductDetails = () => {
  const params = useParams();
  const handle = String(params.slug);

  const [quantity, setQuantity] = useState(1);

  const { loading, error, data } = useQuery(productQuery, {
    variables: {
      handle,
    },
  });

  const [createCartsFnc] = useMutation(createCarts);
  const [addToCartFnc] = useMutation(addToCart);
  const [createCheckoutFnc] = useMutation(createCheckout);
  const handleCheckout = async () => {
    const res = await createCheckoutFnc({
      variables: {
        quantity,
        variantId: productData.productVariant,
      },
    });
    const { webUrl } = res.data.checkoutCreate.checkout;
    window.location.href = webUrl;
  };
  if (loading) return null;
  if (error) return `Error! ${error}`;

  const productData = {
    availableForSale: data.product.availableForSale,
    id: data.product.id,
    title: data.product.title,
    description: data.product.description,
    modelSrc: data.product.media.edges[0].node.sources[0].url,
    imageSrc: data.product.media.edges[1].node.image.url,
    imageAlt: data.product.title,
    price: data.product.variants.edges[0].node.priceV2.amount,
    slug: data.product.handle,
    totalInventory: data.product.totalInventory,
    productVariant: data.product.variants.edges[0].node.id,
  };

  const handleFormattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const handleModelPositions = (name) => {
    switch (name) {
      case 'orange-energy-drink':
        return [0, 0, 0];
      case 'wild-energy-drink':
        return [0, -2, 0];
      case 'ats-energy-drink':
        return [0, -1, -2];
      case 'origin-energy-drink':
        return [0, 1, -2];
      case 'bunny-energy-drink':
        return [0, -1.5, 0];
      case 'diet-soda':
        return [0, 0, 0];
      default:
        break;
    }
  };

  const handleModelScale = (name) => {
    switch (name) {
      case 'orange-energy-drink':
        return 1.25;
      case 'wild-energy-drink':
        return 22.5;
      case 'ats-energy-drink':
        return 60;
      case 'origin-energy-drink':
        return 1.5;
      case 'bunny-energy-drink':
        return 1.25;
      case 'diet-soda':
        return 0.25;
      default:
        return 1;
    }
  };

  const handleCreateCart = async (quantity, merchandiseId) => {
    if (localStorage.getItem('cartID') === null) {
      const res = await createCartsFnc({
        variables: {
          cartInput: {
            lines: [
              {
                quantity,
                merchandiseId,
              },
            ],
          },
        },
      });
      localStorage.setItem(
        'cartID',
        JSON.stringify(res.data.cartCreate.cart.id)
      );
    } else {
      const cartID = JSON.parse(localStorage.getItem('cartID'));
      await addToCartFnc({
        variables: {
          cartId: cartID,
          lines: [
            {
              quantity,
              merchandiseId,
            },
          ],
        },
      });
    }
  };
  return (
    <>
      <div className='mt-[79.74px] w-full bg-black'>
        <section className='featured-navigation border-b-grid border-grid-color relative bg-black text-white'>
          <div className='from-header-background-0 via-header-background to-header-background pointer-events-none absolute bottom-0 right-0 top-0 w-8 bg-gradient-to-r lg:hidden'></div>
          <div className='section-x-padding py-theme-half overflow-x-auto'>
            <nav
              className='breadcrumbs'
              role='navigation'
              aria-label='breadcrumbs'
            >
              <ol className='flex items-center whitespace-nowrap lg:flex-wrap lg:justify-start'>
                <li>
                  <Link className='py-theme-half block' href='/' title='Home'>
                    Home
                  </Link>
                </li>
                <li className='mx-2'>
                  <span className='py-theme-half block' aria-hidden='true'>
                    ·
                  </span>
                </li>
                <li>
                  <Link
                    className='py-theme-half block'
                    href={'/product/' + productData.slug}
                    aria-current='page'
                  >
                    {productData.title}
                  </Link>
                </li>
              </ol>
            </nav>
          </div>
        </section>
        <section className='border-t-grid border-grid-color flex min-h-screen flex-col lg:flex-row'>
          <div className='basis-1/2 cursor-grab'>
            <ModelContainer
              modelPath={productData.modelSrc}
              positionArray={handleModelPositions(productData.slug)}
              scaleNumb={handleModelScale(productData.slug)}
              haveOrbit
            />
          </div>
          <div className='flex basis-1/2 flex-col border-0 border-solid border-white px-[0.5rem] pb-[30px] pt-[1rem] text-white lg:border-l-[1px] lg:px-[1rem] lg:pb-0'>
            <h1 className='product-title-block font-heading mt-4 break-words text-2xl lg:text-[3.052rem] lg:leading-[calc(1.2*.9)]'>
              {productData.title}
            </h1>
            <h2 className='rte mt-8'>
              <em>
                <strong>{productData.description}</strong>
              </em>
            </h2>
            <p
              className={`my-8 uppercase ${
                productData.availableForSale
                  ? 'text-[rgb(10,140,3)]'
                  : 'text-rose-500'
              }`}
            >
              {productData.availableForSale ? 'Available' : 'Out of stock'}
            </p>
            <div className='flex flex-col'>
              <p>Quantity:</p>
              <div className='-mx-2 mt-2 flex items-center'>
                <button
                  className={`h-7 w-7 fill-current ${
                    quantity === 0
                      ? 'invisible cursor-not-allowed'
                      : 'cursor-pointer'
                  }`}
                  disabled={quantity === 0}
                  id='decrease'
                  onClick={() => setQuantity((prev) => prev - 1)}
                  value='Decrease Value'
                >
                  -
                </button>
                <input
                  className='border-b-text border-secondary-text w-10 appearance-none bg-transparent p-2 text-center'
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <button
                  id='increase'
                  className='h-7 w-7 fill-current'
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>
            <p className='mt-8 text-[1.953rem]'>
              {handleFormattedPrice.format(productData.price * quantity)}
            </p>
            <div className='mt-20 flex flex-col gap-4'>
              <button
                className='border-[1px] border-solid border-white px-1 py-2 uppercase'
                onClick={() =>
                  handleCreateCart(quantity, productData.productVariant)
                }
              >
                add to cart
              </button>
              <button
                className='border-[1px] border-solid border-[rgb(10,140,3)] bg-[rgb(10,140,3)] px-1 py-2 uppercase'
                onClick={handleCheckout}
              >
                buy it now
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductDetails;
