import { GetStaticPaths, GetStaticProps } from 'next';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post(): JSX.Element {
  return (
    <main>
      <div className={styles.banner}>
        <img
          src="https://img.freepik.com/vetores-gratis/banner-site-abstrato-com-formas-modernas_1361-1738.jpg?w=2000"
          alt="Imagem Banner"
        />
      </div>

      <div className={styles.post}>
        <header>
          <h1>Título do Post</h1>
          <div className={styles.headerInfo}>
            <div>
              <FiCalendar />
              15 Mar 2022
            </div>
            <div>
              <FiUser />
              Eleson Souza
            </div>
            <div>
              <FiClock />
              4min
            </div>
          </div>
        </header>

        <article>
          <h3>Lorem ipsum dolor</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            asperiores quas illo iste? Placeat, ducimus! Eius aliquam temporibus
            voluptas, expedita, dolores veniam sit ex dolorem doloremque nam
            repellat odit optio!
          </p>

          <h3>Lorem ipsum dolor</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
            asperiores quas illo iste? Placeat, ducimus! Eius aliquam temporibus
            voluptas, expedita, dolores veniam sit ex dolorem doloremque nam
            repellat odit optio! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Eius qui eos dolores tempore quam deserunt
            delectus ipsa fuga tempora, eligendi, magnam impedit, dicta id quas
            recusandae et esse aliquid ratione! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Corporis asperiores quas illo iste?
            Placeat, ducimus! Eius aliquam temporibus voluptas, expedita,
            dolores veniam sit ex dolorem doloremque nam repellat odit optio!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius qui
            eos dolores tempore quam deserunt delectus ipsa fuga tempora,
            eligendi, magnam impedit, dicta id quas recusandae et esse aliquid
            ratione!
          </p>
        </article>
      </div>
    </main>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient({});
//   const posts = await prismic.getByType(TODO);

//   // TODO
// };

// export const getStaticProps = async ({params }) => {
//   const prismic = getPrismicClient({});
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
