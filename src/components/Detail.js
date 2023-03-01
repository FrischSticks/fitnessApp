import React from 'react'
import { Typography, Stack, Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ( { exerciseDetail }) => {
    const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;
    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        },
    ]

  return (
    <Stack gap='60px' sx={{
        flexDirection: { lg: 'row' },
        p: '20px',
        alignItems: 'center'
    }}>
        <img src={gifUrl} alt={name} loading='lazy' className='detailImage'/>
        <Stack sx={{gap: { lg: '35px', xs: '20px' }}}>
            <Typography variant='h3' textTransform='capitalize'>{name}</Typography>
            <Typography variant='h6'>
                Doing {name} is one of the exercises you can do to target your {target}. Consistent exercise will help improve your strength, mood, and energy.
            </Typography>
            <Typography>
                {extraDetail.map((item) => (
                    <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
                        <Button sx={{ background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px'}}>
                            <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px '}}/>
                        </Button>
                        <Typography variant='h6' textTransform='capitalize'>{item.name}</Typography>
                    </Stack>
                ))}
            </Typography>
        </Stack>
    </Stack>
  )
}

export default Detail