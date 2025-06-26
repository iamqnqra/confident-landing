type BurgerMenuProps = {
  onClick: () => void;
};

export const BurgerMenu = ({ onClick }: BurgerMenuProps) => (
  <button
    onClick={onClick}
    style={{ background: "none", border: "none", padding: 0 }}
  >
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect y="4" width="24" height="2" rx="1" fill="#3366FF" />
      <rect y="11" width="24" height="2" rx="1" fill="#3366FF" />
      <rect y="18" width="24" height="2" rx="1" fill="#3366FF" />
    </svg>
  </button>
);
