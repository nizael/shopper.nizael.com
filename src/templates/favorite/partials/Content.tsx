'use client'
import { CardListFavorite } from '@components/cards/card-list-favorite'
import { useFavoritesStore } from '@stores/favorites'
import styles from '../favorite.module.css'
export const Content = () => {
  const favorites = useFavoritesStore(s => s.favorites)

  return (
    <div className={styles.content}>
      {favorites.map((favorite, index)=> <CardListFavorite  key={index} data={favorite}/>)}
      
    </div>
  )
}