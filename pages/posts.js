import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import { getRandomNum } from '../lib/utils'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  console.log(allPostsData)
  return {
    props: {
      allPostsData
    }
  }
}

const Posts = ({ allPostsData }) => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          {allPostsData.map(({ id, date, title }) => (
            <GridItem
              key={id}
              title={title}
              thumbnail={'/images/background/' + getRandomNum(1, 5) + '.jpg'}
              href={`/posts/${id}`}
            />
          ))}
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
// export { getServerSideProps } from '../components/chakra'
