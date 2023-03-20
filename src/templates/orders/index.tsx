// import styles from './orders.module.css'
import { Layout } from "@components/shared/layout";
import { Content } from "./partials/Content";
import { Header } from "./partials/Header";

export const Orders = () => {
  return (
    <Layout>
      <Header />
      <Content />
    </Layout>
  )
}