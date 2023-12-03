import { ROUTES } from 'constants/routes';
import { ISidebarConfig } from '../layout';

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

export const buyerConfig: ISidebarConfig = {
  items: [
    { icon: <DashboardIcon />, title: 'dashboard', href: ROUTES.PRIVATE.DASHBOARD },
    { icon: <MessagesIcon />, title: 'messages', href: ROUTES.PRIVATE.MESSAGES },
    { icon: <SectionsIcon />, title: 'sections', href: ROUTES.PRIVATE.SECTIONS },
    { icon: <SellerIcon />, title: 'seller', href: ROUTES.PRIVATE.SELLER.SALES_OFFERS },
    { icon: <BuyersIcon />, title: 'buyers', href: ROUTES.PRIVATE.BUYERS },
    { icon: <FinancialIcon />, title: 'financial', href: ROUTES.PRIVATE.SELLER.FINANCIAL_BALANCE},
    { icon: <AchievementIcon />, title: 'achievement', href: ROUTES.PRIVATE.ACHIEVEMENT},
    { icon: <KeyIcon />, title: 'security', href: ROUTES.PRIVATE.SECURITY },
    { icon: <ReportIcon />, title: 'report', href: ROUTES.PRIVATE.REPORT},
    { icon: <LogoutIcon />, title: 'logout', href: ROUTES.PRIVATE.LOGOUT },
  ],
};
