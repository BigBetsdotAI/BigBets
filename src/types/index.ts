export interface ChipItem {
  id: string;
  label: string;
  active?: boolean;
}

export interface MenuItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  className?: string;
}

export interface HeaderProps {
  className?: string;
}

export interface ChipViewProps {
  items: ChipItem[];
  onChipClick?: (chipId: string) => void;
  className?: string;
  variant?: 'default' | 'outlined';
  size?: 'small' | 'medium' | 'large';
}