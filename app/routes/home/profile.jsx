import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';
import { Icon } from '~/components/icon';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I'm Bhaavika, a graduate from Nagpur University with a degree in BBA (2011) and certification in Digital Marketing. 
      I'm passionate about digital marketing and web design, and I'm excited to kickstart my career in this dynamic field.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I believe in continuous learning and am always on the lookout for opportunities to grow and make a positive impact. When I'm not working, you can find me practicing yoga, meditating, or enjoying a good movie.
    </Text>
    <div className={styles.skills} data-visible={visible}>
      <Heading level={4} as="h4" className={styles.skillsHeading}>
        <DecoderText text="Skills" start={visible} delay={1000} />
      </Heading>
      <div className={styles.skillsTable}>
        <div className={styles.skillsRow}>
          <div className={styles.skill}>
            <Icon icon="social" />
            <Text weight="medium">Social Media Marketing</Text>
          </div>
          <div className={styles.skill}>
            <Icon icon="design" />
            <Text weight="medium">Web Designing</Text>
          </div>
        </div>
        <div className={styles.skillsRow}>
          <div className={styles.skill}>
            <Icon icon="search" />
            <Text weight="medium">SEO</Text>
          </div>
          <div className={styles.skill}>
            <Icon icon="image" />
            <Text weight="medium">Thumbnail Creation</Text>
          </div>
        </div>
        <div className={styles.skillsRow}>
          <div className={styles.skill}>
            <Icon icon="facebook" />
            <Text weight="medium">Facebook Ads</Text>
          </div>
          <div className={styles.skill}>
            <Icon icon="google" />
            <Text weight="medium">Google Ads</Text>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me smiling like a goofball at the Qwilr office in Sydney"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
