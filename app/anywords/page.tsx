import styles from './page.module.scss';
import cs from 'classnames/bind';
const cx = cs.bind(styles);

export default function Anywords() {
  return (
    <div className={cx('anyword-page')}>
      <div className="wrapper__inner">
        <ul className={cx('anyword-page__list', 'pulse')}>
          <li>아무말이나 일단 해봐요.</li>
        </ul>
      </div>
    </div>
  );
}
