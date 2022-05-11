import Link from 'next/link'
import Layout from '../components/Layout'
import styled from 'styled-components';

const Heading = styled.h1`
  color: red;
`;

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <Heading>About</Heading>
    <p>This is the about page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
