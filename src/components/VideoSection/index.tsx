import { styled } from '../../../stitches.config';

const SectionVideo = styled('section', {
  display: 'flex',
  alignItems: 'center',
  padding: '20px',
  justifyContent: 'center',

  '& .video-responsive': {
    display: 'flex',
    width: '100%',
    paddingBottom: '25%',
    maxWidth: '800px',
    overflow: 'hidden',
    position: 'relative',
    height: '0',

    '@bp2': {
      paddingBottom: '56.25%',
    },

    '&  iframe': {
      left: '0',
      top: '0',
      height: '100%',
      width: '100%',
      position: 'absolute',
      maxHeight: '480px',
    },
  },
});

const VideoSection = () => {
  return (
    <SectionVideo>
      <div className='video-responsive'>
        <iframe
          width='853'
          height='480'
          src={`https://www.youtube.com/embed/-hktF2YTBmw`}
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;  clipboard-write;  '
          allowFullScreen
          title='Embedded youtube MainFoods video'
        />
      </div>
    </SectionVideo>
  );
};

export default VideoSection;
