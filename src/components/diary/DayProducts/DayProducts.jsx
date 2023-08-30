import React from 'react'
import styles from './DayProducts.module.css'
import { nanoid } from '@reduxjs/toolkit'
const DayProducts = () => {
    const exArr = [{Title: "Title1", Category: "Category", Calories: "Calories", Weight: "Weight", Recommend: false},
    {Title: "Title1", Category: "Category", Calories: "Calories", Weight: "Weight", Recommend: false},
    {Title: "Title1", Category: "Category", Calories: "Calories", Weight: "Weight", Recommend: false},
    {Title: "Title1", Category: "Category", Calories: "Calories", Weight: "Weight", Recommend: false},
    {Title: "Title1", Category: "Category", Calories: "Calories", Weight: "Weight", Recommend: false},
    {Title: "Title1", Category: "Category", Calories: "Calories", Weight: "Weight", Recommend: false},
    {Title: "Title1", Category: "Category", Calories: "Calories", Weight: "Weight", Recommend: false},
]
    const listOfExercises = exArr.map((obj)=>{
        const num = nanoid()
        return (
            <tr key={num}>
                <td className={styles.tdTitle}>{obj.Title}</td>
                <td className={styles.tdCategory}>{obj.Category}</td>
                <td className={styles.tdCalories}>{obj.Calories}</td>
                <td className={styles.tdWeight}>{obj.Weight}</td>
                <td className={styles.tdRecommend}>{obj.Recommend ? 
                    (<><span><svg className={styles.recommendCircle}><circle cx="7" cy="7" r="7" fill="green"/></svg><p>Yes</p></span></>) : 
                    (<><span><svg className={styles.recommendCircle}><circle cx="7" cy="7" r="7" fill="red"/></svg><p>No</p></span></>)}</td>
                <td className={styles.tdDellete}><button></button></td>
            </tr>
        )
    })
  return (
    <div className={styles.DayProducts}>
        <div className={styles.DayProductsHead}><h2>Products</h2><p>Add product</p></div>
        <div className={styles.DayProductsTable}>
            <table>
                <thead>
                    <tr>
                        <th className={styles.thTitle}>Title</th>
                        <th className={styles.thCategory}>Category</th>
                        <th className={styles.thCalories}>Calories</th>
                        <th className={styles.thWeight}>Weight</th>
                        <th className={styles.thRecommend}>Recommend</th>
                    </tr>
                </thead>
                <tbody>
                    {listOfExercises}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default DayProducts