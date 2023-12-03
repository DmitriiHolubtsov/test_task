'use client';
import { FC } from 'react';
import { useTranslations } from 'next-intl';

import { Section } from 'components/common/profile/Section';
import s from './Messages.module.scss';

export const Messages: FC = () => {
  const t = useTranslations('ProfilePage.Messages');

  return (
    <Section>
      <Section.Header>
        <h3>{t('title')}</h3>
      </Section.Header>
      <Section.Body>
        <h4>{t('no_converstation')}</h4>
      </Section.Body>
    </Section>
  );
};
