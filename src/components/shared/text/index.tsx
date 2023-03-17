import { PropsWithChildren } from "react"
import styles from './text.module.css'
type Headline = React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;
type Paragrap = React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

export const Headline1 = (props: PropsWithChildren & Headline) => {
  return (
    <h1
      {...props}
      className={styles.headline1}>{props.children}</h1>
  )
}
export const Headline2 = (props: PropsWithChildren & Headline) => {
  return (
    <h2
      {...props}
      className={styles.headline2}>{props.children}</h2>
  )
}
export const Headline3 = (props: PropsWithChildren & Headline) => {
  return (
    <h3
      {...props}
      className={styles.headline3}>{props.children}</h3>
  )
}

export const Subheads = (props: PropsWithChildren & Headline) => {
  return (
    <h4
      {...props}
      className={styles.subheads}>{props.children}</h4>
  )
}


export const Text = (props: PropsWithChildren & Paragrap) => {
  return (
    <p
      {...props}
      className={styles.text}>{props.children}</p>
  )
}

export const DescriptiveItems = (props: PropsWithChildren & Paragrap) => {
  return (
    <p
      {...props}
      className={styles.descriptiveItems}>{props.children}</p>
  )
}

export const DescriptionText = (props: PropsWithChildren & Paragrap) => {
  return (
    <p
      {...props}
      className={styles.descriptionText}>{props.children}</p>
  )
}

export const HelpText = (props: PropsWithChildren & Paragrap) => {
  return (
    <p
      {...props}
      className={styles.helpText}>{props.children}</p>
  )
}