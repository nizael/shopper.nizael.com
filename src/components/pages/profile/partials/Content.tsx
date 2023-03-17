import { List } from '@shared/list'
import { ListView } from '@shared/list/partials/listView'
import { Headline1, HelpText, Subheads } from '@shared/text'
import styles from '../profile.module.css'
import { UserProfile } from './userProfile'
export const Content = () => {
  return (
    <div className={styles.content}>
      <Headline1>Minha conta</Headline1>
      <List>
        <UserProfile />
        <ListView
          headline={<Subheads>Meus pedidos</Subheads>}
          description={<HelpText>Já tem 12 pedidos</HelpText>}
        />
        <ListView
          headline={<Subheads>Endereços de Envio</Subheads>}
          description={<HelpText>3 endereços</HelpText>}
        />
        <ListView
          headline={<Subheads>Métodos de pagamentos</Subheads>}
          description={<HelpText>Visa **34</HelpText>}
        />
        <ListView
          headline={<Subheads>Códigos promocionais</Subheads>}
          description={<HelpText>Você tem códigos promocionais especiais</HelpText>}
        />
        <ListView
          headline={<Subheads>Meus comentários</Subheads>}
          description={<HelpText>Comentários para 4 itens</HelpText>}
        />
        <ListView
          headline={<Subheads>Configurações</Subheads>}
          description={<HelpText>Notificações, senhas</HelpText>}
        />
      </List>

    </div>
  )
}