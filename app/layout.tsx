import type { Metadata } from "next";
import "../styles/globals.scss";
import { ReactNode } from "react";
import { DefaultLayout } from "@/shared/ui/layout/DefaultLayout";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false;
export const metadata: Metadata = {
  title: "이나경의 포트폴리오",
  description: "NextJs로 만든 포트폴리오입니다.",
};

export default function RootLayout({children,}: {children: ReactNode}) {
  return (
    <html lang="ko">
      <body>
          <DefaultLayout>
            {children}
          </DefaultLayout>
      </body>

    </html>
  );
}
