import styles  from './profile.module.css'
import { Layout } from "@shared/layout";
import { Content } from "./partials/Content";
import { Header } from "./partials/Header";

export const Profile =()=>(
  <Layout>
    <Header/>
   <Content/>
  </Layout>
)