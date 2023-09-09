'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { productQuery } from '@/configs/graphql/query';

const ProductDetails = () => {
  const params = useParams();
  const handle = String(params.slug);

  const { loading, error, data } = useQuery(productQuery, {
    variables: {
      handle,
    },
  });
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
  };

  console.log(productData);

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
      </div>
    </>
  );
};

export default ProductDetails;
