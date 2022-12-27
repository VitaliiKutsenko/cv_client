import React from 'react';
import { MainPageWrapper, MainPageNews } from './mainPageStyled';
import { Navigate } from 'react-router-dom';
import { Login } from '../auth/login/login';
import { useDispatch, useSelector } from 'react-redux';
import { MainPageAuth } from './components/mainPageAuth';

const MainPage = ({}) => {
  const auth = useSelector(store => store.auth.checkAuth);

  if (auth.success) {
    return <Navigate to={`/${auth.data.username}`} />;
  }

  if (!auth.success) {
    return (
      <MainPageWrapper>
        <MainPageNews>
          <ul>
            <li>
              similique sint, sunt tempora! Accusantium adipisci cumque doloribus esse nihil nostrum
              perspiciatis? Accusamus, aperiam aspernatur at beatae blanditiis dolor doloribus
              explicabo inventore ipsa libero maiores maxime modi nesciunt praesentium quae quas
              quis repellat similique sint sunt ullam voluptates voluptatibus voluptatum. A,
              architecto atque autem blanditiis cupiditate deserunt, dolor doloribus est molestiae
              nisi officiis quam, quasi tempora temporibus tenetur! Animi, culpa deserunt dolores
              excepturi, fugiat, fugit harum iusto quas ratione sed suscipit tenetur! Eaque eos
              ipsum quos! Corporis culpa minus necessitatibus numquam obcaecati
            </li>
            <li>
              {' '}
              tempora totam unde velit voluptates voluptatibus. Modi pariatur soluta tempore
              voluptatum. Atque dolore, dolorem enim error magni maiores molestias nulla quae quasi?
              A ad aspernatur hic illum inventore magni molestias, odio rerum sunt velit? A adipisci
              consequuntur culpa deleniti dolore eveniet excepturi impedit inventore iure
              laboriosam, necessitatibus nemo odit provident quibusdam quisquam, saepe similique
              tempore ut, velit voluptate. Alias aspernatur autem blanditiis earum eos eum fugiat
              hic magnam molestiae odio provident, quae quaerat, rerum, tempore veritatis.
              Accusantium aliquam beatae deleniti ducimus eligendi enim esse ex inventore molestias,
              nisi nostrum odit perspiciatis praesentium quasi sapiente sed similique tempora vel!
              Deleniti distinctio velit voluptatem?
            </li>
            <li>
              necessitatibus officia provident quis soluta! Aliquid asperiores at blanditiis
              consectetur consequatur corporis dignissimos doloremque dolorum ducimus eaque facilis
              fuga ipsa iste labore molestias mollitia nam neque non odio officia, optio placeat
              porro praesentium quaerat quasi quibusdam quisquam quod recusandae rem repudiandae sed
              sint tempora veniam voluptas voluptatem voluptates voluptatibus. Atque corporis dolore
              dolorum explicabo in libero, nemo quibusdam quis tempore, ullam, veritatis vitae?
              Alias dolorem, ducimus eum excepturi facere hic iure maxime, obcaecati odit, omnis
              perspiciatis quas quidem quisquam repellat sapiente vero voluptates. Animi asperiores
              at enim expedita in ipsa iure minima neque soluta? Ab adipisci atque aut consequuntur
              culpa cumque enim explicabo, id molestiae nam natus nemo nulla numquam officia
              repudiandae rerum, saepe unde veritatis voluptas voluptatum? Amet cum deleniti
              dignissimos doloribus, error, fuga ipsa ipsam magni quam qui repellendus reprehenderit
              rerum suscipit! Ab ad aliquid beatae, commodi cum distinctio dolor illum labore magnam
              magni molestias neque nisi obcaecati pariatur perfe
            </li>
          </ul>
        </MainPageNews>
        <MainPageAuth />
      </MainPageWrapper>
    );
  }

  return null;
};

export default MainPage;
