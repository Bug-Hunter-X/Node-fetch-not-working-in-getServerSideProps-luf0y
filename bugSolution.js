```javascript
// pages/about.js
import { unstable_getServerSideProps as getServerSideProps } from 'next/server';
import fetch from 'node-fetch';

export async function getServerSideProps() {
  const res = await fetch('https://api.example.com/data');
  const data = await res.json();

  return {
    props: {
      data: data || {}, // Handle potential null response
    },
  };
}

export default function About({ data }) {
  return (
    <div>
      <h1>About Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```