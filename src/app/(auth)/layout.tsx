"use client";

import { Provider } from "react-redux";
import "../(main)/globals.css";
import store from "@/store/store";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <Provider store={store}>
        <html lang="en">
          <body>{children}</body>
        </html>
      </Provider>
    </SessionProvider>
  );
}
