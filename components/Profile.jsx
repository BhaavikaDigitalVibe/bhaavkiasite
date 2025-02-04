import { Fragment, useState } from 'react';
import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Icon } from '~/components/icon';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading 
      className={styles.title} 
      data-visible={visible} 
      level={3} 
      id={titleId}
      style={{ 
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        opacity: visible ? 1 : 0,
        transition: 'transform 0.8s ease, opacity 0.8s ease'
      }}
    >
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text 
      className={styles.description} 
      data-visible={visible} 
      size="l" 
      as="p"
      style={{
        transform: visible ? 'translateX(0)' : 'translateX(-20px)',
        opacity: visible ? 1 : 0,
        transition: 'transform 0.8s ease 0.2s, opacity 0.8s ease 0.2s'
      }}
    >
      I'm Bhaavika, a graduate from Nagpur University with a degree in BBA (2011) and certification in Digital Marketing. 
      I'm passionate about digital marketing and web design, and I'm excited to kickstart my career in this dynamic field.
    </Text>
    <Text 
      className={styles.description} 
      data-visible={visible} 
      size="l" 
      as="p"
      style={{
        transform: visible ? 'translateX(0)' : 'translateX(-20px)',
        opacity: visible ? 1 : 0,
        transition: 'transform 0.8s ease 0.4s, opacity 0.8s ease 0.4s'
      }}
    >
      I believe in continuous learning and am always on the lookout for opportunities to grow and make a positive impact. 
      When I'm not working, you can find me practicing yoga, meditating, or enjoying a good movie.
    </Text>
    <div 
      className={styles.skills} 
      data-visible={visible}
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(20px)',
        opacity: visible ? 1 : 0,
        transition: 'transform 0.8s ease 0.6s, opacity 0.8s ease 0.6s'
      }}
    >
      <Heading level={4} as="h4" className={styles.skillsHeading}>
        <DecoderText text="Skills" start={visible} delay={1000} />
      </Heading>
      <div className={styles.skillsTable}>
        <div className={styles.skillsRow}>
          <div 
            className={styles.skill}
            style={{
              animation: visible ? 'fadeInUp 0.8s ease forwards 0.8s' : 'none',
              opacity: 0
            }}
          >
            <Icon icon="social" />
            <Text weight="medium">Social Media Marketing</Text>
          </div>
          <div 
            className={styles.skill}
            style={{
              animation: visible ? 'fadeInUp 0.8s ease forwards 1s' : 'none',
              opacity: 0
            }}
          >
            <Icon icon="design" />
            <Text weight="medium">Web Designing</Text>
          </div>
        </div>
        <div className={styles.skillsRow}>
          <div 
            className={styles.skill}
            style={{
              animation: visible ? 'fadeInUp 0.8s ease forwards 1.2s' : 'none',
              opacity: 0
            }}
          >
            <Icon icon="search" />
            <Text weight="medium">SEO</Text>
          </div>
          <div 
            className={styles.skill}
            style={{
              animation: visible ? 'fadeInUp 0.8s ease forwards 1.4s' : 'none',
              opacity: 0
            }}
          >
            <Icon icon="image" />
            <Text weight="medium">Content Creation</Text>
          </div>
        </div>
        <div className={styles.skillsRow}>
          <div 
            className={styles.skill}
            style={{
              animation: visible ? 'fadeInUp 0.8s ease forwards 1.6s' : 'none',
              opacity: 0
            }}
          >
            <Icon icon="facebook" />
            <Text weight="medium">Facebook Ads</Text>
          </div>
          <div 
            className={styles.skill}
            style={{
              animation: visible ? 'fadeInUp 0.8s ease forwards 1.8s' : 'none',
              opacity: 0
            }}
          >
            <Icon icon="google" />
            <Text weight="medium">Google Ads</Text>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
); 