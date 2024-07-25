import Image from 'next/image';
import cartIcon from '../public/cart-icon.svg';

const CartIcon = () => {
  return (
    <Image src={cartIcon} alt="Cart Icon" width={24} height={24} />
  );
};

export default CartIcon;