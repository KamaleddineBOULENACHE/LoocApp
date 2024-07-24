import React,{useState,useContext,useEffect} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import MultiStepLine from '../../../Components/multiStepLine';
import Step1 from '../EnrollingFull/Steps/Step1';
import Step2 from '../EnrollingFull/Steps/Step2';
import Step3 from '../EnrollingFull/Steps/Step3';
import { WebSocketContext } from '../../../Controllers/WebSocketContextt';

import {widthPercentageToDP as wp,heightPercentageToDP as hp }from 'react-native-responsive-screen'

const Enrolling = ({navigation}) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [EnrollingStatus, setEnrollingStatus] = useState(0);
    const { connectionStatus, message, sendMessage , modifyMessage } = useContext(WebSocketContext);
 
  
    // LOG  Received message: Fingerprint enrolled successfully
    
  
    const nextStep = () => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    };
  
    const prevStep = () => {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
      }
    };
    
    const Step = (step) => {
      if (currentStep > 0) {
        setCurrentStep(step);
      }
    };

    const Status = (status) => {
      
      setEnrollingStatus(status);
      
    };
    
    
   
    

    const steps = [
      <Step1 key="step1" progressFunction={nextStep} />,
      <Step2 key="step2" progressFunction={nextStep} EstatusFunction={Status} />,
      <Step3 key="step3" progressFunction={Step} EStatus={EnrollingStatus} />,
    ];
    
 
  return (
    <View style={styles.container}>

        <MultiStepLine currentStep={currentStep} />
        <Text>{currentStep}</Text>
        {steps[currentStep]}
        

        
          

        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121418',
    
    width:'100%'
  },
  inputTitle:{
    alignSelf:'flex-start',
    fontSize: 18,
    color:'white',
    fontFamily:'SpaceGrotesk_400Regular'
  },
  
  
})
export default Enrolling;
