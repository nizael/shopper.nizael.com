import { ButtonOutline } from '@shared/button-outline'
import { DescriptiveItems, HelpText, Subheads } from '@shared/text'
import styles from './cardOrder.module.css'

export const CardOrder = () => {
  return (
    <div className={styles.cardOrder}>
      <div className={styles.smFrame}>
        <Subheads>Nº do pedido 1947034</Subheads>
        <HelpText style={{ fontSize: '14px' }}>{new Date().toLocaleDateString()}</HelpText>
      </div>
      <div className={styles.frame}>
        <HelpText style={{ fontSize: '14px' }}>Numero de rastreio: <b style={{ color: 'var(--cl-dark-primary)' }}>IW3475453455</b></HelpText>
        <div className={styles.smFrame}>
          <HelpText style={{ fontSize: '14px' }}>Quantidade: <b style={{ color: 'var(--cl-dark-primary)' }}>3</b></HelpText>
          <HelpText style={{ fontSize: '14px' }}>Total: <b style={{ color: 'var(--cl-dark-primary)' }}>R$ 112,00</b></HelpText>
        </div>
      </div>
      <div className={styles.smFrame}>
        <ButtonOutline label='Detalhes' variant='small' />
        <DescriptiveItems style={{ color: 'var(--cl-success)' }}>Entregue</DescriptiveItems>
      </div>
    </div>
  )
}