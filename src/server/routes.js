import applicationRoutes from './services/application/index.js'
import candidateRoutes from './services/candidate/index.js'
import companyRoutes from './services/company/index.js'
import educationRoutes from './services/education/index.js'
import recruiterRoutes from './services/recruiter/index.js'
import testsRoutes from './services/tests/index.js'

const routes = [
  {
    path: '/applications',
    router: applicationRoutes,
  },
  {
    path: '/candidates',
    router: candidateRoutes,
  },
  {
    path: '/companies',
    router: companyRoutes,
  },
  {
    path: '/educations',
    router: educationRoutes,
  },
  {
    path: '/recruiters',
    router: recruiterRoutes,
  },
  {
    path: '/tests',
    router: testsRoutes,
  },
]

export default routes
