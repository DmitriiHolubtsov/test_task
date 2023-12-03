'use client';
import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { Section } from 'components/common/profile/Section';
import s from './Report.module.scss';

export const Report: FC = () => {
  const t = useTranslations('ProfilePage.Report');

  return (
    <Section>
      <Section.Header>
        <h3>{t('title')}</h3>
      </Section.Header>
      <Section.Body>
        <h4>{t('no_reports')}</h4>
      </Section.Body>
    </Section>
  );
};
