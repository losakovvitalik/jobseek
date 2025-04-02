import Image from 'next/image';

export interface VkIconProps {
  className?: string;
}

const VkIcon = ({ className }: VkIconProps) => {
  return (
    <Image className={className} src={'/icons/vk-icon.svg'} alt="vk-icon" width={16} height={16} />
  );
};

export default VkIcon;
