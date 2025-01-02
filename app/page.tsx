'use client';

import '@root/global.scss';

import * as Constants from '@common/constants';
import * as Utilities from '@common/utilities';

import Accordion from '@components/Accordion';
import ActionBar from '@components/ActionBar';
import ActionButton from '@components/ActionButton';
import ActionListItem from '@components/ActionListItem';
import AlertBanner from '@components/AlertBanner';
import Avatar from '@components/Avatar';
import Badge from '@components/Badge';
import BarLoader from '@components/BarLoader';
import BarProgress from '@components/BarProgress';
import Block from '@components/Block';
import BlockLoader from '@components/BlockLoader';
import Breadcrumbs from '@components/BreadCrumbs';
import Button from '@components/Button';
import ButtonGroup from '@components/ButtonGroup';
import CanvasPlatformer from '@components/CanvasPlatformer';
import CanvasSnake from '@components/CanvasSnake';
import Card from '@components/Card';
import CardDouble from '@components/CardDouble';
import Checkbox from '@components/Checkbox';
import ContentFluid from '@components/ContentFluid';
import DataTable from '@components/DataTable';
import DatePicker from '@components/DatePicker';
import DebugGrid from '@components/DebugGrid';
import DefaultActionBar from '@components/page/DefaultActionBar';
import DefaultLayout from '@components/page/DefaultLayout';
import Divider from '@components/Divider';
import Drawer from '@components/Drawer';
import DropdownMenuTrigger from '@components/DropdownMenuTrigger';
import Grid from '@components/Grid';
import Indent from '@components/Indent';
import Input from '@components/Input';
import IntDevLogo from '@components/svg/IntDevLogo';
import ListItem from '@components/ListItem';
import MatrixLoader from '@components/MatrixLoader';
import Message from '@components/Message';
import MessageViewer from '@components/MessageViewer';
import ModalAlert from '@components/modals/ModalAlert';
import ModalCreateAccount from '@components/modals/ModalCreateAccount';
import ModalError from '@components/modals/ModalError';
import ModalStack from '@components/ModalStack';
import ModalTrigger from '@components/ModalTrigger';
import NumberRangeSlider from '@components/NumberRangeSlider';
import Package from '@root/package.json';
import PopoverTrigger from '@components/PopoverTrigger';
import RadioButtonGroup from '@components/RadioButtonGroup';
import Row from '@components/Row';
import RowSpaceBetween from '@components/RowSpaceBetween';
import Script from 'next/script';
import Text from '@components/Text';
import TextArea from '@components/TextArea';
import TooltipTrigger from '@components/TooltipTrigger';
import TreeView from '@components/TreeView';
import UpdatingDataTable from '@components/examples/UpdatingDataTable';
import Footer from '@components/Footer';
import Hero from '@components/Hero';
import Navigation from '@components/Navigation_updated';
import { lazy, Suspense } from 'react';
import { ModalProvider } from '@components/page/ModalContext';
const Carousel = lazy(() =>
  import('@components/carousel').then(module => ({ default: module.Carousel }))
);

export default function Page(props) {
  return (

    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
      <Suspense fallback={<div>Loading...</div>}>
        <br />
        <Navigation
          logo="✶"
          logoRightAligned={true}
          right={
            <>
              <ModalTrigger modal={ModalCreateAccount}>
                <ActionButton>GO TO MAP</ActionButton>
              </ModalTrigger>
              <ModalTrigger modal={ModalCreateAccount}>
                <ActionButton>SIGN IN</ActionButton>
              </ModalTrigger>
            </>
          }
        >
        </Navigation>

        <DebugGrid /> {/* This is the grid that shows the layout of the page */}
        <DefaultActionBar />
        <Hero />


        <Card title="augment intimacy" mode="left" maxWidth="80vw" centered>

          <Carousel
            placeholder="https://picsum.photos/1920/1080"
            images={[
              {
                src: "https://picsum.photos/seed/1/1920/1080",
                alt: "Placeholder image 1",
              },
              {
                src: "https://picsum.photos/seed/2/1920/1080",
                alt: "Placeholder image 2", 
              },
              {
                src: "https://picsum.photos/seed/3/1920/1080",
                alt: "Placeholder image 3",
              },
            ]}
            width={1920}
            height={1080}
          />
        </Card>


        <Grid>
          
          <Row>
            {Package.name.toUpperCase()} <Badge>Version {Package.version}</Badge>
          </Row>
          <Row>{Package.description}</Row>
        </Grid>

              


        <Card title="LOADING" centered glow>
              <BarLoader intervalRate={1000} />
        </Card>
        <Grid>
          <ActionListItem icon={`⭢`} href="https://github.com/starsof-ar/landing" target="_blank">
            View the source code
          </ActionListItem>
        </Grid>



        <ModalStack />
        <Footer companyName="Starsof AR" />
        
      </Suspense>
    </DefaultLayout>

  );
}
