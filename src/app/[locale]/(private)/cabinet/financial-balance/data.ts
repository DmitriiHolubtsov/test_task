import { IUser } from 'types/userTypes';
import { IPurchaseProduct } from 'types/shopTypes';
import {
  EnumRoles,
  EnumPayment,
  EnumPaymentStatus,
  EnumOperationTypes,
} from 'types/enums';

const paymentHistoryData: IPurchaseProduct[] = [
  {
    acceptedAt: '3 Sep 2023 15:30',
    boughtBy: {
      avatarURL: 'avatarImage.png',
      userName: 'John',
      email: 'email@email.com',
    },
    id: '01',
    payment: {
      method: EnumPayment.BankCard,
      paymentCode: 'ee20dc5782ed',
    },
    type: EnumOperationTypes.SELL,
    bankCard: '0001 0002 0003 0004',
    price: 10,
    productId: {
      id: '0001',
      shortDescription: {
        sh: 'Product Description',
        pt: 'Product Description',
        ru: 'Product Description',
        en: 'Product Description',
        ar: 'Product Description',
        es: 'Product Description',
      },
    },
    received: true,
    soldBy: {
      avatarURL: 'avatarImage.png',
      userName: 'Tim',
      email: 'email@email.com',
    },
    status: EnumPaymentStatus.SUCCEEDED,
  },

  {
    acceptedAt: '3 Sep 2023 15:30',
    boughtBy: {
      avatarURL: 'avatarImage.png',
      userName: 'Mike',
      email: 'email@email.com',
    },
    id: '02',
    payment: {
      method: EnumPayment.CryptoCurrency,
      paymentCode: 'ee20dc5782ed',
    },
    type: EnumOperationTypes.SELL,
    bankCard: '0001 0002 0003 0004',
    price: 20,
    productId: {
      id: '0002',
      shortDescription: {
        sh: 'Product Description',
        pt: 'Product Description',
        ru: 'Product Description',
        en: 'Product Description',
        ar: 'Product Description',
        es: 'Product Description',
      },
    },
    received: true,
    soldBy: {
      avatarURL: 'avatarImage.png',
      userName: 'Mike',
      email: 'email@email.com',
    },
    status: EnumPaymentStatus.PENDING,
  },
  {
    acceptedAt: '3 Sep 2023 15:30',
    boughtBy: {
      avatarURL: 'avatarImage.png',
      userName: 'Tom',
      email: 'email@email.com',
    },
    id: '03',
    payment: {
      method: EnumPayment.PayPal,
      paymentCode: 'ee20dc5782ed',
    },
    type: EnumOperationTypes.SELL,
    bankCard: '0001 0002 0003 0004',
    price: 30,
    productId: {
      id: '0003',
      shortDescription: {
        sh: 'Product Description',
        pt: 'Product Description',
        ru: 'Product Description',
        en: 'Product Description',
        ar: 'Product Description',
        es: 'Product Description',
      },
    },
    received: false,
    soldBy: {
      avatarURL: 'avatarImage.png',
      userName: 'Nina',
      email: 'email@email.com',
    },
    status: EnumPaymentStatus.FAILED,
  },
  {
    acceptedAt: '3 Sep 2023 15:30',
    boughtBy: {
      avatarURL: 'avatarImage.png',
      userName: 'Ralph',
      email: 'email@email.com',
    },
    id: '04',
    payment: {
      method: EnumPayment.PayPal,
      paymentCode: 'ee20dc5782ed',
    },
    type: EnumOperationTypes.SELL,
    bankCard: '0001 0002 0003 0004',
    price: 40,
    productId: {
      id: '0004',
      shortDescription: {
        sh: 'Product Description',
        pt: 'Product Description',
        ru: 'Product Description',
        en: 'Product Description',
        ar: 'Product Description',
        es: 'Product Description',
      },
    },
    received: false,
    soldBy: {
      avatarURL: 'avatarImage.png',
      userName: 'John',
      email: 'email@email.com',
    },
    status: EnumPaymentStatus.CANCELED,
  },
];
export default paymentHistoryData;

export const user: IUser = {
  achievements: ['Achievements'],
  address: {
    street: 'Street 50, app.11 ',
    city: 'Kyiv',
    phoneNumber: '+380 96 555-55-55',
    zipCode: '001',
  },
  avatarURL: 'avatarImage.png',
  backgroundColor: '#fff',
  backgroundImage: 'backgroundImage.png',
  banned: false,
  bonuses: 25,
  confidentLvl: 1,
  email: 'email@email.com',
  emailConfirmDate: '01/01/23',
  experience: 1,
  id: '01',
  isTwoFactorEnabled: true,
  level: 2,
  qrCode: 'qrCode.png',
  ratingsStats: {
    entries: [{ key: 'Rating', value: '25' }],
  },
  role: EnumRoles.BUYER,
  stripeId: '01',
  subscribed: true,
  userName: 'User',
};
