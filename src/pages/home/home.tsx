import style from "./home.module.scss";
import { Header } from "@widgets/index";
import { Footer } from "@widgets/index";
import { About } from "@widgets/index";
import { Description } from "@widgets/index";
import { Partners } from "@widgets/index";
import { FAQwidget } from "@widgets/index";

export const Home = () => {
  return (
    <>
      <Header />
      <main className={style.container}>
        <About />
        <Description />
        <Partners />
        <FAQwidget />
      </main>
      <Footer />
    </>
  );
};
