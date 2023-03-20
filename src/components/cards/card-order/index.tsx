import { ButtonOutline } from '@components/buttons/button-outline'
import { DescriptiveItems, HelpText, Subheads } from '@components/shared/text'
import { useRouter } from 'next/navigation'
import styles from './cardOrder.module.css'
interface CardOrder {
  data: Order
}

interface Order {
  id: number
  created_at: string
  tracking: string
  quantity: number
  amount: number
  status: string
}


export const CardOrder = (props: CardOrder) => {
  const push = useRouter().push
  
  function redirect (){
  push('/catalog')
  }
  return (
    <div className={styles.cardOrder}>
      <div className={styles.smFrame}>
        <Subheads>Nº do pedido: {props.data.id}</Subheads>
        <HelpText style={{ fontSize: '14px' }}>{props.data.created_at}</HelpText>
      </div>
      <div className={styles.frame}>
        <HelpText style={{ fontSize: '14px' }}>Numero de rastreio: <b style={{ color: 'var(--cl-dark-primary)' }}>{props.data.tracking}</b></HelpText>
        <div className={styles.smFrame}>
          <HelpText style={{ fontSize: '14px' }}>Quantidade: <b style={{ color: 'var(--cl-dark-primary)' }}>{props.data.quantity}</b></HelpText>
          <HelpText style={{ fontSize: '14px' }}>Total: <b style={{ color: 'var(--cl-dark-primary)' }}>{props.data.amount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</b></HelpText>
        </div>
      </div>
      <div className={styles.smFrame}>
        <ButtonOutline onClick={redirect} label='Detalhes' variant='small' />
        <DescriptiveItems style={{ color: 'var(--cl-success)' }}>{props.data.status}</DescriptiveItems>
      </div>
    </div>
  )
}