/* Components */
import { Providers } from "@/lib/providers";

/* Instruments */
import styles from "./styles/layout.module.css";
import "./styles/globals.css";
import ThemeRegistry from "./ThemeRegistry/ThemeRegistry";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <body>
          <ThemeRegistry>
            <section className={styles.container}>
              <header>header</header>

              <main>{props.children}</main>

              <footer>footer</footer>
            </section>
          </ThemeRegistry>
        </body>
      </html>
    </Providers>
  );
}
