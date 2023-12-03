'use client';
import { PaymentDetails } from 'components/common/payment/PaymentDetails';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { IPurchaseProduct } from 'types/shopTypes';
import paymentHistory from '../data';

const Details = () => {
  const t = useTranslations('ProfilePage.Payment.Details');
  const searchProducts = useSearchParams();
  const useSearch = searchProducts.get('productId');

  const purchaseProductDetails = (): IPurchaseProduct[] => {
    return paymentHistory.filter((product) => useSearch === product?.id);
  };

  const {
    soldBy,
    boughtBy,
    payment: { paymentCode, method },
    status,
    type,
    price,
    acceptedAt,
  } = purchaseProductDetails()[0];

  return (
    <PaymentDetails
      users={[
        {
          type: 'Buyer',
          fullName: boughtBy.userName,
          avatarURL: boughtBy.avatarURL,
          email: boughtBy.email,
        },
        {
          type: 'Seller',
          fullName: soldBy.userName,
          avatarURL: boughtBy.avatarURL,
          email: soldBy.email,
        },
      ]}
      blocks={[
        { name: `${paymentCode}`, title: t('payment_code') },
        { name: `${status}`, title: t('status') },
        { name: `${method}`, title: t('method') },
        { name: `${type}`, title: t('operation_type') },
      ]}
      types={[
        { name: `${price}`, title: t('amount') },
        { name: `${acceptedAt}`, title: t('time_date') },
        {
          name: t('to_product'),
          title: t('product'),
          isLink: true,
          href: 'link',
        },
      ]}
    />
  );
};

export default Details;
