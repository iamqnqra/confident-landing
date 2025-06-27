type BurgerMenuProps = {
  onClick: () => void;
};

export const BurgerMenu = ({ onClick }: BurgerMenuProps) => (
  <button
    onClick={onClick}
    style={{ background: "none", border: "none", padding: 0 }}
  >
    <svg
      width="27"
      height="17"
      viewBox="0 0 27 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="27"
        height="3"
        rx="1.5"
        transform="matrix(-1 0 0 1 27 0)"
        fill="#3366FF"
      />
      <rect
        width="27"
        height="3"
        rx="1.5"
        transform="matrix(-1 0 0 1 27 7)"
        fill="#3366FF"
      />
      <rect
        width="14"
        height="3"
        rx="1.5"
        transform="matrix(-1 0 0 1 14 14)"
        fill="#3366FF"
      />
    </svg>
  </button>
);
