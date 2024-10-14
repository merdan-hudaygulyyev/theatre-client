import React, { useEffect, useState } from 'react'
import styles from './Booking.module.css'

const BookingCard = (props) => {
  const {
    data, 
    index, 
    onClick
  } = props

  const [mainData, setMainData] = useState()
  const handleClick = (seat) => {
    const mainDataClone = [...mainData]
    for(let i = 0; i < mainDataClone.length; i++){
      const mainItem = mainDataClone[i]
      for(let j = 0; j < mainItem.data.length; j++){
        const innerItem = mainItem.data[j]
        if(innerItem.seat_id === seat.seat_id){
          innerItem.is_selected = !innerItem.is_selected
        }
      }
    }
    setMainData(mainDataClone)
    onClick(seat)
  }

  useEffect(() => {
    setMainData(data)
  }, [data])

  return (
    <div className={`${styles.box} ${index === 0 ? styles.fall__right : index === 2 ? styles.fall__left : ""}`}>
      {
        data?.map(item => (
          <div className={`${styles.item} ${index === 0 ? styles.justify_end : index === 2 ? styles.justify_start : ""}`} key={item.label}>
            <span>{item.label}</span>
            <div className={styles.seats}>
              {
                item.data.map(seat => (
                  <button onClick={() => handleClick(seat)} className={`${styles.seat} ${seat.is_selected ? styles.highlight : ""}`} key={seat.seat_id}>
                    <span>{seat.seatNumber}</span>
                  </button>
                ))
              }
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default BookingCard