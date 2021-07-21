import React from 'react'
import styles from '../../src/styles/blog.module.css'
import posts from '../../src/config/posts.json'
import { useRouter } from 'next/router'
import firebase from 'firebase'
const db = firebase.database()

export default function Post() {
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

                <br />
                <p>Este é um teste de post. Bruh</p>

                <div className={styles["topic"]}>
                    <br />
                    <h2>Teste</h2>
                    <br />

                    <img class="assets" src="https://media.discordapp.net/attachments/782988962444214312/866838946172239882/unknown.png" alt="" />
                    <p>Esta é a <code>API</code> do senhor Weariful</p>
                </div>
            </div>
        </main>
    )
}