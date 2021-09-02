import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../../node_modules/axios/index';
import usePromise from '../lib/usePromise';
import Newsitem from './Newsitem';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b1c635b1d48343caa39720456882ee30`,
    );
  }, [category]);
  //대기중일때
  if (loading) {
    return <NewsListBlock>대기중 ......</NewsListBlock>;
  }
  //아직 response 값이 설정되지 않을때
  if (!response) {
    return null;
  }
  //response 값이 유효할때
  const { articles } = response.data;
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <Newsitem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
