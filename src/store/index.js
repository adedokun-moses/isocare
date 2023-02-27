import { createStore } from 'vuex'
import signModule from './log'
import patientModule from './patient'
import classificationModule from './classification'
import physicianorderModule from './physicianorder'
import physicianModule from './physician'
import nurseModule from './nurse'
import ventModule from './ventilator'


export default createStore({
  modules: {
      signModule: signModule,
      patientModule: patientModule,
      classificationModule: classificationModule,
      physicianorderModule: physicianorderModule,
      physicianModule: physicianModule,
      nurseModule: nurseModule,
      ventModule: ventModule
    
  }
})


