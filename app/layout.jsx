import { StoreProvider } from "./StoreProvider";
import { SideBar } from "./components/Sidebar";
import logo from '../lib/images/stackline_logo.svg'


import "./styles/globals.css";
import styles from "./styles/layout.module.css";



export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <header className={styles.header}>
            <img className={styles.headersSVG} src={logo} alt="" />
          </header>
          <div className={styles.container}>
            <div className={styles.sideBar}>
              <SideBar />
            </div>
            <main className={styles.main}>{children}</main>
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
