import { Route, Routes, useParams } from "react-router-dom"
import posts from "json/posts.json"
import PostModelo from "componentes/postModelo";
import ReactMarkdowm from "react-markdown";
import "./Post.css"
import styles from "./Post.module.css";
import Notfound from "pages/notfound";
import PaginaPradrao from "componentes/PaginaPadrao";
import PostCard from "componentes/postCard";


export default function Post() {
    const parametros = useParams();

    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    const conteudosRecomendados = posts.filter((post) => post.id !== Number(parametros.id)).slice(0, 4)

    if (!post) {
        return <Notfound />
    }

    return (
        <Routes>
            <Route path="*" element={<PaginaPradrao />}>
                <Route index element={
                    <PostModelo
                        FotoCapa={`/assets/posts/${post.id}/capa.png`}
                        titulo={post.titulo}
                    >
                        <div className="post-markdown-container">
                            <ReactMarkdowm>{post.texto}</ReactMarkdowm>
                        </div>

                        <h2 className={styles.tituloOutrosPosts}>
                            Outros posts que você pode gostar:
                        </h2>

                        <ul className={styles.postsRecomendados}>
                            {conteudosRecomendados.map((post) => (
                                <li key={post.id}>
                                    <PostCard post={post} />
                                </li>
                            ))}
                        </ul>
                    </PostModelo>
                } />
            </Route>

        </Routes>
    )
}