import styles from '../dropdowns.module.css'
interface Tag {
  label?: string
  size?: 'sm' | 'md'
  variant?: 'dark' | 'light'
}

export const Tag = (props: Tag) => {
  return (
    <div className={`${styles.tag} ${styles[props.size || 'md']} ${styles[props.variant || 'light']}`}>
      {props.label}
    </div>
  )
}