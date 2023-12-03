'use client';
import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { Section } from 'components/common/profile/Section';
import s from './Dashboard.module.scss';

export const Dashboard: FC = () => {
  const t = useTranslations('ProfilePage.Dashboard');

  return (
    <Section>
      <Section.Header>
        <h3>{t('title')}</h3>
      </Section.Header>
      <Section.Body>
        <h4>{t('empty')}</h4>
      </Section.Body>
    </Section>
  );
};
