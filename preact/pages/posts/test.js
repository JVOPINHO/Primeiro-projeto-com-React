import React from 'react'
import styles from '../../src/styles/blog.module.css'
import posts from '../../src/config/posts.json'

export default function() {
    // let router = useRouter()
    // console.log(router.query)
    return (
        <main>
            <div className={styles["topic"]}>
                <div className={styles["page-content"]}>
                <div className={styles["page-wallpaper"]} style={{backgroundImage: "url(https://www.10wallpaper.com/wallpaper/1920x1080/1309/landscape_blue-Anime_HD_Wallpaper_1920x1080.jpg)"}}></div>
                <h1>Setting up your server's Anischedule Feature</h1>
                <div className={styles["article-author"]}>
                <img src="https://avatars2.githubusercontent.com/u/56829176?s=460&u=dbf824065eda930c1407ed58cb51c3b755249bfd&v=4" alt="" />
                <div className="article-author-text">
                <h5>
                <a style={{color: "#fffafa"}} href="https://github.com/maisans-maid/">
                Sakurajimai
                </a>
                </h5>
                <p>24 de Abril de 2021 às 22:17</p>
                </div>
                </div>
                </div>
            </div>
        </main>
    )
}