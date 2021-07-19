import React from 'react'
import styles from '../../src/styles/blog.module.css'
import posts from '../../src/config/posts.json'
import { useRouter } from 'next/router'
import db from '../../src/firebase/firebaseInit'

export default async function() {
    let router = useRouter()
    let post = posts.find(x => x.url == router.query.post)
    return (
        <main>
            <div className={styles["page-content"]}>
                <div className={styles["page-wallpaper"]} style={{backgroundImage: "url(https://www.10wallpaper.com/wallpaper/1920x1080/1309/landscape_blue-Anime_HD_Wallpaper_1920x1080.jpg)"}}></div>
                    <h1>{ post.content.title }</h1>
                    <div className={styles["article-author"]}>
                        <img src={`https://github.com/${post.author}.png`} alt={`avatar-${post.author}`} />
                    <div className={styles["article-author-text"]}>
                        <h5>
                            <a href={`https://github.com/${post.author}/`}>
                                { post.author }
                            </a>
                        </h5>
                        <p>24 de Abril de 2021 às 22:17</p>
                    </div>
                </div>

                <p>This is an implementation of <a href="https://github.com/Tehnut">TehNut</a>'s work Anischedule. If you liked his work, you may contribute to him by going to the Anischedule Project.</p>
            </div>
        </main>
    )
}