import { Link } from 'react-router-dom'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Divider, Button, ButtonGroup } from '@chakra-ui/react'
import { GetSingleAnimeData } from '../Data/getSingleAnimeData'
import { useQuery } from '@apollo/client'

export const SingleFavCard = (props: any) => {

    const {data } = useQuery(GetSingleAnimeData, {
        variables: {
            id: props.id
        }
    })

    function removeThisAnimeFromFav() {
        props.removeFav(props.id);
    }

    return (
        <div>
            {data && (
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
                        src={data.Media.coverImage.large}
                        alt='Image not Found!'
                    />

                    <Stack>
                        <CardBody>
                            <Heading size='2xl' textColor="white">{data.Media.title.userPreferred}</Heading>
                            <Divider />
                            <Text py='2' textColor="white">
                                Description:
                                <br></br>
                                {data.Media.description}
                            </Text>
                            <Divider />
                            <Text color='blue.600' fontSize='2xl'>
                                Popularity: {data.Media.popularity}
                            </Text>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup>
                                <Link to={`/${props.id}`}>
                                    <Button variant='solid' colorScheme='blue'>
                                        Detail
                                    </Button>
                                </Link>
                                <Button variant='ghost' colorScheme='blue' onClick={removeThisAnimeFromFav}>
                                    Delete from Favorite List
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Stack>
                </Card>)}
        </div>
    )
}