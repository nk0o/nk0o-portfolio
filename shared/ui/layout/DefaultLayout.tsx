"use client";

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { Header } from '@/shared/ui/layout/header/Header';
import { Footer } from '@/shared/ui/layout/footer/Footer';
import styles from "./defaultLayout.module.scss";
import cs from "classnames/bind";
const cx = cs.bind(styles);

interface DefaultLayoutProps{
    children: ReactNode;
}

export const DefaultLayout = (props:DefaultLayoutProps) => {
    const {children} = props;
    const pathname = usePathname(); 
    const slug = pathname.split("/").pop() || ""; 
    const isContactPage = slug === "contactme"; 
    
    return (
        <>
            <div className={cx("body__wrapper", { "is-contact-page": Boolean(isContactPage) })}>
                <Header slug={slug}></Header>

                <div id={cx("wrapper")}>
                        {children}
                </div>

                <Footer isContactPage={isContactPage}></Footer>
            </div>

        </>
    );
};
