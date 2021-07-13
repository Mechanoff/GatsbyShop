import React from "react"
import Layout from "../components/Layout"
import * as stylesNotUsedNow from '../styles/home.module.css'
import * as styles from '../styles/projects.module.css'

export default function Home({data}) {
  //const projects = data.projects.nodes 
  /*
  <div className={styles.projects}>
              {projects.map(project => (
                <Link to={"/" + project.frontmatter.slug} key={project.id}> 
                  <div>
                    <h3>{project.frontmatter.title}</h3>
                    <p>{project.frontmatter.stack}</p>
                  </div>
                </Link>
              ))}
            </div>
    
  */
  return (
    <Layout>
      <section className={styles.portfolio}/*className={stylesNotUsedNow.header}*/>
        <div>
          <div>
            <h2>Main content</h2>
          </div>
        </div>
      </section>
    </Layout>  
  )
}