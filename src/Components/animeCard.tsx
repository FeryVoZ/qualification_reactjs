import {Link} from 'react-router-dom'
import { Card,  CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button, ButtonGroup } from '@chakra-ui/react'


export const AnimeListCard = (props:any) => {

    function addThisAnimeToFav(){
        props.addFav(props.data.id);
    }

    return(
    <div>
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            bgColor="black"
            >
            <Image
                bgColor="black"
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={props.data.coverImage.large}
                alt='Image not Found!'
            />

            <Stack>
                <CardBody>
                <Heading size='2xl' textColor="white">{props.data.title.userPreferred}</Heading>
                <Divider />
                <Text py='2' textColor="white">
                    Description:
                    <br></br>
                    {props.data.description}
                </Text>
                <Divider />
                <Text color='blue.600' fontSize='2xl'>
                            Popularity: {props.data.popularity}
                </Text>
                </CardBody>
                <Divider />
                <CardFooter>
                <ButtonGroup>
                    <Link to={`/${props.data.id}`}>
                        <Button variant='solid' colorScheme='blue'>
                        Detail
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
)}