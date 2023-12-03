'use client';
import { FC, useRef, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { useAuth } from 'utils/hooks/useAuth';
import { ROUTES } from 'constants/routes';

import { DropDown } from 'ui/components/DropDown';
import { MoonIcon } from 'components/icons/MoonIcon';
import { ThemeSwitcher } from 'components/common/ThemeSwitcher';
import { UserAvatar } from 'components/common/UserAvatar';
import { DashboardIcon } from 'components/icons/DashboardIcon';
import { MessagesIcon } from 'components/icons/MessagesIcon';
import { SectionsIcon } from 'components/icons/SectionsIcon';
import { SellerIcon } from 'components/icons/SellerIcon';
import { BuyersIcon } from 'components/icons/BuyersIcon';
import { FinancialIcon } from 'components/icons/FinancialIcon';
import { AchievementIcon } from 'components/icons/AchievementIcon';
import { KeyIcon } from 'components/icons/KeyIcon';
import { ReportIcon } from 'components/icons/ReportIcon';
import { LogoutIcon } from 'components/icons/LogoutIcon';

import s from '../../Header.module.scss';

export const HeaderAuthorizedAvatar: FC = () => {
  const t = useTranslations('Header.Dropdowns');
  const { logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef<HTMLDivElement>(null);

  const onMouseEnter = () => setIsOpen(true);
  const onMouseLeave = () => setIsOpen(false);

  const accountBox = {
    title: t('account'),
    list: [
      {
        title: 'security',
        icon: <KeyIcon />,
        href: ROUTES.PRIVATE.SECURITY,
      },
      {
        icon: <DashboardIcon />,
        title: 'dashboard',
        href: ROUTES.PRIVATE.DASHBOARD,
      },
      {
        icon: <SectionsIcon />,
        title: 'sections',
        href: ROUTES.PRIVATE.SECTIONS,
      },
      {
        icon: <SellerIcon />,
        title: 'seller',
        href: ROUTES.PRIVATE.SELLER.SALES_OFFERS,
      },
      { icon: <BuyersIcon />, title: 'buyers', href: ROUTES.PRIVATE.BUYERS },
      {
        icon: <FinancialIcon />,
        title: 'financial',
        href: ROUTES.PRIVATE.SELLER.FINANCIAL_BALANCE,
      },
      {
        icon: <AchievementIcon />,
        title: 'achievement',
        href: ROUTES.PRIVATE.ACHIEVEMENT,
      },
      { icon: <ReportIcon />, title: 'report', href: ROUTES.PRIVATE.REPORT },
      {
        icon: <MessagesIcon />,
        title: 'messages',
        href: ROUTES.PRIVATE.MESSAGES,
      },

      { icon: <LogoutIcon />, title: 'logout', href: ROUTES.PRIVATE.LOGOUT },
    ],
  };

  return (
    <div
      className={s.dropdown}
      ref={parentRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <UserAvatar
        avatarURL={''}
        userName={'U'}
        className={s.header_avatar}
        size={48}
      />
      <DropDown
        isOpen={isOpen}
        parent={parentRef}
        className={s.dropdown_container}
      >
        <div className={s.dropdown_box}>
          <span className={s.dropdown_title}>{t('account')}</span>
          <ul className={s.dropdown_list}>
            {accountBox.list.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className={s.dropdown_btn}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={s.dropdown_box}>
          <span className={s.dropdown_title}>{t('theme')}</span>
          <ul className={s.dropdown_list}>
            <li className={s.dropdown_btn}>
              <MoonIcon />
              <span>{t('dark_mode')}</span>
              <ThemeSwitcher />
            </li>
          </ul>
        </div>
      </DropDown>
    </div>
  );
};
