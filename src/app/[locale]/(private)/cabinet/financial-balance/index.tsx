'use client';
import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { ROUTES } from 'constants/routes';
import { Section } from 'components/common/profile/Section';
import { PaymentHistory } from 'components/common/PaymentHistory';
import { FolderEmpty } from 'components/common/Empty';
import paymentHistoryData from './data';
import s from './Financial.module.scss';

export const Financial: FC = () => {
  const url = ROUTES.PRIVATE.SELLER.FINANCIAL_BALANCE_DETAILS;
  const t = useTranslations('ProfilePage.Financial');
  
  return (
    <Section>
      <Section.Header>
        <h3>{t('title')}</h3>
      </Section.Header>
      {paymentHistoryData.length >= 1 ? (
        <PaymentHistory boughtProducts={paymentHistoryData} href={url} />
      ) : (
        <>
          <Section.Body>
            <FolderEmpty title={t('Empty.title')} subtitle={t('Empty.subtitle')} />
          </Section.Body>
        </>
      )}
      </Section>
    
  );
};