import ScrollToTop from "../../src/components/ScrollToTop";
import Seo from "../../src/components/Seo";
import Home from "../../src/pages/Home";

export default function HomeRoute() {
  return (
    <>
      <Seo />
      <ScrollToTop />
      <Home />
    </>
  );
}
