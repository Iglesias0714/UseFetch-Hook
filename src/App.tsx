// src/App.tsx
import React from 'react';
import useFetch from '../src/Hooks/useFetch';

interface DataType {
  id: number;
  title: string;
  body: string;
}

const App: React.FC = () => {
  const { data, error, isLoading } = useFetch<DataType[]>('https://jsonplaceholder.typicode.com/posts');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data && data.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
