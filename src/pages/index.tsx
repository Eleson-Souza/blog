import { GetStaticProps } from 'next';

import { FiCalendar, FiUser } from 'react-icons/fi';
import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home(): JSX.Element {
  return (
    <main>
      <div className={styles.posts}>
        <a href="#null">
          <h1>Como utilizar o Hooks</h1>
          <p>Pensando em sincronização em vez de ciclos de vida.</p>
          <div className={styles.postInfo}>
            <div>
              <FiCalendar />
              15 Mar 2022
            </div>
            <div>
              <FiUser />
              Eleson Souza
            </div>
          </div>
        </a>

        <a href="#null">
          <h1>Como utilizar o Hooks</h1>
          <p>Pensando em sincronização em vez de ciclos de vida.</p>
          <div className={styles.postInfo}>
            <div>
              <FiCalendar />
              15 Mar 2022
            </div>
            <div>
              <FiUser />
              Eleson Souza
            </div>
          </div>
        </a>

        <a href="#null">
          <h1>Como utilizar o Hooks</h1>
          <p>Pensando em sincronização em vez de ciclos de vida.</p>
          <div className={styles.postInfo}>
            <div>
              <FiCalendar />
              15 Mar 2022
            </div>
            <div>
              <FiUser />
              Eleson Souza
            </div>
          </div>
        </a>

        <a href="#null">
          <h1>Como utilizar o Hooks</h1>
          <p>Pensando em sincronização em vez de ciclos de vida.</p>
          <div className={styles.postInfo}>
            <div>
              <FiCalendar />
              15 Mar 2022
            </div>
            <div>
              <FiUser />
              Eleson Souza
            </div>
          </div>
        </a>

        <button type="button">Carregar mais posts</button>
      </div>
    </main>
  );
}

//  export const getStaticProps = async () => {
//    /* const prismic = getPrismicClient({});
//    const postsResponse = await prismic.getByType(TODO); */

//    // TODO
// };
