import * as React from "react"
import { Helmet } from "react-helmet"
import { Box, Button, Container, Grid, Heading, Text } from 'theme-ui'
// import Footer from "../components/footer"
import Header from '../components/header/Header';
import Hero from "../components/hero"


import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"


// const getImages =  graphql `
//  {
//   file(relativePath: {eq: "heroPic.jpg"}) {
//     childImageSharp {
//       fluid {
//         ...GatsbyImageSharpFluid
//       }
//     }
//   }
// }
// `





// markup
const IndexPage = ({dat}) => {


  // const data = useStaticQuery(getImages)
  // console.log(data)
  
  
  // const data = useStaticQuery(query);
  //   console.log(data)

  return (
    <main>
      <Helmet>
        <script
          src="https://code.jquery.com/jquery-3.5.1.min.js"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossorigin="anonymous"></script>
      </Helmet>

      <title>Home Page</title>
      {/* <Header/> */}
      <Hero />


      <Container p={4}>
        <Heading mb="2" mt="5" p="4">
          About Us
      </Heading>
        <Grid gap={2}
          columns={[2, '1fr 1fr']}>
          {/* image 1 */}
          <Box p="4">
            <Image src="/andreas-klassen-gZB-i-dA6ns-unsplash.jpg" />
            {/* <Image fluid={fluid}/> */}
          </Box>
          <Box p="4">
            <Text mb={3}>
              Lorem ipsum dolor sit amet consectetur adipiscing
          </Text>
            <Button>Learn More</Button>
          </Box>
          <Box p="4">
            <Text mb={3}>
              Lorem ipsum dolor sit amet consectetur adipiscing
          </Text>
            <Button>Learn More</Button>
          </Box>
          {/* image 2 */}
          <Box p="4">
            <Image src="/christina-wocintechchat-com-faEfWCdOKIg-unsplash.jpg" />
          </Box>
          {/* image 3 */}
          <Box p="4">
            <Image src="/christina-wocintechchat-com-tKYfcTaXsf0-unsplash.jpg" />
          </Box>
          <Box p="4">
            <Text mb={3}>
              Lorem ipsum dolor sit amet consectetur adipiscing
            </Text>
            <Button>Learn More</Button>
          </Box>
        </Grid>
      </Container>
    </main>
  )
}

export default IndexPage
