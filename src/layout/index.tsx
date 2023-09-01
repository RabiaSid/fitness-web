import { ReactNode } from "react";
import { Layout } from "antd";
import AppHeader from "../components/header";
import AppFooter from "../components/footer";

const { Header, Footer, Content } = Layout;

export default function AppLayout({ children }: { children: ReactNode }) {
  return  <>
      <Layout style={{
      }}>
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

        <Footer
          style={{
            margin: 0,
            padding: 0,
            width: "auto",
            height: "auto",
            backgroundColor: "white",
          }}
        >
          <AppFooter />
        </Footer>
      </Layout>
    </>
}
