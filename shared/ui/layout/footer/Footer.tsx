'use client';

import cs from 'classnames/bind';
import styles from './footer.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMailchimp,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
const cx = cs.bind(styles);

interface FooterProps {
  isContactPage: boolean;
}

export const Footer = (props: FooterProps) => {
  const { isContactPage = false } = props;
  return (
    <>
      <footer
        className={cx('footer__wrapper', {
          'is-contact-page': Boolean(isContactPage),
        })}
      >
        <div className={cx('wrapper__inner')}>
          <div className={cx('footer__contact')}>
            <div className={cx('footer__title')}>Let&apos;s talk!</div>
            <div className={cx('footer__links')}>
              <Link
                className={cx('link--mail')}
                href="mailto:skrud041@gmail.com"
                target="_blank"
                title="메일 보내기"
              >
                <FontAwesomeIcon size={'xs'} icon={faEnvelope} />
              </Link>
              <Link
                className={cx('link--github')}
                href="https://github.com/nk0o"
                target="_blank"
                title="깃 보러가기"
              >
                <FontAwesomeIcon size={'xs'} icon={faGithub} />
              </Link>
              <Link
                className={cx('link--instagram')}
                href="https://www.instagram.com/nnkk0o/"
                target="_blank"
                title="인스타그램 보러가기"
              >
                <FontAwesomeIcon size={'xs'} icon={faInstagram} />
              </Link>
            </div>
          </div>
          <div className={cx('footer__copyright')}>
            2025 이나경&apos;s Portfolio - All rights reserved
          </div>
        </div>
      </footer>
    </>
  );
};
