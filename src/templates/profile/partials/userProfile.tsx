import { DescriptionText, Headline2, Headline3, HelpText } from '@components/shared/text'
import styles from '../profile.module.css'
import { CgProfile } from "react-icons/cg";

export const UserProfile = () => {
  return (
    <div className={styles.userProfile}>
      <div className={styles.avatar}>
       { <img src="https://i.pinimg.com/474x/7b/e5/3b/7be53bb44fc7886924aec3fc9abb8f80.jpg" alt="Perfil"  width={64} height={64}/>||<CgProfile size={64} />}
      </div>
      <div className={styles.useData}>
        <Headline2>Nicolas Valente</Headline2>
        <DescriptionText
          style={{ color: 'gray' }}
        >nicolas@email.com</DescriptionText>
      </div>
    </div>
  )
}