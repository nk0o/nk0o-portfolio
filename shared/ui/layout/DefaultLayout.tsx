'use client';
import { ReactNode } from 'react';
import { Header } from '@/shared/ui/layout/header/Header';
import { Footer } from '@/shared/ui/layout/footer/Footer';
import styles from "./defaultLayout.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);
interface DefaultLayoutProps{
    children: ReactNode
}
export const DefaultLayout = (props:DefaultLayoutProps ) => {
    const {children} = props;
    return (
        <>
            <div className={cx("body__wrapper")}>
                <Header></Header>

                <div id={cx("wrapper")}>
                        {children}
                </div>

                <Footer></Footer>
            </div>

        </>
    );
};