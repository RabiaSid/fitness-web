import { ReactNode } from "react";
import { Layout } from "antd";
import AppHeader from "../components/header";
import AppFooter from "../components/footer";
import { FooterSectionImage } from "../assets";
import BackToTop from "../components/back-to-top/index";

const { Header, Footer, Content } = Layout;

export default function AppLayout({ children }: { children: ReactNode }) {
  return <>
      <Layout style={{}}>
        <Header
          style={{
            margin: 0,
            padding: 0,
            width: "auto",
            backgroundColor: "transparent",
          }}
          className="position-fixed fixed-top"
        >
          <AppHeader />
        </Header>
        
        <Content
          style={{
            margin: 0,
            padding: 0,
            width: "100%",
            height: "auto",
            backgroundColor: "white",
          }}
        >
          {/* <PagesMenu /> */}
          {children}
        </Content>
        <BackToTop />
        <Footer
          style={{
            margin: 0,
            padding: 0,
            width: "auto",
            background: `url(${FooterSectionImage})`,
            backgroundAttachment: " fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <AppFooter />
        </Footer>
      </Layout>
    </>
}
