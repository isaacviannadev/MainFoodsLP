/* eslint-disable @next/next/no-img-element */
import { ReactNode } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { styled } from '../../../stitches.config';

import Map from '../CardsServices/map';

const Overlay = styled(Dialog.Overlay, {
  background: 'rgba(0 0 0 / 0.5)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'grid',
  placeItems: 'center',
  overflowY: 'auto',
});

const Content = styled(Dialog.Content, {
  display: 'flex',
  width: '500px',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  minWidth: '300px',
  background: 'white',
  padding: '30px',
  borderRadius: '9px',
  position: 'relative',

  '@bp2': {
    width: '100%',
  },

  '& .video-responsive iframe': {
    borderRadius: '9px ',
  },

  '& img': {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '9px 9px 0 0',
  },
});

const Title = styled(Dialog.Title, {
  '& h3': {
    color: '$yellow',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
});
const Description = styled(Dialog.Description, {
  '& p': {
    color: '$primary',
    textAlign: 'center',
    width: '100%',
    maxWidth: '300px',
    height: '100%',
    padding: '10px 0',
  },
});

const Close = styled(Dialog.Close, {
  position: 'absolute',
  top: '10px',
  right: '10px',
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  background: '$primary',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  border: 'none',
  color: '#fff',
});

interface ModalProps {
  open: boolean;
  text: string;
  title: string;
  trigger?: ReactNode;
  video?: string;
  image?: string;
  embed?: boolean;
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { trigger, open, text, title, video, image, embed, closeModal } = props;
  return (
    <Dialog.Root open={open} modal>
      <Dialog.Trigger />
      <Dialog.Portal>
        <Overlay>
          <Content>
            {video && !image && !embed ? (
              <div className='video-responsive'>
                <iframe
                  width='420'
                  height='240'
                  src={`${video}`}
                  frameBorder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;  clipboard-write;  '
                  allowFullScreen
                  title={`Embedded ${title} MainFoods video`}
                />
              </div>
            ) : embed && !video && !image ? (
              <Map />
            ) : (
              <img src={image} alt={title} />
            )}
            <Title>
              <h3>{title}</h3>
            </Title>
            <Description>
              <p>{text}</p>
            </Description>
            <Close onClick={closeModal}>
              <span>X</span>
            </Close>
          </Content>
        </Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
