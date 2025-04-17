import { ReactNode } from "react";
const Dialog = ({
  show = false,
  onClose = () => {},
  children,
}: {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}) =>
  show && (
    <div
      className="fixed z-50 top-0 left-0 flex items-center justify-center w-full h-full bg-gray-800/70"
      onClick={onClose}
    >
      {children}
    </div>
  );

export default Dialog;
