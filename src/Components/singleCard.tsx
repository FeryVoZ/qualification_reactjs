import { Box, Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button, ButtonGroup} from '@chakra-ui/react'
// import { color } from 'framer-motion'
import {Link} from 'react-router-dom'

export const AnimeSingleCard = (props: any) => {
    function addThisAnimeToFav(){
        props.addFav(props.data.id);
    }
    return (
        <div >
            <Card bgColor="black"
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={props.data.Media.coverImage.large}
                alt='Image not Found!'
            />

            <Stack spacing='2'>
                <CardBody>
                <Heading size='2xl' textColor="white">{props.data.Media.title.userPreferred}</Heading>
                <Divider />
                <Text py='2' textColor="white">
                    Description:
                    <br></br>
                    {props.data.Media.description}
                </Text>
                <Divider />
                <Text textColor="white">
                    Genres: {props.data.Media.genres}
                </Text>
                    <Text textColor="white">
                        Characters : 
                        <Box display='flex' maxW='sm'>
                            {props.data.Media.characters.nodes.map((data: any) => {
                                return (<Text textColor="white">{data.name.userPreferred};</Text>)
                                })
                            }
                        </Box>
                    </Text>
                <Text color='blue.600' fontSize='2xl'>
                            Popularity: {props.data.popularity}
                </Text>
                </CardBody>
                <Divider />
                <CardFooter>
                <ButtonGroup>
                    <Link to={`/`}>
                        <Button variant='solid' colorScheme='blue'>
                        Back to Home
                        </Button>
                    </Link>
                    {props.favList && props.favList.includes(props.data.id) ? 
                        (<Text textColor="white">
                            Already in Your Favorite List
                        </Text>)
                        :
                        (<Button variant='ghost' colorScheme='blue' onClick={addThisAnimeToFav}>
                            Add to Favorite List
                        </Button>)     
                    }
                </ButtonGroup>
                </CardFooter>
            </Stack>
            </Card>
        </div>
    )
}