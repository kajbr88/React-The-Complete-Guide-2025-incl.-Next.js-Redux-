import { createPortal } from 'react-dom';

import { motion } from 'framer-motion';

export default function Modal({ title, children, onClose }) {

  // const hiddenAnimationState = { opacity: 0, y: 30 };

  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        variants={{
          hidden: { opacity: 0, y: 30 }, //hidden, visible are key, identifier or variant.
          visible: { opacity: 1, y: 0 } //{ opacity: 0, y: 0} are animation state.
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"

        open
        className="modal"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById('modal')
  );
}
