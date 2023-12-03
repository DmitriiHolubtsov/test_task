'use client';
import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { Section } from 'components/common/profile/Section';
import s from './Buyers.module.scss';

export const Buyers: FC = () => {
  const t = useTranslations('ProfilePage.Buyers');

  return (
    <Section>
      <Section.Header>
        <h3>{t('title')}</h3>
      </Section.Header>
      <Section.Body>
        <h4>{t('no_buyers')}</h4>
      </Section.Body>
    </Section>
  );
};
