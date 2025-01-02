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
export const dynamic = 'force-static';

export async function generateMetadata({ params, searchParams }) {
  const title = Package.name;
  const description = Package.description;
  const url = 'https://FIXME';
  const handle = '@intstudio';

  return {
    description,
    icons: {
      apple: [{ url: '/apple-touch-icon.png' }, { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
      icon: '/favicon-32x32.png',
      other: [
        {
          rel: 'apple-touch-icon-precomposed',
          url: '/apple-touch-icon-precomposed.png',
        },
      ],
      shortcut: '/favicon-16x16.png',
    },
    metadataBase: new URL('https://wireframes.internet.dev'),
    openGraph: {
      description,
      images: [
        {
          url: 'https://next-s3-public.s3.us-west-2.amazonaws.com/social/social-sacred-computer.png',
          width: 1500,
          height: 785,
        },
      ],
      title,
      type: 'website',
      url,
    },
    title,
    twitter: {
      card: 'summary_large_image',
      description,
      handle,
      images: ['https://next-s3-public.s3.us-west-2.amazonaws.com/social/social-sacred-computer.png'],
      title,
      url,
    },
    url,
  };
}

export default async function Page(props) {
  return (
    <DefaultLayout previewPixelSRC="https://intdev-global.s3.us-west-2.amazonaws.com/template-app-icon.png">
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
      
    </DefaultLayout>
  );
}
