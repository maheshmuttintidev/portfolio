import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';

export const Home = () => {
  return (
    <>
      <View style={[styles.header, {height: 350}]}>
        <TwoEyes />
        <View style={{}}>
          <View
            style={{
              height: 200,
              width: '100%',
            }}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://maheshmuttintidev.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrand_banner.dc7ebcbd.webp&w=1920&q=75',
              }}
            />
          </View>
          <Text
            style={[
              styles.headerText,
              {
                fontSize: 24,
                color: 'black',
              },
            ]}>
            Full Stack Web and Mobile Application Developer
          </Text>
        </View>
      </View>

      <View style={styles.mainContent}>
        <View
          style={[
            styles.card,
            {
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: 'royalblue',
              flex: 1,
            },
          ]}>
          <View
            style={{
              height: '90%',
              position: 'absolute',
              width: '80%',
              backgroundColor: 'tomato',
              borderTopLeftRadius: 12,
              borderTopRightRadius: 23,
              borderBottomLeftRadius: 13,
              borderBottomRightRadius: 102,
              borderWidth: 1,
              borderColor: 'white',
            }}
          />
          <View
            style={{
              height: '90%',
              position: 'absolute',
              width: '80%',
              backgroundColor: 'violet',
              borderTopLeftRadius: 13,
              borderTopRightRadius: 23,
              borderBottomLeftRadius: 13,
              borderBottomRightRadius: 102,
              top: '20%',
              left: '40%',
              zIndex: -1,
            }}
          />
          <Text style={[styles.title, {color: 'white', fontSize: 24}]}>
            About Me
          </Text>
          <View style={{height: 200}}>
            <Image
              style={styles.image}
              source={{uri: 'https://i.ibb.co/drYZ6xh/dev-pose-in-chair.png'}}
            />
          </View>
          <Text
            style={[
              styles.paragraph,
              {
                color: '#101010',
                borderWidth: 1,
                borderColor: 'gold',
                fontSize: 20,
                textAlign: 'center',
                fontWeight: '600',
                backgroundColor: '#e1de30aa',
                padding: 12,
                borderRadius: 12,
              },
            ]}>
            Hi! My Name is Mahesh Muttinti, a passionate developer with
            expertise in{' '}
            <Text
              style={[
                styles.paragraph,
                {
                  color: '#101010',
                  borderWidth: 1,
                  borderColor: 'gold',
                  fontSize: 24,
                  textAlign: 'center',
                  fontWeight: '700',
                },
              ]}>
              Web
            </Text>{' '}
            and{' '}
            <Text
              style={[
                styles.paragraph,
                {
                  color: '#101010',
                  borderWidth: 1,
                  borderColor: 'gold',
                  fontSize: 24,
                  textAlign: 'center',
                  fontWeight: '700',
                },
              ]}>
              Mobile
            </Text>{' '}
            application development. I build web and mobile applications using{' '}
            <Text
              style={[
                styles.paragraph,
                {
                  color: '#101010',
                  borderWidth: 1,
                  borderColor: 'gold',
                  fontSize: 24,
                  textAlign: 'center',
                  fontWeight: '700',
                },
              ]}>
              React
            </Text>
            ,{' '}
            <Text
              style={[
                styles.paragraph,
                {
                  color: '#101010',
                  borderWidth: 1,
                  borderColor: 'gold',
                  fontSize: 24,
                  textAlign: 'center',
                  fontWeight: '700',
                },
              ]}>
              React Native
            </Text>{' '}
            as Frontend and{' '}
            <Text
              style={[
                styles.paragraph,
                {
                  color: '#101010',
                  borderWidth: 1,
                  borderColor: 'gold',
                  fontSize: 24,
                  textAlign: 'center',
                  fontWeight: '700',
                },
              ]}>
              Node Js
            </Text>
            , and{' '}
            <Text
              style={[
                styles.paragraph,
                {
                  color: '#101010',
                  borderWidth: 1,
                  borderColor: 'gold',
                  fontSize: 24,
                  textAlign: 'center',
                  fontWeight: '700',
                },
              ]}>
              MongoDB/Postgresql
            </Text>{' '}
            as backend.
          </Text>
        </View>

        <View
          style={[
            styles.card,
            {backgroundColor: 'white', position: 'relative'},
          ]}>
          <Text
            style={[
              styles.title,
              {
                fontSize: 24,
                backgroundColor: 'lightgreen',
                borderTopLeftRadius: 0,
                borderWidth: 1,
                borderColor: 'green',
                borderTopRightRadius: 100,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 102,
                paddingVertical: 12,
                paddingHorizontal: 24,
              },
            ]}>
            Technical Skills
          </Text>

          <View style={{height: 300}}>
            <View
              style={{
                height: '90%',
                position: 'absolute',
                width: '80%',
                flex: 1,
                backgroundColor: 'lightgrey',
                borderTopLeftRadius: 55,
                borderTopRightRadius: 100,
                borderBottomLeftRadius: 102,
                borderBottomRightRadius: 100,
                top: '12%',
                left: 10,
                borderWidth: 1,
                borderColor: 'grey',
              }}>
              <Text
                style={{
                  backgroundColor: 'pink',
                  width: 120,
                  textAlign: 'center',
                  borderRadius: 12,
                  paddingVertical: 3,
                  color: 'red',
                  fontWeight: '700',
                  borderColor: 'red',
                  borderWidth: 1,
                  position: 'absolute',
                  left: 0,
                  top: -20,
                }}>
                Backend Technologies
              </Text>
              <View
                style={[
                  styles.skillsContainer,
                  {
                    paddingTop: 42,
                    paddingLeft: 12,
                  },
                ]}>
                <Text
                  style={[styles.skill, {color: 'black', textAlign: 'left'}]}>
                  NODE-JS
                </Text>
                <Text
                  style={[styles.skill, {color: 'black', textAlign: 'left'}]}>
                  KNEX-JS
                </Text>
                <Text
                  style={[styles.skill, {color: 'black', textAlign: 'left'}]}>
                  PostgreSQL
                </Text>
                <Text
                  style={[styles.skill, {color: 'black', textAlign: 'left'}]}>
                  MongoDB
                </Text>
              </View>
            </View>

            <View
              style={{
                height: '90%',
                position: 'absolute',
                width: '60%',
                backgroundColor: 'skyblue',
                borderTopLeftRadius: 100,
                borderTopRightRadius: 100,
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 102,
                top: '10%',
                right: 2,
                padding: 12,
                borderWidth: 1,
                borderColor: 'royalblue',
              }}>
              <Text
                style={{
                  backgroundColor: 'tomato',
                  fontWeight: '700',
                  width: 120,
                  textAlign: 'center',
                  borderRadius: 12,
                  paddingVertical: 3,
                  color: 'white',
                  position: 'absolute',
                  right: 0,
                  borderColor: 'white',
                  borderWidth: 1,
                }}>
                Frontend Technologies
              </Text>
              <View
                style={[
                  styles.skillsContainer,
                  {
                    paddingTop: 42,
                  },
                ]}>
                <Text style={styles.skill}>HTML5</Text>
                <Text style={styles.skill}>CSS3</Text>
                <Text style={styles.skill}>JavaScript</Text>
                <Text style={styles.skill}>REACT-JS</Text>
                <Text style={styles.skill}>REACT-NATIVE</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{}}>
          <Text style={[styles.title, {fontSize: 24}]}>Contact</Text>
          <Text style={[styles.paragraph, {fontWeight: '700'}]}>
            If you need any help with website development or mobile app
            development, I've got your back. Let's collaborate and bring your
            ideas to life! Looking forward to working together.
          </Text>
          <View style={{height: 200}}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://maheshmuttintidev.in/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fz27TLdM%2Fprof-look-for-contacting.png&w=640&q=75',
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.clickButton}
          onPress={() => Linking.openURL('mailto:maheshmuttinti@gmail.com')}>
          <Text style={[styles.contactDetails, {color: 'white'}]}>
            Click to Email Me
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.clickButton, {backgroundColor: 'tan'}]}
          onPress={() => Linking.openURL(`tel:9603757304`)}>
          <Text style={styles.contactDetails}>Click to Call Me</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.clickButton,
            {width: '100%', backgroundColor: 'white'},
          ]}
          onPress={() => Linking.openURL('https://maheshmuttintidev.in')}>
          <Text style={styles.contactDetails}>
            Click to Visit My Website: {'\n'}
            <Text
              style={[
                styles.contactDetails,
                {color: 'royalblue', textDecorationLine: 'underline'},
              ]}>
              https://maheshmuttintidev.in
            </Text>
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={[styles.footerText, {paddingBottom: 12}]}>
          All Rights Reserved
        </Text>
        <Text style={styles.footerText}>© 2024 Mahesh Muttinti</Text>
      </View>
    </>
  );
};

const LeftEye = () => {
  return (
    <View
      style={{
        position: 'absolute',
        height: '20%',
        width: '40%',
        backgroundColor: 'lightgrey',
        bottom: -10,
        borderRadius: 100,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
      }}>
      <View
        style={{
          position: 'absolute',
          height: '40%',
          width: '40%',
          backgroundColor: 'grey',
          top: 10,
          left: '30%',
          borderRadius: 100,
        }}>
        <View
          style={{
            position: 'absolute',
            height: '40%',
            width: '40%',
            backgroundColor: 'black',
            top: 10,
            left: '30%',
            borderRadius: 100,
          }}></View>
      </View>
    </View>
  );
};

const RightEye = () => {
  return (
    <View
      style={{
        position: 'absolute',
        height: '20%',
        width: '40%',
        backgroundColor: 'lightgrey',
        bottom: -10,
        right: 0,
        borderRadius: 100,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
      }}>
      <View
        style={{
          position: 'absolute',
          height: '40%',
          width: '40%',
          backgroundColor: 'grey',
          top: 10,
          left: '30%',
          borderRadius: 100,
        }}>
        <View
          style={{
            position: 'absolute',
            height: '40%',
            width: '40%',
            backgroundColor: 'black',
            top: 10,
            left: '30%',
            borderRadius: 100,
          }}></View>
      </View>
    </View>
  );
};

const TwoEyes = () => {
  return (
    <>
      <LeftEye />
      <RightEye />
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'grey',
    padding: 12,
    borderRadius: 12,
  },
  header: {
    padding: 20,
    backgroundColor: '#ffff',
    borderWidth: 1,
    borderBottomWidth: 10,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
  clickButton: {
    backgroundColor: 'teal',
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#ffffff',
    textAlign: 'center',
  },
  mainContent: {
    padding: 20,
    gap: 12,
  },
  title: {
    fontSize: 22,
    marginBottom: 10,
    color: '#000000',
    fontWeight: '800',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 100,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 20,
    color: '#000000',
  },
  skillsContainer: {
    marginBottom: 20,
    paddingTop: 12,
  },
  skill: {
    fontSize: 18,
    marginBottom: 5,
    color: '#000000',
    textAlign: 'right',
    fontWeight: '700',
    paddingRight: 52,
  },
  contactDetails: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '700',
    color: '#000000',
    textAlign: 'center',
  },
  footer: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#090909',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 16,
    color: '#ffffff',
  },
});
