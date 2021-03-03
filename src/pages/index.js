import * as React from "react"
import { Helmet } from "react-helmet"
import { Box, Button, Container, Grid, Heading, Text } from 'theme-ui'
import Image from "gatsby-image"

// import Footer from "../components/footer"
import Header from '../components/header/Header';
import Hero from "../components/Hero"
import Footer from "../components/Footer"


import { graphql, useStaticQuery } from "gatsby"
// import Image from "gatsby-image"

const getImages =  graphql `
 {
  fluid: file(relativePath: {eq: "andreas-klassen.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
  fluid2: file(relativePath: {eq: "christina-1.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid  
      }
    }
  }
  fluid3: file(relativePath: {eq: "christina-2.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid  
      }
    }
  }
}
`




// markup
const IndexPage = ({dat}) => {

  const data = useStaticQuery(getImages)
  console.log(data)


  return (
    <main>
      <Helmet>
        <script
          src="https://code.jquery.com/jquery-3.5.1.min.js"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossorigin="anonymous"></script>
      </Helmet>
      <title>Home Page</title>
      <Hero />

      <Container p={4}>
        <Heading mb="2" mt="5" p="4">
          About Us
      </Heading>


 
        <Grid gap={2}
          columns={[2, '1fr 1fr']}>
          
          <Box p="4">
          <Image fluid={data.fluid.childImageSharp.fluid}></Image>
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
          <Box p="4">
          <Image fluid={data. fluid2.childImageSharp.fluid}></Image>
          </Box>
          <Box p="4">
          <Image fluid={data.fluid3.childImageSharp.fluid}></Image>
          </Box>
          <Box p="4">
            <Text mb={3}>
              Lorem ipsum dolor sit amet consectetur adipiscing
            </Text>
            <Button>Learn More</Button>
          </Box>
        </Grid>
      </Container>
      <Footer/>
    </main>
  )
}

export default IndexPage
