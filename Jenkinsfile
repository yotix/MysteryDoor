pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh '''npm install
npm run build'''
      }
    }

  }
}