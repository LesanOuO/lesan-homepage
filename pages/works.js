import { Container, Heading } from '@chakra-ui/react' //, SimpleGrid, Divider
import Layout from '../components/layouts/article'
// import Section from '../components/section'
// import { WorkGridItem } from '../components/grid-item'

// import { getRandomNum } from '../lib/utils'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <Heading as="h5" fontSize={16} mt={10} mb={10}>
        In progress ~ 😁
      </Heading>

      {/* <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="inkdrop"
            title="Inkdrop"
            thumbnail={'/images/background/' + getRandomNum(1, 5) + '.jpg'}
          >
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="walknote"
            thumbnail={'/images/background/' + getRandomNum(1, 5) + '.jpg'}
          >
            Music recommendation app for iOS
          </WorkGridItem>
        </Section>
      </SimpleGrid> */}

      {/* <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section> */}
    </Container>
  </Layout>
)

export default Works
