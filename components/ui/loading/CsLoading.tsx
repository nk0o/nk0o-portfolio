import React from 'react';
import cs from 'classnames/bind';
import styles from './csLoading.module.scss';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const cx = cs.bind(styles);

interface loadingProps {
  childeren: string;
}

export const CsLoading = ({ childeren }: loadingProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={cx(
        'loading-wrapper fixed inset-0 flex items-center justify-center',
      )}
    >
      <div className={cx('bg-gray-900 text-white')}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        ></motion.div>
        {childeren}
      </div>
    </div>
  );
};
