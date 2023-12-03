'use client';
import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { Section } from 'components/common/profile/Section';
import s from './SalesOffers.module.scss';

export const SalesOffers: FC = () => {
  const t = useTranslations('ProfilePage.SalesOffers');

  return (
    <Section>
      <Section.Header>
        <h3>{t('title')}</h3>
      </Section.Header>
      <Section.Body>
        <h4>{t('empty_title')}</h4>
      </Section.Body>
    </Section>
  );
};
