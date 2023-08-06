import { GenerateImage } from '@/Imagesgenerator';
import React from 'react'

const OpenAIGenerateImage = async() => {
  
  try {
    const imageUrl = await GenerateImage('a white siamese cat')
    
  } catch (error) {
    console.log('====================================');
    console.log(error);
    console.log('====================================');
  }
  return (
    <div>OpenAIGenerateImage</div>
  )
}

export default OpenAIGenerateImage