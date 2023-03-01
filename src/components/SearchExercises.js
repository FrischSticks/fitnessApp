import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ( { setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);


  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

      setBodyParts(['all', ... bodyPartsData]);
    }
    fetchExercisesData();
  }, [])
  

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (exercise) => 
        exercise.name.toLowerCase().includes(search) || 
        exercise.target.toLowerCase().includes(search) || 
        exercise.equipment.toLowerCase().includes(search) ||
        exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch('');
      setExercises(searchedExercises);

      window.scrollTo({ top: 1500, behavior: 'smooth'})
    }
  }

  return (
    <Stack alignItems='center' mt='100px' justifyContent='center' >
      <Typography variant='h3' mb='10px' textAlign='center' sx= {{
        fontSize: {lg: '45px', xs: '30px'}
      }}>
        Explore Exercises
      </Typography>
      
      <Box mb='25px' sx={{ position: 'relative', width: '95%', p: '20px'}}>
          <HorizontalScrollbar  data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
      </Box>

      <Box position='relative'>
        <TextField
          height='76px'
          value={search}
          onChange={(e) => setSearch(
            e.target.value.toLowerCase()
          )}
          placeholder='Search Exercises'
          type='text'
          sx={{
            input: {
              fontWeight: '700', border: 'none', borderRadius: '5px'
            },
            width: { lg: '800px', xs: '350px'},
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
        />
        <Button className='searchButton'
          sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform:'none',
            width: { lg: '175px', xs: '75px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px', 
            position: 'absolute',
            right: '0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises