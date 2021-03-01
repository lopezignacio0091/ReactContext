import React from 'react';

import {CategoryProvider,CategoryTitle,CategoryItem} from '@mui-treasury/components/menu/category';
import {SocialProvider, SocialLink} from '@mui-treasury/components/socialLink';
import { useBallSocialLinkStyles } from '@mui-treasury/styles/socialLink/ball';
import { useNikiCategoryMenuStyles } from '@mui-treasury/styles/categoryMenu/niki';
import { ColumnToRow, Row, Item } from '@mui-treasury/components/flex';
import {EmailSubscribe,EmailTextInput,SubmitButton,} from '@mui-treasury/components/EmailSubscribe';
import { useInfoEmailSubscribeStyles } from '@mui-treasury/styles/emailSubscribe/info';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


  const OceanAppFooterDemo = React.memo(function OceanAppFooter() {
  return (
   // <FontProvider fonts={[{ font: 'Oswald' }]}>
      <Box width={'100%'} px={{ xs: 2, sm: 3, lg: 4 }} style={{backgroundColor:"rgb(167, 163, 163)"}}>
        <Box pt={6} pb={{ md: 6 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4} lg={3}>
              <Box
                component={'img'}
                mt={-3}
                width={150}
                src="./LogoEMP.png"
                alt=""
              />
              <Box>
                <SocialProvider useStyles={useBallSocialLinkStyles}>
                  <SocialLink brand={'Envelope'} />
                  <SocialLink brand={'GooglePlus'} />
                  <SocialLink brand={'Pinterest'} />
                  <SocialLink brand={'Dribbble'} />
                </SocialProvider>
              </Box>
            </Grid>
            <Grid item xs={12} md={8} lg={5}>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={4}  style={{color:"rgb(232, 231, 231)"}}>
                  <CategoryProvider useStyles={useNikiCategoryMenuStyles}>
                    <CategoryTitle style={{color:"rgb(232, 231, 231)"}}>
                     {/* <Font>Products</Font> */}
                     Producto
                    </CategoryTitle>
                    <CategoryItem style={{color:"rgb(232, 231, 231)"}}>Snowflake Free</CategoryItem>
                    <CategoryItem style={{color:"rgb(232, 231, 231)"}}>Coloristic</CategoryItem>
                    <CategoryItem style={{color:"rgb(232, 231, 231)"}}>Summer free</CategoryItem>
                    <CategoryItem style={{color:"rgb(232, 231, 231)"}}>Lucky store</CategoryItem>
                  </CategoryProvider>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <CategoryProvider useStyles={useNikiCategoryMenuStyles}>
                    <CategoryTitle style={{color:"rgb(232, 231, 231)"}}>
                      {/* <Font>Information</Font> */}Informacion
                    </CategoryTitle>
                    <CategoryItem style={{color:"rgb(232, 231, 231)"}}>License</CategoryItem>
                    <CategoryItem style={{color:"rgb(232, 231, 231)"}}>Privacy Policy</CategoryItem>
                    <CategoryItem style={{color:"rgb(232, 231, 231)"}}>Releases</CategoryItem>
                    <CategoryItem style={{color:"rgb(232, 231, 231)"}}>FAQ</CategoryItem>
                  </CategoryProvider>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <CategoryProvider useStyles={useNikiCategoryMenuStyles}>
                    <CategoryTitle style={{color:"rgb(232, 231, 231)"}}>
                      {/* <Font>About</Font> */}About
                    </CategoryTitle>
                    <CategoryItem style={{color:"rgb(232, 231, 231)"}}>Contacto</CategoryItem>
                    <CategoryItem style={{color:"rgb(232, 231, 231)"}}>Equipo</CategoryItem>
                    <CategoryItem style={{color:"rgb(232, 231, 231)"}}>Soporte</CategoryItem>
                  </CategoryProvider>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={8} lg={4} style={{ marginLeft: 'auto' }}>
              <CategoryProvider useStyles={useNikiCategoryMenuStyles}>
                <CategoryTitle style={{color:"rgb(232, 231, 231)"}}>
                  {/* <Font>Subscribe</Font> */}Subscribirse
                </CategoryTitle>
              </CategoryProvider>
              <EmailSubscribe
                onSubmit={email => alert(`Your email is ${email}.`)}
                useStyles={useInfoEmailSubscribeStyles}
                inputClearedAfterSubmit
              >
                <EmailTextInput placeholder="Direccion Email" />
                <SubmitButton aria-label={'subscribirse'}>
                  <ArrowForward />
                </SubmitButton>
              </EmailSubscribe>
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <ColumnToRow
          at={'md'}
          columnStyle={{ alignItems: 'center' }}
          rowStyle={{ alignItems: 'unset' }}
        >
          <Item grow shrink={0}>
            <Box py={1} textAlign={{ xs: 'center', md: 'left' }}>
              <Typography
                component={'p'}
                variant={'caption'}
                color={'textSecondary'}
                style={{color:"rgb(232, 231, 231)"}}
              >
               Ciudad Evita -La Matanza
              </Typography>
            </Box>
          </Item>
          <Item>
            <Box py={1} textAlign={{ xs: 'center', md: 'right' }}>
              <Typography
                component={'p'}
                variant={'caption'}
                color={'textSecondary'}
                style={{color:"rgb(232, 231, 231)"}}
              >
                ©2020 All right reserved
              </Typography>
            </Box>
          </Item>
        </ColumnToRow>
      </Box>
    // </FontProvider>
  );
});
export default OceanAppFooterDemo