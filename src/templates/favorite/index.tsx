import styles  from './favorite.module.css'
import { Layout } from "@components/shared/layout";
import { Content } from "./partials/Content";
import { Header } from "./partials/Header";

export const Favorite =()=>(
  <Layout>
    <Header/>
   <Content/>
  </Layout>
)