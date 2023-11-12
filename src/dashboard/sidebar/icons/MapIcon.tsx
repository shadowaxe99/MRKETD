export function MapIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 3h18v18H3z" /* Outline of the map */
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 9l3 3 3-3" /* Example path in the map */
      />
      <circle cx="9" cy="9" r="1" strokeWidth={2} /* Example location marker */ />
    </svg>
  );
}
