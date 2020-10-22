import React from 'react';

import {
  CategoryProvider,
  CategoryTitle,
  CategoryItem,
} from '@mui-treasury/components/menu/category';
import {
  SocialProvider,
  SocialLink,
} from '@mui-treasury/components/socialLink';
import { useBallSocialLinkStyles } from '@mui-treasury/styles/socialLink/ball';

import { useNikiCategoryMenuStyles } from '@mui-treasury/styles/categoryMenu/niki';
import { ColumnToRow, Row, Item } from '@mui-treasury/components/flex';
import {
  EmailSubscribe,
  EmailTextInput,
  SubmitButton,
} from '@mui-treasury/components/EmailSubscribe';
import { useInfoEmailSubscribeStyles } from '@mui-treasury/styles/emailSubscribe/info';
import ArrowForward from '@material-ui/icons/ArrowForward';

import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//import { FontProvider, Font } from 'website/src/components/Font';

  const OceanAppFooterDemo = React.memo(function OceanAppFooter() {
  return (
   // <FontProvider fonts={[{ font: 'Oswald' }]}>
      <Box width={'100%'} px={{ xs: 2, sm: 3, lg: 4 }} style={{marginTop:'100px'}}>
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
                <Grid item xs={6} sm={4}>
                  <CategoryProvider useStyles={useNikiCategoryMenuStyles}>
                    <CategoryTitle>
                     {/* <Font>Products</Font> */}
                     Producto
                    </CategoryTitle>
                    <CategoryItem>Snowflake Free</CategoryItem>
                    <CategoryItem>Coloristic</CategoryItem>
                    <CategoryItem>Summer free</CategoryItem>
                    <CategoryItem>Lucky store</CategoryItem>
                  </CategoryProvider>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <CategoryProvider useStyles={useNikiCategoryMenuStyles}>
                    <CategoryTitle>
                      {/* <Font>Information</Font> */}Informacion
                    </CategoryTitle>
                    <CategoryItem>License</CategoryItem>
                    <CategoryItem>Privacy Policy</CategoryItem>
                    <CategoryItem>Releases</CategoryItem>
                    <CategoryItem>FAQ</CategoryItem>
                  </CategoryProvider>
                </Grid>
                <Grid item xs={6} sm={4}>
                  <CategoryProvider useStyles={useNikiCategoryMenuStyles}>
                    <CategoryTitle>
                      {/* <Font>About</Font> */}About
                    </CategoryTitle>
                    <CategoryItem>Contacto</CategoryItem>
                    <CategoryItem>Equipo</CategoryItem>
                    <CategoryItem>Soporte</CategoryItem>
                  </CategoryProvider>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={8} lg={4} style={{ marginLeft: 'auto' }}>
              <CategoryProvider useStyles={useNikiCategoryMenuStyles}>
                <CategoryTitle>
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