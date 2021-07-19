import styled from 'styled-components'
import React from 'react'
import styles from '../src/styles/blog.module.css'
import posts from '../src/config/posts.json'

class Home extends React.Component {
  render() {

    return (
      
        <div className={styles["bottom-container"]}>
          <div className={styles["article-containers"]}>
            <div className={styles["article-title"]}>
              Principais
              <span className={styles["article-title-line"]} />
            </div>

            {posts.filter(x => x.pinned == true).map(x => {
              return (
                <div className={styles["featured-article"]} onClick={
                  function redirect() {
                    return window.location = "https://youtube.com/"
                  }
                }>
                  <div className={styles["featured-article-image"]} style={{backgroundImage: "url(https://www.10wallpaper.com/wallpaper/1920x1080/1309/landscape_blue-Anime_HD_Wallpaper_1920x1080.jpg)"}}> </div>
    
                  <div className={styles["featured-article-content"]}>
                    <h1>{ x.content.title }</h1>
                    <p>{ x.content.description }</p>
                    <div className={styles["article-author"]}>
                      <img src={`https://github.com/${x.author}.png`} alt={`avatar-${x.author}`} />
                      <div className={styles["article-author-text"]}>
                        <h5>
                        <a href={`https://github.com/${x.author}`}>
                          { x.author }
                        </a>
                        </h5>
                        <p>24 de Abril de 2021 às 22:17</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            <div className={styles["other-articles"]}>
              {posts.filter(x => x.pinned != true).map(x => {
                return (
                  <div className={styles["article"]} href="/">
                    <div className={styles["article-img"]} style={{backgroundImage: `url(https://i.pinimg.com/736x/5d/fa/17/5dfa1765bd534a19c5972d209a2be1ba.jpg)`}}></div>
                    <div className={styles["article-content"]}>
                      <h1>{ x.content.title }</h1>
                      <p>{ x.content.description }</p>
                      <div className={styles["article-author"]}>
                        <img src={`https://github.com/${x.author}.png`} alt="" />
                        <div className={styles["article-author-text"]}>
                          <h5>
                          <a href={`https://github.com/${x.author}`}>
                          { x.author }
                          </a>
                          </h5>
                          <p>24/05/2021</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      
    )
  }
}

export default Home