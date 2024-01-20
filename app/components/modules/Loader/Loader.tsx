import React from 'react'
import styles from "@/app/components/modules/Loader/loader.module.css"

function Loader() {
    return (
        <div className={styles.div}>
            <div className={styles.loader}></div>
        </div>
    )
}

export default Loader