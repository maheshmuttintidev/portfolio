import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export const Home = () => {
  return (
    <>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Mahesh Muttinti</Text>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.title}>About Me</Text>
        <Image
          style={styles.image}
          source={{uri: 'https://i.ibb.co/drYZ6xh/dev-pose-in-chair.png'}}
        />
        <Text style={styles.paragraph}>
          Hi! I'm Mahesh Muttinti, a passionate developer with expertise in web
          and mobile application development. I build web and mobile
          applications using React, React Native as frontend and Node Js as
          backend.
        </Text>

        {/* Technical Skills */}
        <Text style={styles.title}>Technical Skills</Text>
        <View style={styles.skillsContainer}>
          <Text style={styles.skill}>HTML5</Text>
          <Text style={styles.skill}>CSS3</Text>
          <Text style={styles.skill}>JavaScript</Text>
          <Text style={styles.skill}>REACT-JS</Text>
          <Text style={styles.skill}>REACT-NATIVE</Text>
          <Text style={styles.skill}>NODE-JS</Text>
          <Text style={styles.skill}>KNEX-JS</Text>
          <Text style={styles.skill}>PostgreSQL</Text>
          <Text style={styles.skill}>MongoDB</Text>
        </View>

        {/* Contact Section */}
        <Text style={styles.title}>Contact</Text>
        <Text style={styles.paragraph}>
          If you need any help with website development or mobile app
          development, I've got your back. Let's collaborate and bring your
          ideas to life! Looking forward to working together.
        </Text>
        <Image
          style={styles.image}
          source={{
            uri: 'https://maheshmuttintidev.in/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fz27TLdM%2Fprof-look-for-contacting.png&w=640&q=75',
          }}
        />
        {/* Add your contact details here, such as email or phone number */}
        <Text style={styles.contactDetails}>
          Email: maheshmuttinti@gmail.com
        </Text>
        <Text style={styles.contactDetails}>Phone: +919603757304</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Mahesh Muttinti</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#090909',
  },
  headerText: {
    fontSize: 24,
    color: '#ffffff',
    textAlign: 'center',
  },
  mainContent: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    color: '#000000',
    fontWeight: '800',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 20,
    color: '#000000',
  },
  skillsContainer: {
    marginBottom: 20,
  },
  skill: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000000',
  },
  contactDetails: {
    fontSize: 16,
    marginBottom: 5,
    color: '#000000',
  },
  footer: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#090909',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#ffffff',
  },
});
